import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeOutlined, 
  PlusOutlined, 
  CalendarOutlined, 
  UserOutlined 
} from '@ant-design/icons';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/planning',
      icon: <PlusOutlined />,
      label: '规划行程',
    },
    {
      key: '/trips',
      icon: <CalendarOutlined />,
      label: '我的行程',
    },
  ];

  const handleMenuClick = (key: string) => {
    navigate(key);
  };

  return (
    <Header className="flex items-center justify-between px-4 bg-white shadow-sm">
      <div className="flex items-center">
        <div className="text-xl font-bold text-blue-600 mr-8">
          智能旅游规划
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => handleMenuClick(key)}
          className="flex-1 border-none"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <Button
          type="text"
          icon={<UserOutlined />}
          onClick={() => navigate('/profile')}
        >
          个人中心
        </Button>
        <Button type="primary">
          登录
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;