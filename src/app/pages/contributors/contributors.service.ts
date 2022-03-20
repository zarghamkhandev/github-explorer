import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Contributor } from '@types';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContributorsService {
  constructor(private http: HttpClient) {}

  getContributors(repoId: string): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(
      `${environment.endpoint}/${repoId}/contributors`
    );
  }
}
