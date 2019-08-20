import React from 'react'
import { Link } from "react-router-dom";

const Portal = () => (
  <div>
    <h1>Portal</h1>
    <Link to={'/login'}>로그인하기</Link>
  </div>
)

export default Portal