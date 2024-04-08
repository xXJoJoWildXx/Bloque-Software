document.getElementById('changeMessage').addEventListener('click', function(){
    document.getElementById('greeting').innerHTML = "Goodbye World !!!";
});

//  var vs let , investigar
let counterValue = 0;

//incrementCounter
document.getElementById('incrementCounter').addEventListener('click', function(){
    document.getElementById('incrementCounter').innerHTML = counterValue ++;
});