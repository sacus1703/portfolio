import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { dados } from "../data/dados";

function Navbar() {
  const { tema, alternarTema } = useTheme();

  return (
    <nav>
      <NavLink to="/" className="navbar-marca">
        {dados.nome}
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" end>
          Início
        </NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/videos">Vídeos</NavLink>
        <NavLink to="/apresentacoes">Apresentações</NavLink>
      </div>

      <button
        type="button"
        className="btn-tema"
        onClick={alternarTema}
        aria-label={tema === "claro" ? "Ativar modo escuro" : "Ativar modo claro"}
        title={tema === "claro" ? "Modo escuro" : "Modo claro"}
      >
        {tema === "claro" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;