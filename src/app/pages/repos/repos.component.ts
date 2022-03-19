import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { RepoActions } from '../../state/actions';
import { GlobalState } from '../../state/reducers';

@Component({
  selector: 'ngx-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  constructor(private reposGQL: reposGQL, private store: Store<GlobalState>) {}

  ngOnInit(): void {
    this.store.dispatch(RepoActions.loadAll());
    this.reposGQL
      .fetch()
      .pipe(
        map((res) => res?.data?.search?.edges),
        map((edges) => edges.map((edge) => edge.node))
      )
      .subscribe((res) => {});
  }
}
