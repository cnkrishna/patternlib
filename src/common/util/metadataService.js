/**
 * @module PatternsLib
 */
import * as jsonld from 'jsonld';

import rest from './rest';

const ctx = {
  '@context': {
    'id': '@id',
    'type': {
      '@id': '@type',
      '@container': '@set'
    },
    'graph': '@graph',
    'notation': 'http://www.w3.org/2004/02/skos/core#notation',
    'prefLabel': {
      '@id': 'http://www.w3.org/2004/02/skos/core#prefLabel',
      '@container': '@language'
    },
    'altLabel': {
      '@id': 'http://www.w3.org/2004/02/skos/core#altLabel',
      '@container': '@set'
    },
    'hiddenLabel': {
      '@id': 'http://www.w3.org/2004/02/skos/core#altLabel',
      '@container': '@language'
    },
    'narrower': {
      '@id': 'http://www.w3.org/2004/02/skos/core#narrower',
      '@container': '@set'
    },
    'broader': {
      '@id': 'http://www.w3.org/2004/02/skos/core#broader',
      '@container': '@set'
    },
    'related': {
      '@id': 'http://www.w3.org/2004/02/skos/core#related',
      '@container': '@set'
    },
    'inScheme': {
      '@id': 'http://www.w3.org/2004/02/skos/core#inScheme',
      '@type': '@id',
      '@container': '@set'
    },
    'topConceptOf': {
      '@id': 'http://www.w3.org/2004/02/skos/core#topConceptOf',
      '@type': '@id',
      '@container': '@set'
    },
    'topConcept': 'http://www.w3.org/2004/02/skos/core#hasTopConcept',
    'language': 'http://schema.org/inLanguage',
    'about': {
      '@type': '@id',
      '@id': 'http://schema.org/about',
      '@container': '@set'
    },
    'contentSize': 'http://schema.org/contentSize',
    'discipline': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/content/discipline',
      '@container': '@set'
    },
    'knowledgeLevel': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/learn/knowledgeLevel',
      '@container': '@set'
    },
    'audience': {
      '@type': '@id',
      '@id': 'http://schema.org/audience',
      '@container': '@set'
    },
    'accessibilityFeature': {
      '@type': '@id',
      '@id': 'http://schema.org/accessibilityFeature',
      '@container': '@set'
    },
    'duration': 'http://schema.org/duration',
    'dateCreated': 'http://schema.org/dateCreated',
    'status': 'http://schema.org/status',
    'timeRequired': 'http://schema.org/timeRequired',
    'format': 'http://purl.org/dc/terms/format',
    'hasPart': {
      '@type': '@id',
      '@id': 'http://schema.org/hasPart'
    },
    'sameAs': {
      '@id': 'http://www.w3.org/2002/07/owl#sameAs',
      '@type': '@id'
    },
    'isDefinedBy': {
      '@id': 'http://www.w3.org/2000/01/rdf-schema#isDefinedBy',
      '@type': '@id'
    },
    'eTag': 'http://schema.pearson.com/ns/raf/eTag',
    'security': 'http://schema.pearson.com/ns/raf/security',
    'removal': 'http://schema.pearson.com/ns/changeset/removal',
    'addition': 'http://schema.pearson.com/ns/changeset/addition',
    'replacement': 'http://schema.pearson.com/ns/changeset/replacement',
    'subject': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/changeset/subject'
    },
    'predicate': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/changeset/predicate'
    },
    'object': {
      '@id': 'http://schema.pearson.com/ns/changeset/object'
    },
    'ifMatch': {
      '@id': 'http://schema.pearson.com/ns/raf/ifMatch'
    },
    'ifNonMatch': {
      '@id': 'http://schema.pearson.com/ns/raf/ifNonMatch'
    },
    'uuid': {
      '@id': 'http://schema.pearson.com/ns/content/uuid'
    },
    'hasContributor': 'http://schema.pearson.com/ns/content/hasContributor',
    'hasAlignment': 'http://schema.pearson.com/ns/learn/hasAlignment',
    'identifiedBy': 'http://schema.pearson.com/ns/content/identifiedBy',
    'contributorRole': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/content/contributorRole'
    },
    'contributorAgent': 'http://schema.pearson.com/ns/content/contributorAgent',
    'alignmentType': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/learn/alignmentType'
    },
    'alignmentObjective': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/learn/alignmentObjective'
    },
    'idTerm': {
      '@type': '@id',
      '@id': 'http://schema.pearson.com/ns/content/idTerm'
    },
    'idValue': 'http://schema.pearson.com/ns/content/idValue',
    'Person': 'http://schema.org/Person',
    'results': {
      '@id': 'http://www.w3.org/ns/ldp#contains',
      '@container': '@list'
    },
    'name': {
      '@id': 'http://schema.org/name',
      '@container': '@language'
    },
    'isPartOf': {
      '@type': '@id',
      '@id': 'http://schema.org/isPartOf'
    },
    'description': {
      '@id': 'http://schema.org/description',
      '@container': '@language'
    },
    'keyword': {
      '@id': 'http://schema.pearson.com/ns/content/keyword',
      '@container': '@language'
    },
    'workExample': {
      '@type': '@id',
      '@id': 'http://schema.org/workExample'
    },
    'exampleOfWork': {
      '@type': '@id',
      '@id': 'http://schema.org/exampleOfWork'
    },
    'DirectContainer': 'http://www.w3.org/ns/ldp#DirectContainer',
    'PageSortCriterion': 'http://www.w3.org/ns/ldp#PageSortCriterion',
    'Ascending': 'http://www.w3.org/ns/ldp#Ascending',
    'pageSortCriteria': {
      '@id': 'http://www.w3.org/ns/ldp#pageSortCriteria',
      '@container': '@list',
      '@type': '@id'
    },
    'order': {
      '@type': '@id',
      '@id': 'http://www.w3.org/ns/ldp#pageSortOrder'
    },
    'pageSequence': {
      '@id': 'http://www.w3.org/ns/ldp#pageSequence',
      '@type': '@id'
    },
    'SingletonProperty': 'http://schema.pearson.com/ns/raf/SingletonProperty',
    'Work': 'http://schema.pearson.com/ns/content/Work',
    'Manifestation': 'http://schema.pearson.com/ns/content/Manifestation',
    'Container': 'http://schema.pearson.com/ns/content/Container',
    'LearningObjective': 'http://schema.pearson.com/ns/learn/LearningObjective',
    'ObjectivesFramework': 'http://schema.pearson.com/ns/learn/ObjectivesFramework'
  }
    };

