import React from 'react';
import {
  Row,
  Col,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;

export default class PCFooter extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      adtion: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0
    };
  }

  render() {
    let {getFieldProps} = this.props.form;
    const userShow = this,state.hasLogined
    ?
    <Menu.Item key="logout" className="register">
      <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
      &nbsp;&nbsp;
      <Link target="_blank">
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type="ghost" htmlType="">退出</Button>
    </Menu.Item>
    :
    return(
      <footer>
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="footer">
          &copy;&nbsp;2018 ReactNews, All Rights Reserved.
        </Col>
        <Col span={2}></Col>
      </Row>
      </footer>
    );
  };
}