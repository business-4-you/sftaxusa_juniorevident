/* SF TAX USA — Conteúdo das páginas institucionais (PT / EN / ES)
   Mescla em window.I18N[lang].pages */
(function () {
  var I = window.I18N = window.I18N || {};

  /* ===================================================== PORTUGUÊS */
  (I.pt = I.pt || {}).pages = {
    about: {
      metaTitle: "Sobre a SF TAX USA | Contabilidade para Brasileiros e Estrangeiros na Flórida",
      metaDesc: "Conheça a SF TAX USA — Santiago & Felix Accounting Services. Contabilidade e impostos na Flórida com atendimento humanizado em português, inglês e espanhol.",
      eyebrow: "Sobre nós",
      h1: "Quem entende o seu idioma — e o sistema fiscal americano.",
      sub: "Somos a SF TAX USA — Santiago & Felix Accounting Services, uma contabilidade na Flórida especializada em ajudar brasileiros, latinos, estrangeiros e empresas a viver, empreender e investir nos Estados Unidos com segurança.",
      storyEyebrow: "Nossa história",
      storyTitle: "Nascemos para descomplicar a vida fiscal de quem vive entre dois mundos",
      story1: "A SF TAX USA nasceu da experiência de quem viveu na pele o que é ser estrangeiro diante do sistema fiscal americano.",
      story2: "Santiago e Felix conheceram de perto a angústia de não entender um formulário do IRS, de não saber se estavam pagando impostos demais — ou de menos. Por isso, fundaram uma contabilidade feita para quem é como eles: brasileiros, latinos e estrangeiros que constroem uma vida nos EUA e precisam de alguém que fale a mesma língua — no sentido literal e no sentido humano.",
      story3: "Hoje, com escritório em Orlando e clientes em mais de 30 estados, a SF TAX USA é a referência em contabilidade para imigrantes nos Estados Unidos.",
      missionTitle: "Missão",
      missionText: "Ser a ponte de confiança entre brasileiros, latinos e estrangeiros e o sistema fiscal americano — com clareza, proximidade e zero burocracia desnecessária.",
      visionTitle: "Visão",
      visionText: "Ser o escritório contábil de referência para a comunidade brasileira nos EUA, reconhecido pela excelência no atendimento e pela tranquilidade que entregamos a cada cliente.",
      valuesTitle: "Valores",
      valuesText: "Transparência, proximidade, conformidade, agilidade e confiança em tudo o que fazemos.",
      valuesEyebrow: "O que nos guia",
      values2Title: "Princípios que orientam cada atendimento",
      values: [
        { i:"shield", t:"Transparência", d:"Sem letras miúdas ou surpresas — você sabe exatamente o que está acontecendo em cada etapa." },
        { i:"users",  t:"Proximidade", d:"Você fala com pessoas, não com sistemas — atendimento humano do início ao fim." },
        { i:"check",  t:"Conformidade", d:"Sua situação sempre em dia com o IRS — prazos e obrigações cumpridos com rigor." },
        { i:"clock",  t:"Agilidade", d:"Respostas rápidas e prazos cumpridos — sem você ficar esperando ou preocupado." },
        { i:"target", t:"Confiança", d:"Construída cliente a cliente, declaração a declaração — nosso maior patrimônio." }
      ],
      orlandoTitle: "Sediados em Orlando, presentes em todo o EUA",
      orlandoText: "Nosso escritório físico fica em Orlando, FL — coração da comunidade brasileira na Flórida. Mas nosso atendimento vai além: atendemos clientes em todos os estados americanos, 100% de forma remota e segura, nos três idiomas.",
      ctaTitle: "Vamos conversar sobre a sua situação?",
      ctaSub: "Conte com um parceiro que entende o seu contexto e fala a sua língua."
    },
    contactPage: {
      metaTitle: "Contato | SF TAX USA — Fale com um Especialista na Flórida",
      metaDesc: "Fale com a SF TAX USA por WhatsApp, telefone, e-mail ou formulário. Atendimento contábil e fiscal na Flórida em português, inglês e espanhol.",
      eyebrow: "Contato",
      h1: "Fale com um especialista da SF TAX USA",
      sub: "Escolha o canal mais confortável para você. Respondemos com orientação clara e o próximo passo — sem compromisso e no seu idioma."
    },
    faqPage: {
      metaTitle: "Perguntas Frequentes | SF TAX USA — Contabilidade na Flórida",
      metaDesc: "Tire suas dúvidas sobre contabilidade, impostos, abertura de empresa e obrigações fiscais nos EUA com a SF TAX USA. Atendimento em 3 idiomas.",
      eyebrow: "Perguntas frequentes",
      h1: "Tudo o que você precisa saber antes de começar",
      sub: "Reunimos as dúvidas mais comuns sobre o nosso atendimento, serviços e a vida fiscal nos Estados Unidos. Não encontrou a sua? Fale com a gente.",
      groups: [
        { title: "Sobre o atendimento", items: [
          { q:"Em quais idiomas a SF TAX USA atende?", a:"Atendemos em português, inglês e espanhol, para que você entenda cada detalhe com clareza e se sinta à vontade durante todo o processo." },
          { q:"Preciso morar na Flórida para ser atendido?", a:"Não. Atendemos clientes em diferentes estados e também pessoas que vivem fora dos EUA com obrigações fiscais americanas, de forma totalmente remota e segura." },
          { q:"Como funciona o primeiro contato?", a:"Você fala com a gente pelo WhatsApp ou formulário. Entendemos a sua situação, esclarecemos suas dúvidas e indicamos o melhor caminho — sem compromisso." },
          { q:"O atendimento é só para empresas?", a:"Não. Atendemos pessoas físicas, autônomos, famílias, investidores e empresas. O serviço é sempre adaptado à sua realidade." }
        ]},
        { title: "Serviços e impostos", items: [
          { q:"Vocês ajudam a abrir empresa nos EUA?", a:"Sim. Orientamos a escolha da estrutura (LLC, Corporation), cuidamos do registro, do EIN e dos primeiros passos para você operar com segurança." },
          { q:"Posso ser ajudado se recebo renda no Brasil e nos EUA?", a:"Sim. Esse é um dos nossos focos. Orientamos sobre como tratar a renda dos dois países e cumprir as obrigações corretamente, considerando mecanismos contra a dupla tributação." },
          { q:"O que é Sales Tax e preciso me preocupar?", a:"O Sales Tax é o imposto sobre vendas. Se a sua empresa vende produtos ou determinados serviços, pode precisar registrar e recolher. Avaliamos o seu caso." },
          { q:"O que são FBAR e FIRPTA?", a:"FBAR é o reporte de contas no exterior; FIRPTA é a retenção na venda de imóveis por estrangeiros. Ambos exigem atenção — orientamos cada situação individualmente." }
        ]},
        { title: "Prazos e segurança", items: [
          { q:"E se eu já estiver com obrigações atrasadas?", a:"É possível regularizar declarações e obrigações em atraso. Quanto antes agir, menor tende a ser o impacto de juros e penalidades. Ajudamos você a se colocar em dia." },
          { q:"Vocês garantem economia de impostos?", a:"Não trabalhamos com garantia de economia ou de resultado. Nosso compromisso é com orientação profissional, responsável e em conformidade com a legislação aplicável." },
          { q:"Meus dados e documentos estão seguros?", a:"Tratamos suas informações com confidencialidade e responsabilidade, usando meios seguros para o envio e a organização de documentos." }
        ]}
      ],
      ctaTitle: "Ainda tem dúvidas?",
      ctaSub: "Fale com um especialista da SF TAX USA e receba orientação clara para a sua situação."
    },
    legal: {
      updated: "Última atualização: junho de 2026",
      backHome: "Voltar para a Home"
    },
    privacy: {
      metaTitle: "Política de Privacidade | SF TAX USA",
      metaDesc: "Saiba como a SF TAX USA coleta, usa e protege os seus dados pessoais ao utilizar o nosso site e serviços.",
      eyebrow: "Institucional",
      h1: "Política de Privacidade",
      sections: [
        { h:"1. Introdução", p:["Esta Política de Privacidade descreve como a SF TAX USA — Santiago & Felix Accounting Services coleta, utiliza e protege as informações fornecidas por você ao navegar em nosso site ou solicitar nossos serviços. Ao utilizar o site, você concorda com as práticas descritas neste documento."] },
        { h:"2. Informações que coletamos", p:["Coletamos informações que você nos fornece voluntariamente, como nome, e-mail, telefone/WhatsApp, idioma preferencial e mensagens enviadas por formulário. Também podemos coletar dados de navegação de forma anônima, como páginas visitadas, por meio de ferramentas de análise."] },
        { h:"3. Como usamos as informações", p:["Utilizamos os seus dados para responder a solicitações, prestar e aprimorar nossos serviços, enviar comunicações relacionadas ao seu atendimento e cumprir obrigações legais. Não vendemos nem alugamos seus dados pessoais a terceiros."] },
        { h:"4. Compartilhamento", p:["Seus dados podem ser compartilhados apenas com prestadores que nos auxiliam na operação (por exemplo, ferramentas de comunicação e análise) e quando exigido por lei. Exigimos confidencialidade de todos os parceiros."] },
        { h:"5. Cookies e análise", p:["Podemos utilizar cookies e ferramentas como Google Analytics para entender o uso do site e melhorar a experiência. Você pode gerenciar cookies nas configurações do seu navegador."] },
        { h:"6. Segurança", p:["Adotamos medidas razoáveis para proteger seus dados contra acesso não autorizado, perda ou uso indevido. Nenhum método de transmissão pela internet é 100% seguro, mas trabalhamos para manter um alto padrão de proteção."] },
        { h:"7. Seus direitos", p:["Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais, bem como esclarecer dúvidas sobre o tratamento, entrando em contato pelos nossos canais oficiais."] },
        { h:"8. Contato", p:["Para questões sobre esta Política de Privacidade, fale conosco pelos canais de contato disponíveis neste site."] }
      ]
    },
    terms: {
      metaTitle: "Termos de Uso | SF TAX USA",
      metaDesc: "Conheça os termos e condições para utilização do site e dos serviços da SF TAX USA.",
      eyebrow: "Institucional",
      h1: "Termos de Uso",
      sections: [
        { h:"1. Aceitação dos termos", p:["Ao acessar e utilizar o site da SF TAX USA — Santiago & Felix Accounting Services, você concorda com estes Termos de Uso. Caso não concorde, recomendamos que não utilize o site."] },
        { h:"2. Natureza das informações", p:["O conteúdo deste site tem caráter exclusivamente informativo e não constitui aconselhamento contábil, fiscal ou jurídico específico para o seu caso. Cada situação deve ser avaliada individualmente por um profissional."] },
        { h:"3. Ausência de garantia de resultado", p:["A SF TAX USA não oferece garantia de economia de impostos, de resultado fiscal ou de qualquer benefício específico. Nosso compromisso é com a prestação de serviços profissionais e responsáveis, em conformidade com a legislação aplicável."] },
        { h:"4. Uso do site", p:["Você concorda em utilizar o site de forma lícita e a não praticar qualquer ato que possa comprometer a segurança, o funcionamento ou a integridade do site e de seus conteúdos."] },
        { h:"5. Propriedade intelectual", p:["Os textos, marca, identidade visual e demais elementos do site são de titularidade da SF TAX USA ou de seus licenciadores e não podem ser reproduzidos sem autorização."] },
        { h:"6. Links externos", p:["O site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, pelas políticas ou pelas práticas desses sites."] },
        { h:"7. Limitação de responsabilidade", p:["A SF TAX USA não se responsabiliza por decisões tomadas exclusivamente com base nas informações gerais deste site, sem o devido aconselhamento profissional individualizado."] },
        { h:"8. Alterações", p:["Estes Termos de Uso podem ser atualizados periodicamente. Recomendamos a revisão regular desta página."] }
      ]
    }
  };

  /* ===================================================== ENGLISH */
  (I.en = I.en || {}).pages = {
    about: {
      metaTitle: "About SF TAX USA | Accounting for Brazilians & Foreigners in Florida",
      metaDesc: "Meet SF TAX USA — Santiago & Felix Accounting Services. Accounting and taxes in Florida with personal service in English, Portuguese and Spanish.",
      eyebrow: "About us",
      h1: "We speak your language — and understand the U.S. tax system.",
      sub: "We are SF TAX USA — Santiago & Felix Accounting Services, a Florida accounting firm specialized in helping Brazilians, Latinos, foreigners and businesses live, build and invest in the United States with confidence.",
      storyEyebrow: "Our story",
      storyTitle: "Born to simplify the financial life of those living between two worlds",
      story1: "SF TAX USA was born from firsthand experience with what it feels like to be a foreigner facing the American tax system.",
      story2: "Santiago and Felix know the anxiety of not understanding an IRS letter, of not knowing whether you're paying too much — or too little. That's why they founded an accounting firm built for people like them: Brazilians, Latinos, and immigrants building a life in the U.S. who need someone who speaks their language — literally and figuratively.",
      story3: "Today, with an office in Orlando and clients in more than 30 states, SF TAX USA is the go-to accounting firm for immigrants in the United States.",
      missionTitle: "Mission",
      missionText: "To be the bridge of trust between Brazilians, Latinos and foreigners and the American tax system — with clarity, closeness and zero unnecessary bureaucracy.",
      visionTitle: "Vision",
      visionText: "To be the go-to accounting firm for the Brazilian community in the U.S., recognized for excellence in service and for the peace of mind we deliver to every client.",
      valuesTitle: "Values",
      valuesText: "Transparency, closeness, compliance, agility and trust in everything we do.",
      valuesEyebrow: "What guides us",
      values2Title: "Principles behind every interaction",
      values: [
        { i:"shield", t:"Transparency", d:"No fine print or surprises — you always know exactly what's happening at every step." },
        { i:"users",  t:"Closeness", d:"You talk to people, not systems — human service from start to finish." },
        { i:"check",  t:"Compliance", d:"Your situation always current with the IRS — deadlines and obligations met with rigor." },
        { i:"clock",  t:"Agility", d:"Fast responses and met deadlines — no waiting or worrying on your end." },
        { i:"target", t:"Trust", d:"Built client by client, return by return — our greatest asset." }
      ],
      orlandoTitle: "Based in Orlando, serving all of the U.S.",
      orlandoText: "Our physical office is in Orlando, FL — the heart of the Brazilian community in Florida. But our service goes further: we serve clients in all U.S. states, 100% remotely and securely, in all three languages.",
      ctaTitle: "Shall we talk about your situation?",
      ctaSub: "Count on a partner who understands your context and speaks your language."
    },
    contactPage: {
      metaTitle: "Contact | SF TAX USA — Talk to a Specialist in Florida",
      metaDesc: "Reach SF TAX USA by WhatsApp, phone, email or form. Accounting and tax services in Florida in English, Portuguese and Spanish.",
      eyebrow: "Contact",
      h1: "Talk to an SF TAX USA specialist",
      sub: "Choose the channel you're most comfortable with. We respond with clear guidance and the next step — no obligation and in your language."
    },
    faqPage: {
      metaTitle: "FAQ | SF TAX USA — Accounting in Florida",
      metaDesc: "Get answers about accounting, taxes, business formation and tax obligations in the U.S. with SF TAX USA. Service in 3 languages.",
      eyebrow: "Frequently asked questions",
      h1: "Everything you need to know before getting started",
      sub: "We've gathered the most common questions about our service, our offerings and financial life in the United States. Didn't find yours? Talk to us.",
      groups: [
        { title: "About our service", items: [
          { q:"What languages does SF TAX USA serve in?", a:"We serve in English, Portuguese and Spanish, so you understand every detail clearly and feel at ease throughout the process." },
          { q:"Do I need to live in Florida to work with you?", a:"No. We serve clients in different states and also people living outside the U.S. with American tax obligations, fully remotely and securely." },
          { q:"How does the first contact work?", a:"You reach us via WhatsApp or the form. We understand your situation, clarify your questions and recommend the best path — no obligation." },
          { q:"Is the service only for companies?", a:"No. We serve individuals, freelancers, families, investors and companies. The service is always tailored to your reality." }
        ]},
        { title: "Services and taxes", items: [
          { q:"Do you help open a company in the U.S.?", a:"Yes. We guide the choice of structure (LLC, Corporation), handle registration, the EIN and the first steps so you operate safely." },
          { q:"Can you help if I have income in both Brazil and the U.S.?", a:"Yes. This is one of our specialties. We advise how to treat income from both countries and comply correctly, considering double-taxation mechanisms." },
          { q:"What is Sales Tax and should I worry?", a:"Sales Tax is the tax on sales. If your business sells products or certain services, you may need to register and collect it. We assess your case." },
          { q:"What are FBAR and FIRPTA?", a:"FBAR is foreign account reporting; FIRPTA is withholding on property sales by foreigners. Both require attention — we guide each situation individually." }
        ]},
        { title: "Deadlines and security", items: [
          { q:"What if I already have overdue obligations?", a:"Late returns and obligations can be regularized. The sooner you act, the smaller the impact of interest and penalties tends to be. We help you get current." },
          { q:"Do you guarantee tax savings?", a:"We don't work with guaranteed savings or results. Our commitment is to professional, responsible guidance in compliance with applicable law." },
          { q:"Are my data and documents secure?", a:"We treat your information with confidentiality and responsibility, using secure means to submit and organize documents." }
        ]}
      ],
      ctaTitle: "Still have questions?",
      ctaSub: "Talk to an SF TAX USA specialist and get clear guidance for your situation."
    },
    legal: {
      updated: "Last updated: June 2026",
      backHome: "Back to Home"
    },
    privacy: {
      metaTitle: "Privacy Policy | SF TAX USA",
      metaDesc: "Learn how SF TAX USA collects, uses and protects your personal data when you use our website and services.",
      eyebrow: "Legal",
      h1: "Privacy Policy",
      sections: [
        { h:"1. Introduction", p:["This Privacy Policy describes how SF TAX USA — Santiago & Felix Accounting Services collects, uses and protects the information you provide when browsing our website or requesting our services. By using the site, you agree to the practices described in this document."] },
        { h:"2. Information we collect", p:["We collect information you voluntarily provide, such as name, email, phone/WhatsApp, preferred language and messages sent via form. We may also collect anonymous browsing data, such as pages visited, through analytics tools."] },
        { h:"3. How we use information", p:["We use your data to respond to requests, provide and improve our services, send communications related to your service and comply with legal obligations. We do not sell or rent your personal data to third parties."] },
        { h:"4. Sharing", p:["Your data may be shared only with providers that help us operate (for example, communication and analytics tools) and when required by law. We require confidentiality from all partners."] },
        { h:"5. Cookies and analytics", p:["We may use cookies and tools such as Google Analytics to understand site usage and improve your experience. You can manage cookies in your browser settings."] },
        { h:"6. Security", p:["We adopt reasonable measures to protect your data against unauthorized access, loss or misuse. No method of transmission over the internet is 100% secure, but we work to maintain a high standard of protection."] },
        { h:"7. Your rights", p:["You may request access to, correction or deletion of your personal data, and clarify questions about its processing, by contacting us through our official channels."] },
        { h:"8. Contact", p:["For questions about this Privacy Policy, contact us through the channels available on this site."] }
      ]
    },
    terms: {
      metaTitle: "Terms of Use | SF TAX USA",
      metaDesc: "Read the terms and conditions for using the SF TAX USA website and services.",
      eyebrow: "Legal",
      h1: "Terms of Use",
      sections: [
        { h:"1. Acceptance of terms", p:["By accessing and using the SF TAX USA — Santiago & Felix Accounting Services website, you agree to these Terms of Use. If you do not agree, we recommend that you do not use the site."] },
        { h:"2. Nature of the information", p:["The content of this site is for informational purposes only and does not constitute specific accounting, tax or legal advice for your case. Each situation must be evaluated individually by a professional."] },
        { h:"3. No guarantee of results", p:["SF TAX USA does not guarantee tax savings, a tax outcome or any specific benefit. Our commitment is to provide professional, responsible services in compliance with applicable law."] },
        { h:"4. Use of the site", p:["You agree to use the site lawfully and not to engage in any act that may compromise the security, operation or integrity of the site and its content."] },
        { h:"5. Intellectual property", p:["The texts, brand, visual identity and other elements of the site belong to SF TAX USA or its licensors and may not be reproduced without authorization."] },
        { h:"6. External links", p:["The site may contain links to third-party sites. We are not responsible for the content, policies or practices of those sites."] },
        { h:"7. Limitation of liability", p:["SF TAX USA is not responsible for decisions made solely on the basis of the general information on this site, without proper individualized professional advice."] },
        { h:"8. Changes", p:["These Terms of Use may be updated periodically. We recommend reviewing this page regularly."] }
      ]
    }
  };

  /* ===================================================== ESPAÑOL */
  (I.es = I.es || {}).pages = {
    about: {
      metaTitle: "Sobre SF TAX USA | Contabilidad para Brasileños y Extranjeros en Florida",
      metaDesc: "Conozca SF TAX USA — Santiago & Felix Accounting Services. Contabilidad e impuestos en Florida con atención personal en español, portugués e inglés.",
      eyebrow: "Nosotros",
      h1: "Hablamos tu idioma — y entendemos el sistema fiscal americano.",
      sub: "Somos SF TAX USA — Santiago & Felix Accounting Services, una contabilidad en Florida especializada en ayudar a brasileños, latinos, extranjeros y empresas a vivir, emprender e invertir en los Estados Unidos con seguridad.",
      storyEyebrow: "Nuestra historia",
      storyTitle: "Nacimos para simplificar la vida fiscal de quienes viven entre dos mundos",
      story1: "SF TAX USA nació de la experiencia de vivir en carne propia lo que significa ser extranjero frente al sistema fiscal americano.",
      story2: "Santiago y Felix conocen de cerca la angustia de no entender una carta del IRS, de no saber si están pagando demasiado — o muy poco. Por eso fundaron una contabilidad hecha para personas como ellos: brasileños, latinos e inmigrantes que construyen una vida en EE.UU. y necesitan a alguien que hable su idioma — en el sentido literal y humano.",
      story3: "Hoy, con oficina en Orlando y clientes en más de 30 estados, SF TAX USA es la referencia en contabilidad para inmigrantes en Estados Unidos.",
      missionTitle: "Misión",
      missionText: "Ser el puente de confianza entre brasileños, latinos y extranjeros y el sistema fiscal estadounidense — con claridad, cercanía y cero burocracia innecesaria.",
      visionTitle: "Visión",
      visionText: "Ser el estudio contable de referencia para la comunidad brasileña en EE. UU., reconocido por la excelencia en la atención y por la tranquilidad que entregamos a cada cliente.",
      valuesTitle: "Valores",
      valuesText: "Transparencia, cercanía, cumplimiento, agilidad y confianza en todo lo que hacemos.",
      valuesEyebrow: "Lo que nos guía",
      values2Title: "Principios detrás de cada atención",
      values: [
        { i:"shield", t:"Transparencia", d:"Sin letra pequeña ni sorpresas — usted sabe exactamente qué ocurre en cada etapa." },
        { i:"users",  t:"Cercanía", d:"Usted habla con personas, no con sistemas — atención humana de principio a fin." },
        { i:"check",  t:"Cumplimiento", d:"Su situación siempre al día con el IRS — plazos y obligaciones cumplidos con rigor." },
        { i:"clock",  t:"Agilidad", d:"Respuestas rápidas y plazos cumplidos — sin esperas ni preocupaciones." },
        { i:"target", t:"Confianza", d:"Construida cliente a cliente, declaración a declaración — nuestro mayor activo." }
      ],
      orlandoTitle: "Con sede en Orlando, presentes en todo EE. UU.",
      orlandoText: "Nuestra oficina física está en Orlando, FL — el corazón de la comunidad brasileña en Florida. Pero nuestra atención va más allá: atendemos a clientes en todos los estados de EE. UU., 100% de forma remota y segura, en los tres idiomas.",
      ctaTitle: "¿Conversamos sobre su situación?",
      ctaSub: "Cuente con un socio que entiende su contexto y habla su idioma."
    },
    contactPage: {
      metaTitle: "Contacto | SF TAX USA — Hable con un Especialista en Florida",
      metaDesc: "Comuníquese con SF TAX USA por WhatsApp, teléfono, correo o formulario. Servicios contables y fiscales en Florida en español, portugués e inglés.",
      eyebrow: "Contacto",
      h1: "Hable con un especialista de SF TAX USA",
      sub: "Elija el canal más cómodo para usted. Respondemos con orientación clara y el siguiente paso — sin compromiso y en su idioma."
    },
    faqPage: {
      metaTitle: "Preguntas Frecuentes | SF TAX USA — Contabilidad en Florida",
      metaDesc: "Resuelva sus dudas sobre contabilidad, impuestos, apertura de empresa y obligaciones fiscales en EE. UU. con SF TAX USA. Atención en 3 idiomas.",
      eyebrow: "Preguntas frecuentes",
      h1: "Todo lo que necesita saber antes de empezar",
      sub: "Reunimos las dudas más comunes sobre nuestra atención, servicios y la vida fiscal en los Estados Unidos. ¿No encontró la suya? Hable con nosotros.",
      groups: [
        { title: "Sobre la atención", items: [
          { q:"¿En qué idiomas atiende SF TAX USA?", a:"Atendemos en español, portugués e inglés, para que entienda cada detalle con claridad y se sienta cómodo durante todo el proceso." },
          { q:"¿Necesito vivir en Florida para que me atiendan?", a:"No. Atendemos a clientes en distintos estados y también a personas que viven fuera de EE. UU. con obligaciones fiscales estadounidenses, de forma totalmente remota y segura." },
          { q:"¿Cómo funciona el primer contacto?", a:"Nos escribe por WhatsApp o el formulario. Entendemos su situación, aclaramos sus dudas e indicamos el mejor camino — sin compromiso." },
          { q:"¿La atención es solo para empresas?", a:"No. Atendemos a personas, autónomos, familias, inversionistas y empresas. El servicio siempre se adapta a su realidad." }
        ]},
        { title: "Servicios e impuestos", items: [
          { q:"¿Ayudan a abrir empresa en EE. UU.?", a:"Sí. Orientamos la elección de la estructura (LLC, Corporation), gestionamos el registro, el EIN y los primeros pasos para que opere con seguridad." },
          { q:"¿Pueden ayudarme si tengo ingresos en Brasil y en EE. UU.?", a:"Sí. Es una de nuestras especialidades. Orientamos cómo tratar los ingresos de ambos países y cumplir correctamente, considerando mecanismos contra la doble tributación." },
          { q:"¿Qué es el Sales Tax y debo preocuparme?", a:"El Sales Tax es el impuesto sobre ventas. Si su empresa vende productos o ciertos servicios, puede necesitar registrarse y recaudar. Evaluamos su caso." },
          { q:"¿Qué son el FBAR y el FIRPTA?", a:"El FBAR es el reporte de cuentas en el exterior; el FIRPTA es la retención en la venta de inmuebles por extranjeros. Ambos requieren atención — orientamos cada situación individualmente." }
        ]},
        { title: "Plazos y seguridad", items: [
          { q:"¿Y si ya tengo obligaciones atrasadas?", a:"Es posible regularizar declaraciones y obligaciones atrasadas. Cuanto antes actúe, menor tiende a ser el impacto de intereses y penalidades. Le ayudamos a ponerse al día." },
          { q:"¿Garantizan ahorro de impuestos?", a:"No trabajamos con garantía de ahorro ni de resultado. Nuestro compromiso es la orientación profesional y responsable conforme a la legislación aplicable." },
          { q:"¿Mis datos y documentos están seguros?", a:"Tratamos su información con confidencialidad y responsabilidad, usando medios seguros para el envío y la organización de documentos." }
        ]}
      ],
      ctaTitle: "¿Aún tiene dudas?",
      ctaSub: "Hable con un especialista de SF TAX USA y reciba orientación clara para su situación."
    },
    legal: {
      updated: "Última actualización: junio de 2026",
      backHome: "Volver al inicio"
    },
    privacy: {
      metaTitle: "Política de Privacidad | SF TAX USA",
      metaDesc: "Conozca cómo SF TAX USA recopila, usa y protege sus datos personales al utilizar nuestro sitio y servicios.",
      eyebrow: "Legal",
      h1: "Política de Privacidad",
      sections: [
        { h:"1. Introducción", p:["Esta Política de Privacidad describe cómo SF TAX USA — Santiago & Felix Accounting Services recopila, utiliza y protege la información que usted proporciona al navegar en nuestro sitio o solicitar nuestros servicios. Al utilizar el sitio, acepta las prácticas descritas en este documento."] },
        { h:"2. Información que recopilamos", p:["Recopilamos información que usted nos proporciona voluntariamente, como nombre, correo, teléfono/WhatsApp, idioma preferido y mensajes enviados por formulario. También podemos recopilar datos de navegación de forma anónima, como páginas visitadas, mediante herramientas de análisis."] },
        { h:"3. Cómo usamos la información", p:["Utilizamos sus datos para responder solicitudes, prestar y mejorar nuestros servicios, enviar comunicaciones relacionadas con su atención y cumplir obligaciones legales. No vendemos ni alquilamos sus datos personales a terceros."] },
        { h:"4. Compartir información", p:["Sus datos pueden compartirse solo con proveedores que nos ayudan a operar (por ejemplo, herramientas de comunicación y análisis) y cuando lo exija la ley. Exigimos confidencialidad a todos los socios."] },
        { h:"5. Cookies y análisis", p:["Podemos utilizar cookies y herramientas como Google Analytics para entender el uso del sitio y mejorar la experiencia. Puede gestionar las cookies en la configuración de su navegador."] },
        { h:"6. Seguridad", p:["Adoptamos medidas razonables para proteger sus datos contra accesos no autorizados, pérdida o uso indebido. Ningún método de transmisión por internet es 100% seguro, pero trabajamos para mantener un alto estándar de protección."] },
        { h:"7. Sus derechos", p:["Puede solicitar acceso, corrección o eliminación de sus datos personales, así como aclarar dudas sobre su tratamiento, contactándonos por nuestros canales oficiales."] },
        { h:"8. Contacto", p:["Para preguntas sobre esta Política de Privacidad, contáctenos por los canales disponibles en este sitio."] }
      ]
    },
    terms: {
      metaTitle: "Términos de Uso | SF TAX USA",
      metaDesc: "Conozca los términos y condiciones para utilizar el sitio y los servicios de SF TAX USA.",
      eyebrow: "Legal",
      h1: "Términos de Uso",
      sections: [
        { h:"1. Aceptación de los términos", p:["Al acceder y utilizar el sitio de SF TAX USA — Santiago & Felix Accounting Services, usted acepta estos Términos de Uso. Si no está de acuerdo, le recomendamos no utilizar el sitio."] },
        { h:"2. Naturaleza de la información", p:["El contenido de este sitio tiene carácter exclusivamente informativo y no constituye asesoría contable, fiscal o legal específica para su caso. Cada situación debe ser evaluada individualmente por un profesional."] },
        { h:"3. Sin garantía de resultado", p:["SF TAX USA no garantiza ahorro de impuestos, un resultado fiscal o cualquier beneficio específico. Nuestro compromiso es prestar servicios profesionales y responsables, conforme a la legislación aplicable."] },
        { h:"4. Uso del sitio", p:["Usted acepta utilizar el sitio de forma lícita y no realizar ningún acto que pueda comprometer la seguridad, el funcionamiento o la integridad del sitio y sus contenidos."] },
        { h:"5. Propiedad intelectual", p:["Los textos, la marca, la identidad visual y demás elementos del sitio pertenecen a SF TAX USA o a sus licenciantes y no pueden reproducirse sin autorización."] },
        { h:"6. Enlaces externos", p:["El sitio puede contener enlaces a sitios de terceros. No nos responsabilizamos por el contenido, las políticas o las prácticas de esos sitios."] },
        { h:"7. Limitación de responsabilidad", p:["SF TAX USA no se responsabiliza por decisiones tomadas exclusivamente con base en la información general de este sitio, sin la debida asesoría profesional individualizada."] },
        { h:"8. Cambios", p:["Estos Términos de Uso pueden actualizarse periódicamente. Recomendamos revisar esta página con regularidad."] }
      ]
    }
  };
})();
