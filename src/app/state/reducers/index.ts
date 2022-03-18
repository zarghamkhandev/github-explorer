import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRepos from './repos.reducer';

export interface GlobalState {
  repos: fromRepos.State;
}

export const reducers: ActionReducerMap<GlobalState> = {
  repos: fromRepos.reducer,
};

export const metaReducers: MetaReducer<GlobalState>[] = [];
