# 智能旅游规划软件

## 项目概述

这是一款智能旅游规划软件，旨在为用户提供全球范围内的个性化旅游规划服务。项目第一阶段将专注于新加坡旅游规划，涵盖交通、住宿、饮食、景点、花费等全方位旅游需求。

## 核心功能

### 1. 智能行程规划
- **个性化推荐**: 基于用户偏好、预算、时间等因素
- **路线优化**: 最优化景点游览顺序和交通路线
- **时间管理**: 合理分配各景点游览时间

### 2. 六大核心模块

#### 🚗 交通模块
- 实时航班信息查询和预订
- 本地交通（地铁、公交、打车）规划
- 交通费用预算和比较
- 实时交通状况和最优路线

#### 🏨 住宿模块  
- 酒店/民宿搜索和比价
- 基于位置的住宿推荐
- 用户评价和设施对比
- 价格趋势分析

#### 🍽️ 饮食模块
- 当地美食推荐
- 餐厅评价和预订
- 特色菜品介绍
- 价格区间筛选

#### 🏛️ 景点模块
- 热门景点信息和开放时间
- 门票价格和预订
- 用户评价和游玩攻略
- 个性化兴趣匹配

#### 💰 花费模块
- 全程费用预算规划
- 实时汇率转换
- 消费记录和分析
- 省钱建议和优化

#### ⏰ 时间管理模块
- **个人时间偏好设置**: 用户可设置每日起床时间、休息时间、活动节奏
- **时间段划分**: 上午/下午/晚上时间块自定义分配
- **活动时长估算**: 基于景点类型和用户偏好智能预估游览时间
- **缓冲时间管理**: 自动添加交通和休息缓冲时间
- **时间冲突检测**: 自动检测和解决行程时间冲突
- **灵活度调整**: 紧凑型/舒适型/休闲型行程节奏选择
- **实时时间跟踪**: 记录实际用时，优化后续规划
- **时区管理**: 多时区旅行的时间换算和调整

## 技术架构

### 前端技术栈
- **框架**: React/Vue.js + TypeScript
- **UI库**: Ant Design / Material-UI
- **地图**: Google Maps API / Mapbox
- **状态管理**: Redux/Zustand
- **构建工具**: Vite/Webpack

### 后端技术栈
- **语言**: Node.js + TypeScript / Python
- **框架**: Express.js / FastAPI
- **数据库**: PostgreSQL + Redis
- **ORM**: Prisma / SQLAlchemy
- **API文档**: Swagger/OpenAPI

### 核心API集成

#### 地图和位置服务
- **Google Maps Platform**
  - Places API (景点搜索)
  - Directions API (路线规划)
  - Distance Matrix API (距离计算)
- **Mapbox** (地图可视化)

#### 交通服务
- **Skyscanner API** (航班搜索)
- **Rome2rio API** (多模式交通)
- **新加坡LTA API** (本地交通实时信息)
- **Grab API** (本地打车服务)

#### 住宿服务
- **Booking.com API**
- **Airbnb API** (如可用)
- **Agoda API**
- **Hotels.com API**

#### 餐饮和景点
- **Foursquare API** (餐厅和景点)
- **Yelp API** (评价和推荐)
- **TripAdvisor API**
- **Zomato API** (餐饮)

#### 金融服务
- **ExchangeRate-API** (汇率)
- **Open Exchange Rates** (实时汇率)

## 数据模型设计

### 用户相关
```typescript
interface User {
  id: string;
  name: string;
  preferences: TravelPreferences;
  budget: Budget;
  travelHistory: Trip[];
}

interface TravelPreferences {
  interests: string[];
  budgetLevel: 'budget' | 'mid' | 'luxury';
  travelStyle: 'relaxed' | 'packed' | 'adventure';
  dietary: string[];
  timePreferences: TimePreferences;
}

interface TimePreferences {
  wakeUpTime: string;           // 起床时间 "07:00"
  bedTime: string;              // 睡觉时间 "22:00" 
  mealTimes: {
    breakfast: string;          // 早餐时间 "08:00"
    lunch: string;              // 午餐时间 "12:00"
    dinner: string;             // 晚餐时间 "18:00"
  };
  paceLevel: 'compact' | 'comfortable' | 'leisurely';  // 行程节奏
  restInterval: number;         // 休息间隔(分钟)
  maxDailyHours: number;        // 每日最大活动时长
  bufferTime: number;           // 缓冲时间(分钟)
}
```

