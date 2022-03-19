import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { reposGQL } from '../../graphql/reposGQL.service';
import { Repo } from '../../types';

@Injectable({ providedIn: 'root' })
export class ReposService {
  constructor(private reposGQL: reposGQL) {}

  getAll(): Observable<Repo[]> {
    return this.reposGQL.fetch().pipe(
      map((res) => res?.data?.search?.edges),
      map((edges) => edges.map((edge) => edge.node))
    );
  }
}
