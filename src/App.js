import React from 'react';
import { HomeDefault, Login, SignUp, Gateway } from './pages';
import { AupProvider } from './providers/aup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';

const App = () => {
    return (
        <AupProvider>
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
                    <Route path="*">
                        <Gateway />
                    </Route>
                </Switch>
            </Router>
        </AupProvider>
    )
}

export default App;