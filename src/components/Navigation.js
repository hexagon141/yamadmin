import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;


const Navigation = () => (
  <Sider trigger={null} collapsible collapsed={false}>
    <div className="logo">
      <h1>Yam</h1>
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Icon type="home" />
        <span>Главная</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="shop" />
        <span>Кухни</span>
        <Link to="/kitchens/" />
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="shopping" />
        <span>Продукты</span>
        <Link to="/products/" />
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="smile" />
        <span>Клиенты</span>
        <Link to="/clients/" />
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="car" />
        <span>Курьеры</span>
        <Link to="/riders/" />
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={(
          <span>
            <Icon type="shopping-cart" />
            <span>Заказы</span>
          </span>
        )}
      >
        <Menu.Item key="6">
          Активные
          <Link to="/orders/active/" />
        </Menu.Item>
        <Menu.Item key="7">
          Завершенные
          <Link to="/orders/finished/" />
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="8">
        <Icon type="user" />
        <span>Администраторы</span>
        <Link to="/admins/" />
      </Menu.Item>
    </Menu>
  </Sider>
)

export default Navigation;
