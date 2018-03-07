import React from 'react'
import axios from 'axios'
import VideoPlayer from '../VideoPlayer'

import 'bootstrap/dist/css/bootstrap.min.css'
export default class Upload extends React.Component{

    constructor(props){
        super(props);
        this.state = {value: ''}
    }


    

    render(){
        const value ={
            filename: this.state.value, mimetype: "file.type", _csrf_token: "token.value", size: "file.size"
        }
        return(
            <div  className="feed-container container-margin-top">
                <VideoPlayer src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v"/>
                <h1>Upload</h1>
                <input onChange={(e) => this.setState({value: e.target.value})} value={this.state.value} />
                <button onClick={(e) => {
                    axios.post('http://api.tockermail.com:4000/upload', {value}).then(res =>{
                        console.log(res);
                        console.log(res.data)
                    },
                    err => {
                        console.log(err.message + " hello");
                    })
                }}
                >Upload</button>
            </div>
        );
    }
}