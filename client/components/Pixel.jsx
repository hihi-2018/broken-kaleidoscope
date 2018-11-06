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


class Pixel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            style: {
                height: '50px',
                width: '50px',
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
            height: '50px',
            width: '50px',
            background: 'white'
        }})
    }
   
    changeToYellow = (event) =>{
        event.preventDefault()
        this.setState({style: {
            height: '50px',
            width: '50px',
            background: 'yellow'
        }})
    }
   
   
    changeToGreen = (event) =>{
        event.preventDefault()
        this.setState({style: {
            height: '100px',
            width: '100px',
            background: 'green'
        }})
    }

    changeToRandom = evt =>{
        this.setState({style:{
            height: `${40+ Math.floor(Math.random()*40)}px` ,  //'50px',
            width: `${40+ Math.floor(Math.random()*40)}px`  ,//'50px',
            background: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        }
        })
    }



    render() {
        return <div style={this.state.style} onMouseEnter={this.changeToRandom} onContextMenu={this.changeToGreen} onDoubleClick={this.changeToWhite} onDragEnter={this.changeToYellow}></div>
    }
}

export default Pixel