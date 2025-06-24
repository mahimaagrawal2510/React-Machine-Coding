import { useState } from 'react'
import './App.css'
// import TodoLists from './Wrapper/TodoLists/TodoLists'
// import ProgressBar from './Wrapper/ProgressBar/ProgressBar'
import CountdownTimer from './Wrapper/CountdownTimer/CountdownTimer'
import StarRating from './Wrapper/StarRating/StarRating'



function App() {


  return (
    <>
      {/* <TodoLists/> */}
     {/* <ProgressBar percent={7}/> */}
      <CountdownTimer/>
      {/* <StarRating rating={4}/> */}
    </>
  )
}

export default App
