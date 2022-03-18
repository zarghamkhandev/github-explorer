import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Repo } from '../../types';

export const load = createAction(
  '[Repos] Load all repos',
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
