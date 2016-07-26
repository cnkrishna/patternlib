const request = require('superagent');
const  Promise = require('bluebird');
var join = Promise.join;
import serviceUrls from '../constants/service';
import {format} from '../utils/stringManipulation'

var url = "http://10.219.43.96:8082/alfresco/service/slingshot/doclib/doclist/treenode/node/alfresco/company/home";

var url1 = "http://10.219.43.96:8082/alfresco/api/-default-/public/cmis/versions/1.1/browser/root/{0}?cmisselector=children&&alf_ticket=TICKET_735ad471485c01402e825be4a76c31557b0f1e76";

var image = "http://10.219.43.96:8082/alfresco/service/api/node/workspace/SpacesStore/{0}/content/thumbnails/doclib?alf_ticket=TICKET_735ad471485c01402e825be4a76c31557b0f1e76";


export default {
   get_assets(folderName) {
    var imageUrls = [];

    var folderListUrl = format(url1, [folderName]);

    return Promise.promisifyAll(
          request
          .get(folderListUrl)
        );
  },

  getThumnailImages (nodeRefs) {
    let imageUrls = [];
    let i = 0;
    let assetsData = [];

       for (var obj in nodeRefs.objects) {
          if (nodeRefs.objects.hasOwnProperty(obj)) {
            var node = nodeRefs.objects[obj];
            var refValue = node.object.properties["alfcmis:nodeRef"].value;
            var temp = refValue.split('/');
            var refId = temp[temp.length -1];
            var imageUrl = format(image, [refId]);
            let temp1;
            imageUrls.push(imageUrl);

            if (node.object.properties["cmis:contentStreamMimeType"] === undefined) {
                temp1 = ''
            }
            else {
                temp1 = node.object.properties["cmis:contentStreamMimeType"].value;
            }

            assetsData.push({
                desc: node.object.properties["cmis:description"].value,
                type: temp1,
                url: imageUrl,
                content: '',
                id: i
            });
            i = i + 1;
          }
        }

        nodeRefs.assetsData = assetsData;

        return nodeRefs;

        // return Promise.promisifyAll(join(
        //         request.get(imageUrls[0]),
        //         request.get(imageUrls[1]),
        //         request.get(imageUrls[2]),
        //         request.get(imageUrls[3]),
        //         function (res1, res2, res3, res4) {
        //             // assetsData[0].content = btoa(res1.text);
        //             // assetsData[1].content = btoa(res2.text);
        //             // assetsData[2].content = btoa(res3.text);
        //             // assetsData[3].content = btoa(res4.text);
        //             nodeRefs.assetsData = assetsData;
        //             console.log(nodeRefs);
        //             return nodeRefs;
        //         }

        //     )
        // )
    }
}