import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
class Pixel extends React.Component {

    
    constructor(props) {
        super(props)

        this.state = {
            style: {
                height: '20px',
                width: '20px',
                backgroundColor: randomHexColor()
            }
        }

    }
       

    const changeColor = setInterval(function()) =>
    
        render() {
            // const {style} = this.state
            return(
            <div onClick = {evt => {
                this.setState({
                    style: {
                        backgroundColor:randomHexColor(),
                        height:this.state.style.height,
                        width: this.state.style.width
                    }
                })
              }}  onMouseEnter = {evt => {
                this.setState({
                    style: {
                        backgroundColor:randomHexColor(),
                        height:this.state.style.height,
                        width: this.state.style.width
                    }
                })
              }} onDragEnter = {evt => {
                this.setState({
                    style: {
                        backgroundColor:randomHexColor(),
                        height:this.state.style.height,
                        width: this.state.style.width
                    }
                })
              }} onMouseLeave = {evt => {
                this.setState({
                    style: {
                        backgroundColor:randomHexColor(),
                        height:this.state.style.height,
                        width: this.state.style.width
                    }
                })
              }} style={this.state.style} >
            </div>
            )

        }
    }


    export default Pixel