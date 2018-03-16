import React from 'react';
import VideoPlayer from '../VideoPlayer.jsx';

import FlatButton from 'material-ui/FlatButton';
import clock from '../../assets/images/clock.svg';
import gm from '../../assets/images/gm.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Watch extends React.Component{
    constructor(props){
        super(props)
        this.state = { data: {
            "src": "https://s3-ap-northeast-1.amazonaws.com/vue2/rose.mp4",
            "trambnail": "https://i1.ytimg.com/vi/JN7m5s_D0aI/0.jpg",
            "fullSrc" : "https://res.cloudinary.com/streamium/video/upload/v1521106985/579929405.mp4",
            "title": "No victims as Boeing narrowly avoids plunge into Black Sea",
            "channelName": "euronews (in English)",
            "text": "No victims as Boeing narrowly avoids plunge into Black Sea  Plane skidded off runway in northeastern Turkey on landing, with 162 passengers and crew on board. No victims as Boeing narrowly avoids plunge into Black Sea  Plane skidded off runway in northeastern Turkey on landing, with 162 passengers and crew on board.",
            "moneyEarned": "$1100",
            "time": "21:22",
            "pubTime": "Jan 14, 2018"
        }}
    }

    render(){
        return(
            <div className="watch-container container-margin-top">
            <div className="card">
            <div className="img-fluid video-slot relative">
                <VideoPlayer src={this.props.fullSrc || this.state.data.fullSrc} autoplay={true}/>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="" >
                        {this.props.title || this.state.data.title}
                    </div>
                        <div className="row" style={st}>
                            <div className="col">
                                <FlatButton  type="button" data-ripple="true">
                                    <img className="custom-icon " src={clock} alt="moneyEarned"/>
                                    {this.props.moneyEarned || this.state.data.moneyEarned} 
                                </FlatButton>
                            </div>
                            <div className="col">
                                <FlatButton  type="button" data-ripple="true">
                                    <img className="custom-icon" src={gm} alt="moneyEarned"/>
                                    {this.props.moneyEarned || this.state.data.moneyEarned}
                                </FlatButton>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <Avatar />
                            </div>
                            <div className="col-10">
                                <div className="row" style={st}>
                                    <div className="col-8" style={{paddingTop: "5px"}}>
                                        {this.props.channelName || this.state.data.channelName}
                                    </div>
                                    <div className="col-4" style={{marginBottom: "10px"}}>
                                        <FlatButton  backgroundColor="#B71C1C" label="SUBSCRIBE" type="button" data-ripple="true"/>
                                    </div>
                                </div>
                                <div className="row" style={st}>
                                    {this.props.text || this.state.data.text}
                                </div>

                            </div>
                        </div>
                        <div className="row" style={st}>
                            <div className="col-2">
                                <Avatar />
                            </div>
                            <div className="col-10">
                                <textarea type="text" style={{width: '100%', height: '100px'}}>
                                </textarea>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                                <FlatButton  backgroundColor="#E0E0E0"label="CANCEL" type="button" data-ripple="true"/>
                                <FlatButton  backgroundColor="#009eff" label="COMMENT" type="button" data-ripple="true" />
                        </div>
                    </div>
                    <div className="col-4">
                        <MoreVideos src={this.props.src || this.state.data.src}
                                    title={this.props.title || this.state.data.title}
                                    channelName={this.props.channelName || this.state.data.channelName}
                                    moneyEarned={this.props.moneyEarned || this.state.data.moneyEarned}/>
                        <MoreVideos src={this.props.src || this.state.data.src}
                                    title={this.props.title || this.state.data.title}
                                    channelName={this.props.channelName || this.state.data.channelName}
                                    moneyEarned={this.props.moneyEarned || this.state.data.moneyEarned}/>
                        <MoreVideos src={this.props.src || this.state.data.src}
                                    title={this.props.title || this.state.data.title}
                                    channelName={this.props.channelName || this.state.data.channelName}
                                    moneyEarned={this.props.moneyEarned || this.state.data.moneyEarned}/>
                        
                    </div>
                </div>

            </div>
            <br/>
            </div>
        );
    }

}

const MoreVideos = (props) => {
    return(
        <div style={{marginBottom: "10px", fontSize: "10px"}}>
            <video className="img-fluid video-slot relative">
                <source src={props.src} type="video/mp4" />
            </video>
            <div>
                <div>
                    <div><b>{props.title}</b></div>
                    {props.channelName}{' '}Money earned:{' '}{props.moneyEarned}
                </div>
            </div>
        </div>
    );
}

const st = { margin: "10px", borderBottom : "1px solid rgb(220, 220, 220)"}

const Avatar = (props) => {
    const size = {
        height: '68px',
        weight: '68px',
    };
    return(
        <div className="media absolute" style={size}>
            <img className="rounded-circle" src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} style={size} alt="user avatar" />
        </div>
    )
}