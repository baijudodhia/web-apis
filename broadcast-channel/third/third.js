let pageName = location.pathname;

/* Getter Method */
const getMessage = () => {
    let message = document.getElementById('message');
    let value = message.value
    message.value = '';
    return value;
}

/* Setter Method */
const setMessage = (message) => {
    let result = document.getElementById('result');
    result.innerHTML += `<div>${message}</div>`;
}

/* 
    1. Handler method for Input Box.
    2. Trigger for 'onkeyup' of input element.
    3. Broadcasts message only when user clicks 'Enter' key.
*/
function sendMessage(e) {
    if (event.key === 'Enter') {
        let msg = getMessage();

        handleBroadcastChannelSecondary({ message: msg, pageName: pageName, setMessage: setMessage });
    }
}

