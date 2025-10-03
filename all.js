///// main.js /////

function change_ld(val) {
 var es = document.querySelectorAll(".ld")
 var sw = document.querySelector('#lds')
 var body = document.querySelector('body')
 var light = ['bg-dark', 'bg-light', 'text-white', 'text-black']
 var dark = ['bg-light', 'bg-dark', 'text-black', 'text-white']
 
 sw.checked = val
  _dark = val
  
  if (val != ld.matches) { body.className = 'body2' }
  else { body.className = 'body' }
 
 for (var i=0; i < es.length; i++) {
   var e = es[i]
   var c = e.className
   
   var cur = light
   if (val) { cur = dark }
   
   if (!c.match('bg-')) { c += ' '+cur[0] }
   if (!c.match('text-')) { c += ' '+cur[2] }
   
   var s = c.replace(cur[0], cur[1]).replace(cur[2], cur[3])
   e.setAttribute('class', s)
 }
}

function ld_toggle() {
  _dark = !_dark
  change_ld(_dark)
}

var trans = {
  0: [
    "Please select a tool",
    "한/영 변환기",
    "Spammer",
    "Server Clock",
    "Calculator",
    "Others"
  ],
  1: [
    "도구를 선택해주세요",
    "한/영 변환기",
    "도배기",
    "서버 시계",
    "계산기",
    "기타"
  ]
};

function langset(lang) {
  trans[lang].forEach((text, i) => {
    document.getElementById("toolset").options[i].text = text;
  });
  if (lang) { dl.innerHTML = '다크모드' }
  else { dl.innerHTML = 'Dark Mode' }
}

var _dark = false
var ld = window.matchMedia('(prefers-color-scheme: dark)')

window.onload = function() {
  if (navigator.language == 'ko-KR') { lang = 1 }
  else { lang = 0 }
  _dark = ld.matches
  change_ld(_dark)
  langset(lang)
}

ld.addEventListener('change', (e) => {
  _dark = e.matches
  change_ld(_dark)
})

///// select.js /////

function select(val) {
  var l = ['', ke(), cs(), sc(), calc(), etc()]
  document.querySelector('#tool_area').innerHTML = l[val]
  change_ld(_dark)
}

function cs() {
  var kor = '복사  도배 횟수'.split('  ')
  var eng = 'Copy  Spam Counter'.split('  ')
  var cur = eng
  if (lang) { cur = kor }
  
  var s = `<textarea class="form-control ld mt-3" id="inp" rows="3"></textarea>
        
        <btn class="btn btn-secondary mt-2" onclick='spam()'>${cur[0]}</btn>
        <btn class="btn btn-secondary mt-2" onclick='change_cnt()' id='inp_btn'>${cur[1]}: 5</btn>`
  
  return s
}

function ke() {
  return `        <btn class='btn btn-secondary' onClick='ToEng()'>한-영</btn>
        <bts class='btn btn-secondary' onClick='ToKor()'>영-한</bts>
        
        <textarea class="form-control ld mt-3" id="inp" rows="2" placeholder='텍스트를 입력하세요'></textarea>
        <textarea class="form-control ld mt-2" id="out" rows="1"></textarea>`
}

function sc() {
  var kor = '시작  로드 되지 않음'.split('  ')
  var eng = 'Start  Not Loaded'.split('  ')
  var cur = eng
  
  if (lang) { cur = kor }
  
  var s = `        <input type="text" class="form-control ld" placeholder="URL" id='url'>
        <center>
          <btn class='btn btn-secondary mt-1' onClick='ServerClock()'>${cur[0]}</btn>
          <h4 class='mt-2' id='time'>${cur[1]}</h4>
        </center>`
  return s
}

function calc() {
  var kor = '나이  디데이  생일  윤년'.split('  ')
  var eng = 'Age  DDay  Birthday  LeapYear'.split('  ')
  var cur = eng
  
  var a = [`Age/Leap Year: YYYY <br> D-Day/Birthday: YYYY/MM/DD format`, `나이/윤년: YYYY <br> 디데이/생일: YYYY/MM/DD 형식`]
  
  if (lang) { cur = kor }
  
  var s = `         <input type="text" class="form-control ld" id='inp'>
         <br>
        <btn class='btn btn-secondary' onClick='GetAge()'>${cur[0]}</btn>
        <btn class='btn btn-secondary' onClick='Dday()'>${cur[1]}</btn>
        <btn class='btn btn-secondary' onClick='BirthDay()'>${cur[2]}</btn>
        <btn class='btn btn-secondary' onClick='LeapYear()'>${cur[3]}</btn>
        
        <br> <div id='res'></div> <br>
        <div style='color:gray'>${a[lang]}</div>`
  return s
}

