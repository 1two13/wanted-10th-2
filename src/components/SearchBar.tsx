import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import SearchSvg from './SearchSvg';

function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (inputRef.current && !(inputRef.current as any).contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const onClickInput = () => setIsClicked(true);

  return (
    <Div isClicked={isClicked}>
      <Form>
        <div>
          <SearchSvg />
        </div>
        <Input placeholder="질환명을 입력해 주세요." ref={inputRef} onClick={onClickInput} />
      </Form>
      <Svg>
        <SearchSvg />
      </Svg>
    </Div>
  );
}

export default SearchBar;

interface DivProps {
  isClicked: boolean;
}

const Div = styled.div<DivProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 37%;
  height: 70px;
  margin: 0 auto;
  border-radius: 42px;
  border: 2px solid ${props => (props.isClicked ? '#007be9' : '#ffffff')};
  background-color: #ffffff;
`;

const Form = styled.form`
  width: 85%;
  height: 100%;
  color: #a7afb7;
  display: flex;
  align-items: center;
  & > div {
    margin-left: 24px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 80%;
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
