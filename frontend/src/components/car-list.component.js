import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CarTableRow from './CarTableRow';

// export component CarList to display all cars
export default class CarList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: []
    };
  }

  //load cars from database on start
  componentDidMount() {
    axios.get('http://localhost:4000/Cars/')
      .then(res => {
        this.setState({
          cars: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Display cars in an ordered table
  DataTable() {
    return this.state.cars.map((res, i) => {
      return <CarTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Model</th>
            <th>Make</th>
            <th>Reg</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}