let patternsLib = PatternsLib.default;
// Following is exported from PatternsLib : { type : typeList, setup: function, create: function }
// const typeList = { BUTTON : 'button',
//                    BUTTONLONG : 'buttonLong'
//                  };

// ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+==

// Initial (one time) library configuration

// Headers which C1 expects: Access-Control-Allow-Headers:origin, content-type, accept, authorization
/*
  'headers' : {'Accept-Encoding': 'gzip,deflate',
  'X-Roles'        : 'roleX,roleY,roleC',
  'Authorization'  : 'Basic c3RyYXdiZXJyeToqbnJSUEc0akA1b1JCUnVDMkckITh4IzVqSFA=',
  'Content-Type'   : 'application/json',
  'Accept'         : 'application/ld+json',
  'Access-Control-Allow-Credentials' : true
  },
*/

const libConfig = {'locale': 'en_US',
                   'environment': 'dev',
                   'link': 'google.com1',

                   'headers' : {'Content-Type'   : 'application/json',
                                'Accept'         : 'application/ld+json',
                                'X-Roles'        : 'roleX,roleY,roleC',
                                'Authorization'  : 'Basic c3RyYXdiZXJyeToqbnJSUEc0akA1b1JCUnVDMkckITh4IzVqSFA='
                               },
                   'database'       : '?db=qa6',
                   'server'         : 'https://uat.pearsonmeta.io',
                   'port'           : '8080'
                  };
patternsLib.setup(libConfig);

// ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+==

    
//
// A simple pattern usage : BUTTON
//

// Create an instance of a pattern object
// The instance has following properties:
// { patSetup: obj,
//   pattern: string,
//   uqid : number,
//   resultsEventId : pattern + '-' + uqid,
//   eventId : pattern + '-channel-' + uqid
//   setup : function,
//   run : function,
//   on : function,
//   off : function,
//   fire : function
// }
let patButton = patternsLib.create(patternsLib.type.BUTTON);

// Define a configuration for pattern instance
let patConfig =  {arg : '00001', link : 'button.com1', selector : '#patternHolder1'};

// Define a callback which will receive results back from the pattern instance
let cb = (data) => {
    // data is a JSON structure returned back from the pattern instance

    // Here we are just displaying the stringified version of JSON structure
    let e = document.getElementById('patternResp1');
	  e.innerHTML = JSON.stringify(data);
};

// Setup the instance using configuraton and callback
patButton.setup(patConfig, cb);

// Run the render method, processess user interactions and do teardown when finished
patButton.run();





// Following additional methods are available for
// communicating with the live pattern instance

let channelCB = (channelData) => {
    // channel data is a JSON structure 

    // Here we are just displaying the stringified version of JSON structure
    let e = document.getElementById('patternChannelResp1');
	  e.innerHTML = JSON.stringify(channelData);
};
patButton.on(channelCB);
patButton.fire({ 'one': 'some data', 'two' : 99, 'three' : { 'nested' : {}} });
patButton.off();

  
// ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+==






//
// A simple pattern usage : BUTTONLONG
//

// Create an instance of a pattern object
let patButton2 = patternsLib.create(patternsLib.type.BUTTONLONG);

// Define a configuration for pattern instance
let patConfig2 =  {arg : '00001', link : 'buttonLong.com2', selector : '#patternHolder2'};

// Define a callback which will receive results back from the pattern instance
let cb2 = (data) => {
    // data is a JSON structure returned back from the pattern instance

    // Here we are just displaying the stringified version of JSON structure
    let e = document.getElementById('patternResp2');
	  e.innerHTML = JSON.stringify(data);
};

// Setup the instance using configuraton and callback
patButton2.setup(patConfig2, cb2);

// Run the render method, processess user interactions and do teardown when finished
patButton2.run();

// Following additional methods are available for
// communicating with the live pattern instance
//patButton.on();
//patButton.off();
//patButton.fire()

// ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+== ==+==

//
// A simple pattern usage : BUTTON
// (A test case for multiple instances of same pattern on a single page)
//

let patButton3 = patternsLib.create(patternsLib.type.BUTTON);

let patConfig3 =  {arg : '00001', link : 'button.com3', selector : '#patternHolder3'};
let cb3 = (data) => {
    let e = document.getElementById('patternResp3');
	  e.innerHTML = JSON.stringify(data);
};
patButton3.setup(patConfig3, cb3);
patButton3.run();
//patButton.on();
//patButton.off();
//patButton.fire()

