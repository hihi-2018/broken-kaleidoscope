import React from 'react'

import Pixel from './Pixel'

const App = () => {

  //{anArray.map(()=> {<Pixel/>})}

  let anArray = []
  const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


  //anArray = Array.from({length: 1000}, () => (<Pixel color={randomHexColor()}/>))
  anArray = Array.from({length: 1000})
  let pixels = anArray.map(()=> (<Pixel color={randomHexColor()}/>))

  console.log(anArray)
  console.log(pixels)


  //for(let i =0; i< 1000 ; i++){
  //   anArray.push(i)
  // }
  //{anArray.map(()=> (<Pixel color={randomHexColor()}/>)  ) }
  return (
    <div>

      {pixels}
    </div>
  )
}

export default App
