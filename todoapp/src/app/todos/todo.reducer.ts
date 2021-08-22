import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add, toggle } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Robar escudo'),
  new Todo('comer'),
  new Todo('hola'),
];

const _todoReducer = createReducer(
  initialState,
  on(add, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
