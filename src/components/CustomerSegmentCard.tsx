import { motion } from 'framer-motion'

interface CustomerSegmentCardProps {
  title: string
  description: string
  icon: string
  features: string[]
}

export function CustomerSegmentCard({ title, description, icon, features }: CustomerSegmentCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <ul className="mt-auto space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-center gap-2">
            <span className="text-purple-400">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
} 