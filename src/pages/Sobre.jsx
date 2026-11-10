import { dados } from '../data/dados';

function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre mim</h1>

      <div className="sobre-conteudo">
        <div className="sobre-foto">
          <img src={dados.foto} alt={`Foto de ${dados.nome}`} />
        </div>

        <div className="sobre-texto">
          <p>{dados.sobre.descricao}</p>

          <ul className="sobre-lista">
            <li><strong>Formação:</strong> {dados.sobre.formacao}</li>
            <li><strong>Cidade:</strong> {dados.sobre.cidade}</li>
            <li>
              <strong>Interesses:</strong>{" "}
              {dados.sobre.interesses.join(", ")}
            </li>
          </ul>
        </div>
      </div>

      <section className="contato">
  <h2>Contato</h2>
  <div className="contato-links">
    {dados.contato.email && (
      <span className="contato-item">📧 {dados.contato.email}</span>
    )}
    {dados.contato.github && (
      <a href={dados.contato.github} target="_blank" rel="noopener noreferrer">
        💻 GitHub
      </a>
    )}
    {dados.contato.linkedin && (
      <a href={dados.contato.linkedin} target="_blank" rel="noopener noreferrer">
        🔗 LinkedIn
      </a>
    )}
  </div>
</section>
    </div>
  );
}

export default Sobre;