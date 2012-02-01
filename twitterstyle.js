// Hide Twitter Guff
// Paul Livingstone
// 2010

// Set SHOW variables
var showWTF;
var showTRENDS;

 
// Set up the local storage variables and defaults
chrome.extension.sendRequest({name: "getPreferences"}, 
  function(response)
  {
    showWTF = response.WTF;
    showTRENDS = response.TRENDS;
  
    var defaultSetting = "hide";

    

    // WTF and trends are loaded via AJAX and we need to recheck that they're present
    // in order to apply the display:none class to them.
    var tester = false;
    
    function addWTFClass(){
        if (!tester){
            var components = document.getElementsByClassName("component");
            for (var i = 0; i < components.length; i ++){
                var dcterm = components[i].getAttribute("data-component-term");
                var componentClasses = components[i].getAttribute("class");
                if (dcterm != null && dcterm == "user_recommendations"){
                    tester = true;
                    components[i].setAttribute("class", componentClasses + " HTGwtf");
                }
                else {
                    setTimeout(addWTFClass, 1);
                }
            } 
        }
  
    }

    addWTFClass();
    

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
      tstyle.appendChild(document.createTextNode(".HTGwtf{display:none !important;}"));

    }
  
    // Inject style for hiding Trends
    if (showTRENDS == "hide"){
      tstyle.appendChild(document.createTextNode(".trends{display:none !important;}"));
    }  
   
  });






