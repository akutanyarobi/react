import React from 'react';

const Footer = () => {
	return (
		<div className="text-center">
			<h3 style={customCss}>Footer</h3>
		</div>
	);
};

const customCss = {
	color: 'white',
	backgroundColor: 'DodgerBlue',
	padding: '10px',
	marginTop: '30px',
};

export default Footer;
