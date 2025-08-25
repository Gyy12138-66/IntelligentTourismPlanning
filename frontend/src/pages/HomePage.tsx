import React from 'react';
import { Card, Button, Row, Col, Typography, Space } from 'antd';
import { PlusOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <GlobalOutlined className="text-4xl text-blue-500" />,
      title: '智能规划',
      description: '基于您的偏好和时间，智能生成个性化旅游行程',
    },
    {
      icon: <CalendarOutlined className="text-4xl text-green-500" />,
      title: '时间管理',
      description: '合理安排每日时间，包含交通、休息和缓冲时间',
    },
    {
      icon: <PlusOutlined className="text-4xl text-purple-500" />,
      title: '实时数据',
      description: '整合多个平台的实时数据，提供最新的价格和信息',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Title level={1} className="mb-4">
            智能旅游规划助手
          </Title>
          <Paragraph className="text-lg text-gray-600 mb-8">
            让AI帮您规划完美的新加坡之旅，包含交通、住宿、餐饮、景点和时间管理
          </Paragraph>
          <Space size="large">
            <Button 
              type="primary" 
              size="large"
              onClick={() => navigate('/planning')}
            >
              开始规划行程
            </Button>
            <Button 
              size="large"
              onClick={() => navigate('/trips')}
            >
              查看我的行程
            </Button>
          </Space>
        </div>

        {/* Features Section */}
        <Row gutter={[24, 24]} className="mb-16">
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                className="text-center h-full hover:shadow-lg transition-shadow"
                bordered={false}
              >
                <div className="mb-4">{feature.icon}</div>
                <Title level={4}>{feature.title}</Title>
                <Paragraph className="text-gray-600">
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div className="text-center bg-blue-500 text-white p-12 rounded-lg">
          <Title level={2} className="text-white mb-4">
            准备好开始您的新加坡之旅了吗？
          </Title>
          <Paragraph className="text-blue-100 mb-6 text-lg">
            只需几分钟，即可获得专属的智能旅游规划
          </Paragraph>
          <Button 
            type="default" 
            size="large"
            onClick={() => navigate('/planning')}
          >
            立即开始规划
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;