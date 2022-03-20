import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { ContributorsStore } from './contributors.store';

@Component({
  selector: 'ngx-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContributorsStore],
})
export class ContributorsComponent implements OnInit {
  repoId$ = this.route.queryParams.pipe(map((params) => params['repoId']));

  loading$ = this.cstore.loading$;
  error$ = this.cstore.error$;
  contributors$ = this.cstore.contributors$;

  constructor(
    private route: ActivatedRoute,
    private cstore: ContributorsStore
  ) {}

  ngOnInit(): void {
    this.cstore.getContributors(this.repoId$);
  }
}
