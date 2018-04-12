import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

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

const MenuDropDown = ( {menuToggle, toggle} ) => {
    let input;
    return(
    <div>
        <Nav>
        <Dropdown  isOpen={menuToggle} toggle={toggle}>
        
            <DropdownToggle className="custom-toggler"  nav>
                <NavbarToggler className="navbar-toggler-icon" style={{padding: '0px', border: 'none'}} />
            </DropdownToggle>
            {window.screen.availWidth > 800  ?
            <DropdownMenu className="shadow-menu" style={{marginTop: '50px', paddingTop: '0px'}}>
                
                {/* <div className="channel-name row"> */}
                    {/* <div className="row" style={{width: '100%', height: "100%", margin: '0'}}>
                        <div className="col-auto mr-auto">
                            {/* <Avatar  /> */}
                        {/* </div>
                    </div> */}
                    {/* <div className="row channel-name-upper">
                    </div> */} 
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
                {/* </div> */}
                {/* <DropdownItem className="navbar-custom "> */}
                <NavItem className="navbar-custom" style={{paddingLeft: '40px', paddingRight: '5px',}}>
                    {/* <div className="input-search navbar-custom search-border"> */}
                    <img className="custom-icon" src={search} style={iconMarginRight} /><input type="text" ref={node => input = node}  autoFocus={true} className="input-search text-size" placeholder="Search"/>
                    {/* </div> */}
                </NavItem>
                {/* </DropdownItem> */}
                
                {/* <DropdownItem  className="divider-margin-bottom bg-color-menu" divider /> */}
                <div  className="navbar-background">
                <DropdownItem className="bg-hover">
                    <NavLink to="/feed" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={home} style={iconMarginRight} /> Home
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="bg-hover">
                    <NavLink to="/feed" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={heart} style={iconMarginRight} /> Tuning In
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="bg-hover ">
                    <NavLink to="/live" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={live} style={iconMarginRight} /> Live
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="bg-hover ">
                    <NavLink to="/trend" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={trend} style={iconMarginRight} /> Trending
                    </NavLink>   
                </DropdownItem>

                </div>

                <DropdownItem className="divider-margin-top bg-color-menu"  divider />

                <DropdownItem  className="bg-hover bg-color-menu">
                    <NavLink to="/channel" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={channel} style={iconMarginRight}/> My Channel
                    </NavLink>   
                </DropdownItem>

                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink to="/envelope" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={envelope} style={iconMarginRight}/> Messages
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink to="/community" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={community} style={iconMarginRight}/> Community
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink to="/upload" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={upload} style={iconMarginRight}/> Upload
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink to="/stream" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={stream} style={iconMarginRight}/> Stream
                    </NavLink>
                </DropdownItem>

                <DropdownItem   divider />


                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink>
                        <img className="custom-icon" src={dark} style={iconMarginRight}/> Dark mode: {'Off'}
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink to="/settings" className="router-link" tag={RRNavLink}>
                        <img className="custom-icon" src={settings} style={iconMarginRight}/> Settings
                    </NavLink>
                </DropdownItem>  

                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink to="/upload" className="router-link" tag={RRNavLink}>
                    Language: {'England'}
                    </NavLink>
                </DropdownItem>

                <DropdownItem className="bg-hover bg-color-menu">
                    <NavLink to="/stream" className="router-link" tag={RRNavLink}>
                    Location: {'UK'}
                    </NavLink>
                </DropdownItem>


                <DropdownItem divider />

                <DropdownItem className="bg-hover bg-color-menu">
                <NavLink >
                    <img className="custom-icon" src={login} style={iconMarginRight}/> Logout
                </NavLink>
                </DropdownItem>
                </DropdownMenu> : null}
        </Dropdown>
        </Nav>
    </div>
)
}

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

export default MenuDropDown