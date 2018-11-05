import React from 'react'

// function Pixel (props) {
//   return (
//     <div style={{
//       fontFamily: 'Times New Roman',
//       height: '80px',
//       width: '80px',
//       backgroundColor: 'blue'

//     }}>

//     </div>

//   )
// }

// The same thing as above, using different style for declaring our function
// const Pixel = props => {
//   return (
//     <div style={{
//       fontFamily: 'Times New Roman',
//       height: '80px',
//       width: '80px',
//       backgroundColor: 'blue'

//     }}>

//     </div>

//   )
// }

// and third way to create our function
// const Pixel = function (props) {
//   return (
//     <div style={{
//       fontFamily: 'Times New Roman',
//       height: '80px',
//       width: '80px',
//       backgroundColor: 'blue'

//     }}>
//     </div>
//   )
// }

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
        backgroundColor: 'cornflowerblue'
      }

    }
  }

  // this.setState()

  render(){
    return (
      <div style = {this.state.style}>
      </div>
    )
  }
}




export default Pixel;
