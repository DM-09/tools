var lang = 0

function language() {
 var l = navigator.language
   if (l == 'ko-KR') {
     Kor()
   } else {
     Eng()
   }
}

function Kor() {
  lang = 1
  var b = [document.querySelector("#CS"),
          document.querySelector("#LoD"),
          document.querySelector("#SC"),
          document.querySelector("#KE"),
          document.querySelector("#CC")]
  var bn = ['도배기', '라이트/다크', '서버 시계', '한/영 변환기', '계산기']
  for (i=0; i < b.length; i++) {
    b[i].innerHTML = bn[i]
  }
}

function Eng() {
  lang = 0
  var b = [document.querySelector("#CS"),
          document.querySelector("#LoD"),
          document.querySelector("#SC"),
          document.querySelector("#KE"),
          document.querySelector("#CC")]
  var bn = ['Character Spammer', 'Light/Dark', 'Server Clock', '한/영 변환기', 'Calculator']
  for (i=0; i < b.length; i++) {
    b[i].innerHTML = bn[i]
  }
}
// Language

function LoD() {
  var e = document.querySelector("#box")
  e.innerHTML = `<div class='box'><br><h3><span class='txt'>Dark Mode</span> <span class='txt2'>Light Mode<span><br>​</h3></div><button type="button" class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://dm-09.github.io/tools/LoD/")'>🔗</button>`
}
//LoD

function CS() {
  var e = document.querySelector("#box")
  if (lang == 1) {
      e.innerHTML = `<input type="text" class="form-control bg-dark text-white" placeholder="텍스트를 입력하세요" id='t' value=''>
         <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='GetValue()' id='c'>도배 횟수: 5
         </button>
        <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='spam()'>복사
         </button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://dm-09.github.io/tools/CS/")'>🔗</button>`
  } else {
      e.innerHTML = `<input type="text" class="form-control bg-dark text-white" placeholder="Enter the text" id='t' value=''>
         <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='GetValue()' id='c'>spam count: 5
         </button>
        <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='spam()'>Copy
         </button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://dm-09.github.io/tools/CS/")'>🔗</button>`
  }
}
  var c = 5;

  function GetValue() {
    if (lang == 1) {
    var inp = prompt('도배 횟수를 쓰세요.', '')
    if (inp != "") {
      c = inp
      document.querySelector("#c").innerHTML = '도배 횟수: ' + c
      } 
    } else {
      var inp = prompt('Enter the spam count.', '')
      if (inp != "") {
        c = inp
        document.querySelector("#c").innerHTML = 'spam count: ' + c
      }
    }
  }

function spam() {
    var area = document.querySelector("#t")
    var word = area.value
    var newS = ''

    for (var i=0; i<c; i++) {
      newS += word
    }

    area.value  = newS
    area.select();
    document.execCommand('copy');
  }
// CS

function KE() {
  var e = document.querySelector("#box")
  e.innerHTML = `<input type="text" class="form-control bg-dark text-white" placeholder="텍스트를 입력하세요" id='input' value=''><br><div class="form-control bg-dark text-white" id="output">​</div><br><button type="button" class="btn btn-secondary mb-2 mt-2" onClick='ToEng()'>한-영</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='ToKor()'>영-한</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://dm-09.github.io/tools/KE/")'>🔗</button>`
}

var en = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P',
      'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L',
      'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M']

var kor = ['ㅂ', 'ㅃ', 'ㅈ', 'ㅉ', 'ㄷ', 'ㄸ', 'ㄱ', ' ㄲ', 'ㅅ', 'ㅆ', 'ㅛ', 'ㅛ', 'ㅕ', 'ㅕ', 'ㅑ', 'ㅑ', 'ㅐ', 'ㅒ', 'ㅔ', 'ㅖ',
       'ㅁ', 'ㅁ', 'ㄴ', 'ㄴ', 'ㅇ', 'ㅇ', 'ㄹ', 'ㄹ', 'ㅎ', 'ㅎ', 'ㅗ', 'ㅗ', 'ㅓ', 'ㅓ', 'ㅏ', 'ㅏ', 'ㅣ', 'ㅣ',
       'ㅋ', 'ㅋ', 'ㅌ', 'ㅌ', 'ㅊ', 'ㅊ', 'ㅍ', 'ㅍ', 'ㅠ', 'ㅠ', 'ㅜ', 'ㅜ', 'ㅡ', 'ㅡ']

function ToEng() {
  var word = Hangul.d(document.querySelector("#input").value);
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
   var output = document.querySelector('#output')
   output.innerHTML = Hangul.a(com)
}

function ToKor() {
  var word = document.querySelector("#input").value;
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
  
   var output = document.querySelector('#output')
   output.innerHTML = Hangul.a(com)
}; 
//KE

function SC() {
  var e = document.querySelector("#box")
  if (lang == 1) {
      e.innerHTML = `<input type="text" class="form-control bg-dark text-white" placeholder="URL을 입력하세요" id='tt' value=''>
        <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='ServerClock()'>시작</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://dm-09.github.io/tools/SC/")'>🔗</button><h3 id='time'>Not Loaded 로드되지 않음</h3>`
  } else {
      e.innerHTML = `<input type="text" class="form-control bg-dark text-white" placeholder="Enter the URL" id='tt' value=''>
        <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='ServerClock()'>Start</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://dm-09.github.io/tools/SC/")'>🔗</button><h3 id='time'>Not Loaded 로드되지 않음</h3>`
  }
}

