import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ReposService } from '../../pages/repos/repos.service';
import { RepoActions } from '../actions';

@Injectable()
export class RepoEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepoActions.loadAll),
      mergeMap(() =>
        this.reposService.getAll().pipe(
          tap((val) => {
            console.log(val);
          }),
          map((repos) => RepoActions.setAll({ repos })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private reposService: ReposService) {}
}
