import React, { Component } from 'react'

class GifSearch extends Component {
    
    render() {
        return (
            <div>
                Enter a Search Term:
                <form onSubmit={this.props.onHandleSubmit}>
                    <input type="text" id="query"></input>
                    <input type="submit" value="Search Gifs"></input>
                </form>
            </div>
        )
    }
}

export default GifSearch