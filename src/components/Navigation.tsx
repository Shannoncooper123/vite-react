import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const location = useLocation()

  return (
    <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              VirtualFit
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/dashboard"
              className={`text-sm ${location.pathname === '/dashboard' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/community"
              className={`text-sm ${location.pathname === '/community' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
            >
              Community
            </Link>
            <Link 
              to="/analytics"
              className={`text-sm ${location.pathname === '/analytics' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
            >
              Analytics
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 