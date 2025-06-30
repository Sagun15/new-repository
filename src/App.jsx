import React, { useState } from 'react'

function App() {
  const [showGreeting, setShowGreeting] = useState(false)

  return (
    <div className="App">
      <h1>Welcome to My Simple Intro App</h1>
      <p>This is a basic React application created with Vite.</p>
      <button onClick={() => setShowGreeting(!showGreeting)}>
        {showGreeting ? 'Hide Greeting' : 'Show Greeting'}
      </button>
      {showGreeting && <p>Hello, React developer! Have a great day!</p>}
    </div>
  )
}

export default App
