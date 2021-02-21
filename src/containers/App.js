import React, { Component } from 'react';
import CardList from '../components/CardList';
import { doctors } from '../doctors'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
	constructor() {
		super()
		this.state = {
			doctors: doctors,
			searchfield: ''
		}
	}


onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
}

render() {
	const filteredDoctors = this.state.doctors.filter(doctors => {
		return doctors.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	return (
		<div className='tc'>
			<h1 className='f1'>Doctors of the Church... but they're actually robots</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<ErrorBoundary>
			<CardList doctors={filteredDoctors} />
			</ErrorBoundary>
			</Scroll>
		</div>
	);
};

};

export default App;
