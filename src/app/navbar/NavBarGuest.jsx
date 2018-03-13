import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import Login from '../Login'

import SearchBar from './SearchBar'

import logo from '../../assets/images/logo2.png'
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

import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBarDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.modalToggle = this.modalToggle.bind(this)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.closeSearch = this.closeSearch.bind(this)

    this.state = {
      dropdownOpen: false,
      isLogin: false,
      modal: false,
      search: false
    };
  }

  handleFilterTextChange(e){
    // e.preventDefault()
     this.props.onFilterTextChange(e)
 }

  modalToggle(){
      this.setState({modal: !this.state.modal})
  }

  renderNavBarGuest(){
    return(
      <div>
        <Navbar  className="navbar-guest-custom  fixed-top" color="faded" light>
        <Nav className="mx-auto">
            <Nav className="in-navbar-custom " onClick={(e) => {this.setState({search: true});
                                                                console.log("asfsdf")}} navbar>
              <NavItem>
                <img className="custom-icon search-icon" src={search} />
              </NavItem>
            </Nav>

            <NavbarBrand    to="/" tag={RRNavLink} className="in-navbar-custom margin-logo">

                        {/* <img className="custom-logo2"  src={crownlogo} />{' '} */}
                        <img className="custom-logo" src={logo} />

            </NavbarBrand>

            <Nav className="in-navbar-custom" navbar>
              <NavItem>
              <NavLink onClick={this.modalToggle}>
                <Media>
                    <img className="custom-icon search-icon login-icon" src={login} />
                </Media>
              </NavLink>
              </NavItem>
            </Nav>
            </Nav> 
            {this.state.modal ? <Login onLogin={(e) => this.props.onLogin()}/> : null}
        
        </Navbar>  
    
      </div>
    )
  }

  closeSearch(e){
    console.log("someAction " + window.event.clientX + ' : ' + window.event.clientY);
    if(window.event.clientY <= 48){
        console.log("< 48");
        return;
    }else{
      this.setState({search: false})
    }
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
                     onClickSearch={this.closeSearch}/>/>

        </Navbar>
      </div>
    );
  }

  render() {
    return (
      <div >
        {this.state.search ? this.renderSearch() :  this.renderNavBarGuest()}
      </div>
    );
  }
}