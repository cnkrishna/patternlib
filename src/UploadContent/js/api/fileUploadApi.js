const request = require('superagent');
const  Promise = require('bluebird');

export default {
  
   get_Data() { 
    
    return Promise.promisifyAll(      
	      request
	     .get('http://10.219.43.96:8082/alfresco/service/api/login')
	     .query({ u: 'admin' })
	     .query({ pw: 'admin' })
	     .on('progress', function(e){
          console.log(e.direction,"is done",e.percent,"%");
         })
     )
  },

   post_Data(formData,values,token) {	

    //const filename = Date.now()+'_'+values.file[0].name;
    const filename = values.file[0].name;
	const Aflerco_Upload_Url = 'http://10.219.43.96:8082/alfresco/api/-default-/public/cmis/versions/1.1/browser/root?' +
	'objectId=workspace://SpacesStore/f732b1f5-5d54-4505-91dd-6ff1aeef5ff3' +
	'&cmisaction=createDocument&propertyId[0]=cmis:name&propertyValue[0]=' + filename +
	'&propertyId[1]=cmis:objectTypeId&propertyValue[1]=cmis:document&alf_ticket=' + token;
    
    return Promise.promisifyAll(	
           request
           .post(Aflerco_Upload_Url)                  
           .send(formData)
    	)
  }
}

