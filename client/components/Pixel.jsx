import React from 'react';



const randomHexColor = () =>
 `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 2)}`
   
class Pixel extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      style : { 
        height: '100px',
        width: '100px',
        backgroundColor: randomHexColor()
      }
    }
   
  }

  clickHandler = evt => {
    console.log('click ', evt)

    let newStyle = {...this.state.style}
    newStyle.backgroundColor = randomHexColor()
    
    this.setState({
      style: newStyle
    })
  }
  
  render(){
    return(
      <div>
      <button onClick={this.clickHandler}>Click</button>
      <div style={this.state.style}></div>
      </div>
    )
  }
}

export default Pixel