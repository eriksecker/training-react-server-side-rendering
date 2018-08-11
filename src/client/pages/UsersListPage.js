import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersListPage extends Component {
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

UsersListPage = connect(mapStateToProps, { fetchUsers })(UsersListPage);

function loadData(store) {
	return store.dispatch( fetchUsers() );
}

export default {
	loadData,
	component: UsersListPage,
};
