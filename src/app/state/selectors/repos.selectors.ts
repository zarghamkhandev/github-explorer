import { Dictionary } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { GlobalState } from '../reducers';
import * as fromRepos from '../reducers/repos.reducer';

export const selectReposState = (state: GlobalState) => state.repos;

export const error = createSelector(selectReposState, (state) => state.error);

export const repos = createSelector(selectReposState, fromRepos.selectAllRepos);

export const pageInfo = createSelector(
  selectReposState,
  ({ pageInfo }) => pageInfo
);

export const entities = createSelector(
  selectReposState,
  fromRepos.selectRepoEntities
);

export const selectRepo = (id: string) =>
  createSelector(entities, (entities) => entities[id]);
