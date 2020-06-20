import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//exports component EditCar allowing user to edit car details

export default class EditCar extends Component {

  constructor(props) {
    super(props)

    this.onChangeCarModel = this.onChangeCarModel.bind(this);
    this.onChangeCarMake = this.onChangeCarMake.bind(this);
    this.onChangeCarReg = this.onChangeCarReg.bind(this);
    this.onChangeCarOwner = this.onChangeCarOwner.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      model: '',
      make: '',
      reg: '',
      owner: ''
    }
  }

  //loads all cars for user to edit
  componentDidMount() {
    axios.get('http://localhost:4000/Cars/edit-Car/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          model: res.data.model,
          make: res.data.make,
          reg: res.data.reg,
          owner: res.data.owner
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

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

  //saves new car details on submit and updates
  onSubmit(e) {
    e.preventDefault()

    const CarObject = {
      model: this.state.model,
      make: this.state.make,
      reg: this.state.reg,
      owner: this.state.owner
    };

    axios.put('http://localhost:4000/Cars/update-Car/' + this.props.match.params.id, CarObject)
      .then((res) => {
        console.log(res.data)
        console.log('Car successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Car List 
    this.props.history.push('/Car-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="model">
          <Form.Label>model</Form.Label>
          <Form.Control type="text" value={this.state.model} onChange={this.onChangeCarModel} />
        </Form.Group>

        <Form.Group controlId="make">
          <Form.Label>Make</Form.Label>
          <Form.Control type="make" value={this.state.make} onChange={this.onChangeCarMake} />
        </Form.Group>

        <Form.Group controlId="reg">
          <Form.Label>Reg</Form.Label>
          <Form.Control type="text" value={this.state.reg} onChange={this.onChangeCarReg} />
        </Form.Group>

        <Form.Group controlId="owner">
          <Form.Label>Owner</Form.Label>
          <Form.Control type="text" value={this.state.owner} onChange={this.onChangeCarOwner} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Car
        </Button>
      </Form>
    </div>);
  }
}
