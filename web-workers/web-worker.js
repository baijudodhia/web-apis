onmessage = function (e) {
    let workerResult = `result of ${e.data[0]} + ${e.data[1]} = ${Number(e.data[0]) + Number(e.data[1])}`;
    postMessage(workerResult);
}