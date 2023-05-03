import React from 'react';
import styled from 'styled-components';

import SearchSvg from './SearchSvg';

function SuggestedItem() {
  return (
    <Div>
      <div>
        <SearchSvg />
      </div>
      SuggestedItem
    </Div>
  );
}

export default SuggestedItem;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;
  & > div {
    margin-right: 13px;
    color: #a7afb7;
  }
`;
