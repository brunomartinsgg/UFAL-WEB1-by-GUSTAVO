import { Link } from 'react-router-dom'
import { FaPaw, FaCut, FaCalendarAlt, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaPaw className="logo-icon" />
        <h1>PetShop do Totó</h1>
      </div>

      <nav className="menu">
        <Link to="/" className="menu-item">
          <FaCut />
          <span>Serviços</span>
        </Link>
        <Link to="/agendamento" className="menu-item">
          <FaCalendarAlt />
          <span>Agendamento</span>
        </Link>
        <Link to="/sobre" className="menu-item">
          <FaInfoCircle />
          <span>Sobre</span>
        </Link>
        <Link to="/contato" className="menu-item">
          <FaPhoneAlt />
          <span>Contato</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
