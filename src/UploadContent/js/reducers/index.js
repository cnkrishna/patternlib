import { combineReducers } from 'redux'
import fileUpload from './fileUpload'
import {reducer as formReducer} from 'redux-form';
import CheckJobStatusReducers from './CheckJobStatusReducers';
import assets from './assets';
import { routerReducer } from 'react-router-redux'
import TreePaneReducers from './TreePaneReducer';

const rootMetaData = combineReducers({
	form: formReducer,
	routing: routerReducer,
	CheckJobStatusReducers,
    assets,
	fileUpload,
	TreePaneReducers
});

export default rootMetaData
