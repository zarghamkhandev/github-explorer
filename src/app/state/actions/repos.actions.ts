import { createAction, props } from '@ngrx/store';
import { PageInfo, Repo } from '@types';

export const loadAll = createAction(
  '[Repos API] Load all repos',
  props<{ cursor: string | null; direction: 1 | -1 }>()
);

export const setLoading = createAction(
  '[Repos API] Set Loading',
  props<{ loading: boolean }>()
);
export const setError = createAction(
  '[Repos API] Set error',
  props<{ error: string }>()
);

export const setAll = createAction(
  '[Repos Page] Set all repos',
  props<{ repos: Repo[] }>()
);

export const setPageInfo = createAction(
  '[Repos Page] Set page info.',
  props<{ pageInfo: PageInfo }>()
);
