function ServerClock() {
  var ServerTime = document.getElementById("url").value
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
