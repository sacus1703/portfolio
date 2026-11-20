import { dados } from "../data/dados";
import Card from "../components/Card";

function Videos() {
  return (
    <section>
      <h1>Vídeos</h1>
      <p>Assista às demonstrações dos meus projetos.</p>

      {dados.videos.length === 0 ? (
        <p className="vazio">Nenhum vídeo publicado ainda.</p>
      ) : (
        <div className="grid">
          {dados.videos.map((video) => (
            <Card
              key={video.id}
              tipo="Vídeo"
              titulo={video.titulo}
              descricao={video.descricao}
              link={video.link}
              textoBotao="Assistir"
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Videos;