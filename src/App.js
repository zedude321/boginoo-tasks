import React from 'react';
import { HomeDefault, Login, SignUp, Gateway, History, ForgotPass, HowItWork } from './pages';
import { AupProvider } from './providers/aup';
import {
    BrowserRouter as Router,
    Switch,
    Route
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
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/forgotpass">
                        <ForgotPass />
                    </Route>
                    <Route path="/howItWork">
                        <HowItWork/>
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