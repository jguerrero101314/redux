import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction, resetAction } from './contador/contador.actions';
import { Action } from "./ngrx-fake/ngrx";

export const contadorreducer = ( state = 10, action:Action ) => {
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

console.log('incrementadorAction',contadorreducer(10, incrementadorAction));
console.log('decrementadorAction',contadorreducer(10, decrementadorAction));
console.log('multiplicarAction',contadorreducer(10, multiplicarAction));
console.log('dividirAction',contadorreducer(10, dividirAction));
console.log('resetAction',contadorreducer(10, resetAction));
