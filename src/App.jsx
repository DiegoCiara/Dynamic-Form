import './App.css'
import AppRoute from './routes'
import { ThemeContextProvider } from './context/ThemeContext'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <ThemeContextProvider>
      <AppRoute/>
      <ToastContainer/>
    </ThemeContextProvider>
  )
}

export default App
