import React from 'react';
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';   


import logo from '../assets/images/logo.svg'
import community from '../assets/images/community-l.svg'
import channel from  '../assets/images/webM-my-channel.svg'
import upload from '../assets/images/upload-btn.svg'
import stream from '../assets/images/stream-icon.svg'
import envelope from '../assets/images/envelope.svg'
import heart from '../assets/images/heart.svg'
import live from '../assets/images/live.svg'
import trend from '../assets/images/trend.svg'
import menu from '../assets/images/menu-mobileHamb.svg'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(){
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar
            title={<Link to="/" className="router-link"><IconButton><img className="custom-logo" src={logo} /></IconButton></Link>}
            iconElementLeft={<IconButton><img className="custom-icon" src={menu} /></IconButton>}
            onLeftIconButtonClick={this.handleToggle}
            zDepth={0}
            
        >
            <IconButton>{<img src={live} />}</IconButton>
            <IconButton>{<img src={heart} />}</IconButton>
            <IconButton>{<img src={trend} />}</IconButton>
        </AppBar>
        
        <Drawer open={this.state.open}>
          <AppBar 
            title={<Link to="/" className="router-link" onClick={this.handleToggle}>Streamium</Link>}
            iconElementLeft={<IconButton><img className="custom-icon" src={menu} /></IconButton>}
            onLeftIconButtonClick={this.handleToggle} 
          />
          
          <MenuItem onClick={this.handleToggle} leftIcon={<img src={channel} />}><Link to="/channel" className="router-link">My Channel</Link></MenuItem>
          <MenuItem leftIcon={<img src={community} />}>Community</MenuItem>
          <MenuItem leftIcon={<img src={envelope} />}>Messages</MenuItem>
          <MenuItem leftIcon={<img src={upload} />}>Upload</MenuItem>
          <MenuItem leftIcon={<img src={stream} />}>Stream</MenuItem>
        </Drawer>
      </div>
    );
  }
}