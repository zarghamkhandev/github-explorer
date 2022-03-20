import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { ContributorQuery } from '@types';

@Injectable({
  providedIn: 'root',
})
export class contributorsGQL extends Query<
  ContributorQuery,
  {
    ids: string[];
  }
> {
  override document = gql`
    query GetContributors($ids: [ID!] = "") {
      nodes(ids: $ids) {
        ... on User {
          id
          email
          name
          avatarUrl
          bio
          company
          followers {
            totalCount
          }
          isHireable
          location
          twitterUsername
          url
          websiteUrl
        }
      }
    }
  `;
}
