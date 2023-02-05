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
  var txt = document.querySelector("#input").value;
  var kor = KorAgeCalc(txt, 1, 1)
  var base = AgeCalc(txt, 1, 1)
  document.querySelector("#output").innerHTML = `
<b>Age(만 나이)</b><br>
If your birthday is over(생일 지났으면)<br>
${base}<br>

If not(생일 안 지났으면)<br>
${base - 1}<br><br>

<b>Korean age(한국식 나이)</b><br>
${kor}`
}
