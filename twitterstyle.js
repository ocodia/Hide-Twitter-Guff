// Hide Twitter Guff
// Paul Livingstone
// 2010

// Set SHOW variables
var showWTF
var showTRENDS
  
// Set up the local storage variables and defaults
chrome.extension.sendRequest({name: "getPreferences"}, 
	function(response)
	{
		showWTF = response.WTF;
		showTRENDS = response.TRENDS;
		//console.log("Variable ShowWTF", showWTF);
		//console.log("Variable ShowTRENDS", showTRENDS);
  
		var defaultSetting = "hide";

		// Set up the defaults
		if (showWTF == undefined || showTRENDS == undefined) {
			showWTF = defaultSetting;
			showTRENDS = defaultSetting;
		}
  
		// Create a new Style element
		var tstyle = document.createElement('style');
		tstyle.setAttribute("rel", "stylesheet");
		tstyle.setAttribute("type", "text/css");
		document.getElementsByTagName("head")[0].appendChild(tstyle); 

		// Inject style for hiding Who To Follow 
		if (showWTF == "hide"){
			tstyle.appendChild(document.createTextNode(".user-rec-inner{display:none !important;}"));
			tstyle.appendChild(document.createTextNode(".component .user-rec-inner + hr{display:none !important;}"));
		}
  
		// Inject style for hiding Trends
		if (showTRENDS == "hide"){
			tstyle.appendChild(document.createTextNode(".trends-inner{display:none !important;}"));
			tstyle.appendChild(document.createTextNode(".component .trends-inner + hr{display:none !important;}"));
		}  
});