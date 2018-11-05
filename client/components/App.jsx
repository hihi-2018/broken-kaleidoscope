import React from 'react'

import Pixel from './Pixel'

const App = () => {

  //{anArray.map(()=> {<Pixel/>})}

  let anArray = []

  for(let i = 0; i< 400; i++){
    anArray.push(i);
  }


  return (
    <div>
      {anArray.map(()=> (<Pixel/>) ) }
    </div>
  )
}

export default App
