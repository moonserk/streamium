import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'

import {grey50} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HomePage from './HomePage'
import Channel from './Channel'
import Home from './routes/Home'
import Feed from './routes/Feed'

import NavBarDropDown from './navbar/NavBarDropDown'
import NavBarGuest from './navbar/NavBarGuest'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

const AuthButton = (props) =>{ 
      return fakeAuth.isAuthenticated ? (
        <NavBarDropDown onLogout={(e) => props.onLogout()}/>
      ) : (
        <NavBarGuest onLogin={(e) => props.onLogin()} />
      )
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLogin: false};
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentWillMount(){
        this.login()
    }

    login(){
        const login = window.localStorage.getItem('rr_login')
        const pass = window.localStorage.getItem('rr_password')
        if (login === 'admin' && pass === 'admin') {
            fakeAuth.authenticate(() => {
                this.setState({ isLogin: true });
            });
        }
    }

    logout(){
        window.localStorage.removeItem('rr_login');
        window.localStorage.removeItem('rr_password');
        fakeAuth.signout(() => {
            this.setState({isLogin: false});
        })
    }
    
    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <AuthButton onLogin={this.login} onLogout={this.logout}/>                 
                    <Main />
                </div>
            </MuiThemeProvider>
        )
    }
}

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/channel' component={Channel} />
            <Route path='/feed' component={Feed} />
        </Switch>
    </main>
)

export default App;