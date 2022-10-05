import { useState, useEffect } from 'react'
import './App.css'
function App() {
  const [paises, setPaises] = useState([]);
  const fetchapi = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    setPaises(await response.json());
  }
  useEffect(() => {
    fetchapi()
  })
  return (
    <div className="App">
      <ul>
      {paises.map((pais) => (
          <li key={pais.name.common}>
            <p>Pais: {pais.name.official + " "}</p>
            <p>Capital: {pais.capital + " "}</p>
            <img src = {pais.flags.png } alt = "bandera"/>

          </li>
        ))}
      </ul>
    </div>
  )
}
export default App