/**
 * @module PatternsLib
 */

import React from 'react';
import {render} from 'react-dom';
import Button from './PatternAlpha/js/containers/button/Button';
import ButtonLong from './PatternBeta/js/containers/button/ButtonLong';
import bean from 'bean';

let libConfig = {};
let token = 1;

//let Button, ButtonLong;
const typeList = { BUTTON : 'button',
                   BUTTONLONG : 'buttonLong'
                 };
const compList = {};
compList[typeList.BUTTON] = Button;
compList[typeList.BUTTONLONG] = ButtonLong;

/**
 * Create a component
 * This is a private function.
 * @function createComp
 * @param {string} pattern - a pattern component name
 * @param {object} patConfig - a configuration for pattern component
 * @return {object} component - a react component
 */
function _createComp(pattern, patConfig) {
    let component = compList[pattern];
    return React.createElement(component, {
        libConfig: libConfig,
        patConfig: patConfig
    });
};

/**
 * Factory to create an instance of pattern component.
 * This is a private function.
 * @param {string} pattern - a pattern component name
 * @returns {object} and instance of pattern component
 */
function _factory(pattern) {
    let resultsCB;
    let instance = {
        patSetup : null,                                      // user supplied setup config
        pattern : pattern,                                    // pattern name
        uqid : token,                                         // unique id to distinguish each instance
        resultsEventId : pattern + '-' + token,               // unique results event id for receiving response
        eventId : pattern + '-channel-' + token,              // unique event channel for communicating with instance
        /**
         * Setup pattern component using supplied configuration options,
         * and register for an event which will return results
         *
         * @function setup
         * @param {object} patSetup - a config object for the pattern setup
         * @param {function cb - a callback function which will receive the results
         */
        setup : function (patSetup, cb) {
            resultsCB = cb;
            this.patSetup = Object.assign(patSetup);
            token++;
		        bean.on(this,
                    this.resultsEventId,
                    function (data) {
			                  if (resultsCB) {
                            resultsCB(data);
                        }
			                  bean.off(this, this.resultsEventId);
		                });
        },
        /**
         * Run the component.
         * The component may render a GUI at prespecified selector
         * or it may just be used to offload some computing.
         * @function run
         */
        run : function () {
		        //require.ensure([], () => {
		        //	Button = require('./PatternAlpha/js/containers/button/Button').default;
		        //    }, 'patButton');
            //createComp(pattern, this),
		        render(_createComp(pattern, this), 
                   document.querySelector(this.patSetup.selector)
                  );
        },
        on : function (cb) {
            bean.on(this, this.eventId, cb);
        },
        off : function () {
            bean.off(this, this.eventId);
        },
        fire : function (...msgs) {
            bean.fire(this, this.eventId, msgs )
        },
        unmount : function () {
            ReactDOM.unmountComponentAtNode(document.querySelector(this.patSetup.selector));
        }
    };
    return instance;
};
export default {
    type : typeList,
    setup : function (config) {
        libConfig = config;
    },
    create : function (pattern) {
        return _factory(pattern);
    }
}
