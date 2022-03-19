import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { PageInfo, Repo } from '@types';

@Injectable({ providedIn: 'root' })
export class ReposService {
  constructor(private reposGQL: reposGQL) {}

  getAll(
    cursor: string | null,
    direction: 1 | -1
  ): Observable<{
    repos: Repo[];
    pageInfo: PageInfo;
  }> {
    const after = direction === 1 ? cursor : null;
    const first = direction === 1 ? 6 : null;
    const before = direction === -1 ? cursor : null;
    const last = direction === -1 ? 6 : null;

    return this.reposGQL.fetch({ after, before, first, last }).pipe(
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
