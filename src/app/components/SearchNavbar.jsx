import React from 'react'
import { connect } from 'react-redux'

import { toggleSearch } from '../actions/actions'
import 'bootstrap/dist/css/bootstrap.min.css';


class SearchNavbar extends React.Component{

    constructor(props){
        super(props)
        // const { dispatch  } = this.props
        //dispatch(toggleSearch())
        this.dispatch = this.props.dispatch;
        this.handleCloseEvent = this.handleCloseEvent.bind(this)
    }

    handleCloseEvent(){
        // e.preventDefault()
        const evt = window.event;
            if(evt.clientY <= 48){
                return;
            }else{
                this.dispatch(toggleSearch())
            }
    }

    componentDidMount(){
        document.addEventListener('click', this.handleCloseEvent)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleCloseEvent);
    }

    render(){
        return(
            <div className="input-search navbar-custom">
                <input type="text" autoFocus={true} className="input-search text-size" placeholder=""/>
            </div>
        )
    }

}

export default connect()(SearchNavbar)