import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import Main from './components/Main.jsx';
import NoMatch from './components/NoMatch.jsx';
import fishApp from './reducers';
import firebase from 'firebase';
import style from './assets/scss/file.scss';

var config = {
    apiKey: "AIzaSyBnRf4e_zPBFpnJgnfEp80CDOrevquUbTU",
    authDomain: "plus65exam-f8327.firebaseapp.com",
    databaseURL: "https://plus65exam-f8327.firebaseio.com",
    storageBucket: "plus65exam-f8327.appspot.com"
};

firebase.initializeApp(config);

let store = createStore(fishApp);

render(
    <Provider store={store}>
        <Router history={browserHistory} path="/" component={App}>
            <Route path="/" component={App} />
            <Route path="/store/:storename" component={Main} />
            <Route path="*" component={NoMatch}/>
        </Router>
    </Provider>,
    document.getElementById('app')
)
