import React from 'react';

const Home = () => {
	return (
		<div>
			I'm the best Home component
			<button className="btn btn-primary" onClick={ () => { console.log('hello there') }}>Press Me</button>
		</div>
	);
}

export default Home;
