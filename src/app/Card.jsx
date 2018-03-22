import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

import VisibilitySensor from 'react-visibility-sensor'
import VideoPlayer from './VideoPlayer';

import menu from '../assets/images/menu.svg';
import clock from '../assets/images/clock.svg';
import gm from '../assets/images/gm.png';
import '../assets/stylesheets/style.scss';
import home from '../assets/images/home.svg';
import info from '../assets/images/info.svg';
import comments from '../assets/images/comments.svg';
import share from '../assets/images/share-option.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import FlatButton from 'material-ui/FlatButton';


class Card extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {videoPreview : true, data : this.props.data}
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        this.props.click();
    }
    render(){
        return (
            <div>
                <NewChannel channelName={this.props.channelName} pubTime={this.props.pubTime} />
            <div className="card custom-card-border card-custom" >
                <div  onClick={(e) => this.setState({videoPreview: false})}>
                {this.state.videoPreview ?
                    <VideoSlotPreview  src={this.props.src} fullSrc={this.props.fullSrc} time={this.props.time} /> :
                    <VideoSlot fullSrc={this.props.fullSrc} time={this.props.time} /> 
                }
                </div>
                <Title title={this.state.data.title} />
                <Text text={this.state.data} moneyEarned={this.props.moneyEarned} click={this.handleClick}/>
            </div>
            </div>
        )
    }
}

const Channel = (props) => {
    return (
        <div  className="card-header">
            <div className="row">
                <span className="col-6 text-left">{props.channelName}</span>
                <small className="col-6 text-right">Published on {props.pubTime}</small>
            </div>
        </div>
    )
}

class VideoSlot extends React.Component{
    constructor(props){
        super(props)
        this.state = {preview: true}
        //this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(isVisible){
    //     isVisible ? this.refs.videoref.play() : this.refs.videoref.pause();
    // }

    render(){
        return(
            <div className="img-fluid video-slot relative">
                    <VisibilitySensor onChange={this.handleChange}>
                        <VideoPlayer className="card-img-top" ref='videoref' src={this.props.fullSrc}  autoplay={true}/>
                    </ VisibilitySensor>
            </div>
        );
    }
}

const VideoSlotPreview = (props) => {
    let testVideo;
    const handleChange = (isVisible) => {
        isVisible ? testVideo.play() : testVideo.pause();
    }

    return (
        <div className="img-fluid video-slot relative">
            {/* <Avatar /> */}
            <VisibilitySensor onChange={handleChange}>
                <video className="card-img-top" ref={(video) => testVideo = video} loop>
                    <source src={props.src} type="video/mp4" />
                </video>
            </ VisibilitySensor>
            <span className="video-time">{props.time}</span>
        </div>
    )
}

const Avatar = (props) => {
    const size = {
        height: '68px',
        weight: '68px',
    };
    return(
        <div className="">
            <img className="channel-name-avatar rounded-circle" src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} alt="user avatar" />
        </div>
    )
}

const Title = (props) => {
    return (
        <div className="card-body row">
            <span className="col-10">{props.title}</span>
            <div className="col-2 text-right"><img className="custom-icon" src={menu} alt="menu" /></div>
        </div>
    )
}

const NewChannel = (props) => {
    return (
        <div className="channel-name row">
            <div className="row" style={{width: '100%', height: "100%", margin: '0'}}>
                <div className="col-auto mr-auto">
                    <Avatar  />
                </div>
                <div className="col-auto" style={{marginRight: '120px'}}>
                    <button className="channel-name-button">Follow</button>
                </div>
            </div>
            <div className="row channel-name-upper">
            </div>
            <div className="row channel-name-lower">
                <span className="mx-auto" style={{marginTop: "12px"}}><b>{props.channelName}</b></span>
                <span className="col-auto" style={{marginTop: "25px", marginRight: "43px"}}>2.5K</span>
            </div>
        </div>
    )
}

const Text = (props) => {

    const handleClick = () => {
        props.click();
        console.log("handle")
    }

    return (
        <div className="card-body">
            <p className="">{props.text.text}</p>

            <br/>
            
            <div className="">
                <div className="row">
                    <div className="col-4">
                        <FlatButton  type="button" data-ripple="true">
                            <img className="custom-icon " src={clock} alt="moneyEarned"/>
                            {props.moneyEarned}
                        </FlatButton>
                    </div>
                    <div className="col-4">
                        <FlatButton  type="button" data-ripple="true">
                            <img className="custom-icon" src={gm} alt="moneyEarned"/>
                            {props.moneyEarned}
                        </FlatButton>
                    </div>
                    <div className="col-4">
                        <FlatButton backgroundColor="#E53935" type="button" data-ripple="true">
                            <div className="btn-content" onClick={handleClick} >TUNE IN 10K</div>
                        </FlatButton>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <Link to={`/${props.text.id}`} className="" data-ripple="true" title="Watch full video">
                            <div className="text-center">
                                <img src={home} className="custom-icon" alt="home" />
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <a href="" className="" data-ripple="true" title="Watch full video">
                            <div className="text-center">
                                <img src={info} className="custom-icon" alt="home" />
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" className="" data-ripple="true" title="Watch full video">
                            <div className="text-center">
                                <img src={comments} className="custom-icon" alt="home" />
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" className="" data-ripple="true" title="Watch full video">
                            <div className="text-center">
                                <img src={share} className="custom-icon" alt="home" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;