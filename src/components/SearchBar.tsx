import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { EXPIRATION_TIME_IN_MS } from 'src/static/constants';
import searchApi from '@api/searchApi';
import { SearchBarDivProps, SuggestedListState, CacheState } from '@type/types';
import SearchSvg from './SearchSvg';
import SuggestedList from './SuggestedList';

function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestedList, setSuggestedList] = useState<SuggestedListState>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expireTime, setExpireTime] = useState(0);
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

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length === 0) setSuggestedList([]);
  };

  if (expireTime > 0 && Date.now() >= expireTime) {
    localStorage.clear();
  }

  useEffect(() => {
    const fetchApi = async () => {
      if (inputValue === '') return;

      const suggestedList = localStorage.getItem(inputValue);
      if (suggestedList) {
        setSuggestedList(JSON.parse(suggestedList));
      } else {
        try {
          const response = await searchApi(inputValue);
          setSuggestedList([...response]);
          localStorage.setItem(inputValue, JSON.stringify(response));
          setExpireTime(Date.now() + EXPIRATION_TIME_IN_MS);
        } catch (e) {
          console.log(e);
        } finally {
          console.info('calling api');
        }
      }
    };

    fetchApi();
  }, [inputValue]);

  const keyboardHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (suggestedList.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setSelectedIndex(selectedIndex + 1);
          if (selectedIndex >= suggestedList.length - 1) setSelectedIndex(0);
          break;
        case 'ArrowUp':
          setSelectedIndex(selectedIndex - 1);
          if (selectedIndex <= 0) setSelectedIndex(0);
          break;
        case 'Escape': // esc 눌렀을때,
          setSelectedIndex(0);
          break;
      }
    }
  };

  return (
    <div>
      <Div isClicked={isClicked}>
        <Form>
          <div>
            <SearchSvg />
          </div>
          <Input
            placeholder="질환명을 입력해 주세요."
            ref={inputRef}
            value={inputValue}
            onClick={onClickInput}
            onChange={onChangeInput}
            onKeyDown={keyboardHandler}
          />
        </Form>
        <Svg>
          <SearchSvg />
        </Svg>
      </Div>
      {isClicked ? <SuggestedList suggestedList={suggestedList} selectedIndex={selectedIndex} /> : ''}
    </div>
  );
}

export default SearchBar;

const Div = styled.div<SearchBarDivProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 37%;
  height: 70px;
  margin: 0 auto;
  margin-bottom: 0.5%;
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
