import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
          <Route path='/login' component={Login}/>
          <Route path='/' render={props => <Main {...props}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
