import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const PlanningPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={2}>行程规划</Title>
      <Card>
        <p>行程规划功能正在开发中...</p>
      </Card>
    </div>
  );
};

export default PlanningPage;