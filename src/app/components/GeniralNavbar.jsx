import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import MenuDropDown from './MenuDropDown'
import SlideMenu from './SlideMenu'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

    import Drawer from 'material-ui/Drawer';
    import MenuItem from 'material-ui/MenuItem';

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

import { connect } from 'react-redux'
import { toggleMenu, toggleSearch } from '../actions/actions'

const GeniralNavbar = ( {menuToggle, dispatch} ) => (
    <div>
        <Navbar  className="navbar-custom navbar-background fixed-top" color="faded" light>
            {/* <Nav className="mx-auto"> */}
                {/* <Nav className="in-navbar-custom " onClick={() => dispatch(toggleSearch())} >
                    <NavItem>
                        <img className="custom-icon search-icon" src={search} />
                    </NavItem>
                </Nav> */}
                <NavbarBrand to="/" tag={RRNavLink} className="in-navbar-custom col-auto">
                    <img className="custom-icon-crown" src={logoCrown} />
                </NavbarBrand>

                <NavbarBrand className="in-navbar-custom mx-auto">
                    <img className="custom-logo" src={logo} />
                </NavbarBrand>
                
                {/* <MyDropdownMenu /> */}
            {/* </Nav> */}
            
            <MenuDropDown className="col-auto float-left" menuToggle={menuToggle} toggle={() => dispatch(toggleMenu())} />
            
        </Navbar>
        
        {window.screen.availWidth <= 800 ? <SlideMenu className="hide-slidemenu" dispatch={dispatch} menuToggle={menuToggle}/> : null }
    </div>
)

const mapStateToProps = state => (
    {
        menuToggle: state.navbarReducer.menuToggle
    }
)

export default connect(mapStateToProps)(GeniralNavbar)