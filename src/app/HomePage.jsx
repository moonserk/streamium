import React from 'react'
import axios from 'axios'
import Card from './Card'

import load from '../assets/images/spinning-circles.svg'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            cards: []
        };
    }

    componentDidMount(){
        axios.get("/fakedata.json")
            .then(
                (response) => {
                    this.setState({isLoaded: true, cards: response.data});
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
                <div className="container">
                    <div className="masonry">
                        {cards.map((item, index) => <Card key={index} 
                                                            channelName={item.channelName}
                                                            pubTime={item.pubTime}
                                                            src={item.src}
                                                            time={item.time}
                                                            title={item.title}
                                                            text={item.text}
                                                            moneyEarned={item.moneyEarned}/>)}
                    </div>
                </div>
            )
        }
    }
}

