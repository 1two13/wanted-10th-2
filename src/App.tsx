import React from 'react';
import styled from 'styled-components';

import './App.css';
import Title from '@components/Title';
import SearchBar from '@components/SearchBar';

function App() {
  return (
    <div className="App">
      <Main>
        <Title />
        <SearchBar />
      </Main>
    </div>
  );
}

export default App;

const Main = styled.div`
  display: block;
  margin: '0 auto';
`;
