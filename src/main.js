import React, { Component, Suspense, lazy, } from 'react';

const BlazyComponent = lazy(() => {

	return import('./blazy');
});

class Main extends Component {

	render () {
		
		return (<Suspense fallback={<div>Loading...</div>}>
			<BlazyComponent/>
		</Suspense>);
	}
}

export default Main;