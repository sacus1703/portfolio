import { dados } from "../data/dados";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-contato">
        {dados.contato.email && (
          <a href={`mailto:${dados.contato.email}`}>
            📧 {dados.contato.email}
          </a>
        )}
        {dados.contato.github && (
          <a
            href={dados.contato.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        )}
        {dados.contato.linkedin && (
          <a
            href={dados.contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        )}
      </div>

      <p>
        © {anoAtual} {dados.nome} — Todos os direitos reservados
      </p>
    </footer>
  );
}

export default Footer;