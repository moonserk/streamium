import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import VideoPlayer from './VideoPlayer'

class VideoContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {preview: true}
    }

    previewVideo(src ,time){
        let _video;
        const handleChange = (isVisible) => {
            isVisible ? _video.play() : _video.pause();
        }

        return (
            <div className="video-slot" onClick={e => this.setState({preview: false})}> 
                <VisibilitySensor onChange={handleChange}>
                    <video className="card-img-top" ref={video => _video = video} loop>
                        <source src={src} type="video/mp4" />
                    </video>
                </ VisibilitySensor>
                <span className="video-time">{time}</span>
            </div>
        )
    }

    fullVideo(fullSrc){
        return(
            <div className="img-fluid video-slot relative">
                    <VisibilitySensor onChange={this.handleChange}>
                        <VideoPlayer className="card-img-top" src={fullSrc}  autoplay={true}/>
                    </VisibilitySensor>
            </div>
        );
    }

    render(){
        const { src, fullSrc, time } = this.props
        return(
            this.state.preview ? this.previewVideo(src, time) : this.fullVideo(fullSrc)
        )
    }
}

export default VideoContainer;

// const VideoPreview = ( {src, time} ) => {
//     let _video;
//     const handleChange = (isVisible) => {
//         isVisible ? _video.play() : _video.pause();
//     }

    
// }