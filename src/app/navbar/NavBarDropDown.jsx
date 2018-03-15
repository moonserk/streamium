import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import SearchBar from './SearchBar'

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

export default class NavBarDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.closeSearch = this.closeSearch.bind(this)

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

  closeSearch(e){
    const evt = e || window.event;
      if(evt.clientY <= 48){
          //console.log("< 48");
          return;
      }else{
        this.setState({search: false})
      }
  }

  handleFilterTextChange(e){
    // e.preventDefault()
     this.props.onFilterTextChange(e)
 }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderNavBarLogin(){
    const iconMarginRight = {
      marginRight: '20px'
    }

    return(
      <div>
        <Navbar  className="navbar-custom  fixed-top" color="faded" light>
            
          <Nav className="mx-auto">
            <Nav className="in-navbar-custom ">
              <NavItem onClick={(e) => this.setState({search: true})}>
                <img className="custom-icon search-icon" src={search} />
              </NavItem>
            </Nav>
          
          <NavbarBrand to="/" tag={RRNavLink} className="in-navbar-custom margin-logo">
            {/* <img className="custom-logo2"  src={crownlogo} />{' '} */}
            <img className="custom-logo" src={logo} />
          </NavbarBrand>



            <Dropdown  className="" isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            
            <DropdownToggle  nav>
            <NavbarToggler style={{padding: '1px', border: 'none'}} />
            </DropdownToggle>

            <DropdownMenu style={{marginTop: '0px', paddingTop: '18px'}} >
              <DropdownItem header>
               
              <div className="">
                <Avatar />
              </div>
              
              </DropdownItem>

              <DropdownItem divider />

              <DropdownItem >
                <NavLink to="/feed" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={heart} style={iconMarginRight} /> Tuning In
                </NavLink>   
              </DropdownItem>

              <DropdownItem >
                <NavLink to="/live" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={live} style={iconMarginRight} /> Live
                </NavLink>   
              </DropdownItem>

              <DropdownItem >
                <NavLink to="/trend" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={trend} style={iconMarginRight} /> Trending
                </NavLink>   
              </DropdownItem>

              <DropdownItem divider />

              <DropdownItem >
                <NavLink to="/channel" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={channel} style={iconMarginRight}/> My Channel
                </NavLink>   
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/envelope" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={envelope} style={iconMarginRight}/> Messages
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/community" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={community} style={iconMarginRight}/> Community
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/upload" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={upload} style={iconMarginRight}/> Upload
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/stream" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={stream} style={iconMarginRight}/> Stream
                </NavLink>
              </DropdownItem>

              <DropdownItem divider />


              <DropdownItem>
                <NavLink onClick={(e) => this.setState({darkToogle: !this.state.darkToogle})}>
                    <img className="custom-icon" src={dark} style={iconMarginRight}/> Dark mode: {this.state.darkToogle ? 'On' : 'Off'}
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink to="/settings" className="router-link" tag={RRNavLink}>
                    <img className="custom-icon" src={settings} style={iconMarginRight}/> Settings
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
                    <img className="custom-icon" src={login} style={iconMarginRight}/> Logout
                </NavLink>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

          </Nav>

        </Navbar>
      </div>
    )
  }

  renderSearch(){
    return(
      <div>
        <Navbar  className="navbar-guest-custom  fixed-top" color="faded" light>
          {/* <Nav className="in-navbar-custom" navbar>
              <NavItem>
              <NavLink onClick={(e) => this.setState({search: false})}>
                <Media>
                    <img className="custom-icon" src={login} />
                </Media>
              </NavLink>
              </NavItem>
          </Nav> */}
          
          <SearchBar filterText={this.props.filterText}
                     onFilterTextChange={this.handleFilterTextChange}
                     onCloseSearch={this.closeSearch}/>

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
                <img className="rounded-circle" src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} style={size} alt="user avatar" />
            </div>
            <div className="col-sm-8 text-right">
                <h5>Login Logan</h5>
                <h6 style={pad}>Balance: $8.94</h6>
            </div>
        </div>
    )
}