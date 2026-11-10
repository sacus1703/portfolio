import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const { tema, alternarTema } = useTheme();

  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/videos">Vídeos</NavLink>
        <NavLink to="/apresentacoes">Apresentações</NavLink>
      </div>

      <button
        type="button"
        className="btn-tema"
        onClick={alternarTema}
        aria-label={tema === 'claro' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        title={tema === 'claro' ? 'Modo escuro' : 'Modo claro'}
      >
        {tema === 'claro' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Navbar;