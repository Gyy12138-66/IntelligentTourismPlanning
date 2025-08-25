import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const TripsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={2}>我的行程</Title>
      <Card>
        <p>行程管理功能正在开发中...</p>
      </Card>
    </div>
  );
};

export default TripsPage;