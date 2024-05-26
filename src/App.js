import React, { useState, useEffect } from 'react'
import Home from './Components/Home'
import { ScaleLoader } from 'react-spinners';

const App = () => {
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      {loading ?
        <div className="loader">
          <ScaleLoader color={'#fff'} size={90} speedMultiplier={1} />
        </div> :
        <Home />
      }
    </div>

  )
}

export default App