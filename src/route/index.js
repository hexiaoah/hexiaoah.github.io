import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import { Home } from '../pages/Home'

const Page = ()=>(
    <div>Page</div>
)

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Page" component={Page}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;