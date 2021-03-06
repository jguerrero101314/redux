import { createAction, props } from '@ngrx/store';

export const limpiarTodos = createAction('[TODO] Limpiar Todos');

export const add = createAction('[TODO] add Todo', props<{ texto: string }>());

export const toggle = createAction(
  '[TODO] Toogle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] editar Todo',
  props<{ id: number; texto: string }>()
);

export const eliminar = createAction(
  '[TODO] eliminar Todo',
  props<{ id: number }>()
);

export const toogleAll = createAction(
  '[TODO] selecionarAll Todo',
  props<{ completado: boolean }>()
);
