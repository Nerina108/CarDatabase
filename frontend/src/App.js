//all required imports
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import components
import CreateCar from "./components/create-car.component";
import EditCar from "./components/edit-car.component";
import CarList from "./components/car-list.component";
import OlderCars from "./components/older-cars.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-car"} className="nav-link">
                Car Database
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-car"} className="nav-link">
                  Add Car
                </Link>
              </Nav>

              <Nav>
                <Link to={"/car-list"} className="nav-link">
                  Car List
                </Link>
              </Nav>
            
            <Nav>
                <Link to={"/older-cars"} className="nav-link">
                  Cars Older than 5 years
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateCar} />
                <Route path="/create-car" component={CreateCar} />
                <Route path="/edit-car/:id" component={EditCar} />
                <Route path="/car-list" component={CarList} />
                <Route path="/older-cars" component={OlderCars}/>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;