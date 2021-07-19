import { Action, createReducer, on } from '@ngrx/store';
import {
  decrement,
  dividir,
  increment,
  multiplicar,
  reset,
} from './contador.actions';
export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => initialState)
  // on(reset, (state, { numero }) => (state = numero))
);

export function contadorReducer(state, action: Action) {
  return _counterReducer(state, action);
}

// export const contadorReducer = (state: number = 10, action: Action) => {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//     case decrement.type:
//       return state - 1;

//     default:
//       return state;
//   }
// };
