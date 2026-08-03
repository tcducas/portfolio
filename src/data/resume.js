// Fatos reais extraídos do currículo, usados no terminal da hero.
export const cvUrl = `${import.meta.env.BASE_URL}assets/thales-ducas-cv.pdf`

export const terminalLines = [
  { prompt: 'whoami', output: 'Thales Ducas — Dev Backend & IA' },
  { prompt: 'cat stack.txt', output: 'Python · Django · DRF · APIs REST' },
  { prompt: 'cat foco.txt', output: 'IA Generativa · Prompt Engineering · Automação de processos' },
  { prompt: 'cat status.txt', output: 'Último semestre ADS (ENIAC) · Estagiário Backend & IA' },
  { prompt: './baixar-curriculo.sh', output: null },
]
