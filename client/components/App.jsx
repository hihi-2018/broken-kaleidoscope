import React from 'react'

import Pixel from './Pixel'



const App = () => {
  // // return <div id="ourSpecialDivDude">
  // // {
  // // [
  //   return [
  //   <Pixel key="0" />,
  //   <Pixel key="1" />,
  //   <Pixel key="2" />,
  //   <Pixel key="3" />,
  //   <Pixel key="4" />,
  //   <Pixel key="5" />,
  //   <Pixel key="6" />,
  //   <Pixel key="7" />,
  //   <Pixel key="8" />,
  //   <Pixel key="9" />,
  //   <Pixel key="10" />,
  //   <Pixel key="11" />  ]
  // // }

  // //   </div>

  let pixels = []
  for (let i = 0; i<1000; i++) {
    // console.log("i is; ", i)
    pixels.push((<Pixel key={i} />))
  }
  // console.log("Our Pixels length: ", pixels.length)
  return (pixels)
}

export default App
