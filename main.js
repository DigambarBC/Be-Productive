
// Selecting input type checkbox
let PBtn = document.getElementById("PowerBtn");

// Storing local storage data into variable
let getState = localStorage.getItem("PowerState");
console.log(getState);

// Checking local data is true 
if (getState == "true") {

    //  checkbox button is set to true 
    PBtn.checked = true;

    // Storing Variable in Tab Local Storage  and set sate to true
    chrome.storage.sync.set({ 'State': 'true' }, function () {

    });

} else {

    // checkbox button is set to false
    PBtn.checked = false;

    // Storing Variable in Tab Local Storage  and set sate to false
    chrome.storage.sync.set({ 'State': 'false' }, function () {

    });
}


// Sending Hide Message to Content.js file
function Hide() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
    });
}

// Sending Show Message to Content.js file
function Show() {
    // Method to send message 
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "stop" });
    });
}


//  Onclick event on power btn
PBtn.addEventListener("click", function () {

    // checking power btn checkbox is checked or not 
    if (PBtn.checked == true) {

        // Execute Hide Method
        Hide();

        // Store Button State into local storage
        localStorage.setItem("PowerState", true);

        // Reload Page
        location.reload();

    }
    else {

        // Execute Hide Method
        Show();

        // Store Button State into local storage
        localStorage.setItem("PowerState", false);

        // Reload Page
        location.reload();
    }

});