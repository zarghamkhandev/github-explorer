import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RepoActions } from '../../state/actions';
import { GlobalState } from '../../state/reducers';
import { reposSelectors } from '../../state/selectors';
import { Pagination } from '@types';

@Component({
  selector: 'ngx-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposComponent implements OnInit {
  error$ = this.store.select(reposSelectors.error);
  repos$ = this.store.select(reposSelectors.paginatedRepos);
  pagination$ = this.store.select(reposSelectors.pagination);
  loading$ = this.store.select(reposSelectors.loading);
  constructor(private store: Store<GlobalState>) {}

  ngOnInit(): void {
    this.store.dispatch(RepoActions.loadAll());
  }

  paginate(pagination: Pagination, direction: 1 | -1, repoCursor: string) {
    const { cursor, remainingItems } = pagination;
    if (remainingItems < 12) {
      this.store.dispatch(RepoActions.loadMore({ pagination, repoCursor }));
      return;
    }
    this.store.dispatch(
      RepoActions.paginate({ currCursor: cursor, direction })
    );
  }
}
