import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import route from './route'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        {route.routeList.map((r, i) => {
                            return (<Route key={i} path={r.path} component={r.component}></Route>)
                        })}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}