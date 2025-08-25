import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={2}>个人中心</Title>
      <Card>
        <p>个人设置功能正在开发中...</p>
      </Card>
    </div>
  );
};

export default ProfilePage;