import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Media,FormGroup, 
    Dropdown, Input, DropdownToggle, InputGroupAddon, Button, InputGroup, DropdownItem, DropdownMenu,
    Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

export default class Login extends React.Component {

    constructor(props){
        super(props)
        this.modalToggle = this.modalToggle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeLogin = this.onChangeLogin.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.state = {modal: true, login: "admin", password: "admin"}
    }

    onChangeLogin(){
        e.preventDefault()
        this.setState({login: e.target.value})
    }

    onChangePassword(){
        e.preventDefault()
        this.setState({password: e.target.value})
    }

    modalToggle(){
        this.setState({modal: !this.state.modal});
    }
  
    handleSubmit(e) {
        e.preventDefault()
        const login = e.target.elements[0].value
        const pass = e.target.elements[1].value
        window.localStorage.setItem('rr_login', login)
        window.localStorage.setItem('rr_password', pass)
        if(login !== 'admin' && pass !== 'admin'){
            return;
        }
        else{
            this.modalToggle();
            this.props.onLogin();
        }
      }

    render() {
  
      return (
        <div>        
                <Modal isOpen={this.state.modal} fade={true} toggle={this.modalToggle}>
                    <ModalHeader toggle={this.modalToggle}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input name="email" id="exampleEmail" placeholder="Email" onChange={this.onChangeLogin} value={this.state.login} />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={this.onChangePassword} value={this.state.password} />
                        </FormGroup>
                   
                        <ModalFooter>
                            <Button color="primary">Login</Button>{' '}
                            <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
      );
    }
  }

  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };