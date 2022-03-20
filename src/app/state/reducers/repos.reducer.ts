import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Pagination, Repo } from '@types';
import { RepoActions } from '../actions';

export interface State extends EntityState<Repo> {
  loading: boolean;
  error: null | string;

  pagination: null | Pagination;
}

export const adapter: EntityAdapter<Repo> = createEntityAdapter<Repo>({
  selectId: (repo: Repo) => repo.cursor as string,
});

const initialState = adapter.getInitialState({
  error: null,
  loading: true,
  pagination: null,
});
export const reducer = createReducer<State>(
  initialState,
  on(RepoActions.setAll, (state, { repos }) => {
    return adapter.setAll(repos, state);
  }),
  on(RepoActions.addMany, (state, { repos }) => {
    return adapter.addMany(repos, state);
  }),
  on(RepoActions.setLoading, (state, { loading }) => {
    return { ...state, loading };
  }),
  on(RepoActions.setError, (state, { error }) => {
    return { ...state, error };
  }),
  on(RepoActions.setPagination, (state, { pagination }) => {
    return { ...state, pagination };
  }),
  on(RepoActions.paginate, (state, { currCursor, direction }) => {
    if (!state.pagination) return { ...state };
    const nextCursor = currCursor + 6 * direction;
    // cursor should not be less than 0
    if (nextCursor < 0) return { ...state };
    const remainingItems = state.ids.slice(nextCursor, -1).length + 1;
    return {
      ...state,
      pagination: { ...state.pagination, cursor: nextCursor, remainingItems },
    };
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
