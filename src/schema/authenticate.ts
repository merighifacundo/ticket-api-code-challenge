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

export interface AuthenticateRequest {
  username: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
}

export interface AuthenticateResponse {
  jwtToken: Maybe<Scalars['String']>;
}

export interface Mutation {
  authenticate: Maybe<AuthenticateResponse>;
}


export interface MutationAuthenticateArgs {
  data: Maybe<AuthenticateRequest>;
}
