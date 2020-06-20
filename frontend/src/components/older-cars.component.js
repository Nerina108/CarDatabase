import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CarTableRow from './CarTableRow';

//exports OldCarList component to display all cars older than 5 years

export default class OldCarList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: []
    };
  }

  //load all cars that are older than 5 years

  componentDidMount() {
    axios.get('http://localhost:4000/Cars/older-cars')
      .then(res => {
        this.setState({
          cars: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
 
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

