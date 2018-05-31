import React from 'react';

class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.initialState = {};
	}

	render() {

		const { head, body, sort } = this.props.content;
		const { text } = this.props;

		return (
			<div className="container">	
				<h3>{text}</h3>
				<p className="lead">
					Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
				</p>
				<div className="table-responsive">
					<table className="table table-striped table-sm">
						<thead>
							<tr>
								{head.sort((a, b) => {
									return a.id - b.id
								}).map((th, a) => {
									let iconDirection = sort.direction === 'ASK' ? <i className="fa fa-fw fa-sort-down"/> : <i className="fa fa-fw fa-sort-up"/>;
									return <th key={a}>{sort.name === th.param ? 
										iconDirection : 
										th.name !== '#' ?
										<i className="fa fa-fw fa-sort"/> :
										null} <span>{th.name}</span></th>
								})}
							</tr>
						</thead>
						<tbody>
							{body.map((tr, a) => {
								return <tr key={a}>
									{head.sort((a, b) => {
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
	}
};

export default Table;