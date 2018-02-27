import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Notification extends React.Component{

    constructor(props){
        super(props)
        this.wasMounted = true;
        this.key = 0;
        this.state = {}; 
    }

    componentWillUnmount(){
        this.wasMounted = false;
    }

    addNotificator(title, msg, time, theme){
        const key = this.key++;
        const state = Object.assign(this.state, { [key]: {title, msg, time, theme}});

        this.setState(state, () => this.countToHide(time, key));
    }

    success(title, msg, time) {
        this.addNotificator(title, msg, time, 'success');
    }

    countToHide(duration, key){
        setTimeout(() => {
            this.hideNotification(key)
        }, duration);
    }

    hideNotification(key){
        if( !this.wasMounted ){
            return;
        }

        this.setState((state) => {
            delete state[key];
            return state;
        })
    }

    item(key){
        const { theme, title, msg } = this.state[key];

        return(
            <div className="custom-footer" onClick={() => this.hideNotification(key)}>
                <div className="row">
                    <div className="col-6" ><Avatar /></div>
                    <div className="col6">
                        <div className="row" >{title}</div>
                        <div className="row">{msg}</div>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const { state } = this;
        const keys = Object.keys(state);
        const el = keys.map((key) => this.item(key)) 
        return(
            <div className="notify-container">{el}</div>
        );
    }
    
    
}

const Avatar = (props) => {
    const size = {
        height: '48px',
        weight: '48px',
    };
    return(
        <div className="">
                <img className="rounded-circle" 
                     src={"https://media.giphy.com/media/j2nATOAdRgYZq/giphy.gif"} 
                     style={size}
                     alt="user avatar" />
        </div>
    )
}