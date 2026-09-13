const banks = {
  moa: [
    ['p','雙唇塞音'],['b','雙唇塞音'],['t','齒齦塞音'],['d','齒齦塞音'],['k','軟顎塞音'],['ɡ','軟顎塞音'],['m','雙唇鼻音'],['n','齒齦鼻音'],['ŋ','軟顎鼻音'],['f','唇齒擦音'],['v','唇齒擦音'],['s','齒齦擦音'],['z','齒齦擦音'],['ʃ','後齒齦擦音'],['h','聲門擦音'],['l','齒齦邊音'],['ɹ','齒齦近音'],['j','硬顎近音'],['w','唇軟顎近音'],['tʃ','後齒齦塞擦音'],['dʒ','後齒齦塞擦音']
  ],
  poa: [
    ['p','雙唇音'],['m','雙唇音'],['f','唇齒音'],['v','唇齒音'],['θ','齒音'],['ð','齒音'],['t','齒齦音'],['s','齒齦音'],['n','齒齦音'],['ʃ','後齒齦音'],['tʃ','後齒齦音'],['j','硬顎音'],['k','軟顎音'],['ŋ','軟顎音'],['w','唇軟顎音'],['h','聲門音']
  ],
  vowel: [
    ['i','前・閉'],['ɪ','前・近閉'],['e','前・半閉'],['ɛ','前・半開'],['æ','前・近開'],['a','前・開'],['y','前・閉・圓唇'],['u','後・閉・圓唇'],['ʊ','後・近閉・圓唇'],['o','後・半閉・圓唇'],['ɔ','後・半開・圓唇'],['ɑ','後・開'],['ə','中央・中'],['ɜ','中央・半開'],['ɐ','中央・近開']
  ]
};
const labels={moa:'混合模式・部位 × 方法',poa:'POA・發音部位',vowel:'Vowel・元音位置'};
const englishLabels={moa:'Mixed · Place × Manner',poa:'POA · Place of articulation',vowel:'Vowel · Height × Backness'};
const featureEnglish={
  '雙唇塞音':'Bilabial stop','齒齦塞音':'Alveolar stop','軟顎塞音':'Velar stop','雙唇鼻音':'Bilabial nasal','齒齦鼻音':'Alveolar nasal','軟顎鼻音':'Velar nasal','唇齒擦音':'Labiodental fricative','齒齦擦音':'Alveolar fricative','後齒齦擦音':'Postalveolar fricative','聲門擦音':'Glottal fricative','齒齦邊音':'Alveolar lateral approximant','齒齦近音':'Alveolar approximant','硬顎近音':'Palatal approximant','唇軟顎近音':'Labial-velar approximant','後齒齦塞擦音':'Postalveolar affricate',
  '雙唇音':'Bilabial','唇齒音':'Labiodental','齒音':'Dental','齒齦音':'Alveolar','後齒齦音':'Postalveolar','硬顎音':'Palatal','軟顎音':'Velar','唇軟顎音':'Labial-velar','聲門音':'Glottal',
  '前・閉':'Front · Close','前・近閉':'Front · Near-close','前・半閉':'Front · Close-mid','前・半開':'Front · Open-mid','前・近開':'Front · Near-open','前・開':'Front · Open','前・閉・圓唇':'Front · Close · Rounded','後・閉・圓唇':'Back · Close · Rounded','後・近閉・圓唇':'Back · Near-close · Rounded','後・半閉・圓唇':'Back · Close-mid · Rounded','後・半開・圓唇':'Back · Open-mid · Rounded','後・開':'Back · Open','中央・中':'Central · Mid','中央・半開':'Central · Open-mid','中央・近開':'Central · Near-open'
};
const ui={zh:{title:'IPA 音標練習',intro:'3 分鐘限時挑戰。答錯即結束，看看你能連對幾題。',name:'你的暱稱',namePlaceholder:'例如：小明',mode:'選擇練習模式',mixed:'混合',mixedSmall:'部位 × 方法',poaSmall:'發音部位',vowelSmall:'元音位置',direction:'選擇出題方向',symbol:'看音標，選特徵',feature:'看特徵，選音標',start:'開始挑戰',hint:'答錯會立即結束本局。',board:'歷史高分',questionSymbol:'這個音標的特徵是？',questionFeature:'哪一個音標符合此特徵？',wrong:'答錯了！',time:'時間到！',anonymous:'匿名練習者',correct:'正確',connected:'已連結 Google Sheet'},en:{title:'IPA Practice',intro:'A three-minute challenge. One wrong answer ends the round.',name:'Nickname',namePlaceholder:'e.g. Mia',mode:'Choose a mode',mixed:'Mixed',mixedSmall:'Place × Manner',poaSmall:'Place of articulation',vowelSmall:'Vowel position',direction:'Choose question direction',symbol:'See a symbol, choose its features',feature:'See features, choose a symbol',start:'Start challenge',hint:'One incorrect answer ends the round.',board:'High scores',questionSymbol:'Which features describe this symbol?',questionFeature:'Which symbol matches these features?',wrong:'Incorrect!',time:"Time's up!",anonymous:'Anonymous',correct:'Correct',connected:'Google Sheets connected'}};
const defaultSheetUrl='https://script.google.com/macros/s/AKfycbw_K7SmSss_7EHvhbajmHFuSfrbpHJVRBVzPy9SPpRdC9FUYZGlTGKweyuOEHO5oVzV/exec';
let selectedMode='moa', score=0, timerId, seconds=180, activeQuestion, locked=false;
const $=id=>document.getElementById(id);
let language=localStorage.getItem('ipaLanguage')||'zh';
function copy(){return ui[language]}
function featureText(value){return language==='en'?(featureEnglish[value]||value):value}
function modeText(mode){return language==='en'?englishLabels[mode]:labels[mode]}
function nickname(){return $('nickname').value.trim()||copy().anonymous}
function applyLanguage(){const t=copy(),en=language==='en';document.documentElement.lang=en?'en':'zh-Hant';$('appTitle').textContent=t.title;$('intro').textContent=t.intro;$('nicknameLabel').textContent=t.name;$('nickname').placeholder=t.namePlaceholder;$('modeHeading').textContent=t.mode;$('mixedMode').textContent=t.mixed;$('mixedModeSmall').textContent=t.mixedSmall;$('poaModeSmall').textContent=t.poaSmall;$('vowelModeSmall').textContent=t.vowelSmall;$('directionHeading').textContent=t.direction;$('symbolDirection').textContent=t.symbol;$('featureDirection').textContent=t.feature;$('startButton').textContent=t.start;$('hint').textContent=t.hint;$('leaderboardTitle').textContent=t.board;$('scoreText').innerHTML=en?`Correct <b id="score">${score}</b>`:`正確 <b id="score">${score}</b> 題`;$('resultKicker').textContent=en?'Round complete':'本局結束';$('finalScoreLabel').textContent=en?'correct':'題正確';$('againButton').textContent=en?'Play again':'再來一局';$('homeButton').textContent=en?'Change mode':'更換模式';$('languageButton').textContent=en?'中文':'EN';renderBoard()}
function shuffled(a){return [...a].sort(()=>Math.random()-.5)}
function getDirection(){return document.querySelector('input[name="direction"]:checked').value}
function setMode(mode){selectedMode=mode;document.querySelectorAll('.mode-choice').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode))}
document.querySelectorAll('.mode-choice').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$('startButton').onclick=start;$('againButton').onclick=start;$('homeButton').onclick=()=>show('startScreen');
function show(id){['startScreen','quizScreen','resultScreen'].forEach(x=>$(x).classList.toggle('hidden',x!==id))}
function start(){score=0;seconds=180;locked=false;$('score').textContent=0;$('modeLabel').textContent=modeText(selectedMode);show('quizScreen');ask();clearInterval(timerId);timerId=setInterval(()=>{seconds--;renderTime();if(seconds<=0)end(copy().time)},1000);renderTime()}
function renderTime(){const m=Math.floor(seconds/60),s=String(seconds%60).padStart(2,'0');$('timer').textContent=`${m}:${s}`;$('timerBar').style.width=`${seconds/180*100}%`}
function ask(){
  locked=false;
  const bank=banks[selectedMode], direction=getDirection();
  activeQuestion=bank[Math.floor(Math.random()*bank.length)];
  const [symbol,feature]=activeQuestion;
  const answerText=item=>direction==='symbolToFeature'?featureText(item[1]):`/${item[0]}/`;
  const used=new Set([answerText(activeQuestion)]);
  const distractors=[];
  for(const item of shuffled(bank)){
    const text=answerText(item);
    if(!used.has(text)){distractors.push(item);used.add(text)}
    if(distractors.length===3)break;
  }
  const options=shuffled([activeQuestion,...distractors]);
  $('questionKicker').textContent=direction==='symbolToFeature'?copy().questionSymbol:copy().questionFeature;
  $('prompt').textContent=direction==='symbolToFeature'?`/${symbol}/`:featureText(feature);
  const answers=$('answers');answers.innerHTML='';
  options.forEach(([s,f])=>{const button=document.createElement('button');button.className='answer';button.textContent=direction==='symbolToFeature'?featureText(f):`/${s}/`;button.onclick=()=>answer(button,[s,f]);answers.append(button)})
}
function answer(button,choice){if(locked)return;locked=true;const correct=choice[0]===activeQuestion[0]&&choice[1]===activeQuestion[1];if(correct){button.classList.add('correct');score++;$('score').textContent=score;setTimeout(ask,350)}else{button.classList.add('wrong');[...$('answers').children].find(b=>b.textContent===(getDirection()==='symbolToFeature'?featureText(activeQuestion[1]):`/${activeQuestion[0]}/`))?.classList.add('correct');setTimeout(()=>end(copy().wrong),550)}}
function records(){return JSON.parse(localStorage.getItem('ipaScores')||'[]')}
function sheetUrl(){return localStorage.getItem('ipaSheetUrl')||defaultSheetUrl}
function renderBoard(){const list=records().sort((a,b)=>b.score-a.score||b.at-a.at).slice(0,8);$('leaderboard').innerHTML=list.length?list.map(r=>`<li><b>${r.score} ${language==='en'?'correct':'題'}</b>　${r.name}・${modeText(r.mode)}<span class="record-meta">${new Date(r.at).toLocaleDateString(language==='en'?'en-US':'zh-TW')}</span></li>`).join(''):`<li>${language==='en'?'No scores yet. Start your first round!':'尚無紀錄，開始你的第一局吧！'}</li>`;$('syncStatus').textContent=copy().connected}
function end(title){clearInterval(timerId);const record={name:nickname(),score,mode:selectedMode,direction:getDirection(),at:Date.now()};const all=records();all.push(record);localStorage.setItem('ipaScores',JSON.stringify(all));sendScore(record);$('resultTitle').textContent=title;$('finalScore').textContent=score;$('resultDetail').textContent=`${record.name}・${modeText(selectedMode)}・${getDirection()==='symbolToFeature'?copy().symbol:copy().feature}`;renderBoard();show('resultScreen')}
function sendScore(record){fetch(sheetUrl(),{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({...record,modeLabel:labels[record.mode],directionLabel:record.direction==='symbolToFeature'?'看音標選特徵':'看特徵選音標'})}).catch(()=>{})}
$('settingsButton').onclick=()=>{$('scriptUrl').value=localStorage.getItem('ipaSheetUrl')||'';$('settingsDialog').showModal()};$('saveSettings').onclick=()=>{const url=$('scriptUrl').value.trim();if(url)localStorage.setItem('ipaSheetUrl',url);else localStorage.removeItem('ipaSheetUrl');renderBoard()};$('clearUrl').onclick=()=>{$('scriptUrl').value='';localStorage.removeItem('ipaSheetUrl');renderBoard()};$('nickname').value=localStorage.getItem('ipaNickname')||'';$('nickname').addEventListener('input',()=>localStorage.setItem('ipaNickname',$('nickname').value.trim()));$('languageButton').onclick=()=>{language=language==='en'?'zh':'en';localStorage.setItem('ipaLanguage',language);applyLanguage()};applyLanguage();
