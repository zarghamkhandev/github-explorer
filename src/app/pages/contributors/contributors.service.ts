import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RestContributor } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContributorsService {
  constructor(private http: HttpClient) {}

  getContributors(repoId: string): Observable<RestContributor[]> {
    return this.http.get<RestContributor[]>(
      `${environment.endpoint}/${repoId}/contributors`
    );
  }
}
