// Set up context menu
var title = chrome.i18n.getMessage("contextMenuTitle");
chrome.contextMenus.create({
  id: "333245-duplicate-this-tab",
  title: title,
  contexts: ["tab"] // Firefox 53+
});

// Add listener when user clicks on context menu entry
chrome.contextMenus.onClicked.addListener(function(info, tabs) {
    chrome.tabs.duplicate(tabs.id)
});

// Add listener when using keyboard shortcut
chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var tab_id = tabs[0].id;
    chrome.tabs.duplicate(tab_id)
  });
});