import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import About from './common/about.component.jsx'
import Generator from './generator/generator.component.jsx'
import GeneratorDetail from './generator/generator-detail.component.jsx'
import dataFromBackend from './data'

const data = dataFromBackend;


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Generator} data={data}/>
            {/* Parameter route*/}
            <Route path="/generators" component={Generator} data={data}/>
            <Route path="/generators/:id" component={GeneratorDetail} data={data} />
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