/**
  * MetadataService module facilitates JSON to JSON-LD (and reverse) Transformation.
  * It also handles the MDS API REST CALLs.
  *
  * Expected Input JSON structure:
  *
  *      let buffer = {
  *          'libConfig' : this.props.libConfig,          // Includes host app supplied init values for lib + Should have all Taxonomies
  *          'patConfig' : this.props.patConfig,          // Includes host app supplied init values for pattern
  *
  *          'req'       : 'ProductMetadata',             // ProductMetadata / AssessmentMetadata / QuestionMetadata / AssetMetadata
  *          'action'    : 'Create',                      // Create / Read One / Update / Delete / Search / Read All
  *
  *          'data' : {
  *                'urn':'',                                // Only required for actioon = Update/Delete/Read
  *                'status' : '',                           // Not sure if this is needed
  *                'filename' : '',                         // This is prob. only for Asset
  *                'discipline' : 'Mathematics',            // Taxonomy value
  *                'difficultyLevel' : 'Easy',              // Taxonomy value
  *                'trigger' : '',
  *                'knowledgeLevel' : 'Grade 10',
  *                'hasAlignment' : '',                     // Taxonomy value
  *                'keywords' : ['key1', 'key2', 'key3'],
  *                'name': 'Some Product Name',
  *                'timeRequired' : {
  *                    'hh':'01',
  *                    'mm':'20',
  *                    'ss':'30'
  *          },
  *          'description' : 'Some description for Product with decipline Math and knowledge level of Grade 10',
  *          'audience' : 'Parents',                  // Taxonomy value
  *          'searchterms' : ''
  *      }
  *
  *  Modified into JSON-LD for use by rest.send()
  *
  *      let config = {
  *          method: '',                                // GET, POST, PUT, DELETE
  *          url:'',                                    // REST endpoint url
  *          data: {                                    // JSON-LD data for C1 MDS
  *          },
  *      }
  */

