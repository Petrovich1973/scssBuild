import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table';

import { TEXT, DATA } from './data.js';

import './main.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.initialState = {
			dateTime: ''
		};
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.tick();
	}

	componentWillUpdate() {
		setTimeout( this.tick, 1000 );
	}

	tick() {
		this.setState({
			dateTime: <div className="d-flex flex-row">
				<span className="align-self-center d-flex flex-row">
					<small className="align-self-center"><i className='fa fa-calendar'/></small>&nbsp;
					<span className="align-self-center">{ `${new Date().toLocaleDateString()}`}</span>
				</span>
				&nbsp;&nbsp;
				<span className="align-self-center d-flex flex-row">
					<small className="align-self-center"><i className='fa fa-clock-o'/></small>&nbsp;
					<span className="align-self-center">{`${new Date().toLocaleTimeString()}`}</span>
				</span>
			</div>
		});
	}

	render() {
		return (
			<div className="container">

				<h6 className="display-10">{ this.state.dateTime }</h6>
			
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link active" href="#">Active</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link 1</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link 2</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul>

				<h4 className="font-light">{TEXT}</h4>

				<Table content={DATA} />

				<div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
				<div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
				<div className="p-3 mb-2 bg-success text-white">.bg-success</div>
				<div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
				<div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
				<div className="p-3 mb-2 bg-info text-white">.bg-info</div>
				<div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
				<div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
				<div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
			</div>			
		);
	}
};



ReactDOM.render( <App />, document.getElementById('root') );