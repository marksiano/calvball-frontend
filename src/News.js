import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Actions from './actions/actionTypes.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {
  render() {
    // var currentLocation = this.props.location.pathname;
    // alert(currentLocation);
    return (
      <div className="App">
        <Header />
      </div>
    );
  }

  menuClicked() {
    this.props.actions.menuClicked();
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);