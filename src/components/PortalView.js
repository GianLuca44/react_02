import React, { Component } from 'react';
import Logo1 from '../img/cloud.png'
import Logo2 from '../img/copy.png'
import home from '../img/home.png'
import scissor from '../img/scissor.png'
import synchronize from '../img/synchronize.png'


import {Button, Form, FormControl, Navbar, Nav} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import SideNavigationBar from "./SideNavigationBar";
import SideNavigationBar_02 from "./SideNavigationBar_02";

export class PortalView extends Component {



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
            <Col xs="2" lg="2" style={{backgroundColor: '#ffaa50'} }>
                <SideNavigationBar_02 />

            </Col>
            <Col>
                <div className="input-group mb-3" id="svg-portal">
                    <div className="input-group mb-3" id="svg-signalOnPortal">

                    </div>
                    <svg width="500" height="350">
                        <g>
                            <line
                                id="navigation-axis"

                                x1="0"
                                y1="110"
                                x2="500"
                                y2="110"
                                stroke="black"
                                style="stroke-width: 2px;"
                            />
                        </g>
                        <g>
                            <line
                                id="FLS-axis"

                                x1="0"
                                y1="190"
                                x2="500"
                                y2="190"
                                stroke="black"
                                style="stroke-width: 2px;"
                            />
                        </g>
                        <g>
                            <line
                                id="first-lane"

                                x1="100"
                                y1="90"
                                x2="100"
                                y2="350"
                                stroke="black"
                                style="stroke-width: 2px;"
                            />
                        </g>
                        <g>
                            <line
                                id="second-lane"

                                x1="250"
                                y1="90"
                                x2="250"
                                y2="350"
                                stroke="black"
                                style="stroke-width: 2px;"
                            />
                        </g>
                        <g>
                            <rect
                                id="leftPole"
                                x="0"
                                y="150"
                                width="20"
                                height="400"
                                fill="grey"
                            />
                            <rect
                                id="horizontalPole"
                                x="0"
                                y="150"
                                width="500"
                                height="20"
                                fill="grey"
                            />
                            <rect
                                id="rightPole"
                                x="480"
                                y="150"
                                width="20"
                                height="200"
                                fill="grey"
                            />
                        </g>
                    </svg>
                </div>
            </Col>
        </Row>
    </div>
    )
  }
}



export default PortalView
