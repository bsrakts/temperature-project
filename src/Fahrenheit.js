import React, { Component } from 'react'

export default class Fahrenheit extends Component {
    render() {
        return (
            <div>
                <h1 className='text-lg'>Fahrenheit: {this.props.fahrenheit}</h1>
            </div>
        )
    }
}
