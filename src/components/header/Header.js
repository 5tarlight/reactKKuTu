import React from 'react'
import styled from 'styled-components'
import RightHeaderItem from './RightHeaderItem';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 3.75rem;
  color: white;
  background-color: darkblue;
  line-height: 3.75rem;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <RightHeaderItem href={'/login'}>로그인</RightHeaderItem>
    </HeaderWrapper>
  )
}

export default Header