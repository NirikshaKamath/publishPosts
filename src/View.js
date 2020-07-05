import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './View/Homepage/HomePage';;


class View extends Component {
    render() {
        return (
            <div className="body">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default View;