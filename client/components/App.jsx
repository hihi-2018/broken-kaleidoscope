import React from 'react'

import Pixel from './Pixel'

const App = () => {

  //{anArray.map(()=> {<Pixel/>})}

  let anArray = []
  const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  for(let i = 0; i< 400; i++){
    anArray.push(i);
  }


  return (
    <div>

      {anArray.map(()=> (<Pixel color={randomHexColor()}/>)  ) }
    </div>
  )
}

export default App
