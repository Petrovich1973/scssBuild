import React from 'react';
import ReactDOM from 'react-dom';

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
			<div>
				<div className="container">
					<h6 className="display-10">{ this.state.dateTime }</h6>
				</div>
				<Table content={DATA} />
			</div>			
		);
	}
}

const Table = (props) => (
	<div className="container">		
		<ul className="nav justify-content-end">
			<li className="nav-item">
				<a className="nav-link active" href="#">Active</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Link</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Link</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled" href="#">Disabled</a>
			</li>
		</ul>
		<h2>{TEXT} {'\u2728'}</h2>
		<p className="lead">
			Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
		</p>
		<div className="table-responsive">
			<table className="table table-striped table-sm">
				<thead>
					<tr>
						{props.content.head.sort((a, b) => {
							return a.id - b.id
						}).map((th, a) => {
							let iconDirection = props.content.sort.direction === 'ASK' ? <i className="fa fa-fw fa-sort-down"/> : <i className="fa fa-fw fa-sort-up"/>;
							return <th key={a}>{props.content.sort.name === th.param ? 
								iconDirection : 
								th.name !== '#' ?
								<i className="fa fa-fw fa-sort"/> :
								null} {th.name}</th>
						})}
					</tr>
				</thead>
				<tbody>
					{props.content.body.map((tr, a) => {
						return <tr key={a}>
							{props.content.head.sort((a, b) => {
								return a.id - b.id
							}).map((td, b) => {
								return <td key={b}>{tr[td.param]}</td>
							})}
						</tr>
					})}
				</tbody>
			</table>
		</div>
	</div>
);

ReactDOM.render( <App />, document.getElementById('root') );