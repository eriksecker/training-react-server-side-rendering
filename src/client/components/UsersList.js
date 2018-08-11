import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersList extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		return (
			<div>
				Here's a big list of users:
				<ul>{ this.renderUsers() }</ul>
			</div>
		);
	}

	renderUsers() {
		return this.props.users.map( user => {
			return <li key={user.id}>{ user.name }</li>
		});
	}
}

function mapStateToProps(state) {
	return {
		users: state.users,
	};
}

UsersList = connect(mapStateToProps, { fetchUsers })(UsersList);

export default UsersList;

export function loadData(store) {
	return store.dispatch( fetchUsers() );
}
