import React from 'react'
import Home from '../containers/Home'
import Navbar from '../containers/Navbar'
import Routes from '../components/Routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
    
    <MuiThemeProvider>
        <div>
            <Navbar />
            <Routes />
        </div>
    </MuiThemeProvider>
)

export default App