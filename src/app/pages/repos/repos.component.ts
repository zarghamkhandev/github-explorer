import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { RepoActions } from '../../state/actions';
import { GlobalState } from '../../state/reducers';
import { reposSelectors } from '../../state/selectors';

@Component({
  selector: 'ngx-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposComponent implements OnInit {
  error$ = this.store.select(reposSelectors.error);
  repos$ = this.store.select(reposSelectors.repos);
  pageInfo$ = this.store.select(reposSelectors.pageInfo);
  loading$ = this.store.select(reposSelectors.loading);
  constructor(
    private store: Store<GlobalState>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.store.dispatch(RepoActions.loadAll({ cursor: null, direction: 1 }));
  }

  next(endCursor: string | null) {
    if (!endCursor) return;

    this.store.dispatch(
      RepoActions.loadAll({ cursor: endCursor, direction: 1 })
    );
  }

  prev(startCursor: string | null) {
    if (!startCursor) return;

    this.store.dispatch(
      RepoActions.loadAll({ cursor: startCursor, direction: -1 })
    );
  }
}
