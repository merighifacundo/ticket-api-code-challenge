export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface GetClaimRequest {
  id: Maybe<Scalars['String']>;
}

export interface ClaimResponse {
  claimId: Maybe<Scalars['String']>;
  ticketId: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
}

export interface CreateClaimRequest {
  ticketId: Maybe<Scalars['String']>;
}

export interface UpdateClaimRequest {
  claimId: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
}

export interface Query {
  getClaim: Maybe<ClaimResponse>;
}


export interface QueryGetClaimArgs {
  data: Maybe<GetClaimRequest>;
}

export interface Mutation {
  createClaim: Maybe<ClaimResponse>;
  updateClaim: Maybe<ClaimResponse>;
}


export interface MutationCreateClaimArgs {
  data: Maybe<CreateClaimRequest>;
}


export interface MutationUpdateClaimArgs {
  data: Maybe<UpdateClaimRequest>;
}
