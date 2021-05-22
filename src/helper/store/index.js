import { createStore } from 'redux';
import RootReducer from "../reducer/root-index";

const RootStore = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default RootStore;
