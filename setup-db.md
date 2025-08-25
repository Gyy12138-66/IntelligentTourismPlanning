# 数据库配置指南

## 1. 安装PostgreSQL

### macOS (使用Homebrew):
```bash
brew install postgresql
brew services start postgresql
```

### 创建数据库和用户:
```bash
# 进入PostgreSQL命令行
psql postgres

# 创建用户
CREATE USER travel_user WITH PASSWORD 'travel_password';

# 创建数据库
CREATE DATABASE travel_planner OWNER travel_user;

# 授权
GRANT ALL PRIVILEGES ON DATABASE travel_planner TO travel_user;

# 退出
\q
```

## 2. 更新环境变量

请在 `backend/.env` 文件中更新以下配置：

```env
DATABASE_URL="postgresql://travel_user:travel_password@localhost:5432/travel_planner"
```

## 3. 运行数据库迁移

```bash
cd backend
npm run db:generate
npm run db:migrate
```

## 4. (可选) 安装Redis

### macOS:
```bash
brew install redis
brew services start redis
```

如果不想使用Redis，可以注释掉 `.env` 中的 `REDIS_URL`。