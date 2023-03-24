import React from 'react'
import './index.css'
import EndedEventDeatils from './components/endedEventDeatils'
import EventDetails from './components/eventDetails'
import {commentsData,eventData} from './constants'


function App() {

  

  return (
    <div className="App">
      <EndedEventDeatils comments={commentsData}/>
      

      
      
    </div>
  )
}

export default App
