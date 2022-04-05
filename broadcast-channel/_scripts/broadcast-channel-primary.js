/* 
    1. BroadcastChannel object declaration.
    2. Needs to be declared on global scope of website for all the pages to access it.
*/
let primary = new BroadcastChannel('primary');

primary.onmessage = (e) => {
    setMessage(`${e.data}`)
};

/* Handler method for broadcasting the message */
const handleBroadcastChannelPrimary = ({ message = '', pageName = '', setMessage = undefined, showSentMessage = true }) => {
    if (window.BroadcastChannel) {
        primary.postMessage(`Received from ${pageName}: ${message}`);

        if (showSentMessage) {
            /* Sets the Message for Same Page since it can't listen to it's own sent message */
            setMessage(`Sent: ${message}`)
        }
    } else {
        console.log(`Broadcasting Channel API Not Supported`);
    }
}

