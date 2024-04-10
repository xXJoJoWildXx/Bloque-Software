document.getElementById('changeMessage').addEventListener('click', function(){
    document.getElementById('greeting').innerHTML = "Goodbye World !!!";
});

//  var vs let , investigar
let counterValue = 0;

//incrementCounter
document.getElementById('incrementCounter').addEventListener('click', function(){
    document.getElementById('incrementCounter').innerHTML = counterValue ++;
});

//Form function to send the name to the API Server
document.getElementById('nameForm').addEventListener('submit', function(event){
    event.preventDefault()
    const name = document.getElementById('name').value

    fetch('http://localhost:3000/api/customGreeting', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({name : name})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverResponse').innerHTML = data.greeting
    })
})