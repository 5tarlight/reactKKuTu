import React from 'react'
import styled from 'styled-components'

const PlayButtonWrapper = styled.div`
  width: 20rem;
  height: 6rem;
  background-color: #deaf56;
  padding: 1rem;
  border-radius: 0.75rem;
`

const PlayButton = ({ children }) => {
  return (
    <PlayButtonWrapper>
      {children}
    </PlayButtonWrapper>
  )
}

export default PlayButton