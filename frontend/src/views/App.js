import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import RegisterPage from './Register Page';
import Main from './MainView';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact
                           path='/'
                           component={Main}/>

                    <Route path='/registerPage'
                           component={RegisterPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
