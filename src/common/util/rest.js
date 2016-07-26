import $ from 'jquery';

/* SUPPORT FOR  ES6 FETCH IS VERY LIMITED IN SAFARI.
   SO RESORT TO USING JQUERY'S AJAX SUPPORT

const parseFetchRespJson = function (resp, resolve, reject) {
	  console.log('rest:parseFetchRespJson - parse resp from server %o', resp);
    // Format for AJAX 'resp' is in format: 
	  //   { code:, data:{}, msg:'ok' }
    //
	  if (resp.code === '0') {
	      resolve(resp);
	  }
	  else {
	      reject(resp); 
	  }
};

const parseFetchRespBlob = function (resp, resolve, reject) {
	  console.log('rest:parseFetchRespBlob - parse resp from server %o', resp);
	  // process your BLOB further
	  // Needs to understand how to get the right data from resp
	  // which is format { code:, data:{}, msg:'ok' }
	  const objectURL = URL.createObjectURL(resp);
	  console.log('rest:parseFetchRespBlob - success');
	  resolve(objectURL);
}

const parseFetchResp = function (resp, resolve, reject) {
	  const ct = resp.headers.get('content-type');
	  if (ct && ct.indexOf('application/json') !== -1) {
	      return resp.json().then(function (resp) {
		        parseFetchRespJson(resp, resolve, reject);
	      });
	  } 
	  else if (ct && ct.indexOf('application/blob') !== -1) {
	      return resp.blob().then(function (resp) {
		        parseFetchRespBlob(resp, resolve, reject);
	      });
	  }
	  else {
        // Other parsers:
	      // resp.blob()          note: allof these returns promise
	      // resp.arrayBuffer()
	      // resp.json()
	      // resp.text()
	      // resp.formData()
	      console.log('rest:parseFetchResp  - Oops, we have not got the expected content type!');

	      return resp.json().then(function (resp) {
		        parseFetchRespJson(resp, resolve, reject);
	      });
	  }

	  reject('netwk:parseFetchResp - Unhandled resp type');
};

const serverFetch = function (config, resolve, reject) {
	  console.log('rest:serverFetch - This may not be supported in all browsers. EX. IE10+ >>> Use Polyfill <<<<');

	  let myHeaders = new Headers(config.headers);

    console.log('rest:serverFetch - header value for X-Roles is %o', myHeaders.get('X-Roles'));
    console.log('rest:serverFetch - header value for Authorization is %o', myHeaders.get('Authorization'));

	  let myInit = { method: config.method,                              // *GET
                   headers: myHeaders,
                   mode: 'cors',                                       // *cors/no-cors/same-origin/navigate
		               // credentials: 'omit',                             // *omit/same-origin/include  
                   // cache: 'default',                                // default/no-store/reload/no-cache/force-cache
		               body: (config.method === 'GET') ? null : JSON.stringify(config.data)  //  Blob/BufferSource/FormData
		               // redirect:                                        // follow/error/manual
		               // integrity:
	               };

	  let myRequest = new Request(config.url, myInit);
	  let p = fetch(myRequest);

	  p.then(function (resp) {
        console.log('rest:serverFetch - Success resp is %o', resp);
	      parseFetchResp(resp, resolve, reject);
	  }).catch(function (resp) {
        console.log('rest:serverFetch - Failure resp is %o', resp);
	      reject(resp.data);
	  });
};
*/


const serverFetchJQuery = function (config, resolve, reject, p) {

    $.ajax({
        url: config.url,
        type: config.method,
        headers: config.headers,
        data: (config.method === 'GET') ? null : JSON.stringify(config.data),
        dataType: 'json', 
        success:function (data)
        {
            console.log('rest:serverFetchJQuery - Success : Data received %o ', data);
            resolve(data);
        },
        error:function (jqXHR,textStatus,errorThrown)
        {
            console.log('rest:serverFetchJQuery - Failure : %o ', errorThrown);
	          reject(errorThrown);
        }
    });
};

// Exports
export default {
    send : function (config) {
	      console.log('rest:restService - ajax req for %o begin', config);

        let p = new Promise(function (resolve, reject) {
            try {
		            serverFetchJQuery(config, resolve, reject);     // Generic
		            //serverFetch(config, resolve, reject);
		            //serverFetchJQueryGet(config, resolve, reject);    // Just for testing GET  call 
            }
            catch (e) {
                reject('Exception in REST processing : ' + e);
            }
        });

	      console.log('rest:restService - async ajax req finished (but resp may notbe received yet)');
	      return p;
    }
};


/*

  xhrFields: {
    withCredentials: true
  },
  username: 'myuser',
  password: 'mypassword',

  Access-Control-Allow-Credentials →true
  Access-Control-Allow-Headers →origin, content-type, accept, authorization
  Access-Control-Allow-Methods →GET, POST, PUT, DELETE, OPTIONS, HEAD
  Access-Control-Allow-Origin →*

  The following works
  curl -k --verbose --request GET https://develop.pearsonmeta.io/work/d813b8a9-fa60-46c4-bcbd-e4a3ca37cc12?db=qa5 --header 'Origin: http://localhost:5000' --header 'Authorization: Basic c3RyYXdiZXJyeToqbnJSUEc0akA1b1JCUnVDMkckITh4IzVqSFA=' --header 'X-Roles: roleX,roleA,roleB' --header 'Content-Type: application/json' --header 'Accept: application/ld+json'

  xhr.setRequestHeader('Content-Type', 'text/plain');

//
//
// SAMPLE FOR GET
//
//
//
const serverFetchJQueryGet = function (config, resolve, reject, p) {

    let url = 'https://uat.pearsonmeta.io/work/db066023-041b-4753-8dfc-10ba12ed235b?db=qa6'; 
    let action = 'GET';
//    let contentType ='application/x-www-form-urlencoded; charset=utf-8';

    $.ajax({
        url: url,
        type: action,
        headers: config.headers,
        success:function (data)
        {
            console.log('rest:serverFetchJQuery - Success : Data received %o ', data);
            resolve(data);
        },
        error:function (jqXHR,textStatus,errorThrown)
        {
            console.log('rest:serverFetchJQuery - Failure : %o ', errorThrown);
	          reject(errorThrown);
        }
/ *
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic c3RyYXdiZXJyeToqbnJSUEc0akA1b1JCUnVDMkckITh4IzVqSFA=');
//            xhr.setRequestHeader('X-Roles', 'roleX,roleA,roleB');
            xhr.setRequestHeader('Content-Type', 'application/ld+json;charset=UTF-8');
            xhr.setRequestHeader('Accept', 'application/ld+json');
        }
* /
    });

};
*/

