import React from 'react'
import styled from 'styled-components'
import RightHeaderItem from './RightHeaderItem';
import LeftHeaderItem from './LeftHeaderItem';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 1.875rem;
  color: white;
  background-color: #7CC4F8;
  line-height: 1.675rem;
  box-shadow: 0px 2px 2px #111111;
  z-index: 5;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <LeftHeaderItem href={'/'}>홈</LeftHeaderItem>
      <RightHeaderItem href={'/login'}>로그인</RightHeaderItem>
    </HeaderWrapper>
  )
}

export default Header