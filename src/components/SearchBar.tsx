import React, { useState, useRef, useEffect } from 'react';

import { EXPIRATION_TIME_IN_MS, DEBOUNCE_TIME_IN_MS } from 'src/static/constants';
import searchApi from '@api/searchApi';
import { SuggestedListState } from '@type/types';
import { Div, Form, Input, Svg } from '@styles/SearchBarStyles';
import useDebounce from '@hooks/useDebounce';
import SearchSvg from './SearchSvg';
import SuggestedList from './SuggestedList';

function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestedList, setSuggestedList] = useState<SuggestedListState>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expireTime, setExpireTime] = useState(0);
  const inputRef = useRef(null);
  const debouncedValue = useDebounce(inputValue, DEBOUNCE_TIME_IN_MS);

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
      setExpireTime(Date.now() + EXPIRATION_TIME_IN_MS);

      const suggestedList = localStorage.getItem(inputValue);
      if (suggestedList) {
        setSuggestedList(JSON.parse(suggestedList));
      } else {
        try {
          const response = await searchApi(inputValue);
          setSuggestedList([...response]);
          localStorage.setItem(inputValue, JSON.stringify(response));
        } catch (e) {
          console.log(e);
        }
      }
      console.info('calling api');
    };

    if (!debouncedValue) {
      setSuggestedList([]);
    } else fetchApi();
  }, [inputValue, debouncedValue]);

  const keyboardHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (suggestedList.length > 0 && e.nativeEvent.isComposing === false) {
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
          {isClicked ? (
            ''
          ) : (
            <div>
              <SearchSvg />
            </div>
          )}
          <Input
            placeholder={isClicked ? '' : '질환명을 입력해 주세요.'}
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
