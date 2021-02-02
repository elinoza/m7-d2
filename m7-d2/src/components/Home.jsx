

import React, { Component } from "react";
import {Button,Form,Col, Row} from "react-bootstrap";
import { BiCurrentLocation} from 'react-icons/bi';
import { FaSearch} from 'react-icons/fa';


class Home extends Component {

  state={
    position:"",
    location:""
    
  }
  handleSubmit=()=>{
    this.props.searchParams(this.state.position,this.state.location)
    this.props.history.push("/details")

  }
    render() {
        return(
            <Form onSubmit={()=>this.handleSubmit } >

            <Form.Group controlId="position">
             
                <Form.Control onChange={(e)=>this.setState({position:e.currentTarget.value})} type="text" placeholder="position" />
            </Form.Group>
            <Form.Group controlId="location">
             
             <Form.Control  onChange={(e)=>this.setState({location:e.currentTarget.value})} type="text" placeholder="location" />
         </Form.Group>
            <Button variant="primary" type="submit">Submit </Button>
                
            </Form>

        )
    }
}

export default Home;
