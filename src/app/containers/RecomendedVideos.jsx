import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class RecomendedVideos extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {modal: false}
        this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)
    }

    renderRecomend(){
        return (
            <div className="row moreVideos" onMouseEnter={this.mouseEnterHandler}  onMouseLeave={this.mouseLeaveHandler}>
                <div className="col-4">
                    <MoreVideos />
                </div>
                <div className="col-4">
                    <MoreVideos />
                </div>
                <div className="col-4">
                    <MoreVideos />
                </div>
            </div>
        )
    }

    mouseLeaveHandler(e){
        e.preventDefault()
        if(this.state.modal === true){
            this.timer = setInterval(()=> this.setState({modal: false}, () => clearInterval(this.timer)), 3000)
        }
        console.log("Hello->>")
    }

    mouseEnterHandler(e){
        e.preventDefault()
        clearInterval(this.timer)
        this.setState({modal: true})
        console.log("Hello-<<")
    }

    render(){
        return(
            <div>
                <div className="panel" onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
                </div>
                
                {this.state.modal ? this.renderRecomend() : null}
            </div>
        )
    }
}

const MoreVideos = ({src, title, channelName, moneyEarned}) => {
    return(
        <div style={{marginBottom: "10px", fontSize: "10px"}}>
            <video className="img-fluid video-slot relative" autoPlay={true} loop>
                <source src={src || "http://res.cloudinary.com/streamium/video/upload/v1521186924/rose.mp4"} type="video/mp4" />
            </video>
            <div>
                <div>
                    <div><b>{title || 'test'}</b></div>
                    {channelName || 'test'}{' '}Money earned:{' '}{moneyEarned || '200$'}
                </div>
            </div>
        </div>
    );
}