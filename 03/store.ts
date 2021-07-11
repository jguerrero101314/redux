import { incrementadorAction, multiplicarAction } from './contador/contador.actions';
import { Action, Reducer } from './ngrx-fake/ngrx';
import { contadorreducer } from './reducer';
class Store<T> {

  constructor( private readonly reducer:Reducer<T>, private  state: T ) {}

  getState() {
    return this.state;
  }

  dispatch(action:Action){
    this.state = this.reducer(this.state, action)
  }
}

const store = new Store(contadorreducer, 10);
console.log(store.getState());
store.dispatch(incrementadorAction);
console.log(store.getState());

store.dispatch(multiplicarAction);
console.log(store.getState());