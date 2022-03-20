import { createAction, props } from '@ngrx/store';
import { Pagination, Repo } from '@types';

export const loadAll = createAction('[Repos API] Load all repos');

export const loadMore = createAction(
  '[Repos API] Load more repos',
  props<{ pagination: Pagination; repoCursor: string }>()
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

export const addMany = createAction(
  '[Repos Page] Add many repos',
  props<{ repos: Repo[] }>()
);

export const setPagination = createAction(
  '[Repos Page] Set pagination',
  props<{ pagination: Pagination }>()
);

export const paginate = createAction(
  '[Repos Page] Paginate',
  props<{ currCursor: number; direction: 1 | -1 }>()
);
