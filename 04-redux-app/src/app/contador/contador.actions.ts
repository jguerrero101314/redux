import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');
export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{ numero: number }>()
);
export const dividir = createAction(
  '[Contador] Dividir',
  props<{ numero: number }>()
);
