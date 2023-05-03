import React from 'react';
import styled from 'styled-components';

import SearchSvg from './SearchSvg';

function SuggestedList({ suggestedList, selectedIndex }: any) {
  return (
    <div>
      {suggestedList.length > 0 ? (
        <Div>
          <div>
            {suggestedList.map((el: any, index: number) => (
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

const Div = styled.div`
  display: flex;
  width: 37%;
  min-height: 150px;
  margin: 0 auto;
  padding: 3% 2% 2% 2%;
  border-radius: 20px;
  background-color: #ffffff;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const SuggestedItem = styled.div<{ isFocus?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 15%;
  border-bottom: ${props => (props.isFocus ? '2px solid #007be9' : '#fff')};
  & > div {
    margin-right: 13px;
    color: #a7afb7;
  }
`;
