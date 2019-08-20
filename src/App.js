import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Portal, Login } from './page'

function App() {
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={Portal} />
      <Route exact path={"/login"} component={Login} />
    </BrowserRouter>
  );
}

export default App