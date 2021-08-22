import { createAction, props } from '@ngrx/store';

export const add = createAction('[TODO] add Todo', props<{ texto: string }>());

export const toggle = createAction(
  '[TODO] Toogle Todo',
  props<{ id: number }>()
);
