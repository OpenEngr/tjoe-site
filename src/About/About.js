import React, {PropTypes} from 'react';

export const About = React.createClass({
	propTypes: {
		routeParams: PropTypes.object,
	},

	render: function() {
		return (
			<div className="about-iframe-container">

				<iframe className="article-iframe" src={'https://www.pubpub.org/pub/about-tjoe?embed=true&hideRightPanel=true'}/>

			</div>
		);
	}

});

export default About;
