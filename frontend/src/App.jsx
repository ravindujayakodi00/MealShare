import React from 'react'
import './index.css'
import EndedEventDeatils from './components/endedEventDeatils'
import SearchBar from './components/searchBar'
import EventDetails from './components/eventDetails'
import { events } from './constants'



function App() {
  const endpoints = ['http://localhost:8000/events', 'http://localhost:8000/blogs'];


  

  return (

    
    <div>
    <SearchBar
      endpoints={endpoints}
    />
  </div>
  )
}



export default App
