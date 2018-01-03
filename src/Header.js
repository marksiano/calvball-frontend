import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Actions from './actions/actionTypes.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Header extends Component {
  render() {
    var currentLocation = this.props.location.pathname;
    // alert(currentLocation);
    return (
      <header>
          <div className="title_div">
            <div className="bear_div">
              <img className="bear_logo_img" src={require("./images/bear_logo.png")} />
            </div>
            <div className="menu_div">
              

              <nav>
                <ul style={{"padding-left": "0px"}}>
                  <li className={currentLocation == '/' ? "current" : "not_current"}><a className="nav_anchor" href="/">HOME</a></li>
                  <li className={currentLocation == '/news/' ? "current" : "not_current"}><a className="nav_anchor" href="/news/">NEWS</a></li>
                  <li><a className="nav_anchor" href="/pictures/">PICTURES</a></li>
                  <li><a className="nav_anchor" href="/roster/men">MEN'S ROSTER</a></li>
                  <li><a className="nav_anchor" href="/roster/women">WOMEN'S ROSTER</a></li>
                  <li><a className="nav_anchor" href="/schedules/men">MEN'S SCHEDULE</a></li>
                  <li><a className="nav_anchor" href="/schedules/women">WOMEN'S SCHEDULE</a></li>
                </ul>
                <div onClick={() => this.menuClicked()} className="handle">Navigation</div>
              </nav>
            </div>
          </div>
        </header>
      );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));