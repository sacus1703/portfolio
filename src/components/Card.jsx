function Card({ titulo, descricao, link, textoBotao = "Ver mais" }) {
  return (
    <article className="card">
      <h2>{titulo}</h2>
      {descricao && <p>{descricao}</p>}
      {link && link !== "#" && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {textoBotao}
        </a>
      )}
    </article>
  );
}

export default Card;