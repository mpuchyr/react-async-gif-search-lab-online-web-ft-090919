import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=i8pu9KpNX6t8Jns84FHoMAqPWrOvEcbS
class GifListContainer extends Component {
    
    state = {
        gifs: []
    }

    handleFetch = query => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=i8pu9KpNX6t8Jns84FHoMAqPWrOvEcbS`)
        .then(res => res.json())
        .then(data => data.data)
        .then(gifArr => {
            let gifs = []
            if (gifArr[0]){          
                for(let i = 0; i < 3; i++) {
                gifs.push(gifArr[i].images.original.url)
            }}
            this.setState({gifs: gifs})
        })
    }

    onHandleSubmit = event => {
        event.preventDefault()
        let val = event.target.query.value
        val = val.toLowerCase().split(" ").join("-")
        this.handleFetch(val)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.gifs === nextState.gifs) {
            return false
        } else {
            return true
        }
    }

    componentDidUpdate() {
        <GifList gifs={this.state.gifs} />
    }
    

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch onHandleSubmit={this.onHandleSubmit}/>
            </div>
        )
    }
}

export default GifListContainer