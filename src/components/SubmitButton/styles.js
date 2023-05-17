import styled from 'styled-components';

export const ButtonLogin = styled.button`
  background: #00d8ff;
  border-radius: 5px;
  color: #fff;
  display: block;
  height: 40px;
  margin-top: 45px;
  text-align: center;
  width: 100%;

  &[disabled] {
    opacity: 0.3;
  }
`;
