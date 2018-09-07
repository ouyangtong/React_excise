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

export default class PCNewsBlock extends React.Component {

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({news:json}));
    };

    render() {
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <li key={index}>
                    <Router>
                        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                            {newsItem.title}
                        </Link>
                    </Router>
                </li>
            ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewList">
                <Card>
                    <ul>
                      {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}