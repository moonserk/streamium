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
            currentVolume: ''};

        this.handlePlay = this.handlePlay.bind(this);
        this.handleCanPlay = this.handleCanPlay.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleVolumeMute = this.handleVolumeMute.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleChangeProgress = this.handleChangeProgress.bind(this);
    }

    handleChangeProgress(e){
        e.preventDefault();
        this.refs.video.currentTime = e.target.value;
    }

    handleTimeUpdate(e){
        e.preventDefault();
        this.setState({
            currentTime: this.refs.video.currentTime,
            //progressStyle: {width: Math.floor((this.state.currentTime / this.state.duration) * 100) + '%'}
        });
    }

    handleCanPlay(e){
        e.preventDefault();
        this.setState({
            duration: this.refs.video.duration, 
            currentTime: this.refs.video.currentTime,
            currentVolume: this.refs.video.volume * 100});
    }

    handlePlay(e){
        e.preventDefault();
        this.refs.video.paused ? this.refs.video.play() : this.refs.video.pause();
    }

    handleVolumeMute(e){
        e.preventDefault(e);
        this.refs.video.muted = !this.refs.video.muted;
        this.setState({currentVolume: this.refs.video.muted ? 0 : this.refs.video.volume * 100});
    }

    handleVolumeChange(e){
        e.preventDefault(e);
        this.refs.video.volume = e.target.value / 100;
        this.setState({currentVolume: this.refs.video.muted ? 0 : this.refs.video.volume * 100});
    }

    render(){
        return(
            <div className="video"> 
                <video className="img-fluid video-slot mx-auto" id="video" ref='video' 
                       onCanPlay={this.handleCanPlay}
                       onTimeUpdate={this.handleTimeUpdate}>
                    <source src={this.props.src} type="video/mp4"/>
                </video>
                <div className="controls-container">
                    <div className="row mx-auto" style={{width: '100%'}}>
                            <span className="progress">
                                <input className="progress-bar" type="range"  ref='progress' 
                                       value={this.state.currentTime} 
                                       min="0" max={this.state.duration} 
                                       onChange={this.handleChangeProgress}/>
                            </span> 
                    </div>
                    
                    <div className="row mx-auto" style={{width: '100%'}}>
                        <span className="element-btn" onClick={this.handlePlay}>
                            <img className="custom-icon-video-controls" src={play} />
                        </span>
                        <span className="element-btn volume-icon" onClick={this.handleVolumeMute}>
                            <img className="custom-icon-video-controls " src={sound} />
                        </span>

                        <span className="volume volume-hide">
                            <input className="volume-bar" type="range" value={this.state.currentVolume} min={0} max={100}
                                   onChange={this.handleVolumeChange} />
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