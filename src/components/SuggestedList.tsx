import React from 'react';

import { Div, SuggestedItem } from '@styles/SuggestedListStyles';
import { SuggestedListProps, ElementType } from '../types/types';
import SearchSvg from './SearchSvg';

function SuggestedList({ suggestedList, selectedIndex }: SuggestedListProps) {
  return (
    <div>
      {suggestedList.length > 0 ? (
        <Div>
          <div>
            {suggestedList.map((el: ElementType, index: number) => (
              <SuggestedItem key={el.id} isFocus={index === selectedIndex}>
                <div>
                  <SearchSvg />
                </div>
                {el.name}
              </SuggestedItem>
            ))}
          </div>
        </Div>
      ) : (
        <Div>
          <div>
            <SuggestedItem>
              <div>검색어 없음</div>
            </SuggestedItem>
          </div>
        </Div>
      )}
    </div>
  );
}

export default SuggestedList;
