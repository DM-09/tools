var c = 5;

function count() {
  var inp = prompt('Enter spam count | 도배 횟수를 쓰세요.', '')
  if (inp != "") {
    c = inp
    document.querySelector("#cc").value = 'spam count: ' + inp + ' | 도배 횟수: ' + inp
  } 
}

function spam() {
  var area = document.querySelector("#input")
  var word = area.value
  var newS = ''
  
  for (var i=0; i<c; i++) {
    newS += word
  }
  
  area.value  = newS
  area.select();
  document.execCommand('copy');
  area.value = 'Copied! 복사됨!';
}
