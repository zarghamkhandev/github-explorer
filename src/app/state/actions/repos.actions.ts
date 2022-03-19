import { createAction, props } from '@ngrx/store';
import { PageInfo, Repo } from '@types';

export const loadAll = createAction('[Repos API] Load all repos');

export const setError = createAction(
  '[Repos API] Set error',
  props<{ error: string }>()
);

export const setAll = createAction(
  '[Repos Page] Set all repos',
  props<{ repos: Repo[] }>()
);

export const setPageInfoAndCount = createAction(
  '[Repos Page] Set page info and page count',
  props<{ pageInfo: PageInfo; pageCount: number }>()
);
