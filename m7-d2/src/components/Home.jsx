

import React, { Component } from "react";
import {Button,Form,Col, Row} from "react-bootstrap";
import { BiCurrentLocation} from 'react-icons/bi';
import { FaSearch} from 'react-icons/fa';


class Home extends Component {

  state={
    position:"",
    location:""
  }
    render() {

        return(

            <>
          
            <Form onSubmit={() => this.props.searchParams()}>

            <Form.Group controlId="position">
             
                <Form.Control type="text" placeholder="position" />
            </Form.Group>
            <Form.Group controlId="location">
             
             <Form.Control type="text" placeholder="location" />
         </Form.Group>
          <Button variant="primary" type="submit">
            Submit
        </Button>
                
            </Form>
          
            </>
        )}}
        export default Home
