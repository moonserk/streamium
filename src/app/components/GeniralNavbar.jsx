import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import logo from '../../assets/images/logo3.png'
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
        {/* {console.log(dispatch)} */}
        <Navbar  className="navbar-custom  fixed-top" color="faded" light>
            <Nav className="mx-auto">
                <Nav className="in-navbar-custom " onClick={() => dispatch(toggleSearch())} >
                    <NavItem>
                        <img className="custom-icon search-icon" src={search} />
                    </NavItem>
                </Nav>
                <NavbarBrand to="/" tag={RRNavLink} className="in-navbar-custom margin-logo">
                    <img className="custom-logo" src={logo} />
                </NavbarBrand>
                <Menu menuToggle={menuToggle} toggle={() => dispatch(toggleMenu())} />
            </Nav>
        </Navbar>
    </div>
)

const iconMarginRight = {
    marginRight: '20px'
}

const Menu = ( {menuToggle, toggle} ) => {
    return(
    <div>
        <Nav>
        <Dropdown  isOpen={menuToggle} toggle={toggle}>

            <DropdownToggle  nav>
                <NavbarToggler style={{padding: '1px', border: 'none'}} />
            </DropdownToggle>

            <DropdownMenu style={{marginTop: '0px', paddingTop: '18px'}} >
                <DropdownItem header>
               
                <div className="">
                    <Avatar />
                </div>
              
                </DropdownItem>

                <DropdownItem  className="divider-margin-bottom" divider />

                <DropdownItem className="background-color">
                    <NavLink to="/feed" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={heart} style={iconMarginRight} /> Tuning In
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="background-color">
                    <NavLink to="/live" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={live} style={iconMarginRight} /> Live
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="background-color">
                    <NavLink to="/trend" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={trend} style={iconMarginRight} /> Trending
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="divider-margin-top"  divider />

                <DropdownItem  className="bg-hover">
                    <NavLink to="/channel" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={channel} style={iconMarginRight}/> My Channel
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="bg-hover">
                    <NavLink to="/envelope" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={envelope} style={iconMarginRight}/> Messages
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover">
                    <NavLink to="/community" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={community} style={iconMarginRight}/> Community
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover">
                    <NavLink to="/upload" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={upload} style={iconMarginRight}/> Upload
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover">
                    <NavLink to="/stream" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={stream} style={iconMarginRight}/> Stream
                    </NavLink>
                </DropdownItem>

                <DropdownItem divider />


                <DropdownItem className="bg-hover">
                    <NavLink>
                        <img className="custom-icon" src={dark} style={iconMarginRight}/> Dark mode: {'Off'}
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover">
                    <NavLink to="/settings" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={settings} style={iconMarginRight}/> Settings
                    </NavLink>
                </DropdownItem>  

                <DropdownItem className="bg-hover">
                    <NavLink to="/upload" className="router-link" tag={RRNavLink}>
                    Language: {'England'}
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover">
                    <NavLink to="/stream" className="router-link" tag={RRNavLink}>
                    Location: {'English'}
                    </NavLink>
                </DropdownItem>


                <DropdownItem divider />

                <DropdownItem className="bg-hover">
                <NavLink >
                    <img className="custom-icon" src={login} style={iconMarginRight}/> Logout
                </NavLink>
                </DropdownItem>
                </DropdownMenu>
        </Dropdown>
        </Nav>
    </div>
)
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
                <img className="rounded-circle" src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} style={size} alt="user avatar" />
            </div>
            <div className="col-sm-8 text-right">
                <h5>Login Logan</h5>
                <h6 style={pad}>Balance: $8.94</h6>
            </div>
        </div>
    )
}

const mapStateToProps = state => (
    {
        menuToggle: state.navbarReducer.menuToggle
    }
)

export default connect(mapStateToProps)(GeniralNavbar)