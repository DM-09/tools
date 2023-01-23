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
  var Day = txt.split('/');
  document.querySelector("#output").innerHTML = AgeCalc(Day[2], Day[0], Day[1])
}

function Kor() {
  var txt = document.querySelector("#input2").value;
  var Day = txt.split('/');
  document.querySelector("#output2").innerHTML = KorAgeCalc(Day[2], Day[0], Day[1])
};
