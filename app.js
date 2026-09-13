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
let selectedMode='moa', score=0, timerId, seconds=180, activeQuestion, locked=false;
const $=id=>document.getElementById(id);
function nickname(){return $('nickname').value.trim()||'匿名練習者'}
function shuffled(a){return [...a].sort(()=>Math.random()-.5)}
function getDirection(){return document.querySelector('input[name="direction"]:checked').value}
function setMode(mode){selectedMode=mode;document.querySelectorAll('.mode-choice').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode))}
document.querySelectorAll('.mode-choice').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$('startButton').onclick=start;$('againButton').onclick=start;$('homeButton').onclick=()=>show('startScreen');
function show(id){['startScreen','quizScreen','resultScreen'].forEach(x=>$(x).classList.toggle('hidden',x!==id))}
function start(){score=0;seconds=180;locked=false;$('score').textContent=0;$('modeLabel').textContent=labels[selectedMode];show('quizScreen');ask();clearInterval(timerId);timerId=setInterval(()=>{seconds--;renderTime();if(seconds<=0)end('時間到！')},1000);renderTime()}
function renderTime(){const m=Math.floor(seconds/60),s=String(seconds%60).padStart(2,'0');$('timer').textContent=`${m}:${s}`;$('timerBar').style.width=`${seconds/180*100}%`}
function ask(){
  locked=false;
  const bank=banks[selectedMode], direction=getDirection();
  activeQuestion=bank[Math.floor(Math.random()*bank.length)];
  const [symbol,feature]=activeQuestion;
  const answerText=item=>direction==='symbolToFeature'?item[1]:`/${item[0]}/`;
  const used=new Set([answerText(activeQuestion)]);
  const distractors=[];
  for(const item of shuffled(bank)){
    const text=answerText(item);
    if(!used.has(text)){distractors.push(item);used.add(text)}
    if(distractors.length===3)break;
  }
  const options=shuffled([activeQuestion,...distractors]);
  $('questionKicker').textContent=direction==='symbolToFeature'?'這個音標的特徵是？':'哪一個音標符合此特徵？';
  $('prompt').textContent=direction==='symbolToFeature'?`/${symbol}/`:feature;
  const answers=$('answers');answers.innerHTML='';
  options.forEach(([s,f])=>{const button=document.createElement('button');button.className='answer';button.textContent=direction==='symbolToFeature'?f:`/${s}/`;button.onclick=()=>answer(button,[s,f]);answers.append(button)})
}
function answer(button,choice){if(locked)return;locked=true;const correct=choice[0]===activeQuestion[0]&&choice[1]===activeQuestion[1];if(correct){button.classList.add('correct');score++;$('score').textContent=score;setTimeout(ask,350)}else{button.classList.add('wrong');[...$('answers').children].find(b=>b.textContent===(getDirection()==='symbolToFeature'?activeQuestion[1]:`/${activeQuestion[0]}/`))?.classList.add('correct');setTimeout(()=>end('答錯了！'),550)}}
function records(){return JSON.parse(localStorage.getItem('ipaScores')||'[]')}
function renderBoard(){const list=records().sort((a,b)=>b.score-a.score||b.at-a.at).slice(0,8);$('leaderboard').innerHTML=list.length?list.map(r=>`<li><b>${r.score} 題</b>　${r.name}・${labels[r.mode]}<span class="record-meta">${new Date(r.at).toLocaleDateString('zh-TW')}</span></li>`).join(''):'<li>尚無紀錄，開始你的第一局吧！</li>';const hasUrl=localStorage.getItem('ipaSheetUrl');$('syncStatus').textContent=hasUrl?'已連結 Google Sheet':'本機紀錄'}
function end(title){clearInterval(timerId);const record={name:nickname(),score,mode:selectedMode,direction:getDirection(),at:Date.now()};const all=records();all.push(record);localStorage.setItem('ipaScores',JSON.stringify(all));sendScore(record);$('resultTitle').textContent=title;$('finalScore').textContent=score;$('resultDetail').textContent=`${record.name}・${labels[selectedMode]}・${getDirection()==='symbolToFeature'?'看音標選特徵':'看特徵選音標'}`;renderBoard();show('resultScreen')}
function sendScore(record){const url=localStorage.getItem('ipaSheetUrl');if(!url)return;fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({...record,modeLabel:labels[record.mode],directionLabel:record.direction==='symbolToFeature'?'看音標選特徵':'看特徵選音標'})}).catch(()=>{})}
$('settingsButton').onclick=()=>{$('scriptUrl').value=localStorage.getItem('ipaSheetUrl')||'';$('settingsDialog').showModal()};$('saveSettings').onclick=()=>{const url=$('scriptUrl').value.trim();if(url)localStorage.setItem('ipaSheetUrl',url);else localStorage.removeItem('ipaSheetUrl');renderBoard()};$('clearUrl').onclick=()=>{$('scriptUrl').value='';localStorage.removeItem('ipaSheetUrl');renderBoard()};$('nickname').value=localStorage.getItem('ipaNickname')||'';$('nickname').addEventListener('input',()=>localStorage.setItem('ipaNickname',$('nickname').value.trim()));renderBoard();
