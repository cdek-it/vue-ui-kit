export type Value = string | number;

export type Item = {
  value: Value;
  title: string;
};

export type ItemsUnion = Item[] | string[];
