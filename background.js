const sendMessage = (message) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs.pop().id, message);
    });
}
chrome.commands.onCommand.addListener((command) => {
    sendMessage({ command })
});
function logURL(requestDetails) {
    if (requestDetails.url.includes(".mp4") || requestDetails.url.includes(".mkv") || requestDetails.url.includes(".avi"))
        sendMessage({ command: 'video-src', url: requestDetails.url })
}

chrome.webRequest.onBeforeRequest.addListener(
    logURL,
    { urls: ["<all_urls>"] }
)