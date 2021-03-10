let formButton = document.getElementById("form-button");

formButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "executionCode.js",
    });
  });
};
