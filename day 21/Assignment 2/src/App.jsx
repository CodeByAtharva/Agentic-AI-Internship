import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const intervalRef = useRef(null)
  const startTimeRef = useRef(0)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true)
      // If resuming, we need to adjust start time to account for elapsed time
      // effectiveStartTime = now - elapsed
      startTimeRef.current = Date.now() - time

      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current)
      }, 15)
    }
  }

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }

  const handleReset = () => {
    handleStop()
    setTime(0)
  }

  const handleClose = () => {
    handleStop()
    setIsVisible(false)
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const formatTime = (timeInMs) => {
    const minutes = Math.floor(timeInMs / 60000)
    const seconds = Math.floor((timeInMs % 60000) / 1000)
    const centiseconds = Math.floor((timeInMs % 1000) / 10)

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`
  }

  if (!isVisible) {
    return (
      <div className="hidden-message">
        <p>Timer Closed. Refresh to bring it back.</p>
        <button className="btn btn-refresh" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="timer-card">
        <button className="close-btn" onClick={handleClose} aria-label="Close Timer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="time-display">
          {formatTime(time)}
        </div>

        <div className="controls">
          {!isRunning && time === 0 && (
            <button className="btn btn-primary" onClick={handleStart}>
              Start
            </button>
          )}

          {isRunning && (
            <button className="btn btn-danger" onClick={handleStop}>
              Stop
            </button>
          )}

          {!isRunning && time > 0 && (
            <div className="stopped-controls">
              <button className="btn btn-success" onClick={handleStart}>
                Resume
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
