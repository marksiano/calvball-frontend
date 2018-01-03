import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import News from './News';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {reducer as responsive, mediaQueryTracker} from 'redux-mediaquery'

const store = configureStore();

const unlisten = mediaQueryTracker({
  navCollapsedToRow: "screen and (max-width: 1030px)",
  navCollapsedToMenu: "screen and (max-width: 813px)",
  innerWidth: true,
  innerHeight: true,
}, store.dispatch)

ReactDOM.render(
  <Provider store={store}>
	  <Router>
	      <div>
	        <Route exact path='/' component={App} />
          <Route exact path='/news' component={News} />
	      </div>
	  </Router>
  </Provider>,
  document.getElementById('root')
);