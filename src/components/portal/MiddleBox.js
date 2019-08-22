import React from 'react'
import styled from 'styled-components'
import { TitleLogo } from '../'

const MiddleBoxWrapper = styled.div`
  margin-left: 28.5625rem;
  width: 63.125rem;
  margin-top: 3.125rem;
`

const MiddleBox = () => {
  return (
    <MiddleBoxWrapper>
      <TitleLogo />
    </MiddleBoxWrapper>
  )
}

export default MiddleBox