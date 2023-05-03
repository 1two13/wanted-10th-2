export type SearchBarDivProps = {
  isClicked: boolean;
};

export type SuggestedListState = Array<Object>;
export type ElementType = Record<string, any>;

export type CacheState = {
  data: ElementType;
  expireTime: number | null;
};

export type SuggestedListProps = {
  suggestedList: SuggestedListState;
  selectedIndex: number;
};
