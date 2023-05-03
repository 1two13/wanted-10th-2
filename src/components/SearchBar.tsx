import React from 'react';
import styled from 'styled-components';
import SearchSvg from './SearchSvg';

function SearchBar() {
  return (
    <Div>
      <Form>
        <div>
          <SearchSvg />
        </div>
        <Input placeholder="질환명을 입력해 주세요." />
      </Form>
      <Svg>
        <SearchSvg />
      </Svg>
    </Div>
  );
}

export default SearchBar;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 37%;
  height: 70px;
  margin: 0 auto;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
`;

const Form = styled.form`
  width: 85%;
  height: 100%;
  color: #a7afb7;
  display: flex;
  & > div {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  margin-top: 2px;
  margin-left: 12px;
  outline: none;
  border: none;
  &::placeholder {
    color: #a7afb7;
    font-size: 18px;
    font-weight: 100;
  }
`;

const Svg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #007be9;
  color: #ffffff;
`;
