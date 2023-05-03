import React from 'react';
import styled from 'styled-components';

import SuggestedItem from './SuggestedItem';

function SuggestedList() {
  return (
    <Div>
      <div>
        <SuggestedItem />
        <SuggestedItem />
      </div>
    </Div>
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
