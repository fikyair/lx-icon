import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  width: 100%;
	transition: transform .6s;
  svg{
    margin: 36px;
  }
  &:hover{
    background: #F6F7FA;
    border-radius: 5px;
    transform: scale(1.5);
  }
`

export default ({children}) =>
  <IconWrapper>
    { children }
  </IconWrapper>
