/**
 * Created by xiaohe on 2018/5/7.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './src/containers/Router/Router.js';
import {Provider} from 'react-redux'

import store from './src/Redux/Store/index';

import Mock from './src/Mock/index';

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
    , document.getElementById('main')
)