export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** The supported couriers. */
export enum Courier {
  Anteraja = 'ANTERAJA',
  Dpex = 'DPEX',
  Idx = 'IDX',
  Jne = 'JNE',
  Jnt = 'JNT',
  Jx = 'JX',
  Lionparcel = 'LIONPARCEL',
  Pos = 'POS',
  Rex = 'REX',
  Rpx = 'RPX',
  Sap = 'SAP',
  Shipper = 'SHIPPER',
  Sicepat = 'SICEPAT',
  Tiki = 'TIKI',
  Wahana = 'WAHANA'
}

export type Detail = {
  __typename?: 'Detail';
  destination?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  receiver?: Maybe<Scalars['String']>;
  shipper?: Maybe<Scalars['String']>;
};

export type History = {
  __typename?: 'History';
  date?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
};

export type LatestStatus = {
  __typename?: 'LatestStatus';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  tracking?: Maybe<Track>;
};


export type QueryTrackingArgs = {
  awb: Scalars['String'];
  courier?: Maybe<Courier>;
};

export type Summary = {
  __typename?: 'Summary';
  amount?: Maybe<Scalars['String']>;
  awb?: Maybe<Scalars['String']>;
  courier?: Maybe<Courier>;
  date?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

export type Track = {
  __typename?: 'Track';
  detail?: Maybe<Detail>;
  history?: Maybe<Array<History>>;
  latestStatus?: Maybe<LatestStatus>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Summary>;
};

export type TrackQueryVariables = Exact<{
  awb: Scalars['String'];
  courier?: Maybe<Courier>;
}>;


export type TrackQuery = { __typename?: 'Query', tracking?: Maybe<{ __typename?: 'Track', status?: Maybe<string>, summary?: Maybe<{ __typename?: 'Summary', awb?: Maybe<string>, courier?: Maybe<Courier>, service?: Maybe<string>, date?: Maybe<string>, desc?: Maybe<string>, amount?: Maybe<string>, weight?: Maybe<string> }>, history?: Maybe<Array<{ __typename?: 'History', date?: Maybe<string>, desc?: Maybe<string>, location?: Maybe<string> }>> }> };
