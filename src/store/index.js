import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';
import {getCountries} from '../actions/actions-countries.js';
import {GET_COUNTRIES} from '../actions/actions-countries.js';

const store = createStore(
	reducers,
	DevTools.instrument()
);

store.dispatch(getCountries());

export default store;