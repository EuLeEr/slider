import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Link from './Link';

const List = styled.ul`
	display: flex;
	justify-content: space-beetween;
	aligh-items: center;
	padding: 0;
	height: 49px
	background-color: #242424;
`

class Header extends React.Component {
	render() {
		return(
			<Row>
				<Col lg={12}>
					<nav>
					<List>
						<Link link="#" text="Вызов мастера" />
						<Link link="#" text="Наши преимущества"/>
						<Link link="#" text="Прайс на волшебство и чары"/>
						<Link link="#" text="Схема работы"/>
						<Link link="#" text="Отзывы клиентов"/>

					</List>

					</nav>

				</Col>
			</Row>

			)
	}
} 
export default Header