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
function calc() {
  var d = document.querySelector("#Day").value.split('-')
  var div = document.querySelector("#d")
  div.innerHTML = D_Day(Number(d[0]), Number(d[1]), Number(d[2]))
};
function copy() {
  var d = document.querySelector("#Day").value
  var t = document.querySelector("#title").value
  var c = String(window.location + '#d=' + d + 't=' + t)
  var txt = document.querySelector("#title")
  
  txt.value = c
  txt.select();
  document.execCommand("Copy");
  txt.value = t
};

function hash() {
  var hash_code = location.hash
  if (hash_code.length != 0) {
      var dl = hash_code.search('d=') + 2
      var tl = hash_code.search('t=')
  
      var date = hash_code.substring(dl, tl)
      var title = decodeURIComponent(hash_code.substring(tl+2))
      
      document.querySelector("#Day").value = date
      document.querySelector("#title").value = title
      document.getElementById("enter").click();
  }
};


window.onload = function(){
  hash()
};
