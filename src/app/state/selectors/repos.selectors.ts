import { Dictionary } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { GlobalState } from '../reducers';
import * as fromRepos from '../reducers/repos.reducer';
import { Repo } from '@types';

export const selectReposState = (state: GlobalState) => state.repos;

export const error = createSelector(selectReposState, (state) => state.error);

export const loading = createSelector(
  selectReposState,
  (state) => state.loading
);

export const pagination = createSelector(
  selectReposState,
  (state) => state.pagination
);

export const repos = createSelector(selectReposState, fromRepos.selectAllRepos);

export const ids = createSelector(selectReposState, fromRepos.selectRepoIds);

export const paginatedRepos = createSelector(
  repos,
  pagination,
  (repos, pagination) => {
    if (!pagination) return [];
    const { cursor } = pagination;
    const res = repos.slice(cursor, cursor + 6);
    return res;
  }
);

export const entities = createSelector(
  selectReposState,
  fromRepos.selectRepoEntities
);

export const selectRepo = (id: string) =>
  createSelector(entities, (entities) => entities[id]);

function isDefined(repo: Repo | undefined): repo is Repo {
  return repo !== undefined;
}
