import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './Home';
import Navigationbar from './Navbar';

const App = () => {
	return (
			<BrowserRouter>
				<Navigationbar />
				<Container>
					<Switch>
						<Route
								path='/'
								exact
								render={
									props => <Home {...props}/>}
						/>
					</Switch>
				</Container>
			</BrowserRouter>
	);
};

export default App;
