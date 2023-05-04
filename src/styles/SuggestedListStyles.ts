import styled from 'styled-components';

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
  & > div {
    width: 100%;
  }
`;

const SuggestedItem = styled.div<{ isFocus?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: ${props => (props.isFocus ? '2px solid #007be9' : '#fff')};
  & > div {
    margin-right: 13px;
    color: #a7afb7;
  }
`;

export { Div, SuggestedItem };
