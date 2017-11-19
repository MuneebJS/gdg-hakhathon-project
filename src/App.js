import React, { Component } from 'react';
import logo from './logo.svg';
import {StyleRoot} from 'radium';
import './App.css';
import store from './store/index';
import {Provider} from 'react-redux';
import Routes from './Router';
import * as firebase from 'firebase';
require('./index.css');

var config = {
  apiKey: "AIzaSyAhcmJ5bBRjDdIV_LmK0WGWBB5x3fUDOI0",
  authDomain: "gdg-hakhathon-stack-in.firebaseapp.com",
  databaseURL: "https://gdg-hakhathon-stack-in.firebaseio.com",
  projectId: "gdg-hakhathon-stack-in",
  storageBucket: "gdg-hakhathon-stack-in.appspot.com",
  messagingSenderId: "347566286164"
};
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <StyleRoot >
        <Routes />
      </StyleRoot>
      </Provider>
    );
  }
}

export default App;
