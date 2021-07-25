import { createAction, props } from '@ngrx/store';

export const add = createAction('[TODO] add todo', props<{ texto: string }>());
