import React from 'react'
import { connect } from 'react-redux'
import GeniralNavbar from '../components/GeniralNavbar'
import SearchNavbar from '../components/SearchNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = ( {searchToggle} ) => (
  <div>
    {/* {console.log(searchToggle)} */}
    {!searchToggle ? <GeniralNavbar /> : <SearchNavbar />}
  </div>
)

const mapStateToProps = state => (
  {
    searchToggle: state.navbarReducer.searchToggle
  }
)

export default connect( mapStateToProps )(Navbar)