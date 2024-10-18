import { useState } from 'react'
import azureLogo from '/Azure.png'
import mlsaLogo from '/LevelNew.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = async () => {
    setCount((count) => count + 1);
  
    try {
      const response = await fetch('https://nice-sky-0bec97100.5.azurestaticapps.net/api/MyHttpTrigger');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Handle the fetched data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

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
        <button onClick={handleClick}>
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
