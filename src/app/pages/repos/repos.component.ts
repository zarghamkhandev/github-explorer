import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
@Component({
  selector: 'ngx-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  constructor(private reposGQL: reposGQL) {}

  ngOnInit(): void {
    this.reposGQL
      .fetch()
      .pipe(
        map((res) => res?.data?.search?.edges),
        map((edges) => edges.map((edge) => edge.node))
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
