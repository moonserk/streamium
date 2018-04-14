import React from 'react'
import axios from 'axios'

import Card from './Card'
import Notification from './Notification';

import load from '../assets/images/loading.svg'

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
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(title, msg){
        this.refs.notificator.success(title, msg, 5000);
    }

    componentDidMount(){
        axios.get(this.url)
            .then(
                (response) => {
                    this.setState({cards: response.data});
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
               console.log("HomePageDidMount")
    }


    // shouldComponentUpdate(nextProps) {
    //     return (nextProps.class !== this.props.class
    //          || nextProps.url !== this.props.url || nextProps.filterText !== this.props.filterText);
    // }

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
            clearInterval(this.timerID);
            return (
                <div>
                    <div className={this.class.container}>
                        <div className={this.class.columns}>
                            {cards.filter((item) => {
                                if (item.channelName.indexOf(this.props.filterText) === -1) {
                                    return false;
                                }
                                else{
                                    return true;
                                }
                            }).map((item, index) => <Card
                                                            key={index} 
                                                            id={item.id}
                                                            data={item}
                                                            channelName={item.channelName}
                                                            pubTime={item.pubTime}
                                                            src={item.src}
                                                            fullSrc={item.fullSrc}
                                                            time={item.time}
                                                            title={item.title}
                                                            text={item.text}
                                                            click={() => this.handleClick(item.channelName, "$10.000,00")}
                                                            moneyEarned={item.moneyEarned}/>)}
                        </div>
                    </div>
                   <Notification ref='notificator' /> 
                </div>
            )
        }
    }
}

