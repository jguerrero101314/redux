import { createStore, Store } from "redux";
import { incrementadorAction } from './contador/contador.actions';
import { contadorreducer } from './reducer';

const store: Store = createStore(contadorreducer);
store.subscribe( () => {
  console.log('Subs', store.getState());
})

store.dispatch(incrementadorAction);