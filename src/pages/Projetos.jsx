import { dados } from "../data/dados";
import Card from "../components/Card";

function Projetos() {
  return (
    <section>
      <h1>Projetos</h1>
      <p>Conheça os projetos que desenvolvi ao longo do curso.</p>

      {dados.projetos.length === 0 ? (
        <p className="vazio">Nenhum projeto publicado ainda.</p>
      ) : (
        <div className="grid">
          {dados.projetos.map((projeto) => (
            <Card
              key={projeto.id}
              tipo="Projeto"
              titulo={projeto.titulo}
              periodo={projeto.periodo}
              descricao={projeto.descricao}
              tecnologias={projeto.tecnologias}
              aprendizado={projeto.aprendizado}
              link={projeto.link}
              textoBotao="Ver no GitHub"
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projetos;