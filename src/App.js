import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import IndexComponent from "./components/IndexComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index/" component={IndexComponent}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
