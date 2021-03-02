import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import { doctors } from '../doctors'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'

function App() {
	const [ doctors, setDoctors ] = useState([])
	const [ searchfield, setSearchfield] = useState('')
// class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			doctors: doctors,
// 			searchfield: ''
// 		}
// 	}


const onSearchChange = (event) => {
	setSearchfield(event.target.value)
}

useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {setDoctors(users)});
}, [])

	const filteredDoctors = doctors.filter(doctors => {
		return doctors.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	return !doctors.length ? 
	<h1>Loading</h1> : 
	(
		<div className='tc'>
			<h1 className='f1'>Doctors of the Church... but they're actually robots</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
			<ErrorBoundary>
			<CardList doctors={filteredDoctors} />
			</ErrorBoundary>
			</Scroll>
		</div>
	);
};

export default App;
