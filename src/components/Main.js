import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './slider';

const Repair=styled.div`
	width: 427px;
	color: #ffffff;
	font-weight: 700;
	line-height: 50px;
	font-size: 40px;

	span{
	display:block;
	font-size: 24px;
	line-height: 30px;

	}
`
const LightText = styled.div`
	width: 486px;
	height: 74px;
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 54px;


`
const CallButton = styled.button`
	width: 247px;
	height: 67px;
	background-color: #ffa14b;
	border-radius:30px;
	margin-top:32px;
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
	line-height: 24px;


`

class Main extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={3}>
					<Repair>
						Качественный ремонт
						<span>iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LightText>
						Оставьте заявку на бесплатную диагностику без очереди,
						и получите защитное стекло, стоимостью 1000 рублей,
						с установкой в подарок!
					</LightText>
					<CallButton>Отправить заявку
					</CallButton>
				</Col>
				<Col lg={3} lgOffse={1}>
					<Slider />
				</Col>
			</Row>
			)
	}
}
export default Main