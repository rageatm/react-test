export interface SearchType {
  search: string;
  onSearch: any;
}

export interface ListType {
  list: Array<ItemType>;
}

export interface ItemType {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
  objectId: number;
}

export type StorageStateReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];
