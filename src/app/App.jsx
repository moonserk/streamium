import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import {grey50} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar'
import HomePage from './HomePage'
import Channel from './Channel'
import NavBar from './NavBar'
import NavBarDropDown from './NavBarDropDown'

const muiTheme = getMuiTheme({
    appBar: {
      height: 55,
      color: grey50
    }
  });

const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <NavBarDropDown />
                <br />
                <Main />
            </div>
        </MuiThemeProvider>
    )
}

const Header = () => (
    <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/channel' component={Channel} />
        </Switch>
    </main>
)

export default App;