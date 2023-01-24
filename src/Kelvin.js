import React, { Component } from 'react' 

export default class Kelvin extends Component {
    render() {
        return (
            <div>
                <h1 className='text-lg'>Kelvin: {this.props.kelvin}</h1>
            </div>
        )
    }
}
