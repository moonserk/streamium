import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Watch from '../routes/Watch'

const Routes = () => (
    <Switch>
        <Route exact path='/'  render={() => <Home/>} />
        {/* <Route path='/feed' render={() => <Feed/>} />
        <Route path='/channel' component={Channel} />
        <Route path='/upload' component={Upload} /> */}
        <Route path='/watch' component={Watch} />
        <Route path='/:id' component={Watch} />
    </Switch>
)

export default Routes