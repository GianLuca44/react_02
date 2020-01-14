import React, {Component} from 'react';
import axios from 'axios';

import {Button, FormControl, Form, Nav, Navbar} from 'react-bootstrap'


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import '@fortawesome/fontawesome-free'

import './App.css';

import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Logo1 from "./logo1.png";
import Logo2 from "./logo2.png";



class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((res) => this.setState({ todos: res.data }));
	}



	render() {

		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/features">Features</Nav.Link>
						<Nav.Link href="/pricing">Pricing</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Navbar>
				<Alert variant="success">
					<Alert.Heading>Hey, nice to see you</Alert.Heading>
					<p>
						Aww yeah, you successfully read this important alert message. This example
						text is going to run a bit longer so that you can see how spacing within an
						alert works with this kind of content.
					</p>
					<hr />
					<p className="mb-0">
						Whenever you need to, be sure to use margin utilities to keep things nice
						and tidy.
					</p>
				</Alert>

				<Accordion defaultActiveKey="0">
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								Click me!
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>Hello! I'm the body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								Click me!
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Home">
						<Container>
							<Row>
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
					<Tab eventKey="profile" title="Profile">
						<Image src="holder.js/100px250" fluid />
					</Tab>
					<Tab eventKey="contact" title="Contact">

					</Tab>
				</Tabs>

			</>
		);
	}
}

export default App;
