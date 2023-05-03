import React from 'react';
import styled from 'styled-components';
import { FIRST_TITLE, SECOND_TITLE } from 'src/static/constants';

function Title() {
  return (
    <Div>
      <h2>{FIRST_TITLE}</h2>
      <h2>{SECOND_TITLE}</h2>
    </Div>
  );
}

export default Title;

const Div = styled.div`
  margin-bottom: 40px;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;
