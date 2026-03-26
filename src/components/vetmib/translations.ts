export type Language = "pt" | "en";

export const translations = {
  pt: {
    hero: {
      badge: "Assistente para clínicas veterinárias",
      titleStart: "Transforme o WhatsApp da sua clínica numa ",
      titleHighlight: "receção automática 24/7",
      subtitle:
        "O VetMib responde às perguntas dos clientes, agenda consultas e envia lembretes automaticamente — para que a sua equipa possa focar-se no que realmente importa: cuidar dos animais.",
      cta: "Experimente já",
      ctaSecondary: "Ver demonstração",
      chatMessages: [
        { from: "client" as const, text: "Olá! Quero marcar uma consulta para o meu cão Max.", delay: 0.3 },
        { from: "bot" as const, text: "Olá! 🐾 Claro, vou ajudá-lo. Qual o dia e horário preferido?", delay: 0.8 },
        { from: "client" as const, text: "Terça-feira de manhã, se possível.", delay: 1.4 },
        { from: "bot" as const, text: "Perfeito! Tenho disponibilidade às 10:00 de terça-feira. Confirmo a consulta para o Max? ✅", delay: 2.0 },
        { from: "client" as const, text: "Sim, pode confirmar!", delay: 2.6 },
        { from: "bot" as const, text: "Consulta confirmada! 🎉 Terça-feira, 10:00 — Dr.ª Ana Silva. Enviaremos um lembrete no dia anterior.", delay: 3.2 },
      ],
      chatName: "Clínica VetCare",
      chatStatus: "online",
    },
    problem: {
      title: "Quanto tempo a sua equipa perde todos os dias a responder às mesmas perguntas?",
      items: [
        "Clientes a perguntar horários e preços",
        "Chamadas telefónicas constantes",
        "Mensagens no WhatsApp fora do horário",
        "Consultas perdidas por esquecimento",
        "Vacinas e check-ups que os donos esquecem",
      ],
      footer: "O VetMib automatiza o atendimento inicial da sua clínica para que nada fique por responder.",
    },
    features: {
      title: "Um assistente inteligente para a sua clínica",
      subtitle: "Quatro funcionalidades essenciais para transformar o atendimento.",
      items: [
        {
          title: "Atendimento 24/7",
          description: "SDR digital que nunca dorme — responde, qualifica e agenda automaticamente.",
          bullets: [
            "Triagem inteligente de pedidos",
            "Agendamento automático de consultas",
            "Respostas a perguntas frequentes (horários, preços, serviços)",
          ],
        },
        {
          title: "Sistema Anti-Faltas",
          description: "Reduza faltas com lembretes estratégicos e uma lista de espera que preenche cancelamentos.",
          bullets: [
            "Lembretes em cascata (24h, 2h antes)",
            "Confirmação com um clique pelo WhatsApp",
            "Lista de espera inteligente para vagas canceladas",
          ],
        },
        {
          title: "VacinaBot",
          description: "Gestão completa do calendário de vacinas e preventivos de cada animal.",
          bullets: [
            "Alertas automáticos de vacinas em atraso",
            "Calendário personalizado por espécie e idade",
            "Lembretes de desparasitação e check-ups",
          ],
        },
        {
          title: "Fidelização Automática",
          description: "Crie laços duradouros com os tutores através de comunicação personalizada.",
          bullets: [
            "Mensagens de aniversário do animal e do tutor",
            "Programa de pontos e ofertas exclusivas",
            "Histórico completo do cliente e animal guardado",
            "Acompanhamento automático pós-cirurgia",
          ],
        },
      ],
    },
    benefits: {
      title: "Mais tempo para cuidar dos animais, menos tempo ao telefone",
      items: [
        "Atendimento 24/7 aos clientes",
        "Menos chamadas telefónicas",
        "Redução de consultas perdidas",
        "Experiência moderna para os clientes",
        "Maior eficiência na receção",
        "Fidelização de clientes",
      ],
    },
    demo: {
      title: "Veja o VetMib em ação",
      subtitle: "Experimente os dois assistentes abaixo — clique nas opções para interagir.",
      makeitLabel: "Assistente Make it Bot",
      clinicLabel: "Clínica VetCare (Demo)",
      makeitTitle: "Make it Bot",
      makeitSubtitle: "Como posso ajudá-lo a conhecer o VetMib?",
      clinicTitle: "Clínica VetCare",
      clinicSubtitle: "Bem-vindo à Clínica VetCare! Em que posso ajudar?",
      cta: "Experimente já",
      makeitOptions: [
        { label: "O que é o VetMib?", response: "O VetMib é um assistente inteligente que automatiza o atendimento da sua clínica veterinária pelo WhatsApp e pelo site. Responde a perguntas, agenda consultas e envia lembretes — tudo de forma automática." },
        { label: "Quanto custa?", response: "A configuração inicial varia entre 500 € e 800 €, com uma subscrição mensal entre 120 € e 200 €. Sem contratos longos — pode cancelar a qualquer momento." },
        { label: "Como posso começar?", response: "É muito simples! Contacte-nos através do nosso site makeit.bot e configuramos tudo em poucos dias. A sua clínica terá um assistente 24/7 num instante." },
      ],
      clinicOptions: [
        { label: "Quero marcar consulta", response: "Claro! Para que animal é a consulta? 🐕🐈 Posso agendar já para o próximo horário disponível." },
        { label: "Vacinas do meu animal", response: "Vou verificar o calendário do seu animal! 💉 O Bobby tem a vacina antirrábica prevista para dia 22. Quer que envie um lembrete no dia anterior?" },
        { label: "Os meus pontos", response: "Tem 280 pontos acumulados! 🎉 Com 300 pontos pode trocar por uma consulta de check-up gratuita. Faltam apenas 20 pontos!" },
        { label: "Horários de funcionamento", response: "Estamos abertos de segunda a sexta das 9h às 20h, e aos sábados das 9h às 13h. Aos domingos e feriados estamos encerrados." },
      ],
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Respondemos às dúvidas mais comuns para que se sinta seguro antes de experimentar.",
      items: [
        {
          question: "Os meus clientes vão perceber que é um robô?",
          answer: "O agente é treinado para ser educado e eficiente, com linguagem natural e personalizada para a sua clínica. Se não souber responder a alguma questão, passa imediatamente para um humano.",
        },
        {
          question: "É difícil de integrar com a minha agenda?",
          answer: "A integração é simples com o Google Calendar e levamos menos de 24 horas para configurar tudo. Não precisa de conhecimentos técnicos — nós tratamos de todo o processo de configuração por si.",
        },
        {
          question: "E os dados dos meus clientes e animais? Ficam seguros?",
          answer: "Sim. Seguimos rigorosamente as diretrizes do RGPD (proteção de dados da UE). Todos os dados estão encriptados e protegidos em servidores europeus.",
        },
        {
          question: "E se o agente marcar um horário que não existe?",
          answer: "O agente só mostra horários que tenha disponibilizado na agenda. Verifica a disponibilidade em tempo real antes de confirmar qualquer consulta.",
        },
        {
          question: "Quanto tempo demora a implementação?",
          answer: "Entre 24 a 48 horas. Fazemos a configuração inicial, personalizamos as respostas para a sua clínica e deixamos tudo pronto a funcionar.",
        },
        {
          question: "Posso personalizar as respostas do assistente?",
          answer: "Claro! O assistente é treinado especificamente com informações da sua clínica: serviços, horários, preços, políticas e tom de comunicação.",
        },
      ],
    },
    pricing: {
      title: "Planos & Preços",
      subtitle: "Escolha o plano ideal para a sua clínica. Preços sob consulta.",
      trialBadge: "🎉 15 dias grátis para experimentar!",
      whatsappCta: "Pedir Orçamento pelo WhatsApp",
      whatsappUrl: "https://wa.me/+393514006183?text=Olá! Gostaria de saber os preços do VetMib.",
      plans: [
        {
          name: "Starter",
          price: "€79/mês",
          description: "Ideal para clínicas pequenas",
          features: [
            "Até 100 mensagens/mês",
            "Agendamento automático",
            "Lembretes por WhatsApp",
            "1 veterinário",
            "Suporte por email",
          ],
          cta: "Pedir Orçamento",
          popular: false,
        },
        {
          name: "Profissional",
          price: "a partir de €99/mês",
          description: "Para clínicas em crescimento",
          features: [
            "Até 500 mensagens/mês",
            "Agendamento automático",
            "Lembretes e follow-ups",
            "Até 5 veterinários",
            "Integração com software clínico",
            "Relatórios e análises",
            "Suporte prioritário",
          ],
          cta: "Pedir Orçamento",
          popular: true,
        },
        {
          name: "Clínica Plus",
          price: "Sob consulta",
          description: "Para grandes clínicas e hospitais",
          features: [
            "Mensagens ilimitadas",
            "Todas as funcionalidades Pro",
            "Veterinários ilimitados",
            "API personalizada",
            "Gestor de conta dedicado",
            "Onboarding personalizado",
            "SLA garantido",
          ],
          cta: "Falar Connosco",
          popular: false,
        },
      ],
    },
    ctaFinal: {
      title: "Dê à sua clínica um assistente digital 24 horas por dia.",
      subtitle: "Experimente o VetMib e descubra como automatizar o atendimento aos seus clientes.",
      cta: "Experimente já",
    },
  },
} as const;
