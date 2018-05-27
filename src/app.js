import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';

const App = () => (
	<div className="container">
		<h2>Start editing to see some magic happen {'\u2728'}</h2>

		<div className="table-responsive">
			<table className="table table-striped table-sm">
				<thead>
					<tr>
						<th>#</th>
						<th><i className="fa fa-fw fa-sort-down"/> name col 1</th>
						<th><i className="fa fa-fw fa-sort"/> name col 2</th>
						<th><i className="fa fa-fw fa-sort"/> name col 3</th>
						<th><i className="fa fa-fw fa-sort"/> name col 4</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>content col 1</td>
						<td>content col 2</td>
						<td>content col 3</td>
						<td>delectus enim cumque rque magni, nam ea quaerat ullam!</td>
					</tr>
					<tr>
						<td>2</td>
						<td>content col 1</td>
						<td>content col 2 quaerat ullam!</td>
						<td>content col 3</td>
						<td>content col 4</td>
					</tr>
					<tr>
						<td>3</td>
						<td>content col 1</td>
						<td>content col 2</td>
						<td>delectus enim cumque rque magni, nam ea quaerat ea quaerat ullam!</td>
						<td>content col 4</td>
					</tr>
					<tr>
						<td>4</td>
						<td>delectus enim cumque rque magni, nam ea quaerat ullam!</td>
						<td>content col 2</td>
						<td>content col 3</td>
						<td>content col 4</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
);

ReactDOM.render( <App />, document.getElementById('root') );