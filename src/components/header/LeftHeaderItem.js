import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LeftHeadferItemWrapper = styled.span`
  float: Left;
  margin: 0rem 1rem 0rem 1rem;
  color: white;
`

const LabelWrapper = styled.div`
  color: white;
  text-align: center;
  font-size: 1.5rem;
`

const LeftHeaderItem = ({ href, children }) => {
  return (
    <LeftHeadferItemWrapper>
      <Link to={href}>
        <LabelWrapper>{children}</LabelWrapper>
      </Link>
    </LeftHeadferItemWrapper>
  )
}

export default LeftHeaderItem