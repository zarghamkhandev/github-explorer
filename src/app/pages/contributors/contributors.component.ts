import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ContributorsStore } from './contributors.store';

@Component({
  selector: 'ngx-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContributorsStore],
})
export class ContributorsComponent implements OnInit {
  repoNameAndOwner$ = this.route.queryParams.pipe(
    map((params) => params['repoNameAndOwner'])
  );

  loading$ = this.cstore.loading$;
  error$ = this.cstore.error$;
  contributors$ = this.cstore.contributors$;
  selectedContributor$ = this.cstore.selectedContributor$;

  constructor(
    private route: ActivatedRoute,
    private cstore: ContributorsStore
  ) {}

  ngOnInit(): void {
    this.cstore.getContributors(this.repoNameAndOwner$);
  }
}