### 规划相关
```typescript
interface Trip {
  id: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  travelers: number;
  budget: Budget;
  itinerary: DayPlan[];
  totalCost: Cost;
}

interface DayPlan {
  date: Date;
  activities: Activity[];
  accommodation: Accommodation;
  transportation: Transportation[];
  meals: Meal[];
  dailyCost: Cost;
  schedule: DaySchedule;
}

interface DaySchedule {
  startTime: string;            // 当日开始时间
  endTime: string;              // 当日结束时间
  timeSlots: TimeSlot[];        // 时间段安排
  totalActiveTime: number;      // 总活动时长(分钟)
  totalRestTime: number;        // 总休息时长(分钟)
  flexibility: number;          // 灵活度评分 0-10
}

interface TimeSlot {
  id: string;
  startTime: string;            // 开始时间 "09:00"
  endTime: string;              // 结束时间 "11:30"
  duration: number;             // 时长(分钟)
  type: 'activity' | 'meal' | 'transportation' | 'rest';
  content: Activity | Meal | Transportation | RestPeriod;
  priority: 'high' | 'medium' | 'low';
  isFlexible: boolean;          // 是否可调整时间
}

interface Activity {
  id: string;
  name: string;
  location: Location;
  estimatedDuration: number;    // 预估时长(分钟)
  actualDuration?: number;      // 实际时长(分钟)
  category: string;
  priority: number;
  timeRequirements?: {
    preferredStartTime?: string;  // 首选开始时间
    mustFinishBy?: string;        // 必须完成时间
    minDuration: number;          // 最短时长
    maxDuration: number;          // 最长时长
  };
}
```

## 开发阶段规划

### Phase 1: 基础架构搭建 (2-3周)
- 项目初始化和技术选型确认
- 数据库设计和API架构
- 基础用户认证系统
- 核心API集成框架

### Phase 2: 核心功能开发 (4-6周)
- 新加坡景点数据库建设
- 智能规划算法开发
- 六大模块基础功能实现
  - 时间管理和调度算法
  - 时间冲突检测和解决
  - 个性化时间偏好系统
- API数据整合和处理

### Phase 3: 用户界面开发 (3-4周)
- 响应式Web界面
- 地图集成和可视化
- 用户交互和体验优化
- 移动端适配

### Phase 4: 测试和优化 (2-3周)
- 功能测试和性能优化
- 用户体验测试
- API调用优化和错误处理
- 数据准确性验证

### Phase 5: 部署和扩展 (1-2周)
- 生产环境部署
- 监控和日志系统
- 为其他城市扩展做准备

## 项目文件结构

```
智能旅游规划/
├── frontend/                 # 前端应用
│   ├── src/
│   │   ├── components/       # 通用组件
│   │   │   ├── TimeManager/  # 时间管理组件
│   │   │   ├── Schedule/     # 日程安排组件
│   │   │   └── Timeline/     # 时间轴组件
│   │   ├── pages/           # 页面组件
│   │   ├── services/        # API服务
│   │   │   └── timeService.ts  # 时间管理服务
│   │   ├── utils/           # 工具函数
│   │   │   ├── timeUtils.ts  # 时间处理工具
│   │   │   └── scheduleUtils.ts # 日程算法工具
│   │   └── types/           # TypeScript类型
├── backend/                  # 后端服务
│   ├── src/
│   │   ├── controllers/     # 控制器
│   │   │   └── scheduleController.ts  # 时间调度控制器
│   │   ├── services/        # 业务逻辑
│   │   │   ├── scheduleService.ts     # 时间调度服务
│   │   │   ├── timeOptimizer.ts       # 时间优化算法
│   │   │   └── conflictResolver.ts    # 冲突解决服务
│   │   ├── models/          # 数据模型
│   │   ├── middleware/      # 中间件
│   │   └── routes/          # 路由
├── database/                 # 数据库相关
│   ├── migrations/          # 数据库迁移
│   ├── seeds/               # 测试数据
│   └── schemas/             # 数据库模式
├── docs/                     # 项目文档
├── tests/                    # 测试文件
└── deployment/               # 部署配置
```

## 成功指标

1. **功能完整性**: 覆盖新加坡主要旅游需求的90%以上
2. **数据准确性**: API数据实时性达到95%以上
3. **用户体验**: 页面加载时间<3秒，操作响应<1秒
4. **成本优化**: 为用户节省20%以上旅游费用
5. **扩展性**: 架构支持快速扩展到其他城市

## 下一步行动

1. 确认技术选型和开发环境
2. 申请各项API服务账户
3. 搭建开发环境和基础项目结构
4. 开始数据库设计和API架构开发
