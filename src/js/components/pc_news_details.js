import React from 'react';
import {BrowserRouter as Router, Route, Link, browserHistory} from 'react-router-dom'
import {
    Row,
    Col,
    Menu,
    Icon,
    Input,
    Card,
    Form,
    message,
    Tabs,
    Button,
    CheckBox,
    Modal,
    Carousel
} from 'antd';

export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    };

    render(){
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}></Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}
