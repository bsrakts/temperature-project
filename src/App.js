import {Container,Row,Col} from 'reactstrap';
import MomentaryTemperature from './MomentaryTemperature';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    let projectTitle ={baslik:"Temperature Conversion"};
    return (
      <div className='w-full h-[100vh] bg-gray-900 text-blue-300'>
        <Container className=''>
          <Row className=''>
            <h1 className="grid grid-rows-1 text-5xl font-bold d-flex justify-center mt-[10rem]">{projectTitle.baslik}</h1>
          </Row>
          <Row>
            <MomentaryTemperature/>
          </Row>
          <Row>
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
