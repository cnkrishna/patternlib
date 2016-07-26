 const testUrl = 'http://localhost:3000/folderService';
const baseUrl = "http://10.219.43.96:8082/alfresco"
const ticket = "";

const service = {
	questionMetaData: baseUrl + 'questionMetaData',
	saveQuestionMetaData: baseUrl + 'saveQuestionMetaData',
    assetsData: baseUrl + 'api/-default-/public/cmis/versions/1.1/browser/root/Senthil?',
    folderData: baseUrl + '/service/slingshot/doclib/doclist/treenode/node/alfresco/company/home',
    testFolder: testUrl

}

module.exports = service;
