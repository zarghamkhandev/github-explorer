import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PageInfo, Repo } from '@types';
import { RepoActions } from '../actions';

export interface State extends EntityState<Repo> {
  loading: boolean;
  error: null | string;
  pageInfo: null | PageInfo;
}

export const adapter: EntityAdapter<Repo> = createEntityAdapter<Repo>();

export const reducer = createReducer<State>(
  adapter.getInitialState({ error: null, pageInfo: null, loading: true }),
  on(RepoActions.setAll, (state, { repos }) => {
    return adapter.setAll(repos, state);
  }),
  on(RepoActions.setLoading, (state, { loading }) => {
    return { ...state, loading };
  }),
  on(RepoActions.setError, (state, { error }) => {
    return { ...state, error };
  }),
  on(RepoActions.setPageInfo, (state, { pageInfo }) => {
    return { ...state, pageInfo };
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
