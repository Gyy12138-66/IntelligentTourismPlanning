// Core Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences?: TravelPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface TravelPreferences {
  interests: string[];
  budgetLevel: BudgetLevel;
  travelStyle: TravelStyle;
  dietary: string[];
  timePreferences: TimePreferences;
}

export interface TimePreferences {
  wakeUpTime: string;           // "07:00"
  bedTime: string;              // "22:00" 
  mealTimes: {
    breakfast: string;          // "08:00"
    lunch: string;              // "12:00"
    dinner: string;             // "18:00"
  };
  paceLevel: PaceLevel;         //行程节奏
  restInterval: number;         // 休息间隔(分钟)
  maxDailyHours: number;        // 每日最大活动时长
  bufferTime: number;           // 缓冲时间(分钟)
}

export interface Trip {
  id: string;
  userId: string;
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  travelers: number;
  status: TripStatus;
  budgetAmount?: number;
  budgetCurrency: string;
  actualCost?: number;
  itinerary: DayPlan[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DayPlan {
  id: string;
  tripId: string;
  date: Date;
  dayIndex: number;
  schedule: DaySchedule;
  activities: Activity[];
  accommodations: Accommodation[];
  transportation: Transportation[];
  meals: Meal[];
  estimatedCost: number;
  actualCost: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DaySchedule {
  startTime: string;            // 当日开始时间
  endTime: string;              // 当日结束时间
  timeSlots: TimeSlot[];        // 时间段安排
  totalActiveTime: number;      // 总活动时长(分钟)
  totalRestTime: number;        // 总休息时长(分钟)
  flexibility: number;          // 灵活度评分 0-10
}

export interface TimeSlot {
  id: string;
  startTime: string;            // 开始时间 "09:00"
  endTime: string;              // 结束时间 "11:30"
  duration: number;             // 时长(分钟)
  type: 'activity' | 'meal' | 'transportation' | 'rest';
  content: Activity | Meal | Transportation | RestPeriod;
  priority: Priority;
  isFlexible: boolean;          // 是否可调整时间
}

export interface Activity {
  id: string;
  dayPlanId: string;
  name: string;
  description?: string;
  category: string;
  location: Location;
  startTime: string;
  endTime: string;
  estimatedDuration: number;    // 预估时长(分钟)
  actualDuration?: number;      // 实际时长(分钟)
  priority: Priority;
  isFlexible: boolean;
  timeRequirements?: {
    preferredStartTime?: string;  // 首选开始时间
    mustFinishBy?: string;        // 必须完成时间
    minDuration: number;          // 最短时长
    maxDuration: number;          // 最长时长
  };
  cost: number;
  currency: string;
  bookingUrl?: string;
  rating?: number;
  imageUrl?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  placeId?: string;
  category?: string;
  rating?: number;
  priceLevel?: number;
  phoneNumber?: string;
  website?: string;
  imageUrls: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Accommodation {
  id: string;
  dayPlanId: string;
  name: string;
  type: AccommodationType;
  location: Location;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
  pricePerNight: number;
  totalPrice: number;
  currency: string;
  rating?: number;
  amenities: string[];
  imageUrls: string[];
  bookingUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transportation {
  id: string;
  dayPlanId: string;
  type: TransportationType;
  fromLocation: string;
  toLocation: string;
  departureTime: Date;
  arrivalTime: Date;
  duration: number;
  price: number;
  currency: string;
  provider?: string;
  bookingRef?: string;
  bookingUrl?: string;
  details?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Meal {
  id: string;
  dayPlanId: string;
  type: MealType;
  time: string;
  location: Location;
  estimatedCost: number;
  actualCost: number;
  currency: string;
  cuisine?: string;
  dietary: string[];
  reservationUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RestPeriod {
  id: string;
  duration: number;
  type: 'break' | 'nap' | 'free_time';
  location?: string;
  notes?: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Search & Filter Types
export interface SearchParams {
  query?: string;
  location?: string;
  category?: string;
  priceRange?: [number, number];
  rating?: number;
  page?: number;
  limit?: number;
}

export interface TripFilters {
  destination?: string;
  status?: TripStatus;
  dateRange?: [Date, Date];
  budgetRange?: [number, number];
}

// Planning Types
export interface PlanningRequest {
  destination: string;
  startDate: Date;
  endDate: Date;
  travelers: number;
  budget?: number;
  preferences: TravelPreferences;
  requirements?: string[];
}

export interface OptimizationResult {
  originalPlan: DayPlan[];
  optimizedPlan: DayPlan[];
  improvements: string[];
  costSavings: number;
  timeSavings: number;
}

// Enums
export enum BudgetLevel {
  BUDGET = 'BUDGET',
  MID = 'MID',
  LUXURY = 'LUXURY'
}

export enum TravelStyle {
  RELAXED = 'RELAXED',
  COMFORTABLE = 'COMFORTABLE',
  PACKED = 'PACKED',
  ADVENTURE = 'ADVENTURE'
}

export enum PaceLevel {
  COMPACT = 'COMPACT',
  COMFORTABLE = 'COMFORTABLE',
  LEISURELY = 'LEISURELY'
}

export enum TripStatus {
  PLANNING = 'PLANNING',
  BOOKED = 'BOOKED',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum AccommodationType {
  HOTEL = 'HOTEL',
  HOSTEL = 'HOSTEL',
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  RESORT = 'RESORT',
  GUESTHOUSE = 'GUESTHOUSE'
}

export enum TransportationType {
  FLIGHT = 'FLIGHT',
  TRAIN = 'TRAIN',
  BUS = 'BUS',
  CAR = 'CAR',
  TAXI = 'TAXI',
  WALK = 'WALK',
  BIKE = 'BIKE',
  METRO = 'METRO',
  FERRY = 'FERRY'
}

export enum MealType {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER',
  SNACK = 'SNACK'
}