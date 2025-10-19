import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>crypto-coins-tracker</h1>
        <p>AI-powered application</p>
      </header>

      <main className="App-main">
        <Welcome />

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Click the button to see the counter in action!
          </p>
        </div>

        <div className="info">
          <p>
            This is your starting point. Edit <code>src/App.tsx</code> to customize your application.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App