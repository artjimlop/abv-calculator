/*
window.onload = function () {
  originalGravity = document.getElementById('og')
  finalGravity = document.getElementById('fg')
  form = document.getElementById('form')
  abv = document.getElementById('divABV')
};
*/
function updateAll() {
  var originalGravity = document.getElementById('og').value
  var finalGravity = document.getElementById('fg').value
  var isSGSelected = document.getElementById('sg').checked
  var isPlatoSelected = document.getElementById('plato').checked
  var form = document.getElementById('form')
  var abv = document.getElementById('divABV')

  if (originalGravity !== '' && originalGravity != null &&
      finalGravity !== '' && finalGravity != null ) {
        var ogSG = originalGravity
        var fgSG = finalGravity
        if(isPlatoSelected) {
          ogSG = platoToSG(originalGravity)
          fgSG = platoToSG(finalGravity)
        }
        abv.innerText = round(calculateABV(ogSG, fgSG)).toString().concat("% ABV")
  } else {
        abv.innerText = "There's an error. Check your data."
  }
}

function calculateABV(originalGravity, finalGravity) {
  //ABV = (OG - FG) * 131.25
  return (originalGravity - finalGravity) * 131.25
}

function platoToSG(degrees) {
  //SG=259/(259-degrees P)
  return 259/(259-degrees)
}

function round(num, decimales = 2) {
    var signo = (num >= 0 ? 1 : -1);
    num = num * signo;
    if (decimales === 0) //con 0 decimales
        return signo * Math.round(num);
    // round(x * 10 ^ decimales)
    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
    // x * 10 ^ (-decimales)
    num = num.toString().split('e');
    return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
}
