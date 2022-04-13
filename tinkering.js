function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(num) {
  let result = ""
  for (let i = 1; i <= num; i++) {
    result += makeLine(i)
  }
  return result
}
console.log(buildTriangle(10));


var laugh = function(max) {
  let ha = ""
  for (i = 0; i < max; i++) {
    ha += "ha"
  }
  return ha + "!"
}

console.log(laugh(10));
