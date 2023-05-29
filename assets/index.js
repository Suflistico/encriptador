function encriptar() {
    var palabra = document.getElementById("input").value;
    var resultado = "";
  
    for (var i = 0; i < palabra.length; i++) {
      var charCode = palabra.charCodeAt(i);
      resultado += String.fromCharCode(charCode + 1);
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  
  function desencriptar() {
    var palabra = document.getElementById("input").value;
    var resultado = "";
  
    for (var i = 0; i < palabra.length; i++) {
      var charCode = palabra.charCodeAt(i);
      resultado += String.fromCharCode(charCode - 1);
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  