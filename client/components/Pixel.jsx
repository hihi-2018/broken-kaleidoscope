import React from 'react';



const randomHexColor = () =>
 `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 2)}`
   
class Pixel extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      style : { 
        height: '10px',
        width: '10px',
        opacity: '1',
        backgroundImage: '',
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
  
  doubleHandler = evt => {
    console.log('doubleclick', evt)

    let doubleStyle = {...this.state.style}
    doubleStyle.backgroundColor = 'white'
    this.setState({
      style: doubleStyle
    })
  }

  changeDimension = evt => {
    console.log('change dimenson pass over', evt)

    let changeDimensions = {...this.state.style}
    changeDimensions.width = '20px'
    changeDimensions.height = '20px'

    this.setState({
      style: changeDimensions
    })
  }

  rightClick = evt => {
    console.log('rightclick clicked',evt)
    evt.preventDefault()

    let changeContent = {...this.state.style}
    changeContent.opacity = '0.3'

    this.setState({
      style: changeContent
    })
  }

  // dragEnter = evt =>{
  //   console.log('dragEnter shows images', evt)
  //   evt.preventDefault()

  //   let showImage = {...this.state.style}
  //   showImage.backgroundImage = 'url("./trump.jpg")'

  //   this.setState({
  //     style: showImage
  //   })
  // }


  

  render(){
    return(
      <div>
      <div /* onDragEnter={this.dragEnter}  */ onContextMenu={this.rightClick} onClick={this.clickHandler} onDoubleClick={this.doubleHandler} onMouseEnter={this.changeDimension} style={this.state.style}></div>
      </div>
    )
  }
}

export default Pixel