export type RootQuery = {
  count: number;
  results: RootQueryResult[];
};

type RootQueryResult = {
  name: string;
  url: string;
};
