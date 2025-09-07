import { useEffect, useState } from 'react'

interface WeatherData {
  temperature: number
  description: string
  humidity: number
  windSpeed: number
  visibility: number
  icon: string
}

export default function LocationTimeWeather() {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentDate, setCurrentDate] = useState<string>('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const tangierTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now)

      const tangierDate = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(now)

      setCurrentTime(tangierTime)
      setCurrentDate(tangierDate)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using OpenWeatherMap's free API (requires API key)
        // For demo purposes, we'll use a mock response
        // In production, you would use:
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tangier,MA&appid=${API_KEY}&units=metric`)

        // Mock weather data for demonstration
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

        const mockWeatherData: WeatherData = {
          temperature: 22,
          description: 'Partly cloudy',
          humidity: 65,
          windSpeed: 12,
          visibility: 10,
          icon: '02d'
        }

        setWeather(mockWeatherData)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch weather data')
        setLoading(false)
      }
    }

    fetchWeather()
    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = (iconCode: string) => {
    // Map weather icons to emojis for demo
    const iconMap: { [key: string]: string } = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '☁️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫️',
      '50n': '🌫️'
    }
    return iconMap[iconCode] || '🌤️'
  }
  return (
    <div className="px-5 py-10 h-full relative flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-xl font-mono font-bold text-white">
          {currentTime}
        </div>
        <div className="text-xs text-gray-400">{currentDate}</div>
      </div>
      {loading ? (
        <div className="text-center py-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mx-auto"></div>
          <p className="text-xs text-gray-400 mt-1">Loading weather...</p>
        </div>
      ) : error ? (
        <div className="text-center py-2">
          <p className="text-xs text-red-400">{error}</p>
          <p className="text-xs text-gray-500 mt-1">
            Add your OpenWeatherMap API key to get live weather data
          </p>
        </div>
      ) : weather ? (
        <div className="space-y-3">
          {/* Main Weather */}
          <div className="flex flex-col items-center justify-center gap-2 flex-1">
            <span className="text-7xl">{getWeatherIcon(weather.icon)}</span>
            <div className="text-center">
              <div className="text-xl font-bold text-white">
                {weather.temperature}°C
              </div>
              <div className="text-xs text-gray-400 capitalize">
                {weather.description}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
