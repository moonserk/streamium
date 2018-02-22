import React from 'react';

import menu from '../assets/images/menu.svg';
import clock from '../assets/images/clock.svg';
import gm from '../assets/images/gm.png';
import '../assets/stylesheets/style.scss';
import home from '../assets/images/home.svg';
import info from '../assets/images/info.svg';
import comments from '../assets/images/comments.svg';
import share from '../assets/images/share-option.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import FlatButton from 'material-ui/FlatButton'


const Card = (props) => {
    const handleClick = () => {
        props.click();
    }

    return (
        <div className="card custom-card-border card-custom">
            <Channel channelName={props.channelName} pubTime={props.pubTime} />
            
            <VideoSlot src={props.src} time={props.time} />
            <Title title={props.title} />
            <Text text={props.text} moneyEarned={props.moneyEarned} click={handleClick}/>
        </div>
    )
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

const VideoSlot = (props) => {
    return (
        <div className="img-fluid video-slot relative">
            <Avatar />
            <video className="card-img-top"  loop autoPlay>
                
                <source src={props.src} type="video/mp4" />
                
            </video>
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
        <div className="media absolute" style={size}>
            <img className="rounded-circle" src={"https://avatars0.githubusercontent.com/u/9064066?v=4&amp;s=460"} style={size} alt="user avatar" />
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

const Text = (props) => {

    const handleClick = () => {
        props.click();
        console.log("handle")
    }

    return (
        <div className="card-body">
            <p className="">{props.text}</p>

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
                        <a href="" className="" data-ripple="true" title="Watch full video">
                            <div className="text-center">
                                <img src={home} className="custom-icon" alt="home" />
                            </div>
                        </a>
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