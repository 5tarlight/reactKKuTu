import React from 'react'
import styled from 'styled-components'

const Holder = styled.h3`
  width: 200px;
  text-align: center;
  text-shadow: 0px 0px 4px #333;
  font-weight: bold;
  color: white;
  font-size: 1rem;
`

const LogoWrapper = styled.div`
  margin-left: 4.75rem;
`

const TitleLogo = () => {
  return (
    <LogoWrapper>
      <Holder>글자로 놀자! 끄투 온라인</Holder>
      <img style={{marginTop: '-1rem'}} src='/img/short_logo.png' alt='KKUTU' />
    </LogoWrapper>
  )
}

export default TitleLogo