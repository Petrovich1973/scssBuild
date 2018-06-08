import React from 'react';

class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.initialState = {};
	}

	render() {

		const { head, body, sort } = this.props.content;

		const sortRow = head.sort((a, b) => a.id - b.id);

		return (
			<div className="table-responsive">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							{sortRow.map((th, a) => {
								let iconDirection = sort.direction === 'ASK' ? 
													<i className="fa fa-fw fa-sort-down"/> : 
													<i className="fa fa-fw fa-sort-up"/>;
								return <th key={a}>{sort.name === th.param ? 
									iconDirection : 
									th.sorted ?
									<i className="fa fa-fw fa-sort"/> :
									null} <span>{th.name}</span></th>
							})}
						</tr>
					</thead>
					<tbody>
						{body.map((tr, a) => {
							return <tr key={a}>
								{sortRow.map((td, b) => {
									return <td key={b}>{tr[td.param]}</td>
								})}
							</tr>
						})}
					</tbody>
				</table>
			</div>
		);
	}
};

export default Table;