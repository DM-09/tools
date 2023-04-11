var en = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P',
      'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L',
      'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M']

var kor = ['ㅂ', 'ㅃ', 'ㅈ', 'ㅉ', 'ㄷ', 'ㄸ', 'ㄱ', ' ㄲ', 'ㅅ', 'ㅆ', 'ㅛ', 'ㅛ', 'ㅕ', 'ㅕ', 'ㅑ', 'ㅑ', 'ㅐ', 'ㅒ', 'ㅔ', 'ㅖ',
       'ㅁ', 'ㅁ', 'ㄴ', 'ㄴ', 'ㅇ', 'ㅇ', 'ㄹ', 'ㄹ', 'ㅎ', 'ㅎ', 'ㅗ', 'ㅗ', 'ㅓ', 'ㅓ', 'ㅏ', 'ㅏ', 'ㅣ', 'ㅣ',
       'ㅋ', 'ㅋ', 'ㅌ', 'ㅌ', 'ㅊ', 'ㅊ', 'ㅍ', 'ㅍ', 'ㅠ', 'ㅠ', 'ㅜ', 'ㅜ', 'ㅡ', 'ㅡ']

function Eng() {
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


function Kor() {
  var word = document.querySelector("#input2").value;
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
  
   var output = document.querySelector('#output2')
   output.innerHTML = Hangul.a(com)
}; 
