import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { CustomerSegmentCard } from './components/CustomerSegmentCard'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Community } from './pages/Community'
import { Analytics } from './pages/Analytics'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

interface ProcessCardProps {
  step: string
  title: string
  description: string
}

interface UserCardProps {
  title: string
  description: string
  icon: string
}

interface PriceCardProps {
  title: string
  price: string
  features: string[]
  popular?: boolean
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  )
}

function HomePage() {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">VirtualFit</h1>
          <div className="flex gap-6">
            <Link to="#features" className="text-gray-300 hover:text-white">Features</Link>
            <Link to="#pricing" className="text-gray-300 hover:text-white">Pricing</Link>
            <Link to="#testimonials" className="text-gray-300 hover:text-white">Testimonials</Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your Personal AI <br/>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Fitness Coach
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transform your fitness journey with AI-powered personalized training, real-time feedback, and comprehensive progress tracking.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8"
              onClick={() => navigate('/dashboard')}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-32 bg-black/20">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cutting-Edge Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the future of fitness with our advanced AI-powered features designed to maximize your workout efficiency and results.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="AI-Powered Personalization"
            description="Get tailored workout plans that adapt to your progress, preferences, and fitness goals using advanced machine learning algorithms."
            icon="🤖"
          />
          <FeatureCard 
            title="Real-time Form Correction"
            description="Receive instant feedback on your exercise form through computer vision technology to prevent injuries and maximize results."
            icon="📊"
          />
          <FeatureCard
            title="Smart Progress Tracking"
            description="Monitor your fitness journey with detailed analytics, insights, and personalized recommendations based on your performance."
            icon="📈"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-white text-center mb-20">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <ProcessCard 
            step="1"
            title="Create Profile"
            description="Set up your fitness profile with goals, preferences, and current fitness level"
          />
          <ProcessCard 
            step="2"
            title="Get Your Plan"
            description="Receive a personalized workout plan tailored to your specific needs"
          />
          <ProcessCard 
            step="3"
            title="Start Training"
            description="Follow guided workouts with real-time form correction and feedback"
          />
          <ProcessCard 
            step="4"
            title="Track Progress"
            description="Monitor your improvements and adjust your plan automatically"
          />
        </div>
      </section>

      {/* Target Users */}
      <section className="container mx-auto px-4 py-32 bg-black/20">
        <h2 className="text-4xl font-bold text-white text-center mb-20">
          Who It's For
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UserCard
            title="Fitness Enthusiasts"
            description="Age: 18-45 years, passionate about health and fitness, seeking structured guidance"
            icon="💪"
          />
          <UserCard 
            title="Busy Professionals"
            description="Age: 25-40 years, limited time, need efficient and flexible workout solutions"
            icon="💼"
          />
          <UserCard
            title="Home Fitness Lovers"
            description="Age: 25-35 years, prefer convenient home-based workout routines"
            icon="🏠"
          />
          <UserCard
            title="Active Seniors"
            description="Age: 55+ years, focus on maintaining health and mobility with safe exercises"
            icon="🌟"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-white text-center mb-20">
          Simple Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PriceCard
            title="Basic"
            price="Free"
            features={[
              "Basic workout plans",
              "Exercise library",
              "Basic progress tracking",
              "Community access"
            ]}
          />
          <PriceCard
            title="Pro"
            price="$9.99"
            popular={true}
            features={[
              "All Basic features",
              "AI-powered personalization",
              "Real-time form correction",
              "Advanced analytics",
              "Priority support"
            ]}
          />
          <PriceCard
            title="Enterprise"
            price="Custom"
            features={[
              "All Pro features",
              "Custom branding",
              "Team management",
              "API access",
              "Dedicated support"
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Fitness Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have transformed their lives with VirtualFit
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-12"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">VirtualFit</h3>
            <p className="text-gray-400">
              AI-powered fitness coaching for everyone.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Who We Serve */}
      <section className="container mx-auto px-4 py-32 bg-black/20">
        <h2 className="text-4xl font-bold text-white text-center mb-20">
          Who We Serve
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CustomerSegmentCard
            title="Fitness Enthusiasts"
            description="Passionate individuals seeking personalized and dynamic workout plans to achieve their fitness goals."
            icon="💪"
            features={[
              "Advanced workout tracking",
              "Performance analytics",
              "Community challenges"
            ]}
          />
          <CustomerSegmentCard
            title="Busy Professionals"
            description="Time-conscious individuals looking for efficient and flexible fitness solutions that fit their schedule."
            icon="💼"
            features={[
              "Quick workout sessions",
              "Schedule optimization",
              "Mobile accessibility"
            ]}
          />
          <CustomerSegmentCard
            title="Beginners"
            description="Newcomers to fitness who need guidance and support to start their journey safely and effectively."
            icon="🌱"
            features={[
              "Step-by-step guidance",
              "Form tutorials",
              "Progress tracking"
            ]}
          />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors"
    >
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  )
}

function ProcessCard({ step, title, description }: ProcessCardProps) {
  return (
    <div className="relative mt-6 ml-6">
      <div className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl z-10">
        {step}
      </div>
      <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </Card>
    </div>
  )
}

function UserCard({ title, description, icon }: UserCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  )
}

function PriceCard({ title, price, features, popular = false }: PriceCardProps) {
  return (
    <Card className={`p-8 ${popular ? 'bg-purple-600/20' : 'bg-white/5'} backdrop-blur-sm border-white/10 relative flex flex-col`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== "Custom" && <span className="text-gray-300">/month</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className="text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button 
          className={`w-full ${popular ? 'bg-purple-500 hover:bg-purple-600' : ''}`}
        >
          Get Started
        </Button>
      </div>
    </Card>
  )
}

export default App