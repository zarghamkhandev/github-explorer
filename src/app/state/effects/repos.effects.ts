import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, catchError, tap, finalize } from 'rxjs/operators';
import { ReposService } from '../../pages/repos/repos.service';
import { Pagination } from '@types';
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
      mergeMap(() =>
        this.reposService.getAll(null).pipe(
          mergeMap(({ repos }) => {
            const pagination: Pagination = {
              cursor: 0,
              remainingItems: repos.length - 6,
              direction: 1,
            };
            return [
              RepoActions.setAll({ repos }),
              RepoActions.setPagination({ pagination }),
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

  loadMoreRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepoActions.loadMore),
      tap(() => {
        this.store.dispatch(RepoActions.setLoading({ loading: true }));
      }),
      mergeMap(({ pagination: old, repoCursor }) =>
        this.reposService.getAll(repoCursor).pipe(
          mergeMap(({ repos }) => {
            const pagination: Pagination = {
              remainingItems: old.remainingItems + repos.length - 6,
              cursor: old.cursor + 6,
              direction: 1,
            };
            return [
              RepoActions.addMany({ repos }),
              RepoActions.setPagination({ pagination }),
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
