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
//     <div style={{  // THIS IS AN OBJECT LITERAL.. we created it with {a:2, b:"fred"}
//       fontFamily: 'Times New Roman',
//       height: '80px',
//       width: '80px',
//       backgroundColor: 'blue'

//     }}>
//     </div>
//   )
// }
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: randomHexColor()
      }

    }
  }

  handleClick = (evt) => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '60px',
        width: '60px',
        backgroundColor: randomHexColor()
      }
    })
  }

  // randomHexColor = () => {
  //   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  // }

  // this.setState()

  render() {
    console.log(this.state.style)
    return (

      <div onClick={this.handleClick} style={this.state.style}>
      </div>
    )
  }
}




export default Pixel;
