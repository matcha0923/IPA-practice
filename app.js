const banks = {
  moa: [
    ['p','雙唇塞音'],['b','雙唇塞音'],['t̪','齒塞音'],['d̪','齒塞音'],['t','齒齦塞音'],['d','齒齦塞音'],['ʈ','捲舌塞音'],['ɖ','捲舌塞音'],['c','硬顎塞音'],['ɟ','硬顎塞音'],['k','軟顎塞音'],['ɡ','軟顎塞音'],['q','小舌塞音'],['ɢ','小舌塞音'],['ʔ','聲門塞音'],
    ['m','雙唇鼻音'],['ɱ','唇齒鼻音'],['n̪','齒鼻音'],['n','齒齦鼻音'],['ɳ','捲舌鼻音'],['ɲ','硬顎鼻音'],['ŋ','軟顎鼻音'],['ɴ','小舌鼻音'],['ʙ','雙唇顫音'],['r','齒齦顫音'],['ʀ','小舌顫音'],['ⱱ','唇齒閃音'],['ɾ','齒齦閃音'],['ɽ','捲舌閃音'],
    ['ɸ','雙唇擦音'],['β','雙唇擦音'],['f','唇齒擦音'],['v','唇齒擦音'],['θ','齒擦音'],['ð','齒擦音'],['s','齒齦擦音'],['z','齒齦擦音'],['ʃ','後齒齦擦音'],['ʒ','後齒齦擦音'],['ʂ','捲舌擦音'],['ʐ','捲舌擦音'],['ç','硬顎擦音'],['ʝ','硬顎擦音'],['x','軟顎擦音'],['ɣ','軟顎擦音'],['χ','小舌擦音'],['ʁ','小舌擦音'],['ħ','咽擦音'],['ʕ','咽擦音'],['h','聲門擦音'],['ɦ','聲門擦音'],['ɬ','齒齦邊擦音'],['ɮ','齒齦邊擦音'],
    ['ʋ','唇齒近音'],['ɹ','齒齦近音'],['ɻ','捲舌近音'],['j','硬顎近音'],['ɰ','軟顎近音'],['l','齒齦邊近音'],['ɭ','捲舌邊近音'],['ʎ','硬顎邊近音'],['ʟ','軟顎邊近音'],['tʃ','後齒齦塞擦音'],['dʒ','後齒齦塞擦音'],
    ['ʘ','雙唇吸氣音'],['ǀ','齒吸氣音'],['ǃ','後齒齦吸氣音'],['ǂ','硬顎齒齦吸氣音'],['ǁ','齒齦邊吸氣音'],['ɓ','雙唇內爆音'],['ɗ','齒齦內爆音'],['ʄ','硬顎內爆音'],['ɠ','軟顎內爆音'],['ʛ','小舌內爆音'],['ʍ','唇軟顎擦音'],['ɥ','唇硬顎近音'],['ɕ','硬顎齒齦擦音'],['ʑ','硬顎齒齦擦音'],['ɺ','齒齦邊閃音'],['ʜ','會厭擦音'],['ʢ','會厭擦音'],['ʡ','會厭塞音'],['ɧ','後齒齦軟顎擦音']
  ],
  poa: [
    ['p','雙唇音'],['b','雙唇音'],['m','雙唇音'],['ʙ','雙唇音'],['ɸ','雙唇音'],['β','雙唇音'],['ʘ','雙唇音'],['ɓ','雙唇音'],['ɱ','唇齒音'],['f','唇齒音'],['v','唇齒音'],['ʋ','唇齒音'],['ⱱ','唇齒音'],['t̪','齒音'],['d̪','齒音'],['n̪','齒音'],['θ','齒音'],['ð','齒音'],['ǀ','齒音'],['t','齒齦音'],['d','齒齦音'],['n','齒齦音'],['r','齒齦音'],['ɾ','齒齦音'],['s','齒齦音'],['z','齒齦音'],['ɬ','齒齦音'],['ɮ','齒齦音'],['ɹ','齒齦音'],['l','齒齦音'],['ɗ','齒齦音'],['ǁ','齒齦音'],['ɺ','齒齦音'],['ʃ','後齒齦音'],['ʒ','後齒齦音'],['tʃ','後齒齦音'],['dʒ','後齒齦音'],['ǃ','後齒齦音'],['ʈ','捲舌音'],['ɖ','捲舌音'],['ɳ','捲舌音'],['ɽ','捲舌音'],['ʂ','捲舌音'],['ʐ','捲舌音'],['ɻ','捲舌音'],['ɭ','捲舌音'],['c','硬顎音'],['ɟ','硬顎音'],['ɲ','硬顎音'],['ç','硬顎音'],['ʝ','硬顎音'],['j','硬顎音'],['ʎ','硬顎音'],['ʄ','硬顎音'],['ǂ','硬顎齒齦音'],['ɕ','硬顎齒齦音'],['ʑ','硬顎齒齦音'],['ɥ','唇硬顎音'],['k','軟顎音'],['ɡ','軟顎音'],['ŋ','軟顎音'],['x','軟顎音'],['ɣ','軟顎音'],['ɰ','軟顎音'],['ʟ','軟顎音'],['ɠ','軟顎音'],['q','小舌音'],['ɢ','小舌音'],['ɴ','小舌音'],['ʀ','小舌音'],['χ','小舌音'],['ʁ','小舌音'],['ʛ','小舌音'],['ħ','咽音'],['ʕ','咽音'],['ʔ','聲門音'],['h','聲門音'],['ɦ','聲門音'],['ʜ','會厭音'],['ʢ','會厭音'],['ʡ','會厭音'],['ʍ','唇軟顎音'],['ɧ','後齒齦軟顎音']
  ],
  vowel: [
    ['i','前・閉・不圓唇'],['y','前・閉・圓唇'],['ɨ','中央・閉・不圓唇'],['ʉ','中央・閉・圓唇'],['ɯ','後・閉・不圓唇'],['u','後・閉・圓唇'],['ɪ','前・近閉・不圓唇'],['ʏ','前・近閉・圓唇'],['ʊ','後・近閉・圓唇'],['e','前・半閉・不圓唇'],['ø','前・半閉・圓唇'],['ɘ','中央・半閉・不圓唇'],['ɵ','中央・半閉・圓唇'],['ɤ','後・半閉・不圓唇'],['o','後・半閉・圓唇'],['ə','中央・中・不圓唇'],['ɛ','前・半開・不圓唇'],['œ','前・半開・圓唇'],['ɜ','中央・半開・不圓唇'],['ɞ','中央・半開・圓唇'],['ʌ','後・半開・不圓唇'],['ɔ','後・半開・圓唇'],['æ','前・近開・不圓唇'],['ɐ','中央・近開・不圓唇'],['a','前・開・不圓唇'],['ɶ','前・開・圓唇'],['ɑ','後・開・不圓唇'],['ɒ','後・開・圓唇']
  ]
};
const labels={moa:'混合模式・部位 × 方法',poa:'POA・發音部位',vowel:'Vowel・元音位置'};
const englishLabels={moa:'Mixed · Place × Manner',poa:'POA · Place of articulation',vowel:'Vowel · Height × Backness'};
const featureEnglish={
  '雙唇塞音':'Bilabial stop','齒齦塞音':'Alveolar stop','軟顎塞音':'Velar stop','雙唇鼻音':'Bilabial nasal','齒齦鼻音':'Alveolar nasal','軟顎鼻音':'Velar nasal','唇齒擦音':'Labiodental fricative','齒齦擦音':'Alveolar fricative','後齒齦擦音':'Postalveolar fricative','聲門擦音':'Glottal fricative','齒齦邊音':'Alveolar lateral approximant','齒齦近音':'Alveolar approximant','硬顎近音':'Palatal approximant','唇軟顎近音':'Labial-velar approximant','後齒齦塞擦音':'Postalveolar affricate',
  '雙唇音':'Bilabial','唇齒音':'Labiodental','齒音':'Dental','齒齦音':'Alveolar','後齒齦音':'Postalveolar','硬顎音':'Palatal','軟顎音':'Velar','唇軟顎音':'Labial-velar','聲門音':'Glottal',
  '前・閉':'Front · Close','前・近閉':'Front · Near-close','前・半閉':'Front · Close-mid','前・半開':'Front · Open-mid','前・近開':'Front · Near-open','前・開':'Front · Open','前・閉・圓唇':'Front · Close · Rounded','後・閉・圓唇':'Back · Close · Rounded','後・近閉・圓唇':'Back · Near-close · Rounded','後・半閉・圓唇':'Back · Close-mid · Rounded','後・半開・圓唇':'Back · Open-mid · Rounded','後・開':'Back · Open','中央・中':'Central · Mid','中央・半開':'Central · Open-mid','中央・近開':'Central · Near-open'
};
const vowelPartEnglish={'前':'Front','後':'Back','中央':'Central','閉':'Close','近閉':'Near-close','半閉':'Close-mid','中':'Mid','半開':'Open-mid','近開':'Near-open','開':'Open','不圓唇':'Unrounded','圓唇':'Rounded'};
const placeEnglish={'雙唇':'Bilabial','唇齒':'Labiodental','齒':'Dental','齒齦':'Alveolar','後齒齦':'Postalveolar','捲舌':'Retroflex','硬顎':'Palatal','軟顎':'Velar','小舌':'Uvular','咽':'Pharyngeal','聲門':'Glottal','硬顎齒齦':'Alveolo-palatal','唇硬顎':'Labial-palatal','唇軟顎':'Labial-velar','齒齦邊':'Alveolar lateral','後齒齦軟顎':'Postalveolar-velar','會厭':'Epiglottal'};
const mannerEnglish={'塞擦音':'affricate','邊近音':'lateral approximant','邊擦音':'lateral fricative','邊閃音':'lateral flap','吸氣音':'click','內爆音':'implosive','顫音':'trill','閃音':'tap or flap','鼻音':'nasal','塞音':'stop','擦音':'fricative','近音':'approximant'};
const ui={zh:{title:'IPA 音標練習',intro:'3 分鐘限時挑戰。答錯即結束，看看你能連對幾題。',name:'你的暱稱',namePlaceholder:'例如：小明',mode:'選擇練習模式',mixed:'混合',mixedSmall:'部位 × 方法',poaSmall:'發音部位',vowelSmall:'元音位置',direction:'選擇出題方向',symbol:'看音標，選特徵',feature:'看特徵，選音標',start:'開始挑戰',hint:'答錯會立即結束本局。',board:'歷史高分',questionSymbol:'這個音標的特徵是？',questionFeature:'哪一個音標符合此特徵？',wrong:'答錯了！',time:'時間到！',anonymous:'匿名練習者',correct:'正確',connected:'已連結 Google Sheet'},en:{title:'IPA Practice',intro:'A three-minute challenge. One wrong answer ends the round.',name:'Nickname',namePlaceholder:'e.g. Mia',mode:'Choose a mode',mixed:'Mixed',mixedSmall:'Place × Manner',poaSmall:'Place of articulation',vowelSmall:'Vowel position',direction:'Choose question direction',symbol:'See a symbol, choose its features',feature:'See features, choose a symbol',start:'Start challenge',hint:'One incorrect answer ends the round.',board:'High scores',questionSymbol:'Which features describe this symbol?',questionFeature:'Which symbol matches these features?',wrong:'Incorrect!',time:"Time's up!",anonymous:'Anonymous',correct:'Correct',connected:'Google Sheets connected'}};
const defaultSheetUrl='https://script.google.com/macros/s/AKfycbw_K7SmSss_7EHvhbajmHFuSfrbpHJVRBVzPy9SPpRdC9FUYZGlTGKweyuOEHO5oVzV/exec';
let selectedMode='moa', score=0, timerId, seconds=180, activeQuestion, locked=false;
const $=id=>document.getElementById(id);
let language=localStorage.getItem('ipaLanguage')||'zh';
function copy(){return ui[language]}
function featureText(value){if(language!=='en')return value;if(featureEnglish[value])return featureEnglish[value];if(value.includes('・'))return value.split('・').map(part=>vowelPartEnglish[part]||part).join(' · ');const manner=Object.keys(mannerEnglish).find(suffix=>value.endsWith(suffix));if(manner){const place=value.slice(0,-manner.length);return `${placeEnglish[place]||place} ${mannerEnglish[manner]}`}return value}
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
