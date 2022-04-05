let worker = new Worker('web-worker.js');

function add() {
    if (window.Worker) {
        let number1 = document.getElementById('number1').value;
        let number2 = document.getElementById('number2').value;
        let result = document.getElementById('result');

        worker.postMessage([number1, number2]);

        worker.onmessage = function (e) {
            result.innerText = e.data;
        }
    }
}