function etc() {
 var kor = '소수 판별기  글자 수 세기  라이트/다크 모드 감지'.split('  ')
 var eng = 'prime number checker  count character  light/dark mode checker'.split('  ')
 var cur = eng
 
 if (lang) { cur = kor }
 
 var s = `        <center>
          <a href='#' onClick='window.open("https://dm-09.github.io/tools/WMP/")'>Web MP3 Player</a><br>
          <a href='#' onClick='window.open("https://dm-09.github.io/tools/isPrime/")'>${cur[0]}</a><br>
          <a href='#' onClick='window.open("https://dm-09.github.io/tools/char_counter/")'>${cur[1]}</a><br>
          <a href='#' onClick='window.open("https://dm-09.github.io/tools/LoD/")'>${cur[2]}</a><br>
        </center>` 
 return s
}

///// all.js /////

// values
var lang = 1
var _cnt = 5

var en = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P',
      'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L',
      'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M']

var kor = ['ㅂ', 'ㅃ', 'ㅈ', 'ㅉ', 'ㄷ', 'ㄸ', 'ㄱ', ' ㄲ', 'ㅅ', 'ㅆ', 'ㅛ', 'ㅛ', 'ㅕ', 'ㅕ', 'ㅑ', 'ㅑ', 'ㅐ', 'ㅒ', 'ㅔ', 'ㅖ',
       'ㅁ', 'ㅁ', 'ㄴ', 'ㄴ', 'ㅇ', 'ㅇ', 'ㄹ', 'ㄹ', 'ㅎ', 'ㅎ', 'ㅗ', 'ㅗ', 'ㅓ', 'ㅓ', 'ㅏ', 'ㅏ', 'ㅣ', 'ㅣ',
       'ㅋ', 'ㅋ', 'ㅌ', 'ㅌ', 'ㅊ', 'ㅊ', 'ㅍ', 'ㅍ', 'ㅠ', 'ㅠ', 'ㅜ', 'ㅜ', 'ㅡ', 'ㅡ']

// functions
function spam() {
  var area = document.querySelector("#inp")
  var word = area.value
  var newS = ''
  
  for (var i=0; i<_cnt; i++) { newS += word }
  
  area.value  = newS
  area.select()
  document.execCommand('copy')
  
  area.value = word
  if (lang) { alert('복사됨!') }
  else { alert('Copied!') }
}

function change_cnt() {
  var msg = 'Enter the spam count'
  var btn = 'spam count: '
  
  if (lang) {
    msg = '도배 횟수를 쓰세요'
    btn = '도배 횟수: '
  }
  var inp = prompt(msg, '')
  if (inp != "") {
    _cnt = parseInt(inp)
    document.querySelector("#inp_btn").innerHTML = btn + _cnt.toString()
  } 
}

function ToEng() {
  var word = Hangul.d(document.querySelector("#inp").value);
  var com = []
  var len = word.length;
  
   for (var i=0; i<len; i++) {
     for (var e=0; e<kor.length; e++) {
       if (word[i] == kor[e]){
         com[i] = en[e]
         break
       }
       
       if (Number(e) == 51) {
         com[i] = word[i]
         break
       }
     }
   };
   var output = document.querySelector('#out')
   output.innerHTML = Hangul.a(com)
}

function ToKor() {
  var word = document.querySelector("#inp").value;
  var com = []
  var len = word.length;
  
   for (var i=0; i<len; i++) {
     for (var e=0; e < en.length; e++) {
       if (word[i] == en[e]){
         com[i] = kor[e]
         break
       }
       
       if (Number(e) == 51) {
         com[i] = word[i]
         break
       }
     }
   };
  
   var output = document.querySelector('#out')
   output.innerHTML = Hangul.a(com)
}

