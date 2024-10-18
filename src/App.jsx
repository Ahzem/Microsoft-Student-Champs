import { useState } from 'react'
import azureLogo from '/Azure.png'
import mlsaLogo from '/LevelNew.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={mlsaLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={azureLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Microsoft Student Champs</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Integrating serverless APIs and authentication made easy with Azure.
        </p>
      </div>
      <p className="read-the-docs">
      Microsoft Learn Student Ambassadors are a global group of on-campus ambassadors who are eager to help fellow students, create robust tech communities, and develop technical and career skills for the future.
      </p>
    </>
  )
}

export default App
