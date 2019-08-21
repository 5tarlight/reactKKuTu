import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LeftHeadferItemWrapper = styled.span`
  float: left;
  width: 5rem;
  color: white;
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
    color: white
  }
`

const LeftHeaderItem = ({ href, children }) => {
  return (
    <LeftHeadferItemWrapper>
      <Link to={href} style={{ textDecoration: 'none' }}>
        <LabelWrapper>{children}</LabelWrapper>
      </Link>
    </LeftHeadferItemWrapper>
  )
}

export default LeftHeaderItem