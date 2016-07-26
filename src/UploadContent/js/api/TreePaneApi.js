const request = require('superagent');
const  Promise = require('bluebird');
import serviceUrls from '../constants/service';

export default {

getRootChildren() {
    let url = serviceUrls.folderData;
    console.log(url);
    return Promise.promisifyAll(
          request
            .get(url)
            .auth('admin', 'admin')
        )
  },

   getFoldersService(folderName) {
   	console.log("File Name : "+folderName);
   	let url = serviceUrls.folderData;

   	if(folderName != 'My Files' && folderName === 'undefined'){
   		url = serviceUrls.folderData+"/"+folderName;
   	}

   	console.log(url);
    return Promise.promisifyAll(
          request
            .get(url)
            .auth('admin', 'admin')
        )
  }
}