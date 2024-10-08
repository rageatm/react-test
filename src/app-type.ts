export interface StoryType {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
  objectID: number;
}

export interface InputWithLabelType {
  id: string;
  value: string;
  type?: string;
  onInputChange: any;
  isFocused: boolean;
  children: any;
}

export interface ListType {
  list: Array<StoryType>;
  onRemoveItem: Function;
}

export interface ItemType {
  item: StoryType;
  onRemoveItem: Function;
}

export type StorageStateReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export type StoryReducer = (
  state: any,
  action: any
) => { data: StoryType[]; isLoading: boolean; isError: boolean };
