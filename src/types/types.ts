export type SearchBarDivProps = {
  isClicked: boolean;
};

export type SuggestedListState = Array<Object>;
export type ElementType = Record<string, any>;

export type SuggestedListProps = {
  suggestedList: SuggestedListState;
  selectedIndex: number;
};
