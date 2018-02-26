import React from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

import search from '../../assets/images/searchMobile.svg'

export default class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.preventDefault()
        this.setState({value: e.target.value})
    }


    render(){
        return(
                <div className="mx-auto">
                    <input className="" style={{border: 'none', minHeight: "42px", width: '500px'}} onChange={this.handleChange} placeholder="search" value={this.state.value}/>
                    <button className="" style={{border: 'none', minHeight: "42px"}} >
                        <img  style={{height: '20px', width: '20px'}} src={search} />
                    </button>
                </div>
        )
    }
}