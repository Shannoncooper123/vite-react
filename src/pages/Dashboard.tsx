import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Navigation } from '@/components/Navigation'
import * as Recharts from 'recharts'
import { Props as LegendProps } from 'recharts/types/component/Legend'
import { Props as DefaultLegendContentProps } from 'recharts/types/component/DefaultLegendContent'

// 添加 steps 数据到 userData 类型
interface WeeklyProgress {
  calories: {
    burned: number
    goal: number
    data: Array<{
      day: string
      calories: number
      target: number
    }>
  }
  workouts: {
    completed: number
    goal: number
    data: number[]
    types: Array<{
      name: string
      value: number
    }>
  }
  nutrition: {
    data: Array<{
      name: string
      value: number
      goal: number
    }>
  }
  progress: {
    monthly: Array<{
      month: string
      weight: number
      bodyFat: number
    }>
  }
  steps: {
    current: number
    goal: number
    data: number[]
  }
}

interface UserData {
  profile: {
    name: string
    level: string
    streak: number
    nextMilestone: string
    progress: number
    bodyMetrics: {
      weight: string
      height: string
      bmi: string
      bodyFat: string
      muscleMass: string
      restingHeartRate: string
      vo2Max: string
    }
  }
  weeklyProgress: WeeklyProgress
  upcomingWorkouts: Array<{
    id: number
    name: string
    time: string
    duration: string
    difficulty: string
    calories: number
  }>
  recentAchievements: Array<{
    id: number
    title: string
    icon: string
    date: string
  }>
}

// 添加 steps 数据
const userData: UserData = {
  profile: {
    name: "Alex Thompson",
    level: "Advanced",
    streak: 28,
    nextMilestone: "Diamond",
    progress: 85,
    bodyMetrics: {
      weight: "75kg",
      height: "180cm",
      bmi: "23.1",
      bodyFat: "18%",
      muscleMass: "62%",
      restingHeartRate: "65 bpm",
      vo2Max: "48.5 ml/kg/min"
    }
  },
  weeklyProgress: {
    calories: {
      burned: 3200,
      goal: 4000,
      data: [
        { day: 'Mon', calories: 420, target: 500 },
        { day: 'Tue', calories: 380, target: 500 },
        { day: 'Wed', calories: 450, target: 500 },
        { day: 'Thu', calories: 520, target: 500 },
        { day: 'Fri', calories: 390, target: 500 },
        { day: 'Sat', calories: 480, target: 500 },
        { day: 'Sun', calories: 560, target: 500 }
      ]
    },
    workouts: {
      completed: 5,
      goal: 6,
      data: [1, 1, 0, 1, 1, 0, 1],
      types: [
        { name: 'Strength', value: 45 },
        { name: 'Cardio', value: 30 },
        { name: 'Flexibility', value: 15 },
        { name: 'HIIT', value: 10 }
      ]
    },
    nutrition: {
      data: [
        { name: 'Protein', value: 35, goal: 40 },
        { name: 'Carbs', value: 45, goal: 40 },
        { name: 'Fats', value: 20, goal: 20 }
      ]
    },
    progress: {
      monthly: [
        { month: 'Jan', weight: 78, bodyFat: 20 },
        { month: 'Feb', weight: 77, bodyFat: 19 },
        { month: 'Mar', weight: 76, bodyFat: 18.5 },
        { month: 'Apr', weight: 75, bodyFat: 18 }
      ]
    },
    steps: {
      current: 8500,
      goal: 10000,
      data: [7800, 9200, 8400, 8900, 7600, 9500, 8500]
    }
  },
  upcomingWorkouts: [
    {
      id: 1,
      name: "HIIT Cardio",
      time: "Today, 6:00 PM",
      duration: "45 min",
      difficulty: "High",
      calories: 400
    },
    {
      id: 2,
      name: "Strength Training",
      time: "Tomorrow, 7:30 AM",
      duration: "60 min",
      difficulty: "Medium",
      calories: 350
    }
  ],
  recentAchievements: [
    {
      id: 1,
      title: "4 Week Streak",
      icon: "🔥",
      date: "Today"
    },
    {
      id: 2,
      title: "Personal Best: Deadlift",
      icon: "💪",
      date: "Yesterday"
    }
  ]
}

const COLORS = ['#8b5cf6', '#6366f1', '#ec4899', '#f43f5e']

