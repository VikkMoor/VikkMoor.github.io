function qstn() {
        var x = prompt("Enter your name");
        alert(`Hello, dear ${x}!`);
}

qstn()

function app() {
        var message = document.getElementById("text").value;
        document.getElementById("message1").innerText = message;
        document.getElementById("text").value = '';
        //console.log(message)
}
