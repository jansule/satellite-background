import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import MainView from './components/containers/MainView/MainView';


class App extends Component {
  render() {
    const imgPath="";
    return (
      <div>
        <MuiThemeProvider layout="column">
          <MainView />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
