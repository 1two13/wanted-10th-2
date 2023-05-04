import styled from 'styled-components';
import { SearchBarDivProps } from '@type/types';

const Div = styled.div<SearchBarDivProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
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

export { Div, Form, Input, Svg };
