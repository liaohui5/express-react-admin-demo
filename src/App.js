import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/login' component={Login}/>
      </BrowserRouter>
    );
  }
}


export default App;
