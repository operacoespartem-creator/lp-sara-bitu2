export const WA = "https://wa.me/5581991951562?text=";
export const wa = (msg: string) => WA + encodeURIComponent(msg);

export const nav = [
  { label: "A Dra. Sara", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Destaques", href: "#destaques" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

export const diffs = [
  { icon: "tech", title: "Tecnologia", text: "Equipamentos modernos para diagnósticos precisos e tratamentos mais rápidos e confortáveis." },
  { icon: "badge", title: "Conhecimento", text: "Especialização em Prótese e Implantodontia, com equipe formada para cada área da odontologia." },
  { icon: "shield", title: "Transparência", text: "Você entende cada etapa do plano de tratamento e do orçamento, sem surpresas." },
  { icon: "heart", title: "Humanização", text: "Tempo e atenção individualizada a cada paciente, do acolhimento ao acompanhamento." },
];

export const treatments = [
  { icon: "implant", name: "Implantes Dentários", desc: "Tenha novamente um sorriso completo e de alta durabilidade. Cirurgia minimamente invasiva, sem dor, com dentes fixos em até 24 horas.", tags: ["Dentes fixos em 24h", "Sem dor", "Alta durabilidade"] },
  { icon: "prosthesis", name: "Prótese Dentária", desc: "Recupere a função e a beleza do seu sorriso com próteses personalizadas, confortáveis e de excelente acabamento estético.", tags: ["Personalizada", "Estética natural", "Conforto"] },
  { icon: "braces", name: "Ortodontia", desc: "Um sorriso alinhado transforma a aparência e a autoestima. Tratamento para todas as idades, com previsibilidade e ótimos resultados.", tags: ["Todas as idades", "Aparelho fixo", "Previsibilidade"] },
  { icon: "aligner", name: "Ortodontia Invisível", desc: "Corrija seu sorriso de forma discreta, com alinhadores transparentes e removíveis, sem o impacto estético do aparelho convencional.", tags: ["Alinhadores", "Discreto", "Removível"] },
  { icon: "canal", name: "Endodontia (Canal)", desc: "Preservar o dente natural é sempre a melhor opção. Elimine a dor, trate a infecção e evite a extração quando possível.", tags: ["Preserva o dente", "Sem dor", "Trata a infecção"] },
  { icon: "surgery", name: "Cirurgia Bucomaxilofacial", desc: "Siso inflamado? Nem sempre a extração é a única saída. Após avaliação criteriosa, indicamos o tratamento mais adequado, priorizando sua saúde e conforto.", tags: ["Siso", "Avaliação criteriosa", "Conforto"] },
  { icon: "veneer", name: "Lentes & Facetas", desc: "Harmonize o formato, a cor e o alinhamento do seu sorriso com lentes de contato dental e facetas de acabamento natural.", tags: ["Estética", "Sorriso harmônico", "Natural"] },
  { icon: "whitening", name: "Clareamento Dental", desc: "Devolva o brilho ao seu sorriso com um clareamento seguro e eficaz, realizado com acompanhamento profissional.", tags: ["Mais branco", "Seguro", "Profissional"] },
];

export const features = [
  {
    icon: "implant", num: "01", title: "Implantes Dentários",
    items: ["Cirurgia minimamente invasiva e sem dor", "Dentes fixos em até 24 horas", "Solução estável e de alta durabilidade", "Planejamento individualizado"],
  },
  {
    icon: "prosthesis", num: "02", title: "Prótese Dentária",
    items: ["Próteses personalizadas e confortáveis", "Acabamento estético natural", "Recupera a função da mastigação"],
  },
  {
    icon: "braces", num: "03", title: "Ortodontia",
    items: ["Aparelho fixo e alinhadores invisíveis", "Tratamento para todas as idades", "Resultados previsíveis"],
  },
];

export const specialties = [
  { icon: "braces", name: "Ortodontia", d: "Alinhamento e correção do sorriso em todas as idades." },
  { icon: "implant", name: "Implantodontia", d: "Reposição de dentes com implantes fixos e duradouros." },
  { icon: "canal", name: "Endodontia", d: "Tratamento de canal para preservar o dente natural." },
  { icon: "perio", name: "Periodontia", d: "Saúde da gengiva e dos tecidos de suporte." },
  { icon: "whitening", name: "Estética Dental", d: "Clareamento, lentes e harmonia do sorriso." },
  { icon: "prosthesis", name: "Prótese", d: "Reabilitação da função e da beleza do sorriso." },
  { icon: "general", name: "Clínico Geral", d: "Cuidado preventivo e dentística do dia a dia." },
  { icon: "surgery", name: "Bucomaxilofacial", d: "Cirurgias da boca, face e extração de sisos." },
];

export const journey = [
  { n: "1", k: "Avaliação", t: "Diagnóstico completo", d: "Conversamos sobre seus objetivos e fazemos uma avaliação criteriosa para entender o seu caso." },
  { n: "2", k: "Plano", t: "Plano personalizado", d: "Você recebe um plano de tratamento claro, com orçamento transparente e parcelamento no cartão." },
  { n: "3", k: "Cuidado", t: "Tratamento e acompanhamento", d: "Realizamos o tratamento com tecnologia e conforto, acompanhando de perto cada etapa." },
];

export const testimonials = [
  { ini: "V", name: "Vitor", text: "Atendimento humanizado, atencioso e de excelência do início ao fim. Recomendo de olhos fechados." },
  { ini: "G", name: "George", text: "Profissionais de confiança e muito cuidadosos. Saí com meu sorriso novo e super satisfeito." },
  { ini: "M", name: "Maria do Socorro", text: "Fui muito bem acolhida. A Dra. Sara explica tudo com calma e transparência. Gratidão!" },
];

export const faqs = [
  { q: "Vocês atendem convênios ou SUS?", a: "Nosso atendimento é 100% particular. Não trabalhamos com SUS nem convênios — assim conseguimos dedicar tempo e atenção individualizada a cada paciente. Parcelamos o tratamento no cartão de crédito." },
  { q: "Como faço para agendar minha avaliação?", a: "É só falar com a gente pelo WhatsApp, informar o dia e horário de sua preferência, que verificamos a disponibilidade e confirmamos seu agendamento." },
  { q: "Posso parcelar o tratamento?", a: "Sim! Trabalhamos com plano de tratamento personalizado e parcelamento no cartão de crédito, para caber no seu orçamento." },
  { q: "É verdade que o implante pode ter dente fixo no mesmo dia?", a: "Em muitos casos, sim. Com cirurgia minimamente invasiva é possível sair com dentes fixos em até 24 horas. A indicação é definida após uma avaliação criteriosa do seu caso." },
  { q: "Onde fica o consultório e qual o horário?", a: "Atendemos em Paulista e Região Metropolitana do Recife, de segunda a sexta, das 08h30 às 18h. Fale com a gente no WhatsApp para o endereço completo e referências." },
];

export const gallery = ["Recepção", "Consultório", "Equipamentos", "Atendimento", "Equipe", "Ambiente"];
