import React from 'react'
import App from './components/App'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import store from './store'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import FileUploadContainer from './container/FileUploadContainer'
import CheckJobStatus from './container/CheckJobStatusContainer';
import UploadInProgressContainer from './container/UploadProgressContainer';
import AssetsContainer from './container/AssetsContainer';

import { syncHistoryWithStore} from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

render(

   <Provider store={store}>
     <div>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='CheckJobStatus' component={CheckJobStatus}/>
          <Route path='UploadInProgress' component={UploadInProgressContainer}/>
          <Route path='assets' component={AssetsContainer}/>
        </Route>
      	
        </Router>
    </div>
  </Provider>,

 document.getElementById('comp')
)