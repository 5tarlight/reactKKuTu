import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RightHeadferItemWrapper = styled.span`
  float: right;
  margin: 0rem 1rem 0rem 1rem;
  color: white;
`

const LabelWrapper = styled.div`
  color: white;
  text-align: center;
  font-size: 1.5rem;
`

const RightHeaderItem = ({ href, children }) => {
  return (
    <RightHeadferItemWrapper>
      <Link to={href}>
        <LabelWrapper>{children}</LabelWrapper>
      </Link>
    </RightHeadferItemWrapper>
  )
}

export default RightHeaderItem