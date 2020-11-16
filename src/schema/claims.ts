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

export interface Claim {
  claimId: Maybe<Scalars['String']>;
  ticketId: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
}

export interface ClaimResponse {
  claim: Maybe<Claim>;
}

export interface CreateClaimRequest {
  ticketId: Maybe<Scalars['String']>;
}

export interface UpdateClaimRequest {
  claimId: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  resolution: Maybe<Scalars['String']>;
}

export interface ClaimsResponse {
  claims: Maybe<Array<Maybe<Claim>>>;
}

export interface Query {
  getClaim: Maybe<ClaimResponse>;
  getClaims: Maybe<ClaimsResponse>;
}

export interface QueryGetClaimArgs {
  data: Maybe<GetClaimRequest>;
}

export interface QueryGetClaimsArgs {
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
