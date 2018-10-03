import React from 'react';
import {BrowserRouter as Router, Route, Link, browserHistory} from 'react-router-dom'
import {
    Row,
    Col,
    Menu,
    Icon,
    Input,
    Form,
    message,
    Tabs,
    Button,
    CheckBox,
    Modal,
    Carousel
} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProducts from './pc_products';

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/1.jpg" alt=""/></div>
                                    <div><img src="./src/images/2.jpg" alt=""/></div>
                                    <div><img src="./src/images/3.jpg" alt=""/></div>
                                    <div><img src="./src/images/4.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock
                                count={6}
                                type="guoji"
                                width="400px"
                                cardTitle="国际头条"
                                imageWidth="112px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key='1'>
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际新闻" key='2'>
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <Tabs className="tabs_product">
                            <TabPane tab="ReactNews 产品" key="1">
                                <PCProducts></PCProducts>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock
                                count={12}
                                type="guonei"
                                width="100%"
                                cardTitle="国内新闻"
                                imageWidth="132px"/>
                            <PCNewsImageBlock
                                count={16}
                                type="yule"
                                width="100%"
                                cardTitle="娱乐新闻"
                                imageWidth="132px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}