import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add, editar, eliminar, toggle, toogleAll } from './todo.actions';

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
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(eliminar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toogleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
