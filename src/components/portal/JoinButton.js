import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  float: left;
  width: 19.3rem;
  height: 5rem;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: 0.5rem 0.3125rem;
  display: block;
  box-sizing: inherit;
  font-family: inherit;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  transition-duration: 0.3s;
  color: white;
  font-weight: bolder;
  font-family: NBGothic;

  &:hover {
    background-color: #b19258;
    font-size: 28px;
    cursor: pointer;
    transition-duration: 0.2s;
  }
`

const onHandle = (item) => {
  item.preventDefault()
}

const JoinButton = () => {
  return (
    <ButtonWrapper onClick={onHandle}>게임 시작</ButtonWrapper>
  )
}

export default JoinButton