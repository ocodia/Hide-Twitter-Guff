// Hide Twitter Guff
// Paul Livingstone
// 2010

function loadOptions() {
  
  // Load up the background page
  var bkg = chrome.extension.getBackgroundPage();
  
  // declare the SHOW variables and get their values from LocalStorage
	var showWTF = bkg.getItem("showWTF");
  var showTRENDS = bkg.getItem("showTRENDS");

  
  // the default setting is to hide the elements
  var defaultSetting = "hide";
  
	// Set up the defaults if no values are present in LocalStorage
	if (showWTF == undefined || showTRENDS == undefined) {
		// if undefined, set to defaults
        bkg.setItem("showWTF", defaultSetting);
		bkg.setItem("showTRENDS", defaultSetting);

    // retrieve them from the localstore
    showWTF = bkg.getItem("showWTF");
    showTRENDS = bkg.getItem("showTRENDS");

	}
  
  // get the options form elements
  var wtf = document.getElementById("whotofollow");
  var trends = document.getElementById("trends");

  
  // Select the appropriate saved option for TRENDS
	for (var i = 0; i < trends.children.length; i++) {
		var trendschild = trends.children[i];
			if (trendschild.value == showTRENDS) {
			trendschild.selected = "true";
			break;
		}
	}
  
  // Select the appropriate saved option for WTF
	for (var i = 0; i < wtf.children.length; i++) {
		var wchild = wtf.children[i];
			if (wchild.value == showWTF) {
			wchild.selected = "true";
			break;
		}
	} 

 
}

function saveOptions() {
  var bkg = chrome.extension.getBackgroundPage();
  var wtf = document.getElementById("whotofollow");
  var trends = document.getElementById("trends");

  // Save selected options to localstore
  bkg.setItem("showTRENDS", trends.children[trends.selectedIndex].value);
  bkg.setItem("showWTF", wtf.children[wtf.selectedIndex].value);
  document.getElementById("msg").style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', saveOptions);
});

window.addEventListener('load', loadOptions, false);

