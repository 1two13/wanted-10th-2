import React from 'react';

import { Div, SuggestedItem } from '@styles/SuggestedListStyles';
import { NONE_SUGGESTED_LIST } from 'src/static/constants';
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
              <div>{NONE_SUGGESTED_LIST}</div>
            </SuggestedItem>
          </div>
        </Div>
      )}
    </div>
  );
}

export default SuggestedList;
