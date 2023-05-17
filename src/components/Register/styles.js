import styled from 'styled-components';
import { Link } from '@reach/router';

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  display: block;
  margin: 40px 0;
  padding: 8px 4px;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 2px solid #00d8ff;
  }
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
  width: 100%;
  color: #001f2d;
`;

export const RegisterContainer = styled.div`
  padding: 10px 50px 20px;
  position: relative;
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  align-items: baseline;
`;
export const LinkText = styled.p`
  margin-right: 10px;
  color: #001f2d;
`;
export const LinkRegister = styled(Link)`
  text-align: center;
  color: #00d8ff;
  text-decoration: none;
  font-weight: 600;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;

export const LoaderContainer = styled.div`
  background-color: rgb(255 255 255 / 61%);
  height: 100%;
  left: 0;
  padding-top: 60px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
`;
