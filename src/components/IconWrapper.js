import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;
	transition: transform .6s;
  padding-bottom: 25px;
  color: #7A8599;
  svg{
    margin: 36px;
  }
  &:hover{
    background: #F6F7FA;
    border-radius: 5px;
    transform: scale(1.3);
  }
`

export default ({children}) =>
  <IconWrapper>
    { children }
  </IconWrapper>
