import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Robar escudo'),
  new Todo('comer'),
  new Todo('hola'),
];

const _todoReducer = createReducer(
  initialState,
  on(add, (state, { texto }) => [...state, new Todo(texto)])
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
