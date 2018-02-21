import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import Login from '../Login'


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

import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBarDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.modalToggle = this.modalToggle.bind(this)

    this.state = {
      dropdownOpen: false,
      isLogin: false,
      modal: false
    };
  }

  modalToggle(){
      this.setState({modal: !this.state.modal})
  }

  renderNavBarGuest(){
    return(
      <div>
        <Navbar  className="navbar-guest-custom  fixed-top" color="faded" light>
          <NavbarBrand to="/" tag={RRNavLink} className="mr-auto in-navbar-custom"><img className="custom-logo2"  src={crownlogo} />  <img className="custom-logo" src={logo} /></NavbarBrand>

            <Nav className="mr-5 in-navbar-custom hide-icon" navbar>
              <NavItem>
              <NavLink onClick={this.modalToggle}>
                <Media>
                    <img className="custom-icon" src={login} />
                </Media>
              </NavLink>
              </NavItem>
            </Nav>
            {this.state.modal ? <Login onLogin={(e) => this.props.onLogin()}/> : null}
        </Navbar>   
      </div>
    )
  }

render() {
    return (
      <div >
        {this.renderNavBarGuest()}
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