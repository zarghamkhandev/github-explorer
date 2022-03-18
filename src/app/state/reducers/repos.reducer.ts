import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Repo } from '../../types';
import { RepoActions } from '../actions';

export interface State extends EntityState<Repo> {}

export const adapter: EntityAdapter<Repo> = createEntityAdapter<Repo>();

export const reducer = createReducer(
  adapter.getInitialState(),
  on(RepoActions.load, (state, { repos }) => {
    return adapter.addMany(repos, state);
  })
  // on(RepoActions.removeOne, (state, { id }) => {
  //   return adapter.removeOne(id, state);
  // }),
  // on(RepoActions.updateOne, (state, { update }) => {
  //   return adapter.updateOne(update, state);
  // })
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
