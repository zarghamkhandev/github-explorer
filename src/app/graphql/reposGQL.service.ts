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
    before: string | null;
    first: number | null;
    last: number | null;
  }
> {
  override document = gql`
    query GetRepos($after: String, $before: String, $first: Int, $last: Int) {
      search(
        query: "stars:>1 is:public"
        type: REPOSITORY
        first: $first
        after: $after
        last: $last
        before: $before
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
