import { dados } from "../data/dados";
import Card from "../components/Card";

function Apresentacoes() {
  return (
    <section>
      <h1>Apresentações</h1>
      <p>Materiais de apresentação dos meus trabalhos.</p>

      {dados.apresentacoes.length === 0 ? (
        <p className="vazio">Nenhuma apresentação publicada ainda.</p>
      ) : (
        <div className="grid">
          {dados.apresentacoes.map((apresentacao) => (
            <Card
              key={apresentacao.id}
              tipo="Apresentação"
              titulo={apresentacao.titulo}
              descricao={apresentacao.descricao}
              link={apresentacao.link}
              textoBotao="Ver apresentação"
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Apresentacoes;