function _createContext(buffer) {
    //  '@context': {}
    return {
        'id': '@id',
        'type': '@type',

        'Work': 'http://schema.pearson.com/ns/content/Work',
        'status': 'http://schema.pearson.com/ns/content/status',

        'AssessmentItem': 'http://schema.pearson.com/ns/content/AssessmentItem',
        'ClosedCaption': 'http://schema.pearson.com/ns/content/ClosedCaption',
        'Transcript': 'http://schema.pearson.com/ns/content/Transcript',
        'filename': 'http://schema.pearson.com/ns/content/filename',
        'discipline': 'http://schema.pearson.com/ns/content/discipline',

        'difficultyLevel': 'http://schema.pearson.com/ns/learn/difficultyLevel',
        'trigger': 'http://schema.pearson.com/ns/learn/trigger',
        'knowledgeLevel': 'http://schema.pearson.com/ns/learn/knowledgeLevel',
        'hasAlignment': 'http://schema.pearson.com/ns/learn/hasAlignment',

        'audience' : 'http://schema.org/CreativeWork/audience',
        'keywords' : 'http://schema.org/CreativeWork/keywords',
        'CreativeWork': 'http://schema.org/CreativeWork',
        'name': 'http://schema.org/CreativeWork/name',
        'timeRequired': 'http://schema.org/CreativeWork/timeRequired',
        'description': 'http://schema.org/CreativeWork/description',

    };
};

function _createJSONLD(context, buffer) {
    let obj = {
        '@context'    : context,
        'id'          : '',
        'type'        : ['Work', 'CreativeWork'],
        'metadataType': buffer.req
    };

    //NOTE: If adding new fields here then same needs in _createJSON

    if (buffer.data.filename)
        obj['filename'] = buffer.data.filename;

    if (buffer.data.discipline)
        obj['discipline'] = buffer.data.discipline;

    if (buffer.data.description)
        obj['description'] = buffer.data.description;

    if (buffer.data.audience)
        obj['audience'] = buffer.data.audience;

/*    This gives HTML 400 Bad Request on POST

    if (buffer.data.knowledgeLevel)
        obj['knowledgeLevel'] = buffer.data.knowledgeLevel;
*/


    if (buffer.data.difficultyLevel)
        obj['difficultyLevel'] = buffer.data.difficultyLevel;

    if (buffer.data.keywords)
        obj['keywords'] = buffer.data.keywords;

    if (buffer.data.name)
        obj['name'] = buffer.data.name;

    return obj;
}

function _createConfig(buffer) {
    let method;
    let url;
    switch (buffer.action) {
    case 'Create' :
        method = 'POST';
        url = buffer.libConfig.server + '/thing' + buffer.libConfig.database;
        break;
    case 'Read One' :
        method = 'GET';
        url = buffer.libConfig.server + '/work/' + buffer.data.uuid + buffer.libConfig.database;
        break;
    case 'Update' :
        method = 'PUT';
        url = buffer.libConfig.server + '/work/' + buffer.data.uuid + buffer.libConfig.database;
        break;
    case 'Delete' :
        method = 'DELETE';
        url = buffer.libConfig.server + '/work/' + buffer.data.uuid + buffer.libConfig.database;
        break;
    case 'Search' :
        method = 'GET';
        url = buffer.libConfig.server + '/work/' + buffer.libConfig.database + buffer.data.searchterms;
        break;
    }

    let context = _createContext(buffer);
    let jsonld = _createJSONLD(context, buffer);
    let config = {
        'method': method,
        'url': url,
        'headers': buffer.libConfig.headers,
        'data': jsonld
    }
    return config;
};

