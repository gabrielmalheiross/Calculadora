function valor(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function apagar() {
    document.getElementById('resultado').innerHTML = null;
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

// function calcular() {
//     var numero = document.getElementById('resultado').value;
//     var op = document.getElementById('resultado').value;

//     switch (op) {
//         case '+':
//             numero = numero + numero;
//             numero.innerHTML = numero;
//         case '-':
//             numero = numero - numero;
//             return numero;
//         case '*':
//             numero = numero * numero;
//             return numero;
//         case '/':
//             numero = numero / numero;
//             return numero;
//         default:
//             break;
//     }
// }