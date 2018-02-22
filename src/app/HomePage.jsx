import React from 'react'
import axios from 'axios'

import Card from './Card'
import Notification from './Notification';

import load from '../assets/images/spinning-circles.svg'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.class = this.props.class;
        this.url = this.props.url;

        this.state = {
            error: null,
            isLoaded: false,
            cards: [],
            toggleNotify: false,
            notifyIndex: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index){
        this.setState({toggleNotify: false})
        this.setState({toggleNotify: true, notifyIndex: index})
    }

    componentDidUpdate(){
        clearInterval(this.timerNotify)
        this.timerNotify = setInterval(() => this.setState({toggleNotify: false}), 8000)
    }

    componentDidMount(){
                axios.get(this.url)
            .then(
                (response) => {
                    this.setState({cards: response.data});
                    setInterval(() => {
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
        const { error, isLoaded, cards} = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>{this.renderSpiner()}</div>
        }else{
            return (
                <div>
                    <div className={this.class.container}>
                        <div className={this.class.columns}>
                            {cards.map((item, index) => <Card
                                                            key={index} 
                                                            channelName={item.channelName}
                                                            pubTime={item.pubTime}
                                                            src={item.src}
                                                            time={item.time}
                                                            title={item.title}
                                                            text={item.text}
                                                            click={(e) => this.handleClick(index)}
                                                            moneyEarned={item.moneyEarned}/>)}
                        </div>
                    </div>
                    {this.state.toggleNotify ? <Notification title={cards[this.state.notifyIndex].channelName}/> : null} 
                </div>
            )
        }
    }
}

