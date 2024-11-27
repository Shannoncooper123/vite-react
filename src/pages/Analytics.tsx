import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import * as Recharts from 'recharts'

const analyticsData = {
  workoutStats: {
    totalWorkouts: 48,
    totalMinutes: 1440,
    averageIntensity: "Medium",
    favoriteWorkouts: ["Strength Training", "HIIT", "Yoga"]
  },
  progressMetrics: {
    weightLifted: "2,500 kg",
    caloriesBurned: "12,400",
    workoutStreak: 15,
    personalRecords: 8
  },
  goals: {
    current: [
      { name: "Weight Loss", target: "5kg", progress: 60 },
      { name: "Workout Frequency", target: "4x/week", progress: 75 },
      { name: "Run Distance", target: "5km", progress: 40 }
    ]
  }
}

const extendedAnalyticsData = {
  performanceMetrics: {
    strengthScore: {
      current: 78,
      previous: 72,
      change: '+8.3%',
      history: [65, 68, 70, 72, 75, 76, 78]
    },
    enduranceScore: {
      current: 82,
      previous: 79,
      change: '+3.8%',
      history: [70, 73, 75, 77, 79, 80, 82]
    },
    flexibilityScore: {
      current: 65,
      previous: 60,
      change: '+8.3%',
      history: [50, 53, 56, 58, 60, 63, 65]
    }
  },
  
  workoutAnalysis: {
    mostEffective: [
      { name: 'HIIT', efficiency: 92, calories: 450 },
      { name: 'Strength Training', efficiency: 88, calories: 380 },
      { name: 'Running', efficiency: 85, calories: 320 }
    ],
    peakPerformance: {
      timeOfDay: '6:00 AM - 8:00 AM',
      daysOfWeek: ['Monday', 'Wednesday', 'Friday'],
      averageIntensity: '75%'
    }
  },
  
  nutritionAnalysis: {
    macroBalance: {
      actual: { protein: 30, carbs: 45, fats: 25 },
      target: { protein: 35, carbs: 40, fats: 25 }
    },
    calorieDistribution: {
      breakfast: 25,
      lunch: 35,
      dinner: 30,
      snacks: 10
    },
    hydration: {
      daily: 2800,
      target: 3000,
      history: [2600, 2700, 2800, 2750, 2900, 2800, 2800]
    }
  },
  
  sleepQuality: {
    averageHours: 7.5,
    deepSleep: '35%',
    remSleep: '25%',
    restingHeartRate: {
      current: 62,
      trend: [-2, 'improving'],
      history: [65, 64, 63, 63, 62, 62, 62]
    }
  }
}

export function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Advanced Analytics
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Workout Statistics */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Workout Statistics</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {analyticsData.workoutStats.totalWorkouts}
                  </div>
                  <div className="text-sm text-gray-300">Total Workouts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {analyticsData.workoutStats.totalMinutes}
                  </div>
                  <div className="text-sm text-gray-300">Total Minutes</div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h3 className="text-white mb-2">Favorite Workouts</h3>
                <div className="flex flex-wrap gap-2">
                  {analyticsData.workoutStats.favoriteWorkouts.map(workout => (
                    <span key={workout} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                      {workout}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Progress Metrics */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Progress Metrics</h2>
            <div className="space-y-4">
              {Object.entries(analyticsData.progressMetrics).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-purple-400 font-bold">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Goals Progress */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Goals Progress</h2>
            <div className="space-y-6">
              {analyticsData.goals.current.map(goal => (
                <div key={goal.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{goal.name}</span>
                    <span className="text-purple-400">{goal.target}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Object.entries(extendedAnalyticsData.performanceMetrics).map(([key, data]) => (
            <Card key={key} className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                {key.replace('Score', '')} Score
              </h3>
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-white">{data.current}</div>
                <div className={`text-sm ${data.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {data.change}
                </div>
              </div>
              <div className="h-24">
                <Recharts.ResponsiveContainer width="100%" height="100%">
                  <Recharts.LineChart data={data.history.map((value, index) => ({ value, index }))}>
                    <Recharts.Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </Recharts.LineChart>
                </Recharts.ResponsiveContainer>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Most Effective Workouts</h3>
            <div className="space-y-4">
              {extendedAnalyticsData.workoutAnalysis.mostEffective.map((workout, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">{workout.name}</div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${workout.efficiency}%` }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-purple-400 font-medium">{workout.efficiency}%</div>
                    <div className="text-sm text-gray-400">{workout.calories} kcal</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Peak Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 mb-1">Best Time to Workout</div>
                <div className="text-xl font-semibold text-white">
                  {extendedAnalyticsData.workoutAnalysis.peakPerformance.timeOfDay}
                </div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Most Productive Days</div>
                <div className="flex gap-2">
                  {extendedAnalyticsData.workoutAnalysis.peakPerformance.daysOfWeek.map(day => (
                    <span
                      key={day}
                      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Nutrition Balance</h3>
            <div className="h-[300px]">
              <Recharts.ResponsiveContainer width="100%" height="100%">
                <Recharts.RadarChart data={[extendedAnalyticsData.nutritionAnalysis.macroBalance.actual]}>
                  <Recharts.PolarGrid stroke="#374151" />
                  <Recharts.PolarAngleAxis dataKey="name" stroke="#9ca3af" />
                  <Recharts.Radar
                    name="Current"
                    dataKey="value"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.5}
                  />
                </Recharts.RadarChart>
              </Recharts.ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Sleep Quality</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-gray-400 text-sm">Average Sleep</div>
                <div className="text-2xl font-bold text-white">
                  {extendedAnalyticsData.sleepQuality.averageHours}h
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Deep Sleep</div>
                <div className="text-2xl font-bold text-white">
                  {extendedAnalyticsData.sleepQuality.deepSleep}
                </div>
              </div>
            </div>
            <div className="h-[200px]">
              <Recharts.ResponsiveContainer width="100%" height="100%">
                <Recharts.LineChart data={extendedAnalyticsData.sleepQuality.restingHeartRate.history.map((value, index) => ({ value, index }))}>
                  <Recharts.CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <Recharts.XAxis dataKey="index" stroke="#9ca3af" />
                  <Recharts.YAxis stroke="#9ca3af" />
                  <Recharts.Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ec4899"
                    strokeWidth={2}
                  />
                </Recharts.LineChart>
              </Recharts.ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 