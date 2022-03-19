import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { PageInfo, Repo } from '@types';

@Injectable({ providedIn: 'root' })
export class ReposService {
  constructor(private reposGQL: reposGQL) {}

  getAll(): Observable<{
    repos: Repo[];
    pageCount: number;
    pageInfo: PageInfo;
  }> {
    return this.reposGQL.fetch({ after: null }).pipe(
      map((res) => {
        const { nodes: repos, pageInfo, repositoryCount } = res?.data?.search;
        // 1 page has 10 entities, so divide by 10 to get page count
        const pageCount = Math.ceil(repositoryCount / 10);
        return {
          repos,
          pageCount,
          pageInfo,
        };
      })
    );
  }
}
