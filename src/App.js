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
        
        <div className="container_div">
          <div className="right_div">
            <div className="news_item_div">
              <p className="news_title">
                Davis Tournament
              </p>
              <p className="news_caption">
                Nov 12, 2017
              </p>

              <p className="score_font">3 - 4</p>

              <hr />

              <div>
                <img src={require("./images/play_highlights.png")} />
              </div>
            </div>

            <div className="news_item_div">
              <p className="news_title">
                Cal Classic Tournament
              </p>
              <p className="news_caption">
                Oct 24, 2017
              </p>

              <p className="score_font">2nd place</p>

              <hr />

              <div>
                <img src={require("./images/play_highlights.png")} />
              </div>
            </div>
          </div>

          <div className="content_div">
            <div className="slideshow_div">
              <div id="fadeshow1"></div>
            </div>

            <div className="news_div">

            </div>
          </div>
        </div>
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