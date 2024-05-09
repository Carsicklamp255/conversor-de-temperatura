function convertertemperatura(){
    var temperatura_celcius = prompt("digite a temperatura em C")
    var temperatura_celcius_num = parseFloat(temperatura_celcius);
    if (isNaN(temperatura_celcius_num)){
        alert("inserir número valido para a temperatura.");
        return
    }
    var temperatura_farenheit = 1.8*temperatura_celcius + 32;
    alert("temperatura em F: " + temperatura_farenheit);

 var h2 = document.createElement("h2");
 h2.innerHTML = "A temperatura em F é: " + temperatura_farenheit;
 document.getElementsByTagName("body")[0].appendChild(h2);

}
convertertemperatura();