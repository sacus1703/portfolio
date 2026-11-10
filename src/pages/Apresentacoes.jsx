import { dados } from '../data/dados';
import Card from '../components/Card';

function Apresentacoes() {
  return (
    <div>
      <h1>Apresentações</h1>
      <p>Materiais de apresentação dos meus trabalhos.</p>
      <div className="grid">
        {dados.apresentacoes.map((apresentacao) => (
          <Card
            key={apresentacao.id}
            titulo={apresentacao.titulo}
            link={apresentacao.link}
            textoBotao="Ver apresentação"
          />
        ))}
      </div>
    </div>
  );
}

export default Apresentacoes;