import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

import VideoContainer from '../containers/VideoContainer'

import menu from '../../assets/images/menu.svg';
import clock from '../../assets/images/clock.svg';
import gm from '../../assets/images/gm.png';
import '../../assets/stylesheets/style.scss';
import home from '../../assets/images/home.svg';
import info from '../../assets/images/info.svg';
import comments from '../../assets/images/comments.svg';
import share from '../../assets/images/share-option.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ( {id, channelName, src, fullSrc, time, moneyEarned, title, pubTime, text} ) => (
    <div className="card-custom">
        <Channel channelName={channelName} />      
        {/* <VideoPreview  src={src} time={time}/> */}
        <VideoContainer src={src} time={time} fullSrc={fullSrc} />
        <ButtonPanel id={id} moneyEarned={moneyEarned} />
        <Title title={title} pubTime={pubTime}/>
        <Text text={text}/>
    </div>
)

const Channel = ( {channelName} ) => (
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
            <span className="mx-auto" style={{marginTop: "12px"}}><b>{channelName}</b></span>
            <span className="col-auto" style={{marginTop: "25px", marginRight: "43px"}}>2.5K</span>
        </div>
    </div>
)

const ButtonPanel = ( {id, moneyEarned} ) => (
    <div className="row" style={{width: '100%', height: "100%", margin: '0', backgroundColor: '#ffffff'}}>
        <div className="col-auto mr-auto">
            <button className="btn button-panel-btn"><img className="custom-icon " src={clock} alt="moneyEarned"/>{moneyEarned}</button>
            <button className="btn button-panel-btn"><img className="custom-icon " src={gm} alt="moneyEarned"/>{moneyEarned}</button>
        </div>
        <div className="col-auto row">
            <Link to={`/${id}`} className="col" data-ripple="true" title="Watch full video">
                <div className="text-center">
                    <img src={home} className="custom-icon" alt="home" />
                </div>
            </Link>
            <a href="" className="col" data-ripple="true" title="Watch full video">
                <div className="text-center">
                    <img src={info} className="custom-icon" alt="home" />
                </div>
            </a>
            <a href="" className="col" data-ripple="true" title="Watch full video">
                <div className="text-center">
                    <img src={comments} className="custom-icon" alt="home" />
                </div>
            </a>

            <a href="" className="col" data-ripple="true" title="Watch full video">
                <div className="text-center">
                    <img src={share} className="custom-icon" alt="home" />
                </div>
            </a>
        </div>
    </div>
)

const Title = ( {title, pubTime} ) => (
        <div className="row" style={{width: '100%', height: "100%", margin: '0', backgroundColor: '#ffffff', borderBottom : "1px solid rgb(220, 220, 220)"}}>
            <span className="col"><b>{title}</b></span>
            <small className="col-auto">Published on{pubTime}</small>
        </div>
)

const Text = ( {text} ) => (
    <div className="row" style={{width: '100%', height: "100%", margin: '0', backgroundColor: '#ffffff', padding: "10px"}}>
        <div className="col">{text}</div>
    </div>
)

const Avatar = () => {
    return(
        <div className="">
            <img className="channel-name-avatar rounded-circle" src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} alt="user avatar" />
        </div>
    )
}

export default Card
