import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class RecomendedVideos extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {modal: false, pos: 'relative'}
        this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)
    }

    renderRecomend(){
        return (
            <div className="moreVideos" onMouseEnter={this.mouseEnterHandler}  onMouseLeave={this.mouseLeaveHandler}>
                <MoreVideos />
                <MoreVideos />
                <MoreVideos />
            </div>
        )
    }

    mouseLeaveHandler(e){
        e.preventDefault()
        if(this.state.modal === true){
            this.timer = setInterval(()=> this.setState({modal: false,pos: 'relative'}, () => clearInterval(this.timer)), 3000)
        }
        console.log("Hello->>")
    }

    mouseEnterHandler(e){
        e.preventDefault()
        clearInterval(this.timer)
        this.setState({modal: true, pos: 'absolute'})
        console.log("Hello-<<")
    }

    render(){
        return(
            <div className="rec-container">
                <div className="panel" style={{position: this.state.pos}} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
                </div>
                <div>
                {this.state.modal ? this.renderRecomend() : null}
                </div>
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