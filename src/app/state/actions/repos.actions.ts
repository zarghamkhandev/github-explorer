import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Repo } from '../../types';

export const loadAll = createAction('[Repos API] Load all repos');

export const setError = createAction(
  '[Repos API] Set error',
  props<{ error: string }>()
);

export const setAll = createAction(
  '[Repos Page] Set all repos',
  props<{ repos: Repo[] }>()
);

// export const removeOne = createAction(
//   '[Repos] Remove Repo',
//   props<{ id: string }>()
// );

// export const updateOne = createAction(
//   '[Repos] Update Repo',
//   props<{ update: Update<Repo> }>()
// );
