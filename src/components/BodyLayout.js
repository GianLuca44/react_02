import React, { Component } from 'react';
import Logo1 from '../img/cloud.png'
import Logo2 from '../img/copy.png'



import {Button, Form, FormControl, Navbar, Nav} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export class BodyLayout extends Component {



  render() {

      const mystyle = {
          background: '#00aa50',
          padding: '5px',
          borderBottom: '5px #ccc dotted'
      };

      const mystyle_02 = {
          background: '#f4f4f4',
          padding: '5px',
          borderBottom: '1px #ccc dotted'
      }

    return (
    <div>
        <Row>
            <Col>

            </Col>
            <Col>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <Container>
                            <Row style={{backgroundColor: "orange"} }>
                                <Col xs={6} md={4}>
                                    <Image src={Logo1} rounded />
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={Logo2} roundedCircle />
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src="holder.js/171x180" thumbnail />
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="profile" title="Profile" style={{backgroundColor: "orange"}}>
                        <Image src="holder.js/100px250" fluid />
                    </Tab>
                    <Tab eventKey="contact" title="Contact">

                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </div>
    )
  }
}



export default BodyLayout
