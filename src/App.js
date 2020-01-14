import React, {Component} from 'react';
import axios from 'axios';

import {Button, FormControl, Form, Nav, Navbar} from 'react-bootstrap'


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import '@fortawesome/fontawesome-free'

import './App.css';

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
