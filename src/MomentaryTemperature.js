import React, { Component } from 'react';

export class MomentaryTemperature extends Component {
  render() {
    return (
      <div className='grid grid-rows-1 font-medium'>
        <h3 className='text-xl p-2 text-right'>Şu an sıcaklık : {this.props.momentaryTemperatureDegree}</h3>
      </div>
    )
  }
}

export default MomentaryTemperature;