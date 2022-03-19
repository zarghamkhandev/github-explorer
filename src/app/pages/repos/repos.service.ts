import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { PageInfo, Repo } from '@types';

@Injectable({ providedIn: 'root' })
export class ReposService {
  constructor(private reposGQL: reposGQL) {}

  getAll(): Observable<{
    repos: Repo[];
    pageInfo: PageInfo;
  }> {
    return this.reposGQL.fetch({ after: null }).pipe(
      map((res) => {
        const { nodes: repos, pageInfo } = res?.data?.search;

        return {
          repos,
          pageInfo,
        };
      })
    );
  }
}
