import { dados } from '../data/dados';
import Card from '../components/Card';

function Projetos() {
  return (
    <div>
      <h1>Projetos</h1>
      <p>Conheça os projetos que desenvolvi.</p>
      <div className="grid">
        {dados.projetos.map((projeto) => (
          <Card
            key={projeto.id}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projetos;