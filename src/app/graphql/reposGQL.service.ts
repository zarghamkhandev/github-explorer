import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { RepoQuery } from '@types';

@Injectable({
  providedIn: 'root',
})
export class reposGQL extends Query<
  RepoQuery,
  {
    after: string | null;
  }
> {
  override document = gql`
    query GetRepos($after: String) {
      search(
        query: "stars:>1 is:public"
        type: REPOSITORY
        after: $after
        first: 20
      ) {
        edges {
          cursor
          node {
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
    }
  `;
}
