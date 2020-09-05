import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import Astorage from '@react-native-community/async-storage';
import TaskReducer from './Reducers/TaskReducer';

const persistConfig = {
  key: 'root',
  storage: Astorage,
};

const rootReducer = combineReducers({
  tasksController: TaskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistStor = persistStore(store);
export {store, persistStor};
