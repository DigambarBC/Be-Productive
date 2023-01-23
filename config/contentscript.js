
// Get Sate form open tab storage
chrome.storage.sync.get(['State'], function (items) {

    // if state is true then hide youtube sugession 
    if (items['State'] === "true") {

        // get id in html page of youtube
        let target = document.getElementById('contents')

        // set attribute hidden
        target.hidden = true;
    }
    else {
        // if state is false then show youtube sugession 
        let target = document.getElementById('contents')
        target.hidden = false;
    }

});


// Listen Message comes from main.js file when power button is clicked
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        //  if message is true then execute start function and reload page
        if (request.message === "start") {
            start();
            location.reload();
        }
        else {
            //  if message is stop then execute stop function and reload page
            stop();
            location.reload();
        }
    }
);

// select id from html dom and set attribute hidden true to hide contain
function start() {
    console.log("start");
    let target = document.getElementById('contents')
    target.hidden = true;

}

//  select id from html dom and set attribute hidden false to show contain
function stop() {
    console.log("stop");

    let target = document.getElementById('contents')
    target.hidden = false;

}

