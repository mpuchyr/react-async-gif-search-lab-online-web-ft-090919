import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 
// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=i8pu9KpNX6t8Jns84FHoMAqPWrOvEcbS


const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
