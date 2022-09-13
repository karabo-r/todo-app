import React from "react";
import styled from "styled-components";
const Contact = () => {
	return (
		<Container>
			<a href="https://github.com/karabo-r">Github</a>
			<a href="https://twitter.com/karabo_dev">Twitter</a>
		</Container>
	);
};

const Container = styled.div`
	right: 1rem;
	bottom: 1.5rem;
	font-size: 1rem;
	font-weight: 700;
	position: absolute;
	text-decoration: none;
	font-family: "Raleway", sans-serif;

	a {
		text-decoration: none;
		margin: 12px;
		color: black;
		opacity: 50%;
	}

	a:hover {
		opacity: 100%;
	}
`;
export default Contact;
