import { Link } from 'react-router-dom';
import { dados } from '../data/dados';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Olá, eu sou {dados.nome} </h1>
        <p className="subtitulo">{dados.curso}</p>
        <p className="bio">{dados.bio}</p>

        <div className="acoes">
          <Link to="/projetos" className="botao-primario">
            Ver meus projetos
          </Link>
          <Link to="/videos" className="botao-secundario">
            Assistir vídeos
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;