function ServerClock() {
  var ServerTime = document.getElementById("tt").value

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
  
  document.getElementById("time").innerHTML = `${t[0]} ${t[1]}/${t[2]} ${t[3]}:${t[4]}:${t[5]}`
 } else {document.getElementById("time").innerHTML = 'Not Loaded 로드되지 않음'}
}

  get = setInterval(function() {
     getTime()
  }, 999);
}
// SC

function CC() {
    var e = document.querySelector("#box")
  if (lang != 1) {
      e.innerHTML = `<input type="text" class="form-control bg-dark text-white" placeholder="" id='t' value=''><br><h6>Age: Enter the Birth Year, D-Day: Enter the Y/M/D , Birth: Enter the birth date(Y/M/D), Leap Year: Enter the year</h6>
        <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Age()'>Age</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Dcalc()'>D-Day</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Bcalc()'>Birth</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Ccalc()'>Leap Year</button> <button type="button" id='open' class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://github.com/DM-09/tools/tree/main/Calc")'>🔗</button><br><br><h5 id='re'></h5>`
  } else {
      e.innerHTML = `<input type="text" class="form-control bg-dark text-white" placeholder="" id='t' value=''><br><h6>나이: 태어난 년도 입력, 디데이: 년/월/일 입력, 생일: 태어난 년/월/일 입력, 윤년: 년도 입력</h6>
        <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Age()'>나이</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Dcalc()'>디데이</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Bcalc()'>생일</button> <button type="button" class="btn btn-secondary mb-2 mt-2" onClick='Ccalc()'>윤년</button> <button type="button" id='open' class="btn btn-secondary mb-2 mt-2" onClick='window.open("https://github.com/DM-09/tools/tree/main/Calc")'>🔗</button><br><br><h5 id='re'></h5>`
  }
}

function Age() {
  function AgeCalc(BY, BM, BD) {
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY)
  
  if (NT[1] >= BM && NT[2] >= BD) {
    return  age
  } else {
    return age - 1
  }
};
function KorAgeCalc(BY, BM, BD) { 
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY) + 1
  return  age
};

function Basic() {
  var txt = document.querySelector("#t").value;
  var kor = KorAgeCalc(txt, 1, 1)
  var base = AgeCalc(txt, 1, 1)
  document.querySelector("#re").innerHTML = `
<b>Age(만 나이)</b><br>
If your birthday is over(생일 지났으면)<br>
${base}<br>

If not(생일 안 지났으면)<br>
${base - 1}<br><br>

<b>Korean age(한국식 나이)</b><br>
${kor}`
}
Basic()
    var open = document.querySelector("#open")
  open.setAttribute('onClick', "window.open('https://dm-09.github.io/tools/Calc/Age/')")
}

function D_Day(Y, M, D) {
  var now = new Date();
  var TheDay = new Date(Y, M - 1, D, 00, 00, 00);
  var days = Math.ceil((TheDay - now) / 86_400_000)
  
  if (days < 0) {
    days = 'D+' + (days * -1)
  } else if (days == 0) {
    days = 'D-Day'
  } else {
    days = 'D-' + days
  }
  
  return days
};
function Dcalc() {
  var d = document.querySelector("#t").value.split('/')
  var div = document.querySelector("#re")
  div.innerHTML = D_Day(Number(d[0]), Number(d[1]), Number(d[2]))
  
    var open = document.querySelector("#open")
  open.setAttribute('onClick', "window.open('https://dm-09.github.io/tools/Calc/DDay/')")
};

function CheckLeapYear(y) {
      if (y % 4 == 0){
        if (y % 100 != 0 || y % 400 == 0) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    };
    function Before_LeapYear(y) {
      if (CheckLeapYear(y) == true) {
        return Number(y) - 4
      } else {
        return Number(y) - (y % 4)
      }
    }
    function After_LeapYear(y) {
      if (CheckLeapYear(y) == true) {
        return Number(y) + 4
      } else {
        return Number(y) + (4 - (y % 4))
      }
    }

    function Ccalc() {
      var r = document.querySelector("#re")
      var y = document.querySelector("#t").value
      var t = ``
      if (CheckLeapYear(y)) {
        t += `✔`
      } else {
        t += `✖`
      }
      r.innerHTML = `${y}: 윤년(Leap Year) ${t} <br>
      최근 윤년(Recent): ${Before_LeapYear(y)} <br>
      다가올 윤년(Coming): ${After_LeapYear(y)}`
      
        var open = document.querySelector("#open")
  open.setAttribute('onClick', "window.open('https://dm-09.github.io/tools/Calc/LY/')")
    };

function Birth(Y, M, D) {
  var now = new Date();
  var TheDay = new Date(now.getFullYear(), M - 1, D, 00, 00, 00);
  var days = Math.ceil((TheDay - now) / 86_400_000)
  var year = Y - now.getFullYear()
  
  if (days < 0) {
    days = 'D+' + (days * -1)
  } else if (days == 0) {
    days = 'D-Day<br>🎉Happy ' + year * -1 + 'th BirthDay!🎉'
  } else {
    days = 'D-' + days
  }
  
  return days
};
function Bcalc() {
  var d = document.querySelector("#t").value.split('/')
  var div = document.querySelector("#re")

  div.innerHTML = Birth(Number(d[0]), Number(d[1]), Number(d[2]))
  
  var open = document.querySelector("#open")
  open.setAttribute('onClick', "window.open('https://dm-09.github.io/tools/Calc/BD/')")
}

    window.onload = language;
