import React from 'react';

import { FIRST_TITLE, SECOND_TITLE } from 'src/static/constants';
import Div from '@styles/TitleStyles';

function Title() {
  return (
    <Div>
      <h2>{FIRST_TITLE}</h2>
      <h2>{SECOND_TITLE}</h2>
    </Div>
  );
}

export default Title;
