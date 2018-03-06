import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import play from '../assets/images/pp-w.png'
import sound from '../assets/images/sound-w.png'
import settings from '../assets/images/settings-w.png'
import full_screen from '../assets/images/fs-w.png'

export default class VideoPlayer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            duration: '', 
            currentTime: '',
            progressStyle: {width: ""}};

        this.handlePlay = this.handlePlay.bind(this);
        this.handleCanPlay = this.handleCanPlay.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);

    }

    handleTimeUpdate(e){
        e.preventDefault();
        this.setState({
            currentTime: this.refs.video.currentTime,
            progressStyle: {width: Math.floor((this.state.currentTime / this.state.duration) * 100) + '%'}
        });
    }

    handleCanPlay(e){
        e.preventDefault();
        this.setState({duration: this.refs.video.duration})
        //console.log(this.refs.video.duration, timeFormat(this.refs.video.duration))
    }

    handlePlay(e){
        e.preventDefault();
        this.refs.video.paused ? this.refs.video.play() : this.refs.video.pause();
    }

    render(){
        return(
            <div className="video"> 
                <video className="img-fluid video-slot" id="video" ref='video' 
                       onCanPlay={this.handleCanPlay}
                       onTimeUpdate={this.handleTimeUpdate}>
                    <source src={this.props.src} type="video/mp4"/>
                </video>
                <div className="controls-container">
                    <div className="row mx-auto" style={{width: '100%'}}>
                        <progress className="progress-bar"  value={this.state.currentTime} min="0" max={this.state.duration}>
                            <span id="total">
                                <span id="buffered"><span id="current">​</span></span>
                            </span>
                            <span className="" style={this.state.progressStyle}></span>
                        </progress>
                    </div>
                    
                    <div className="row mx-auto" style={{width: '100%'}}>
                        <span className="play-btn" onClick={this.handlePlay}>
                            <img className="custom-icon-video-controls" src={play} />
                        </span>
                        <span className="col-2 element-btn">
                            <img className="custom-icon-video-controls" src={sound} />
                        </span>
                        <span className="col mr-auto time">
                            <span >{timeFormat(this.state.currentTime)} / {timeFormat(this.state.duration)}</span>
                        </span>
                        <span className="col-auto element-btn">
                            <img className="custom-icon-video-controls" src={settings} />
                        </span>
                        <span className="element-btn">
                            <img className="custom-icon-video-controls" src={full_screen} />
                        </span>
                    </div>
                </div>
            </div>
                

        );
    }
}

const timeFormat = (seco) => {
    const sec = Math.floor(seco);
    const hours = sec / 3600 < 1 ? sec - Math.floor(sec / 3600) : 0;
    const min = sec < 60 ? 0 : Math.floor(sec / 60);
    const s = sec % 60;
    
    return  min + ":" + s;
}