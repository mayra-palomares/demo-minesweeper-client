import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { UserDetail } from './components/user/UserDetail';
import { Game } from './components/game/Game';

export const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/user/:id" component={UserDetail}/>
                    <Route path="/game/:id" component={Game}/>
                </Switch>
            </Router>
        </div>
    )
}
