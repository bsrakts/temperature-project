import React, { Component } from 'react'

export class MomentaryTemperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className='grid grid-rows-1 font-medium ml-52'>
        <h4 className='text-lg mt-[5rem]'>Şu an sıcaklık : {this.state.count}</h4>
        
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}

export default MomentaryTemperature;