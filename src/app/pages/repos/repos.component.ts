import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { RepoActions } from '../../state/actions';
import { GlobalState } from '../../state/reducers';
import { reposSelectors } from '../../state/selectors';

@Component({
  selector: 'ngx-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  error$ = this.store.select(reposSelectors.error);
  repos$ = this.store.select(reposSelectors.repos);

  constructor(private store: Store<GlobalState>) {}

  ngOnInit(): void {
    this.store.dispatch(RepoActions.loadAll());
  }
}
