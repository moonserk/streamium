import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Notification extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const margin ={
            marginLeft: '40px'
        };
        return(
            <div className="custom-footer fixed-bottom">
                <div className="container row">
                    <div className="col-6" ><Avatar /></div>
                    <div className="col6">
                        <div className="row" >{this.props.title}</div>
                        <div className="row">$10,000.00</div>
                    </div>
                </div>
            </div>  
        );
    }
    
    
}

const Avatar = (props) => {
    const size = {
        height: '48px',
        weight: '48px',
    };
    return(
        <div className="">
                <img className="rounded-circle" 
                     src={"https://avatars0.githubusercontent.com/u/9064066?v=4&amp;s=460"} 
                     style={size}
                     alt="user avatar" />
        </div>
    )
}