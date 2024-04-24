import { useLocation, useNavigate } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import './NavBar.css'
import { useTheme } from '../../../context/ThemeContext';


function NavBar() {
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate()
  const location = useLocation()

  const pages = [
    { label: 'Inicio', value: '/' },
    { label: 'Cadastros', value: '/registrations' },
    { label: 'Modelos', value: '/models' },
  ];

  return (
    <header className='NavBar'>
      <h2>
        DynamicForm
      </h2>
      <nav>
        {pages.map((e) => (
          <a className={location.pathname === e.value ? "currentPage" : ''} onClick={() => navigate(e.value)}>
            {e.label}
          </a>
        ))}
        <a onClick={toggleTheme}>
          <FaMoon />
        </a>
      </nav>
    </header>
  )
}


export default NavBar;