import { dados } from '../data/dados';
import Card from '../components/Card';

function Videos() {
  return (
    <div>
      <h1>Vídeos</h1>
      <p>Assista às demonstrações dos meus projetos.</p>
      <div className="grid">
        {dados.videos.map((video) => (
          <Card
            key={video.id}
            titulo={video.titulo}
            link={video.link}
            textoBotao="Assistir"
          />
        ))}
      </div>
    </div>
  );
}

export default Videos;