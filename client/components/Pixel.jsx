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
                background: 'blue'
            }
        }

        this.changeToGreen = this.changeToGreen.bind(this)
    }

    changeToGreen(){
        this.setState({style: {
            height: '50px',
            width: '50px',
            background: 'green'
        }})
    }

    render() {
        return <div style={this.state.style} onClick={this.changeToGreen}></div>
    }
}

export default Pixel