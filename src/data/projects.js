// PLACEHOLDER: troque repoUrl pelos links reais dos repositórios no GitHub.
// screenshots: [] fica vazio até haver capturas de tela reais dos projetos.
export const projects = [
  {
    id: 'doa-mais',
    title: 'Doa+',
    shortDesc:
      'API REST para gestão de doações de ONGs, com autenticação, documentação interativa e cobertura de testes automatizados.',
    longDesc:
      'Projeto pessoal para praticar arquitetura de API REST completa: modelagem de dados para ONGs e doações, autenticação via JWT, documentação interativa com Swagger UI, testes automatizados com Pytest e ambiente containerizado com Docker Compose.',
    highlights: [
      'Autenticação JWT',
      'Documentação interativa via Swagger UI',
      'Cobertura de testes com Pytest',
      'Ambiente reprodutível com Docker Compose',
    ],
    tags: ['Django 5', 'DRF', 'PostgreSQL', 'JWT', 'Swagger UI', 'Pytest', 'Docker Compose'],
    repoUrl: 'https://github.com/seu-usuario/doa-mais',
    screenshots: [],
  },
  {
    id: 'meu-caixa',
    title: 'Meu Caixa',
    shortDesc:
      'App mobile de fluxo de caixa para microempreendedores, com persistência local, login por PIN e recomendação de investimentos.',
    longDesc:
      'App mobile construído com React Native e Expo para microempreendedores organizarem o fluxo de caixa do dia a dia, com persistência local via SQLite/AsyncStorage e login protegido por PIN.',
    highlights: [
      'Persistência local (SQLite + AsyncStorage)',
      'Login por PIN',
      'Recomendação de investimentos',
      'Construído com Expo',
    ],
    tags: ['React Native', 'Expo', 'SQLite', 'AsyncStorage'],
    repoUrl: 'https://github.com/seu-usuario/meu-caixa',
    screenshots: [],
  },
  {
    id: 'aura-finance',
    title: 'Aura Finance',
    shortDesc:
      'Copiloto de finanças pessoais com IA, que orienta o usuário sobre investimentos sem executar operações — o app direciona, não executa.',
    longDesc:
      'Copiloto de finanças pessoais com IA: integra Claude e Gemini para orientar decisões financeiras do usuário sem executar operações — o app direciona, não executa. Frontend em React 19 + Vite, backend em Express, dados no Supabase.',
    highlights: [
      'IA com Claude + Gemini',
      'Nunca executa operações — apenas orienta',
      'Backend Express + Supabase',
      'React 19 + Vite',
    ],
    tags: ['React 19', 'Vite', 'Express', 'Supabase', 'Claude', 'Gemini'],
    repoUrl: 'https://github.com/seu-usuario/aura-finance',
    screenshots: [],
  },
]
