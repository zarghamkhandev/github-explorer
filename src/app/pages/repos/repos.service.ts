import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { Repo } from '@types';

@Injectable({ providedIn: 'root' })
export class ReposService {
  constructor(private reposGQL: reposGQL) {}

  getAll(cursor: string | null): Observable<{
    repos: Repo[];
  }> {
    return this.reposGQL.fetch({ after: cursor }).pipe(
      map((res) => {
        const { edges } = res?.data?.search;
        const repos = edges.map((edge) => ({
          ...edge.node,
          cursor: edge.cursor,
        }));

        return {
          repos,
        };
      })
    );
  }
}
