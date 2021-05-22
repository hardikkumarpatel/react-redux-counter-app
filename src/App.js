import './App.css';
import IncrementDecrement from './component/increment-decrement/index';
import RootStore from './helper/store/index';
import { Provider } from 'react-redux';

function App() {
  RootStore.subscribe(() => { console.log("Hello Redux..!", RootStore.getState())} );
  return (
       <Provider store={RootStore}>
         <IncrementDecrement/>
       </Provider>
  );
}

export default App;
