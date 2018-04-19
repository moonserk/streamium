import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
  Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
  Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

import home from '../../assets/images/home.svg';
import logo from '../../assets/images/logo3.png'
import logoCrown from '../../assets/images/logo12.png'
import community from '../../assets/images/community-l.svg'
import channel from  '../../assets/images/webM-my-channel.svg'
import upload from '../../assets/images/upload-btn.svg'
import stream from '../../assets/images/stream-icon.svg'
import envelope from '../../assets/images/envelope.svg'
import heart from '../../assets/images/heart.svg'
import live from '../../assets/images/live.svg'
import trend from '../../assets/images/trend.svg'
import menu from '../../assets/images/menu-mobileHamb.svg'
import crownlogo from '../../assets/images/crown.png'
import login from '../../assets/images/log-in.svg'
import search from '../../assets/images/searchMobile.svg'
import dark from '../../assets/images/dark-mode.svg'
import settings from '../../assets/images/settings.svg'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

handleToggle(){
    this.setState({open: !this.state.open});
}
 
handleClose(){
    this.setState({open: false});
}

render() {
    return (
      <div className="drawer-menu">
        <NavbarToggler className="custom-toggler" style={{padding: '0px', border: 'none'}} onClick={this.handleToggle}/>
        
        <Drawer docked={false} width={300} open={this.state.open} 
                onRequestChange={(open) => this.setState({open})} openSecondary={true} containerClassName="drawer-menu">
          <SearchMenu />
          
          <Divider />
          
          <Header />
          <TopMenu onClose={this.handleClose} />
          <BottomMenu onClose={this.handleClose} />
          
          <Divider />
          
          <SettingsMenu onClose={this.handleClose} />
        </Drawer>
      </div>
    );
  }
}

const SettingsMenu = (props) => (
  <div>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={dark} style={iconMarginRight}/> Dark mode: {'Off'}
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={settings} style={iconMarginRight}/> Settings
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      Language: {'England'}
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      Location: {'UK'}
    </MenuItem>
    
    <Divider />
    
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={login} style={iconMarginRight}/> Logout
    </MenuItem>
  </div>
)

const BottomMenu = (props) => (
  <div>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={channel} style={iconMarginRight}/> My Channel
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={envelope} style={iconMarginRight}/> Messages
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={community} style={iconMarginRight}/> Community
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={upload} style={iconMarginRight}/> Upload
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={stream} style={iconMarginRight}/> Stream
    </MenuItem>
  </div>
)

const TopMenu = (props) => (
  <div  className="trend-menu-background">
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={home} style={iconMarginRight} /> Home
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={heart} style={iconMarginRight} /> Tuning In
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={live} style={iconMarginRight} /> Live
    </MenuItem>
    <MenuItem onClick={props.onClose}>
      <img className="custom-icon" src={trend} style={iconMarginRight} /> Trending
    </MenuItem>
  </div>
)

const Header = () => (
  <div>
  <div className="top-panel-menu">
  </div>
  <div className="top-panel-menu">
    <Avatar />
    <div className="triangle-top"></div>
      <div className="row">
          <span className="mr-auto col-auto"></span>
          <span className="col-auto" style={{marginRight: "10px"}}><b>Joey Tribiani</b></span>
      </div>
        {/* <div className="row">
            <span style={{height: "14px"}}></span>
        </div> */}
    <div className="row">
      <span className="mr-auto col-auto"></span>
      <span className="col-auto" style={{marginRight: "10px"}}>Balance: 2000$</span>
    </div>
  </div>
  </div>
)

const SearchMenu = () => (
  // <MenuItem>
  <div style={{marginLeft: '20px', minHeight: '50px'}}>
    <img className="custom-icon" src={search} style={iconMarginRight} /><input type="text" autoFocus={true} className="input-search text-size" placeholder="Search"/>
  </div>
  // </MenuItem>
)

const Avatar = (props) => {
  const size = {
      height: '68px',
      weight: '68px',
      marginTop: '20px'
  };
  const size2 = {
      width: '300px'
  }; 
  const pad = {
      padding: '10px'
  };
  return(
      <div className="row">
          <div className="media col-sm-4" style={size2}>
              <img className="rounded-circle top-avatar" src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} style={size} alt="user avatar" />
          </div>
      </div>
  )
}


const iconMarginRight = {
  marginRight: '20px'
}