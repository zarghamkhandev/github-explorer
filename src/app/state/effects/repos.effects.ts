import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ReposService } from '../../pages/repos/repos.service';
import { RepoActions } from '../actions';

@Injectable()
export class RepoEffects {
  loadRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepoActions.loadAll),
      mergeMap(() =>
        this.reposService.getAll().pipe(
          mergeMap(({ repos, pageInfo }) => {
            return [
              RepoActions.setAll({ repos }),
              RepoActions.setPageInfo({ pageInfo }),
            ];
          }),
          catchError(() => {
            return of(RepoActions.setError({ error: 'Unable to load repos' }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private reposService: ReposService) {}
}
