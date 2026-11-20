import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <p>O endereço que você tentou acessar não existe neste portfólio.</p>
      <Link to="/" className="botao-primario">
        Voltar para o início
      </Link>
    </section>
  );
}

export default NotFound;