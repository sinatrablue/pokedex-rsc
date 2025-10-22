export type RootQuery = {
  count: number;
  results: RootQueryResult[];
};

export type RootQueryResult = {
  name: string;
  url: string;
};
