var tabs = require("sdk/tabs");
var self = require("sdk/self")

var ourPage = self.data.url("index.html")

tabs.on('open', function(tab) {
    tab.url = ourPage;
});


// Update the preferences
var { get, set } = require("sdk/preferences/service");
var { when: unload } = require("sdk/system/unload");

var oldValue = get("browser.newtab.url");
set("browser.newtab.url", ourPage);

// By AMO policy global preferences must be changed back to their original value
unload(function() {
  set("browser.newtab.url", oldValue);
});