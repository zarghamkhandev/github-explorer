import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PageInfo, Repo } from '@types';
import { RepoActions } from '../actions';

export interface State extends EntityState<Repo> {
  error: null | string;
  pageCount: null | number;
  pageInfo: null | PageInfo;
}

export const adapter: EntityAdapter<Repo> = createEntityAdapter<Repo>();

export const reducer = createReducer<State>(
  adapter.getInitialState({ error: null, pageCount: null, pageInfo: null }),
  on(RepoActions.setAll, (state, { repos }) => {
    return adapter.setAll(repos, state);
  }),
  on(RepoActions.setError, (state, { error }) => {
    return { ...state, error };
  }),
  on(RepoActions.setPageInfoAndCount, (state, { pageCount, pageInfo }) => {
    return { ...state, pageCount, pageInfo };
  })
);

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of repo ids
export const selectRepoIds = selectIds;

// select the dictionary of repo entities
export const selectRepoEntities = selectEntities;

// select the array of repos
export const selectAllRepos = selectAll;

// select the total repo count
export const selectReposTotal = selectTotal;
