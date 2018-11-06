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

// var ourInterval


class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: '10px',
        width: '10px',
        backgroundColor: randomHexColor()
      }

    }

    // window.setInterval(this.setRandomColour, 1000)

  }

  // setRandomColor = (evt) => {
  //   this.setState({
  //     style: {
  //       fontFamily: 'Times New Roman',
  //       height: '60px',
  //       width: this.state.style.width,
  //       backgroundColor: randomHexColor()
  //     }
  //   })
  // }

  setRandomColour = (e) => {
    this.setState({
      style: {
        fontFamily: this.state.style.fontFamily,
        height: this.state.style.height,
        width: '10px',
        backgroundColor: randomHexColor()
      }
    })
  }

  setColourYellow = (e) => {
    this.setState ({
      style: {
        fontFamily: this.state.style.fontFamily,
        height: '10px',
        width: '10px',
        backgroundColor: 'yellow'
      }
    })
  }



  // randomHexColor = () => {
  //   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  // }

  // this.setState()

  

  componentDidMount() {
    // this.countdown = setInterval(this.timer, 1000);
  //  ourInterval = setInterval(this.setRandomColour, 1000)
  }


  render() {
    // console.log(this.state.style)
    // let anInterval = window.setInterval(this.setRandomColour, 10000)
    return (

      <div id="ourDiv" onClick={this.setRandomColour} onMouseEnter={this.setColourYellow} onDragEnter={this.setRandomColour}  style={this.state.style}>
      </div>
    )

  }
}




export default Pixel;
