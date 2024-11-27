import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/Navigation'

// 扩展社区数据
const communityData = {
  posts: [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "🏃‍♀️",
      title: "Completed my first 5K!",
      content: "Thanks to VirtualFit's training program, I finally achieved my goal! Started from barely being able to run 1km to completing a full 5K. The AI-powered guidance really helped with my pacing.",
      likes: 124,
      comments: 18,
      tags: ["Success Story", "Running"],
      timeAgo: "2h ago",
      images: ["run-tracker.jpg"]
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "💪",
      title: "New PR on Deadlift",
      content: "Hit a new personal record today - 150kg deadlift! The form correction feature helped me maintain proper posture throughout. Thanks for all the support!",
      likes: 89,
      comments: 12,
      tags: ["Personal Record", "Strength Training"],
      timeAgo: "4h ago"
    },
    {
      id: 3,
      author: "Emma Wilson",
      avatar: "🧘‍♀️",
      title: "30-Day Yoga Challenge Complete",
      content: "Just finished the 30-day yoga challenge! Feeling more flexible and centered than ever. The daily reminders and progress tracking kept me motivated.",
      likes: 156,
      comments: 24,
      tags: ["Yoga", "Challenge Complete"],
      timeAgo: "6h ago"
    }
  ],
  events: [
    {
      id: 1,
      title: "Summer Body Challenge",
      description: "Join our 8-week transformation challenge with personalized AI workout plans and nutrition guidance",
      startDate: "2024-06-01",
      endDate: "2024-07-31",
      participants: 156,
      type: "Challenge",
      prize: "$500 in fitness gear"
    },
    {
      id: 2,
      title: "Virtual 10K Run",
      description: "Complete a 10K run anywhere, anytime during the event period. Share your results and compete globally!",
      startDate: "2024-05-15",
      endDate: "2024-05-22",
      participants: 234,
      type: "Competition"
    },
    {
      id: 3,
      title: "Mindful May",
      description: "Daily meditation and yoga sessions led by expert instructors",
      startDate: "2024-05-01",
      endDate: "2024-05-31",
      participants: 89,
      type: "Program"
    }
  ],
  groups: [
    {
      id: 1,
      name: "Morning Warriors",
      members: 345,
      description: "Early birds who workout before sunrise",
      activity: "Very Active",
      lastActive: "10 min ago"
    },
    {
      id: 2,
      name: "Weight Loss Support",
      members: 567,
      description: "Supporting each other on our weight loss journeys",
      activity: "Active",
      lastActive: "1 hour ago"
    }
  ],
  trending: [
    "#TransformationTuesday",
    "#MorningWorkout",
    "#FitnessCommunity",
    "#HealthyLifestyle",
    "#WorkoutMotivation"
  ]
}

export function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="md:col-span-2 space-y-6">
              {/* Create Post */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
                <div className="flex gap-4">
                  <div className="text-4xl">😊</div>
                  <input
                    type="text"
                    placeholder="Share your fitness journey..."
                    className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button>Post</Button>
                </div>
              </Card>

              {/* Posts Feed */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Community Feed</h2>
                {communityData.posts.map(post => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-t border-white/10 py-6 first:border-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{post.avatar}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h3 className="text-white font-semibold">{post.author}</h3>
                            <div className="text-sm text-gray-400">{post.timeAgo}</div>
                          </div>
                          <Button variant="ghost" size="sm">
                            •••
                          </Button>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{post.title}</h4>
                        <p className="text-gray-300 mb-4">{post.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-6 text-sm text-gray-400">
                          <button className="flex items-center gap-2 hover:text-white transition-colors">
                            ❤️ {post.likes}
                          </button>
                          <button className="flex items-center gap-2 hover:text-white transition-colors">
                            💬 {post.comments}
                          </button>
                          <button className="flex items-center gap-2 hover:text-white transition-colors">
                            🔄 Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* User Groups */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">Your Groups</h2>
                  <Button variant="ghost" size="sm">See All</Button>
                </div>
                <div className="space-y-4">
                  {communityData.groups.map(group => (
                    <div key={group.id} className="p-4 rounded-lg bg-white/5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-semibold">{group.name}</h3>
                        <span className="text-xs text-gray-400">{group.lastActive}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{group.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{group.members} members</span>
                        <span className="text-purple-400">{group.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Upcoming Events */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  {communityData.events.map(event => (
                    <div key={event.id} className="border-t border-white/10 py-4 first:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-semibold">{event.title}</h3>
                        <span className="text-xs text-purple-400 px-2 py-1 rounded-full bg-purple-500/20">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 mb-3">{event.description}</p>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Starts {new Date(event.startDate).toLocaleDateString()}</span>
                        <span>{event.participants} joined</span>
                      </div>
                      <Button className="w-full mt-3" variant="outline">Join Event</Button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Trending Tags */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Trending Now</h2>
                <div className="flex flex-wrap gap-2">
                  {communityData.trending.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm cursor-pointer hover:bg-purple-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 