// 修复 Legend content 的类型
interface LegendPayload {
  value: string
  color: string
}

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* User Overview */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome back, {userData.profile.name}
                </h1>
                <p className="text-gray-300">
                  Level: {userData.profile.level} • {userData.profile.streak} Day Streak 🔥
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-300 mb-1">Next Milestone: {userData.profile.nextMilestone}</div>
                <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${userData.profile.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Body Metrics */}
            <div className="grid grid-cols-7 gap-4 mb-8">
              {Object.entries(userData.profile.bodyMetrics).map(([key, value]) => (
                <Card key={key} className="p-4 bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="text-gray-400 text-sm mb-1 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-xl font-bold text-white">{value}</div>
                </Card>
              ))}
            </div>

            {/* Weekly Progress */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Calories Card */}
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Calories Burned</h3>
                <div className="h-32 mb-4">
                  {/* Replace with actual chart component */}
                  <div className="h-full bg-gradient-to-t from-purple-500/20 to-transparent rounded" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {userData.weeklyProgress.calories.burned}
                    </div>
                    <div className="text-sm text-gray-400">of {userData.weeklyProgress.calories.goal} kcal</div>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <div className="text-2xl">🔥</div>
                  </div>
                </div>
              </Card>

              {/* Steps Card */}
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Daily Steps</h3>
                <div className="relative h-32 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-4 border-purple-500/20" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {Math.round((userData.weeklyProgress.steps.current / userData.weeklyProgress.steps.goal) * 100)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {userData.weeklyProgress.steps.current.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">of {userData.weeklyProgress.steps.goal.toLocaleString()} steps</div>
                </div>
              </Card>

              {/* Workout Completion */}
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Weekly Workouts</h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {userData.weeklyProgress.workouts.data.map((completed, index) => (
                    <div
                      key={index}
                      className={`h-12 rounded ${
                        completed ? 'bg-purple-500' : 'bg-white/10'
                      } flex items-center justify-center text-xs text-white`}
                    >
                      {completed ? '✓' : ''}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {userData.weeklyProgress.workouts.completed}/{userData.weeklyProgress.workouts.goal}
                  </div>
                  <div className="text-sm text-gray-400">workouts completed</div>
                </div>
              </Card>
            </div>

            {/* Upcoming Workouts & Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upcoming Workouts */}
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Upcoming Workouts</h3>
                <div className="space-y-4">
                  {userData.upcomingWorkouts.map(workout => (
                    <div key={workout.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div>
                        <div className="font-semibold text-white">{workout.name}</div>
                        <div className="text-sm text-gray-400">{workout.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-purple-400">{workout.duration}</div>
                        <div className="text-xs text-gray-400">{workout.calories} kcal</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Achievements */}
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Achievements</h3>
                <div className="space-y-4">
                  {userData.recentAchievements.map(achievement => (
                    <div key={achievement.id} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{achievement.title}</div>
                        <div className="text-sm text-gray-400">{achievement.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* 扩展的身体指标部分 */}
          <div className="grid grid-cols-7 gap-4 mb-8">
            {Object.entries(userData.profile.bodyMetrics).map(([key, value]) => (
              <Card key={key} className="p-4 bg-white/5 backdrop-blur-sm border-white/10">
                <div className="text-gray-400 text-sm mb-1 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-xl font-bold text-white">{value}</div>
              </Card>
            ))}
          </div>

          {/* 新增的详细进度图表 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* 卡路里燃烧趋势 */}
            <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Calories Burned Trend</h3>
              <div className="h-[300px]">
                <Recharts.ResponsiveContainer width="100%" height="100%">
                  <Recharts.AreaChart data={userData.weeklyProgress.calories.data}>
                    <defs>
                      <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Recharts.CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <Recharts.XAxis dataKey="day" stroke="#9ca3af" />
                    <Recharts.YAxis stroke="#9ca3af" />
                    <Recharts.Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Recharts.Area
                      type="monotone"
                      dataKey="calories"
                      stroke="#8b5cf6"
                      fillOpacity={1}
                      fill="url(#colorCalories)"
                    />
                    <Recharts.Line
                      type="monotone"
                      dataKey="target"
                      stroke="#ec4899"
                      strokeDasharray="5 5"
                    />
                  </Recharts.AreaChart>
                </Recharts.ResponsiveContainer>
              </div>
            </Card>

            {/* 训练类型分布 */}
            <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Workout Distribution</h3>
              <div className="h-[300px]">
                <Recharts.ResponsiveContainer width="100%" height="100%">
                  <Recharts.PieChart>
                    <Recharts.Pie
                      data={userData.weeklyProgress.workouts.types}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {userData.weeklyProgress.workouts.types.map((entry, index) => (
                        <Recharts.Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Recharts.Pie>
                    <Recharts.Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Recharts.Legend
                      verticalAlign="bottom"
                      height={36}
                      content={(props: DefaultLegendContentProps) => {
                        const { payload } = props
                        if (!payload) return null
                        
                        return (
                          <div className="flex justify-center gap-4">
                            {payload.map((entry, index) => (
                              <div key={`legend-${index}`} className="flex items-center">
                                <div
                                  className="w-3 h-3 rounded-full mr-2"
                                  style={{ backgroundColor: entry.color }}
                                />
                                <span className="text-sm text-gray-300">{entry.value}</span>
                              </div>
                            ))}
                          </div>
                        )
                      }}
                    />
                  </Recharts.PieChart>
                </Recharts.ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* 营养摄入和体重变化趋势 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* 营养摄入比例 */}
            <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Nutrition Distribution</h3>
              <div className="space-y-4">
                {userData.weeklyProgress.nutrition.data.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-purple-400">{item.value}% of {item.goal}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(item.value / item.goal) * 100}%`,
                          backgroundColor: COLORS[index]
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* 体重和体脂趋势 */}
            <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Progress Tracking</h3>
              <div className="h-[300px]">
                <Recharts.ResponsiveContainer width="100%" height="100%">
                  <Recharts.LineChart data={userData.weeklyProgress.progress.monthly}>
                    <Recharts.CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <Recharts.XAxis dataKey="month" stroke="#9ca3af" />
                    <Recharts.YAxis yAxisId="left" stroke="#9ca3af" />
                    <Recharts.YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
                    <Recharts.Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Recharts.Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="weight"
                      stroke="#8b5cf6"
                      activeDot={{ r: 8 }}
                    />
                    <Recharts.Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="bodyFat"
                      stroke="#ec4899"
                      activeDot={{ r: 8 }}
                    />
                    <Recharts.Legend />
                  </Recharts.LineChart>
                </Recharts.ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 