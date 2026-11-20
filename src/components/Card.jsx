function Card({
  titulo,
  descricao,
  link,
  textoBotao = "Ver mais",
  tipo,
  periodo,
  tecnologias,
  aprendizado,
}) {
  const temLink = link && link !== "#";

  return (
    <article className="card">
      <div className="card-topo">
        {tipo && <span className="card-badge">{tipo}</span>}
        {periodo && <span className="card-periodo">{periodo}</span>}
      </div>

      <h3 className="card-titulo">{titulo}</h3>

      {descricao && <p className="card-descricao">{descricao}</p>}

      {tecnologias?.length > 0 && (
        <ul className="card-tecnologias">
          {tecnologias.map((tec) => (
            <li key={tec}>{tec}</li>
          ))}
        </ul>
      )}

      {aprendizado && (
        <p className="card-aprendizado">
          <strong>Aprendizado:</strong> {aprendizado}
        </p>
      )}

      {temLink ? (
        <a
          className="card-botao"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {textoBotao}
        </a>
      ) : (
        <span className="card-em-breve">Em breve</span>
      )}
    </article>
  );
}

export default Card;