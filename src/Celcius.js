import React, { Component } from 'react'

export default class Celcius extends Component {
  render() {
    return (
      <div>
        <h1 className='text-lg'>Celcius: {this.props.celcius}</h1>
      </div>
    )
  }
}
