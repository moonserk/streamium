import React from 'react'
import { connect } from 'react-redux'
import CardsList from '../components/CardsList'
import { fetchCards } from '../actions/actions'
import load from '../../assets/images/loading.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(fetchCards('cards'))
    }

    renderSpiner(){
        return (
            <div>
                <img className="App-logo" src={load} />
            </div>
        );      
    }

    render(){
        const { dispatch, cards, isFetching } = this.props
        if (isFetching) {
            return this.renderSpiner()
        }
        else{
            return(
                <div className="mx-auto feed-container container-margin-top">
                    <CardsList cards={cards}/>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    const { fetchCards } = state
    const {
      isFetching,
      lastUpdated,
      items: cards
    } = fetchCards || {
      isFetching: true,
      items: []
    }
  
    return {
      cards,
      isFetching,
      lastUpdated
    }
}

export default connect(mapStateToProps)(Home)
