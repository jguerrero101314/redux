import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction, resetAction } from './contador/contador.actions';
import { Action } from "./ngrx-fake/ngrx";

export const reducer = ( state = 10, action:Action ) => {
  switch(action.type){
    case 'INCREMENTAR':
      return state += 1;

    case 'DECREMENTAR':
      return state -= 1;

    case 'MULTIPLICAR':
      return state * action.payload;

    case 'DIVIDIR':
      return state / action.payload;
    
    case 'RESET':
      return state = 0;

      default:
        return state;
  }
}

console.log('incrementadorAction',reducer(10, incrementadorAction));
console.log('decrementadorAction',reducer(10, decrementadorAction));
console.log('multiplicarAction',reducer(10, multiplicarAction));
console.log('dividirAction',reducer(10, dividirAction));
console.log('resetAction',reducer(10, resetAction));
