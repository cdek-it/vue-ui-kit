export type Value = string | number;

export type Item = {
  value: Value;
  title: string;
};

export type ItemsUnion = Item[] | string[];

export type FetchFunction = (query: string) => Promise<ItemsUnion>;

export type SearchFn = (
  query: string,
  items?: ItemsUnion
) => Promise<ItemsUnion>;
