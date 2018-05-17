import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component {
  
  render() {

    let buttonStyle = {
      margin: 12,
    };

    let imgStyle = {
      width: 500,
      height: 500,
      "background-color": "grey",
      "margin-top": 12,
    };

    let imgPath = "";

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to satellite-background</h1>
        </header>
        <MuiThemeProvider layout="column">
          <img src={imgPath} alt="satellite-image" style={imgStyle}/>
          <div layout="row">
            <RaisedButton label="Load new Image" style={buttonStyle} />
            <RaisedButton label="Change Background" primary={true} style={buttonStyle} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
