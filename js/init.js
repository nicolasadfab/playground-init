/**
 * @namespace reference to Adfab.Playground object
 */
var PG = Adfab.Playground,
    init;
    
(function ()
{
    'use strict';
    
    function loadQueuAndWait (queu, callback)
    {
        var i = 0;
        
        if(typeof queu[0] !== 'undefined' && PG.Util.not_null(queu[0])) {
            PG.Util.loadJs(queu[0], function ()
            {
                queu.shift();
                loadQueuAndWait(queu, callback);
            });
        }else {
            if(callback) {
                callback();
            }
        }
    }
    
    var scripts = [],
        browser = PG.Util.saysWho();
    
    if(browser[0] === "MSIE" && browser[1] === "9.0") {
        scripts.push(PG.Config.scripts.xpath);
        scripts.push(PG.Config.scripts.json);
    } 
    
    loadQueuAndWait(scripts, function ()
    {
        var sc = PG.Util.getObjectFromXpath('//script[@data-pg-api-key]'),
            settings = {};
        
        settings.apiKey = sc[0].getAttribute("data-pg-api-key");
        // put the instance of settings into the namespace Adfab.Playground.Settings
        try {
            addToNamespace('Settings', settings);
        }catch(e) {
           throw new Error( "Cannot extends 'app' to 'Adfab.playground.Settings'" );
        }
        
        if(sc[0].getAttribute("data-ears")) {
            scripts.push(PG.Config.scripts.ears);
        }
        if(sc[0].getAttribute("data-mouth")) {
            scripts.push(PG.Config.scripts.mouth); 
        }
        
        loadQueuAndWait(scripts, function ()
        {
            // put the instance of config into the namespace Adfab.Playground.Config
            try {
                addToNamespace('Config', pl_config);
            }catch(e) {
               throw new Error( "Cannot extends 'app' to 'Adfab.playground.Config'" );
            }
        });
    });
})();