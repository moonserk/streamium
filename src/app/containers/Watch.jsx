import React from 'react';
import VideoPlayer from './VideoPlayer';
import axios from 'axios'

import FlatButton from 'material-ui/FlatButton';
import clock from '../../assets/images/clock.svg';
import gm from '../../assets/images/gm.png';

import load from '../../assets/images/loading.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Watch extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            data: {},
            error: null,
            isLoaded: false,
            inputValue: ''
        }
        this.hangleChangeValue = this.hangleChangeValue.bind(this);
    }

    hangleChangeValue(e){
        e.preventDefault();
        this.setState({inputValue: e.target.value})
        console.log(this.state.inputValue)
    }

    componentDidMount(){
        console.log(this.props.match);
        axios.get('/fakedata.json')
        .then(
            (response) => {
                console.log(this.props.match.params);
                console.log(response.data.filter(i => i.idx === this.props.match.params.idx)[0].fullSrc)
                this.setState({data: response.data.filter(i => i.idx === this.props.match.params.idx)[0]});
                this.timerID = setInterval(() => {
                    this.setState({isLoaded: true});
                }, 1000);
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
           )
    }

    renderSpiner(){
        return (
            <div>
                <img className="App-logo" src={load} />
            </div>
        );      
    }

    render(){
        const { data, error, isLoaded } = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>{this.renderSpiner()}</div>
        }else{
            clearInterval(this.timerID);
        return(
            <div className="watch-container container-margin-top">
            <div className="card">
            <div className="img-fluid video-slot relative">
            {console.log(this.state.data.fullSrc, "<<-")}
                <VideoPlayer src={this.state.data.fullSrc} autoplay={true}/>
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
                                <textarea type="text" value={this.state.inputValue}
                                          onChange={this.hangleChangeValue} style={{width: '100%', height: '100px'}}>
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