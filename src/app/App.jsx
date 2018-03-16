import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'

import {grey50} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HomePage from './HomePage'
import Channel from './Channel'
import Home from './routes/Home'
import Feed from './routes/Feed'
import Upload from './routes/Upload'
import Watch from './routes/Watch'

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

const IsAuthNavbarRender = (props) =>{ 
    const handleChange = (e) =>{
        props.onFilterTextChange(e)
    }
      return fakeAuth.isAuthenticated ? (
        <NavBarDropDown onLogout={(e) => props.onLogout()} 
                        filterText={props.filterText}
                        onFilterTextChange={handleChange}/>
      ) : (
        <NavBarGuest onLogin={(e) => props.onLogin()} 
                     filterText={props.filterText}
                     onFilterTextChange={handleChange}/>
      )
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false, 
            filterText: ''
        };
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(filterText){
        this.setState({filterText: filterText})
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
                    <IsAuthNavbarRender onLogin={this.login} 
                                        onLogout={this.logout}
                                        filterText={this.state.filterText}
                                        onFilterTextChange={this.handleFilterTextChange}/>                 
                    <Main filterText={this.state.filterText}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/'  render={() => <Home filterText={props.filterText}/>} />
            <Route path='/feed' render={() => <Feed filterText={props.filterText}/>} />
            <Route path='/channel' component={Channel} />
            <Route path='/upload' component={Upload} />
            <Route path='/watch' component={Watch} />
            <Route path='/watch/:name' component={Watch} />
        </Switch>
    </main>
)

export default App;