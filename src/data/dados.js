export const dados = {
  nome: "Lucas Sousa",
  curso: "Análise e Desenvolvimento de Sistemas",
  bio: "Estudante de ADS em Aracaju-SE, focado em desenvolvimento web e mobile. Este portfólio reúne os projetos que desenvolvo ao longo do curso.",
  foto: import.meta.env.BASE_URL + "foto.jpg",

  sobre: {
    descricao:
      "Sou estudante de Análise e Desenvolvimento de Sistemas e estou construindo minha trajetória na área de tecnologia. Tenho interesse especial por desenvolvimento web e mobile, e uso este espaço para registrar minha evolução, compartilhar projetos e refletir sobre o que aprendo a cada etapa do curso.",
    formacao: "Cursando Análise e Desenvolvimento de Sistemas",
    cidade: "Aracaju - SE",
    interesses: ["Desenvolvimento Web", "React", "React Native", "UI/UX"],
  },

  habilidades: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Git",
  ],

  contato: {
    email: "lucasonp3@gmail.com",
    github: "https://github.com/sacus1703",
    linkedin: "https://www.linkedin.com/in/lucas-sousa-b7b393293/",
  },

  projetos: [
    {
      id: 1,
      titulo: "Oficina App",
      periodo: "2025",
      descricao:
        "Aplicativo mobile para gestão de oficina, desenvolvido em React Native com Expo.",
      tecnologias: ["React Native", "Expo", "JavaScript"],
      aprendizado:
        "Primeiro projeto mobile do curso. Aprendi a estruturar navegação entre telas, organizar componentes e lidar com o ambiente Expo.",
      link: "https://github.com/sacus1703/oficina-app",
    },
  ],

  videos: [
    {
      id: 1,
      titulo: "Demonstração do Oficina App",
      descricao:
        "Vídeo demonstrando as telas e funcionalidades principais do aplicativo.",
      link: "https://www.youtube.com/shorts/I7VTYyho20s", // ← troque por "https://..." quando publicar
    },
  ],

  apresentacoes: [
    {
      id: 1,
      titulo: "Apresentação do Projeto",
      descricao:
        "Slides de apresentação do Oficina App para a disciplina do curso.",
      link: null, // ← troque por "https://..." quando publicar
    },
  ],
};