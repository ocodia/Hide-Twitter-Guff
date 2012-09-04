// Hide Twitter Guff


// Set SHOW variables
var showWTF;
var showTRENDS;

 
// Set up the local storage variables and defaults
chrome.extension.sendMessage({name: "getPreferences"}, 
  function(response)
  {
    showWTF = response.WTF;
    showTRENDS = response.TRENDS;
  
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
      tstyle.appendChild(document.createTextNode(".wtf-module{display:none !important;}"));

    }
  
    // Inject style for hiding Trends
    if (showTRENDS == "hide"){
      tstyle.appendChild(document.createTextNode(".trends{display:none !important;}"));
    }  

 
   
  });






