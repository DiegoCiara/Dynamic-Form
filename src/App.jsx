import './App.css'
import AppRoute from './routes'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeContextProvider>
      <AppRoute/>
    </ThemeContextProvider>
  )
}

export default App
