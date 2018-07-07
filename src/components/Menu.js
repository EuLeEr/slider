import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
width: 248px;
height: 41px;
color: #464646;
font-size: 18px;
font-weight: 300;
line-height: 22px;

`
const WorkTime = styled.div`
	width: 181px;
	height: 38px;
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;
	span {
		color: #464646;
		font-size: 21px;
		font-weight: 500;
	}

`
class Adress extends React.Component {
	render() {
		return (
			<span> {this.props.addr} </span>
			)
	}

}

const CallButton= styled.button`
width: 176px;
height: 48px;
border-radius:30px;
background-color: #3fc7db;

`
class Menu extends React.Component {
	render(){
		return (
			<Row>
				<Col lg={3}>
					<Repair> Ремонт айфонов в сервисном 
							 центре и на выезде
					</Repair>

				</Col>
				<Col lg={3} lgOffset={3}>
					<WorkTime> Пн-пт с 10 до 20, сб,вс с 11 до 18
						<Adress addr="Ленинская, 301" />
					</WorkTime>
				</Col>
				<Col lg={3}>
					<WorkTime> Звонки принимаются 24 часа
						<Adress addr=" 8 (846) 922 55 44 " />
					</WorkTime>
				</Col>
				<Col lg={3}>
					<CallButton> Заказать звонок </CallButton>
				</Col>

			</Row>
			)
	}
}
export default Menu 