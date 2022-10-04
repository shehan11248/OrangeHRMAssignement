import {combineReducers} from 'redux';
import LoadingReducer from '../LoadingReducer';

export const reducer = combineReducers({
  loading: LoadingReducer,
});
