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

import Logo1 from "./img/cloud.png";
import Logo2 from "./img/copy.png";
import TopNavigationBar from "./components/TopNavigationBar";
import BodyLayout from "./components/BodyLayout";



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
				<TopNavigationBar/>

				<BodyLayout/>

			</>
		);
	}
}

export default App;
