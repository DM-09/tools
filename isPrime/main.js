function isPrime(n) {
  if (n == 1) { return 2 }
  if (n <= 0) { return 3 }
  if (isNaN(n)) { return 4 }
  
  for (var i = 2; i < parseInt(Math.sqrt(2)) + 1; i++) {
    if (n % i == 0) { return 0 }
  }
  
  return 1
}

function input() {
  var inp = document.getElementById('inp').value
  var res = isPrime(parseInt(inp))
  
  var label = [inp + ': ' + '소수가 아님(합성수)', inp + ': ' +  '소수', inp + ': ' + '소수도 합성수도 아님', '범위를 벗어남', '입력 값 없음']
  
  document.getElementById('result').innerHTML = label[res]
}
