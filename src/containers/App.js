import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			alumni: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ alumni: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { alumni, searchfield } = this.state;
		const filteredRobots = alumni.filter(user => {
			return user.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !alumni.length ? 
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>Alumni</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList alumni={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}

export default App;