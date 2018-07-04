import React from 'react';
import classnames from 'classnames';

import './table.scss';

class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.initialState = {};
	}

	calculation(list, name) {
		var initialValue = 0;
		return list.reduce((accumulator, currentValue) => {
		    return accumulator + currentValue[name];
		},initialValue)
	}

	render() {

		const { head, body, sort } = this.props.content;

		const sortRow = head.sort((a, b) => a.id - b.id);

		const total = this.calculation(body, 'age');

		return (
			<div className="table-responsive">
				<table className="table table-striped">

					<thead>
						<tr>
							{sortRow.map((th, a) => {
								let iconDirection = sort.direction === 'ASK' ? 
													<i className="fa fa-fw fa-sort-down"/> : 
													<i className="fa fa-fw fa-sort-up"/>;
								return <th key={a} className={th.param == 'age' ? 'text-right' : null}>{sort.name === th.param ? 
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
									return <td key={b} className={td.param == 'age' ? 'text-right' : null}>{tr[td.param]}</td>
								})}
							</tr>
						})}
					</tbody>

					<tfoot>
						<tr>
							<td colSpan="2">Итого</td>
							<td className={classnames('text-right', total < 100 ? 'table-success' : 'table-danger')}>
								{total}
							</td>
							<td colSpan="2"/>
						</tr>
					</tfoot>

				</table>
			</div>
		);
	}
};

export default Table;