function ServerClock() {
  var ServerTime = document.getElementById("url").value
  var not_load = 'Not loaded'
  
  if (lang) { now_load = '로드되지 않음' }
  
 function getTime() {
  var xmlHttp;
  xmlHttp = new XMLHttpRequest();
   
  if (ServerTime != '') {
  xmlHttp.open('HEAD', ServerTime, false);
  xmlHttp.setRequestHeader("ContentType", "text/html");
  xmlHttp.send('');

  var serverDate = xmlHttp.getResponseHeader("Date");
  var date = new Date(serverDate);
  var t = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
  
  if (t[3] < 10) {t[3] = "0"+String(t[3])}
  if (t[4] < 10) {t[4] = "0"+String(t[4])}
  if (t[5] < 10) {t[5] = "0"+String(t[5])}
  
    var e = document.getElementById("time")
    if (!e) { return 's' }
 e.innerHTML = `${t[0]} ${t[1]}/${t[2]} ${t[3]}:${t[4]}:${t[5]}`
 } else {e.innerHTML = not_load}
}

  get = setInterval(function() {
     var a = getTime()
     if (a == 's') { clearInterval(get) }
  }, 999);
}

function GetAge() {
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  var BY = document.querySelector('#inp').value
  var age = Number(NT[0] - BY)
  var kor = age + 1
  
  var e = document.querySelector('#res')
  
  if (lang) {
    var s = `<br> 만나이: ${age}(생일 안 지났으면 ${age-1}) <br> 연나이: ${age} <br> 한국식 나이: ${kor}`
    res.innerHTML = s
  } else {
    res.innerHTML = `<br> Age: ${age} (If your birthday isn't over, ${age-1}) `
  }
}

function D_Day(Y, M, D, plus) {
  var now = new Date();
  var TheDay = new Date(Y, M - 1, D, 00, 00, 00);
  var days = Math.ceil((TheDay - now) / 86_400_000)
  
  if (days < 0) {
    var a = (days * -1)
    if (plus) { a += 1 }
    days = 'D+' + a
  } else if (days == 0) {
    days = 'D-Day'
    if (plus) { days = 'D+1' }
  } else {
    days = 'D-' + days
  }
  
  return days
};

function Birth(Y, M, D) {
  var now = new Date();
  var TheDay = new Date(now.getFullYear(), M - 1, D, 00, 00, 00);
  var days = Math.ceil((TheDay - now) / 86_400_000)
  var year = Y - now.getFullYear()
  
  if (days < 0) {
    days = '<br> D+' + (days * -1)
  } else if (days == 0) {
    days = '<br> D-Day<br>🎉Happy ' + year * -1 + 'th BirthDay!🎉'
  } else {
    days = '<br> D-' + days
  }
  
  return days
};

function BirthDay() {
  var inp = document.querySelector('#inp').value
  var l = inp.split('/')
  res.innerHTML = Birth(Number(l[0]), Number(l[1]), Number(l[2]))
}

function Dday() {
  var inp = document.querySelector('#inp').value
  var l = inp.split('/')
  var d1 = D_Day(Number(l[0]), Number(l[1]), Number(l[2]), 0)
  var d2 = D_Day(Number(l[0]), Number(l[1]), Number(l[2]), 1)
  
  if (lang) {
    res.innerHTML = `<br> ${d1} <br> 설정 일로부터: ${d2}`
  } else {
    res.innerHTML = `<br> ${d1} <br> From the set date: ${d2}`
  }
}

function LY_info(year) {
  var isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  var prev = year - (year % 4 || 4);
  if (!((prev % 4 === 0 && prev % 100 !== 0) || (prev % 400 === 0))) {
    prev -= 4;
  }

  var next = year + (4 - (year % 4) || 4);
  if (!((next % 4 === 0 && next % 100 !== 0) || (next % 400 === 0))) {
    next += 4;
  }

  return [isLeap, prev, next]
}

function LeapYear() {
  var inp = Number(document.querySelector('#inp').value)
  var info = LY_info(inp)
  
  var isLY = '✖️'
  if (info[0]) { isLY = '✔️' }
  
  var msg = ``
  if (lang) {
    res.innerHTML = `<br> 윤년: ${isLY} <br> 최근 윤년: ${info[1]} <br> 다음 윤년: ${info[2]}`
  } else {
    res.innerHTML = `<br> Leap year: ${isLY} <br> Recent leap year: ${info[1]} <br> Next leap year: ${info[2]}`
  }
}
