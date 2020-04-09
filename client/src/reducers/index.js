import { combineReducers } from 'redux'

import products from './products-reducer';
import companies from './companies-reducer';

export default combineReducers({ products, companies });