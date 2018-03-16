import React from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

import search from '../../assets/images/searchMobile.svg'

export default class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    componentDidMount(){
        console.log("Search Did Mount");
        // Detects clicks everywhere on the screen
        document.addEventListener('click', (e) => {
            this.props.onCloseSearch(e)
        })
    }

    componentWillUnmount () {
        console.log("Search Will Unmount");
        document.removeEventListener('click', (e) => {this.props.onCloseSearch(e)});
    }

    handleFilterTextChange(e){
       // e.preventDefault()
        this.props.onFilterTextChange(e.target.value)
    }


    render(){
        return(
                <div className="input-search">
                    <input type="text" autoFocus={true} className="input-search text-size" onChange={this.handleFilterTextChange} placeholder="" value={this.props.filterText}/>
                    {/* <button className="" style={{border: 'none', minHeight: "42px"}} >
                        <img  style={{height: '20px', width: '20px'}} src={search} />
                    </button> */}
                </div>
        )
    }
}