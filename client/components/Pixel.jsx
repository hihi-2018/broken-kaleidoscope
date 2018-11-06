import React from 'react'


// const Pixel = () =>{
//     return (
//         <div style={{
//             height:'50px',
//             width:'50px',
//             background:'blue'
//         }}>


//         </div>
//     )
// }


const sizeAsNumber = 30
const normalSize = `${sizeAsNumber}px`


class Pixel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            style: {
                height: normalSize,
                width: normalSize,
                background: props.color
            }
        }

        // this.changeToWhite = this.changeToWhite.bind(this)  
        // this.changeToYellow = this.changeToYellow.bind(this)
        // this.changeToGreen = this.changeToGreen.bind(this)
    }

    changeToWhite = (event) => {
        event.preventDefault()
        this.setState({style: {
            height: normalSize,
            width: normalSize,
            background: 'white'
        }})
    }
   
    changeToYellow = (event) =>{
        event.preventDefault()
        this.setState({style: {
            height: normalSize,
            width: normalSize,
            background: 'yellow'
        }})
    }
   
   
    changeToGreen = (event) =>{
        event.preventDefault()
        this.setState({style: {
            height: normalSize,
            width: normalSize,
            background: 'green'
        }})
    }

    changeToRandom = evt =>{
        this.setState({style:{
            height: `${sizeAsNumber+ Math.round(Math.random()*sizeAsNumber)}px` ,  //'50px',
            width: `${sizeAsNumber+ Math.round(Math.random()*sizeAsNumber)}px`  ,//'50px',
            background: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        }
        })
    }



    render() {
        return <div style={this.state.style} onMouseEnter={this.changeToRandom} onContextMenu={this.changeToGreen} onDoubleClick={this.changeToWhite} onDragEnter={this.changeToYellow}></div>
    }
}

export default Pixel