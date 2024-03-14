export type Value = string | number;

export type Item = {
  value: Value;
  title: string;
  disabled?: boolean;
};

export type ItemsUnion = Item[] | string[] | any[];

export type FetchFunction = (query: string) => Promise<ItemsUnion>;

export type SearchFn = (
  query: string,
  items?: ItemsUnion
) => Promise<ItemsUnion>;

export type GetValueFn = (item: any) => Value;
export type GetTitleFn = (item: any) => string;