function _createJSON(reply) {
    let obj = { };

    for (let k in reply) {
        if (k.includes('filename')) {
            obj['filename'] = reply[k];
        }
        else
        if (k.includes('discipline')) {
            obj['discipline'] = reply[k];
        }
        else
        if (k.includes('description')) {
            obj['description'] = reply[k];
        }
        else
        if (k.includes('audience')) {
            obj['audience'] = reply[k];
        }
        else
        if (k.includes('knowledgeLevel')) {
            obj['knowledgeLevel'] = reply[k];
        }
        else
        if (k.includes('difficultyLevel')) {
            obj['difficultyLevel'] = reply[k];
        }
        else
        if (k.includes('keywords')) {
            obj['keywords'] = reply[k];
        }
        else
        if (k.includes('uuid')) {
            obj['uuid'] = reply[k];
        }
        else
        if (k.includes('id')) {
            obj['id'] = reply[k];
        }
        else
        if (k.includes('name')) {
            obj['name'] = reply[k];
        }
    }
    return obj;
}


/**
  * send transforms supplied json into json-ld and makes REST call to MDS Server.
  * returns a response from MDS Server after transforming json-ld into json.
  *
  *
  */
export default {
    send : function (buffer) {
        let promise = new Promise(function (fulfill, reject) {
            let config = _createConfig(buffer);
            console.log('MetadataService:send - transformed JSON-LD %o', config);

            let restPromise = rest.send(config)
            restPromise.then(function (reply) {
                console.log('MetadataService:send - transorm jsonld to json for %o', reply);

                let json = _createJSON(reply);
                fulfill(json);
                //reply['@context'] = ctx;
                // a possible format for 'reply' is listed below
                /*
                  jsonld.compact(reply, ctx, function (err, compacted) {
                  console.log('MetadataService:send - do jsonld.compact() result is : ' +
                  JSON.stringify(compacted, null, 2) +
                  ' err is ' + err);
                  return compacted;
                  });
                */
            })
                .catch(function (reply) {
                    reject(reply);
                });
        });

        return promise;
    }
};


/*
reply format
{'@context':['http://schema.pearson.com/context/content-context.jsonld'],'id':'urn:pearson:work:db066023-041b-4753-8dfc-10ba12ed235b',"type":["Work","http://schema.org/Thing","http://schema.org/CreativeWork","http://www.w3.org/2000/01/rdf-schema#Class","http://www.w3.org/2002/07/owl#Class"],"http://schema.org/keywords":["WordB","WordA"],"http://schema.pearson.com/ns/content/discipline":"Mathematics","uuid":"db066023-041b-4753-8dfc-10ba12ed235b","security":"_:b0","http://www.w3.org/2000/01/rdf-schema#comment":["The most generic kind of creative work, including books, movies, photographs, software programs, etc.","The most generic type of item."],"http://www.w3.org/2000/01/rdf-schema#isDefinedBy":{"id":"https://data.pearson.com/work/db066023-041b-4753-8dfc-10ba12ed235b/metadata"},"http://www.w3.org/2000/01/rdf-schema#label":["CreativeWork","Thing","Work"],"http://www.w3.org/2000/01/rdf-schema#subClassOf":[{"id":"http://schema.org/Thing"},{"id":"http://schema.org/CreativeWork"}],"sameAs":["https://data.pearson.com/work/db066023-041b-4753-8dfc-10ba12ed235b"]}

*/
