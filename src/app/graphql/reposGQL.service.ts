import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { RepoQuery } from '@types';

@Injectable({
  providedIn: 'root',
})
export class reposGQL extends Query<RepoQuery, { after: string | null }> {
  override document = gql`
    query GetRepos($after: String) {
      search(
        query: "stars:>1 is:public"
        type: REPOSITORY
        first: 10
        after: $after
      ) {
        pageInfo {
          startCursor
          hasPreviousPage
          hasNextPage
          endCursor
        }
        repositoryCount
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
