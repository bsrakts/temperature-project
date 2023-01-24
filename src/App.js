import {Container,Row,Col} from 'reactstrap';
import MomentaryTemperature from './MomentaryTemperature';
import Celcius from './Celcius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin'
import React, { Component } from 'react';

class App extends Component {
  state = {momentaryTemperatureDegree:0 , celcius:0 , fahrenheit: 32 , kelvin: 273.15 };
  increaseDegree = (degree) => {
    this.state.momentaryTemperatureDegree = degree + 1;
    this.setState({celcius: this.state.momentaryTemperatureDegree});
    this.setState({fahrenheit: ((this.state.momentaryTemperatureDegree) * 9) / 5 + 32 });
    this.setState({kelvin: this.state.momentaryTemperatureDegree + 273.15});
  };


  render() {
    let projectTitle ={baslik:"Temperature Conversion"};
    return (
      <div className='w-full h-[100vh] bg-gray-900 text-blue-300'>
        <Container className=''>
          <Row className=''>
            <h1 className="grid grid-rows-1 text-6xl font-bold d-flex justify-center mt-[20rem]">{projectTitle.baslik}</h1>
          </Row>
          <Row className='mt-[5rem] d-flex justify-center items-center'>
          <Col xs="6">
        <MomentaryTemperature momentaryTemperatureDegree={this.state.momentaryTemperatureDegree}/>
        </Col>
        <Col xs="6">
        <button className='border-2 p-2 border-red-500 text-red-500' onClick={() => this.increaseDegree(this.state.momentaryTemperatureDegree)}>
          Increase Temperature
        </button>
        </Col>
          </Row>
          <Row className='d-flex justify-center text-center mt-[6rem]'>
             <Col xs="3">
               <Celcius celcius={this.state.celcius}/>
             </Col>
             <Col xs="3">
             <Fahrenheit fahrenheit={this.state.fahrenheit}/>
             </Col>
             <Col xs="3">
              <Kelvin kelvin={this.state.kelvin}/>
             </Col>
          </Row>
          {/* <Row>
            <Col xs="5">
              <Category 
              seciliCategory={this.state.seciliCategory}
              categoryChange={this.categoryChange} 
              BilgiCategory={BilgiCategory} />
            </Col>
            <Col xs="7">
              <ProductList 
              seciliCategory={this.state.seciliCategory}
              BilgiProductList={BilgiProductList} />
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default App;
