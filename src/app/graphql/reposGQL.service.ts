import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { RepoQuery } from '../types';

@Injectable({
  providedIn: 'root',
})
export class reposGQL extends Query<RepoQuery> {
  override document = gql`
    {
      search(query: "is:public", type: REPOSITORY, first: 10) {
        nodes {
          ... on Repository {
            id
            name
            description
            stargazerCount
            languages(orderBy: { field: SIZE, direction: DESC }, first: 1) {
              nodes {
                name
                color
              }
            }
            licenseInfo {
              spdxId
            }
            pushedAt
            updatedAt
            url
          }
        }
      }
    }
  `;
}
