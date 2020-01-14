import React, { Component } from 'react';




import {Button, Form, FormControl, Navbar, Nav} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo2 from "../img/copy.png";

export class TopNavigationBar extends Component {



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
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">
                    <Image src={Logo2} roundedCircle />
                </Nav.Link>
                <Nav.Link eventKey="/portals" href="/portals">
                    <Image src={Logo2} roundedCircle />
                </Nav.Link>
                <Nav.Link eventKey="/editPortal" href="/editPortals" >editPortal</Nav.Link>
                <Nav.Link eventKey="/editSigns" href="/editSigns" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        </div>
  )
  }
}



export default TopNavigationBar
