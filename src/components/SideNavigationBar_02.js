import React, { Component } from 'react';




import {Button, Form, FormControl, Navbar, Nav} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo2 from "../img/copy.png";
import copy from "../img/copy.png"
import scissor from "../img/scissor.png"
import typeLetter from "../img/typeLetter.png"
import trash from "../img/waste.png"

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
                    <Image src={copy} roundedCircle />
                </Nav.Link>
                <Nav.Link eventKey="/portals" href="/portals">
                    <Image src={scissor} roundedCircle />
                </Nav.Link>
                <Nav.Link eventKey="/editPortal" href="/editPortals" >
                    <Image src={typeLetter} roundedCircle />
                    editPortal
                </Nav.Link>
                <Nav.Link eventKey="/editSigns" href="/editSigns" disabled>
                    <Image src={trash} roundedCircle />
                    Trash
                </Nav.Link>
            </Nav>
        </div>
  )
  }
}



export default TopNavigationBar
