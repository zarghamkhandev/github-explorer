import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, catchError, tap, finalize } from 'rxjs/operators';
import { ReposService } from '../../pages/repos/repos.service';
import { RepoActions } from '../actions';
import { GlobalState } from '../reducers';

@Injectable()
export class RepoEffects {
  loadRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepoActions.loadAll),
      tap(() => {
        this.store.dispatch(RepoActions.setLoading({ loading: true }));
      }),
      mergeMap(({ cursor, direction }) =>
        this.reposService.getAll(cursor, direction).pipe(
          mergeMap(({ repos, pageInfo }) => {
            return [
              RepoActions.setAll({ repos }),
              RepoActions.setPageInfo({ pageInfo }),
            ];
          }),
          finalize(() => {
            this.store.dispatch(RepoActions.setLoading({ loading: false }));
          }),
          catchError(() => {
            return of(RepoActions.setError({ error: 'Unable to load repos' }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reposService: ReposService,
    private store: Store<GlobalState>
  ) {}
}
