import React from 'react'

import Pixel from './Pixel'

const App = () => {
  // const butts = new Array(30).fill("butts")
  const components = []
  for (let i = 0; i < 1000; i++) {
    components.push(<Pixel key={`Pixel:${i}`}/>)
  }
  return components
  // return (
  //   <div>
  //     <Pixel/>
  //   {/* {butts.map( () =>  <Pixel />)} */}
  //   </div>
  // )
}

export default App
