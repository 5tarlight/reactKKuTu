import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RightHeadferItemWrapper = styled.span`
  float: right;
  color: white;
  width: 5rem;
`

const LabelWrapper = styled.div`
  color: black;
  text-align: center;
  font-size: 0.6875rem;
  cursor: pointer;
  transition: color 300ms ease;
  font-family: NBGothic, 돋움;
  padding-top: 0.2rem;

  &:hover {
    color: white;
  }
`

const RightHeaderItem = ({ href, children }) => {
  return (
    <RightHeadferItemWrapper>
      <Link to={href} style={{ textDecoration: 'none' }}>
        <LabelWrapper>{children}</LabelWrapper>
      </Link>
    </RightHeadferItemWrapper>
  )
}

export default RightHeaderItem