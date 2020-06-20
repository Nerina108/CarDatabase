import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// exports component CarTableRow which displays cars in orderly table
// and has edit and delete buttons for the user to select

export default class CarTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCar = this.deleteCar.bind(this);
    }

    deleteCar() {
        axios.delete('http://localhost:4000/Cars/delete-car/' + this.props.obj._id)
            .then((res) => {
                console.log('Car successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.model}</td>
                <td>{this.props.obj.make}</td>
                <td>{this.props.obj.reg}</td>
                <td>{this.props.obj.owner}</td>
                <td>
                    <Link className="edit-link" to={"/edit-car/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteCar} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}