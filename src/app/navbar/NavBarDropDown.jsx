import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import SearchBar from './SearchBar'

import logo from '../../assets/images/logo.svg'
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

export default class NavBarDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      isLogin: false,
      modal: false,
      search: false,
      darkToogle: false,
      language: 'English',
      location: 'UK'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderNavBarLogin(){
    return(
      <div>
        <Navbar  className="navbar-custom  fixed-top" color="faded" light>
            
            <Nav className="in-navbar-custom" navbar>
              <NavItem onClick={(e) => this.setState({search: true})}>
                <img className="custom-icon" src={search} />
              </NavItem>
            </Nav>
          
          <NavbarBrand to="/" tag={RRNavLink} className="mx-auto in-navbar-custom">
            <img className="custom-logo2"  src={crownlogo} />{' '}
            <img className="custom-logo" src={logo} />
          </NavbarBrand>



            <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            
            <DropdownToggle nav>
            <NavbarToggler style={{padding: '1px', border: 'none'}} />
            </DropdownToggle>

            <DropdownMenu right>
              <DropdownItem header>
               
              <div className="">
                <Avatar />
              </div>
              
              </DropdownItem>

              <DropdownItem >
                <NavLink to="/feed" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={heart} /> Feed
                </NavLink>   
              </DropdownItem>

              <DropdownItem >
                <NavLink to="/live" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={live} /> Live
                </NavLink>   
              </DropdownItem>

              <DropdownItem >
                <NavLink to="/trend" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={trend} /> Trend
                </NavLink>   
              </DropdownItem>

              <DropdownItem divider />

              <DropdownItem >
                <NavLink to="/channel" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={channel} /> My Channel
                </NavLink>   
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/community" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={community} /> Community
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/envelope" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={envelope} /> Messages
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/upload" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={upload} /> Upload
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/stream" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={stream} /> Stream
                </NavLink>
              </DropdownItem>

              <DropdownItem divider />


              <DropdownItem>
                <NavLink onClick={(e) => this.setState({darkToogle: !this.state.darkToogle})}>
                    <img className="custom-icon" src={dark} /> Dark mode: {this.state.darkToogle ? 'On' : 'Off'}
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/settings" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={settings} /> Settings
                </NavLink>
              </DropdownItem>  

              <DropdownItem>
                <NavLink to="/upload" className="router-link" tag={RRNavLink}>
                  Language: {this.state.language}
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/stream" className="router-link" tag={RRNavLink}>
                  Location: {this.state.location}
                </NavLink>
              </DropdownItem>


              <DropdownItem divider />

              <DropdownItem>
                <NavLink onClick={(e) => this.props.onLogout()}>
                    <img className="custom-icon" src={login} /> Logout
                </NavLink>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

        </Navbar>
      </div>
    )
  }

  renderSearch(){
    return(
      <div>
        <Navbar  className="navbar-guest-custom  fixed-top" color="faded" light>
          <Nav className="in-navbar-custom" navbar>
              <NavItem>
              <NavLink onClick={(e) => this.setState({search: false})}>
                <Media>
                    <img className="custom-icon" src={login} />
                </Media>
              </NavLink>
              </NavItem>
          </Nav>
          
          <SearchBar />

        </Navbar>
      </div>
    );
  }

  render() {
    return (
      <div >
        {this.state.search ? this.renderSearch() : this.renderNavBarLogin()}
      </div>
    );
  }
}

const Avatar = (props) => {
    const size = {
        height: '68px',
        weight: '68px',
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
                <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/9064066?v=4&amp;s=460"} style={size} alt="user avatar" />
            </div>
            <div className="col-sm-8 text-right">
                <h5>Login Logan</h5>
                <h6 style={pad}>someemail@email.com</h6>
            </div>
        </div>
    )
}