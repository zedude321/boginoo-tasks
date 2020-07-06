import React from 'react';
import { HomeDefault, Login, SignUp, Shortened } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/shortened">
                    <Shortened />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;