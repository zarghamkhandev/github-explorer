import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { Contributor } from '@types';
import { ContributorsService } from './contributors.service';

interface State {
  contributors: Contributor[] | null;
  error: string | null;
  loading: boolean;
}

@Injectable()
export class ContributorsStore extends ComponentStore<State> {
  contributors$ = this.select((state) => state.contributors);
  error$ = this.select((state) => state.error);
  loading$ = this.select((state) => state.loading);

  setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));
  setError = this.updater((state, error: string) => ({
    ...state,
    error,
  }));
  setContributors = this.updater((state, contributors: Contributor[]) => {
    if (!contributors) return { ...state };
    return { ...state, contributors };
  });

  constructor(private contributorsService: ContributorsService) {
    super({ contributors: null, loading: false, error: null });
  }

  // an effect to api and fill store with outpus.
  readonly getContributors = this.effect(
    (repoNameAndOwner$: Observable<string>) => {
      this.setLoading(true);
      return repoNameAndOwner$.pipe(
        switchMap((id) =>
          this.contributorsService.getContributors(id).pipe(
            tap({
              next: (contributors) => {
                console.log(contributors);
                this.setContributors(contributors);
              },
              error: (e) => {
                this.setError('Unable to load contributors'),
                  this.setLoading(false);
              },
              complete: () => this.setLoading(false),
            }),
            // we store error in our store and comunicate to user, so no need to bubble up.
            catchError(() => EMPTY)
          )
        )
      );
    }
  );
}
