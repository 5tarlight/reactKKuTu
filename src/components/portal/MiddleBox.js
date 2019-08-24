import React from 'react'
import styled from 'styled-components'
import { TitleLogo, BulettinBox, JoinButton, PlayButton, TopBox } from '../'

const MiddleBoxWrapper = styled.div`
  margin-left: 28.5625rem;
  width: 63.125rem;
  margin-top: 3.125rem;
`

const MiddleBox = () => {
  return (
    <MiddleBoxWrapper>
      <TitleLogo />

      <TopBox>
        <PlayButton>
          <JoinButton />
        </PlayButton>
      </TopBox>

      <BulettinBox />
    </MiddleBoxWrapper>
  )
}

export default MiddleBox