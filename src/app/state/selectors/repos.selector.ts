import { Dictionary } from '@ngrx/entity';
import { createSelector, props } from '@ngrx/store';
import { GlobalState } from '../reducers';
import * as fromRepos from '../reducers/repos.reducer';

export const selectReposState = (state: GlobalState) => state.repos;

export const repos = createSelector(selectReposState, fromRepos.selectAllRepos);

export const entities = createSelector(
  selectReposState,
  fromRepos.selectRepoEntities
);

export const selectRepo = (id: string) =>
  createSelector(entities, (entities) => entities[id]);
