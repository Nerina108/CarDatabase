import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//exports component CreateCar to allow user to add new car details

export default class CreateCar extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCarModel = this.onChangeCarModel.bind(this);
    this.onChangeCarMake = this.onChangeCarMake.bind(this);
    this.onChangeCarReg = this.onChangeCarReg.bind(this);
    this.onChangeCarOwner = this.onChangeCarOwner.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      model: '',
      make: '',
      reg: '',
      owner: ''
    }
  }

  // save values entered
  onChangeCarModel(e) {
    this.setState({ model: e.target.value })
  }

  onChangeCarMake(e) {
    this.setState({ make: e.target.value })
  }

  onChangeCarReg(e) {
    this.setState({ reg: e.target.value })
  }

  onChangeCarOwner(e) {
    this.setState({ owner: e.target.value})
  }

  // submit function saves data to database
  onSubmit(e) {
    e.preventDefault()

    const CarObject = {
      model: this.state.model,
      make: this.state.make,
      reg: this.state.reg,
      owner: this.state.owner
    };

    axios.post('http://localhost:4000/Cars/create-Car', CarObject)
      .then(res => console.log(res.data));

    this.setState({
      model: '',
      make: '',
      reg: '',
      owner: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Model">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" value={this.state.model} onChange={this.onChangeCarModel} />
        </Form.Group>

        <Form.Group controlId="Make">
          <Form.Label>Make</Form.Label>
          <Form.Control type="Make" value={this.state.make} onChange={this.onChangeCarMake} />
        </Form.Group>

        <Form.Group controlId="Reg">
          <Form.Label>Reg</Form.Label>
          <Form.Control type="text" value={this.state.reg} onChange={this.onChangeCarReg} />
        </Form.Group>

        <Form.Group controlId="Owner">
          <Form.Label>Owner</Form.Label>
          <Form.Control type="text" value={this.state.owner} onChange={this.onChangeCarOwner} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Add Car
        </Button>
      </Form>
    </div>);
  }
}
