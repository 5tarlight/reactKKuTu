import React from 'react'
import styled from 'styled-components'

const Bluettin = styled.div`
  width: 100%;
  background-color: white;
  height: 35rem;
  overflow: auto;
  padding: 1rem;
`

const BulettinBox = () => {
  return (
    <Bluettin>
      <h1>글자로 놀자! 끄투</h1>
      <h3>현재 개발이 진행중입니다.</h3>
      <h4>정상적인 플레이는 불가능 할 수 있습니다.</h4>
    </Bluettin>
  )
}

export default BulettinBox