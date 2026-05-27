// Conteúdo emocional e persuasivo para cada página de serviço.
// As chaves seguem o `slug` definido em src/lib/site.ts.

export type ServiceContent = {
  emotionalHook: string; // sub-headline da página (apelativo)
  story: string[]; // 2–3 parágrafos conectando com a dor do cliente
  pains: string[]; // dores que o cliente está sentindo agora
  howWeHelp: string[]; // como a empresa resolve, de forma humana
  benefits: { title: string; description: string }[]; // 3–4 benefícios tangíveis
  faq: { q: string; a: string }[];
  ctaHeadline: string;
  ctaSubheadline: string;
};

export const serviceContent: Record<string, ServiceContent> = {
  "preparacao-impostos": {
    emotionalHook:
      "Você não precisa perder noites de sono — nem dinheiro — por causa do IRS.",
    story: [
      "Toda temporada de Tax Return é a mesma sensação no estômago: medo de errar, medo de pagar mais do que deveria, medo de uma carta do IRS chegando no fim do ano.",
      "A boa notícia? Com a estratégia certa e um time que entende as duas pontas — Brasil e EUA — esse peso simplesmente desaparece. Você assina, recebe sua restituição e volta a focar na sua vida.",
    ],
    pains: [
      "Medo de errar a declaração e receber notificação do IRS",
      "Pagar mais imposto do que deveria por desconhecer deduções",
      "Não saber como declarar rendas do Brasil e dos EUA juntas",
      "Receber prazo apertado e não ter tempo de organizar documentos",
    ],
    howWeHelp: [
      "Analisamos seu cenário completo (PF e PJ, US e BR) antes de qualquer cálculo",
      "Buscamos cada dedução e crédito legal aplicável ao seu caso",
      "Coordenamos sua declaração americana com a brasileira (DIRPF, CBE)",
      "Você só assina — nós cuidamos do envio, prazos e comprovantes",
    ],
    benefits: [
      { title: "Menos imposto, dentro da lei", description: "Estratégia tributária pensada para você pagar exatamente o que é devido — nem um dólar a mais." },
      { title: "Tranquilidade com o IRS", description: "Declaração revisada por especialistas, sem riscos de auditoria por erros bobos." },
      { title: "Visão Brasil + EUA", description: "Tratamos sua vida fiscal nos dois países como um todo, evitando bitributação." },
    ],
    faq: [
      { q: "Preciso declarar mesmo morando no Brasil?", a: "Se você é cidadão americano, Green Card holder ou teve renda nos EUA, sim. Nós avaliamos sua obrigação caso a caso." },
      { q: "Posso recuperar imposto pago a mais nos últimos anos?", a: "Em muitos casos sim — o IRS permite Amended Returns dos últimos 3 anos. Nós analisamos seu histórico." },
    ],
    ctaHeadline: "Sua próxima declaração pode ser a mais tranquila da sua vida.",
    ctaSubheadline: "Fale com um especialista hoje e descubra quanto você pode economizar legalmente.",
  },

  "abertura-empresas": {
    emotionalHook:
      "Abrir sua empresa nos EUA deveria ser o início de um sonho — não um labirinto burocrático.",
    story: [
      "Você decidiu empreender na maior economia do mundo. Mas entre LLC e C-Corp, EIN e ITIN, Operating Agreement e Registered Agent, parece que cada passo abre três novas dúvidas.",
      "Nós já ajudamos centenas de brasileiros a estruturar negócios sólidos na Flórida. Você nos conta o sonho, a gente entrega a empresa pronta para faturar.",
    ],
    pains: [
      "Não sei qual estrutura é a melhor para o meu negócio (LLC, C-Corp, S-Corp)",
      "Tenho medo de escolher errado e pagar imposto demais lá na frente",
      "Não consigo abrir conta bancária americana sem CPF/SSN",
      "Já tentei sozinho e travei no EIN ou no Operating Agreement",
    ],
    howWeHelp: [
      "Reunião estratégica para entender seu modelo de negócio e perfil tributário",
      "Indicação técnica da melhor estrutura societária para o seu caso",
      "Registro completo no estado da Flórida + EIN + ITIN quando necessário",
      "Apoio na abertura de conta bancária com nossos parceiros",
    ],
    benefits: [
      { title: "Estrutura sob medida", description: "Sua empresa nasce pronta para crescer, sem retrabalho lá na frente." },
      { title: "Tudo em um só lugar", description: "Da burocracia inicial ao primeiro mês contábil — você não precisa correr atrás de nada." },
      { title: "Suporte em português", description: "Falamos sua língua e entendemos a realidade de quem vem do Brasil." },
    ],
    faq: [
      { q: "Preciso morar nos EUA para abrir minha empresa?", a: "Não. Estrangeiros não-residentes podem ser sócios de LLC e C-Corp. Nós explicamos as implicações fiscais de cada caso." },
      { q: "Quanto tempo leva todo o processo?", a: "Da decisão à empresa funcionando com conta bancária, geralmente entre 3 e 6 semanas." },
    ],
    ctaHeadline: "Sua empresa nos EUA pode estar pronta em semanas.",
    ctaSubheadline: "Conte seu projeto. Em 30 minutos te mostramos o caminho mais inteligente.",
  },

  "escrita-contabil": {
    emotionalHook:
      "Você não cresce o que não consegue medir. Pare de gerir seu negócio no escuro.",
    story: [
      "Quantas vezes você teve que adivinhar quanto sua empresa lucrou no mês passado? Quantas decisões você adiou porque não tinha número confiável na mão?",
      "Com uma contabilidade mensal organizada, todo dia 5 você abre um relatório claro: o que entrou, o que saiu, quanto sobrou. E aí, sim, você decide com confiança.",
    ],
    pains: [
      "Não sei se minha empresa realmente está dando lucro",
      "Misturo despesas pessoais e da empresa por falta de controle",
      "Banco/investidor pediu balanço e eu não tenho",
      "Vivo apagando incêndio no fim do ano fiscal",
    ],
    howWeHelp: [
      "Bookkeeping mensal completo: lançamentos, conciliações e fechamento",
      "Relatórios gerenciais em português, fáceis de entender",
      "Consultor disponível para tirar dúvidas no mês a mês",
      "Documentação pronta para banco, investidor ou auditoria a qualquer momento",
    ],
    benefits: [
      { title: "Clareza total", description: "Você sabe exatamente quanto sua empresa fatura, gasta e lucra — todo mês." },
      { title: "Decisões mais seguras", description: "Contratar, investir, expandir: cada decisão apoiada em número confiável." },
      { title: "Fim do estresse anual", description: "Quando chegar o Tax Return, está tudo pronto. Sem correria, sem multa." },
    ],
    faq: [
      { q: "Vocês usam QuickBooks, Xero ou outro?", a: "Trabalhamos com as principais plataformas e te ajudamos a escolher a que melhor se adapta ao seu volume." },
      { q: "Posso contratar só a partir de agora ou regularizar meses anteriores?", a: "Os dois. Fazemos catch-up bookkeeping de meses (ou anos) atrasados também." },
    ],
    ctaHeadline: "Seu negócio merece ser gerido com clareza.",
    ctaSubheadline: "Comece o próximo mês com os números organizados. Fale conosco agora.",
  },

  "folha-pagamento": {
    emotionalHook:
      "Pagar seu time deveria ser motivo de orgulho — não fonte de dor de cabeça.",
    story: [
      "Contratar é uma vitória. Mas junto vêm W-2, 1099, withholding, retenções federais e estaduais, prazos do IRS, do estado, do unemployment...",
      "A gente cuida de toda essa máquina nos bastidores. Você só aprova o pagamento. Seu colaborador recebe certinho, todos os impostos são recolhidos, e você dorme tranquilo.",
    ],
    pains: [
      "Tenho medo de errar retenção e receber multa do IRS",
      "Não sei se devo contratar como W-2 ou 1099",
      "Perco horas por mês calculando holerite manualmente",
      "Estou crescendo e a folha já não cabe em planilha",
    ],
    howWeHelp: [
      "Processamento de payroll mensal ou quinzenal automatizado",
      "Emissão de W-2 e 1099 nos prazos legais",
      "Recolhimento e reporte de todos os impostos trabalhistas",
      "Orientação na decisão entre employee (W-2) e contractor (1099)",
    ],
    benefits: [
      { title: "Compliance garantido", description: "Todos os prazos federais e estaduais cumpridos — sem multa, sem juros." },
      { title: "Time satisfeito", description: "Pagamento pontual e holerite correto reforçam a confiança da sua equipe." },
      { title: "Mais tempo para você", description: "Liberamos as horas que você gastava com folha para focar no que cresce o negócio." },
    ],
    faq: [
      { q: "Atendem empresas com apenas 1 funcionário?", a: "Sim. Inclusive o próprio dono de C-Corp que precisa se pagar via payroll." },
      { q: "Vocês resolvem contratação de remoto em outros estados?", a: "Sim — incluindo nexus tax, registro estadual e payroll multi-estadual." },
    ],
    ctaHeadline: "Tire a folha de pagamento da sua lista de preocupações.",
    ctaSubheadline: "Vamos cuidar de cada cálculo, cada prazo, cada formulário. Você cuida do crescimento.",
  },

  "planejamento-tributario": {
    emotionalHook:
      "Não é sobre pagar menos imposto. É sobre construir patrimônio que dura gerações.",
    story: [
      "Quem vive entre Brasil e EUA tem uma oportunidade rara: estruturar patrimônio aproveitando o melhor dos dois sistemas. Mas tem também o risco real da bitributação corroer tudo.",
      "Planejamento tributário não é um relatório — é uma decisão estratégica anual. Quanto antes você começa, mais economia legal acumula ao longo da vida.",
    ],
    pains: [
      "Tenho renda nos dois países e sinto que estou pagando imposto duas vezes",
      "Quero estruturar herança para meus filhos morando entre os dois países",
      "Comprei imóvel nos EUA sem saber dos impactos fiscais",
      "Recebo dividendos do Brasil e não sei como declarar nos EUA",
    ],
    howWeHelp: [
      "Diagnóstico completo da sua situação patrimonial Brasil-EUA",
      "Estratégia anual de redução tributária dentro da lei",
      "Uso inteligente do tratado e dos créditos para evitar bitributação",
      "Estruturação patrimonial e sucessória para proteger sua família",
    ],
    benefits: [
      { title: "Economia significativa", description: "Em muitos casos, o serviço se paga várias vezes no primeiro ano." },
      { title: "Proteção patrimonial", description: "Estruturas legais que blindam seu patrimônio contra riscos desnecessários." },
      { title: "Tranquilidade familiar", description: "Sucessão planejada significa menos burocracia e zero brigas no futuro." },
    ],
    faq: [
      { q: "Faz sentido planejamento mesmo para quem tem 'pouco' patrimônio?", a: "Sim. Quanto antes você começa, maior o efeito composto da economia ao longo dos anos." },
      { q: "Vocês trabalham com advogados de planejamento sucessório?", a: "Sim, temos parceiros jurídicos especializados em Brasil-EUA." },
    ],
    ctaHeadline: "Cada ano sem estratégia é dinheiro deixado na mesa.",
    ctaSubheadline: "Agende uma conversa estratégica de 30 minutos. Comece a economizar legalmente já no próximo trimestre.",
  },

  "sales-tax": {
    emotionalHook:
      "Sales Tax errado é a multa silenciosa que destrói margens. Vamos te tirar dessa.",
    story: [
      "A Flórida (e cada estado) tem suas próprias regras de Sales Tax. Cobrou a mais? Devolve com juros. Cobrou a menos? Paga do próprio bolso — com multa.",
      "Cuidamos do cadastro, da apuração mensal, do recolhimento e da regularização de pendências. Você foca em vender, a gente cuida do imposto sobre as vendas.",
    ],
    pains: [
      "Não tenho certeza se estou cobrando Sales Tax corretamente",
      "Vendo para vários estados e não sei onde tenho nexus",
      "Recebi notificação do estado por declaração atrasada",
      "Comecei a vender online e percebi que o tema é complicado demais",
    ],
    howWeHelp: [
      "Cadastro no Departamento de Receita da Flórida (e outros estados)",
      "Apuração mensal das vendas e do imposto devido",
      "Recolhimento dentro do prazo, sem multa",
      "Regularização de períodos em atraso e negociação de penalidades",
    ],
    benefits: [
      { title: "Compliance multi-estadual", description: "Vende para vários estados? Mapeamos seu nexus e mantemos tudo em dia." },
      { title: "Zero surpresas", description: "Você sabe exatamente quanto recolher antes do prazo vencer." },
      { title: "Foco em vender", description: "Você se dedica ao cliente, nós cuidamos do imposto sobre cada venda." },
    ],
    faq: [
      { q: "E-commerce também precisa pagar Sales Tax?", a: "Quase sempre sim — depende do volume e do estado. Avaliamos seu caso." },
      { q: "Posso recuperar Sales Tax pago indevidamente?", a: "Em muitos casos sim, dentro do prazo de prescrição estadual." },
    ],
    ctaHeadline: "Pare de perder dinheiro com Sales Tax mal calculado.",
    ctaSubheadline: "Em uma conversa rápida descobrimos onde você está exposto — e como corrigir.",
  },

  "consultoria-premium": {
    emotionalHook:
      "Quando o jogo é grande, decisão isolada custa caro. Você precisa de um consultor sênior do seu lado.",
    story: [
      "Estruturação societária complexa, operações cross-border, fusão, captação, sucessão. Esses momentos não cabem em e-mail rápido — exigem alguém que mergulha no seu caso.",
      "Na Consultoria Premium você tem um consultor sênior dedicado, atendimento prioritário e um plano de ação real, com prazos e responsáveis. Não é serviço, é parceria.",
    ],
    pains: [
      "Sinto que estou tomando decisões grandes sem o apoio certo",
      "Meu negócio cresceu e a contabilidade comum já não basta",
      "Preciso de alguém pensando estrategicamente comigo, não só executando",
      "Quero um único ponto focal que conheça toda minha operação",
    ],
    howWeHelp: [
      "Diagnóstico 360° da sua operação fiscal, contábil e patrimonial",
      "Consultor sênior dedicado, com atendimento prioritário",
      "Plano de ação personalizado, com prazos e responsáveis claros",
      "Reuniões estratégicas recorrentes para ajustar a rota",
    ],
    benefits: [
      { title: "Visão estratégica", description: "Decisões importantes deixam de ser intuição e passam a ser método." },
      { title: "Atendimento prioritário", description: "Quando o assunto urge, você fala com seu consultor — não com um chamado." },
      { title: "ROI mensurável", description: "Cada recomendação vem com impacto financeiro estimado." },
    ],
    faq: [
      { q: "Para quem é a Consultoria Premium?", a: "Empresários e investidores com operações complexas, faturamento relevante ou decisões estratégicas em andamento." },
      { q: "Como funciona o atendimento?", a: "Reuniões agendadas, canal direto com o consultor e revisões periódicas do plano." },
    ],
    ctaHeadline: "Você não precisa decidir sozinho.",
    ctaSubheadline: "Agende uma conversa confidencial com um consultor sênior. Em 30 minutos você sai com clareza.",
  },

  "tributacao-internacional": {
    emotionalHook:
      "Operar em mais de um país pode ser sua maior vantagem — ou seu maior risco. Depende de quem está te orientando.",
    story: [
      "Fronteiras criam oportunidades — e armadilhas. Quem entende de tratados, créditos fiscais, FATCA, CRS e estruturação internacional joga em outro nível.",
      "Estruturamos sua operação cross-border de forma organizada, aproveitando cada benefício legal disponível entre Brasil, EUA e demais jurisdições.",
    ],
    pains: [
      "Tenho receita ou bens em mais de um país e não sei se estou em compliance",
      "Pago imposto no Brasil e nos EUA sobre a mesma renda",
      "Quero remeter dividendos/royalties mas não sei a forma mais eficiente",
      "Recebi pedido de informação do FATCA ou CRS e não sei o que fazer",
    ],
    howWeHelp: [
      "Estruturação de operações cross-border (Brasil-EUA e demais)",
      "Aproveitamento de tratados e créditos contra bitributação",
      "Compliance de FATCA, CRS e obrigações acessórias",
      "Planejamento de remessas, dividendos e royalties",
    ],
    benefits: [
      { title: "Bitributação evitada", description: "Você não paga duas vezes pelo mesmo. Aplicamos cada tratado disponível." },
      { title: "Compliance total", description: "FATCA, CRS, FBAR, 8938 — sem brechas que virem dor de cabeça." },
      { title: "Eficiência de capital", description: "Remessas e dividendos estruturados para preservar o máximo do seu retorno." },
    ],
    faq: [
      { q: "Atendem operações fora de Brasil e EUA?", a: "Sim, temos rede de parceiros para apoiar operações em outras jurisdições." },
      { q: "Como sei se preciso desse serviço?", a: "Se você tem renda, bens ou negócios em mais de um país — provavelmente sim. Vamos avaliar juntos." },
    ],
    ctaHeadline: "Sua operação internacional pode trabalhar a seu favor.",
    ctaSubheadline: "Fale com um especialista em tributação internacional. Sem custo, sem compromisso.",
  },

  "imposto-de-renda-estimado": {
    emotionalHook:
      "Esperar para pagar o IRS no final do ano pode te custar caro. Existe um jeito mais inteligente.",
    story: [
      "Se você estima dever mais de US$ 1.000 (PF) ou US$ 500 (C-Corp), o IRS exige pagamentos trimestrais. Não pagar significa multa, juros e dor de cabeça.",
      "Calculamos o valor exato a cada trimestre, organizamos o pagamento via EFTPS e você fica tranquilo, em compliance e sem surpresas no Tax Return.",
    ],
    pains: [
      "Não sei se preciso pagar Estimated Tax — e nem quanto",
      "Já paguei imposto demais por excesso de cautela",
      "Já recebi multa por pagamento trimestral em atraso",
      "Tenho receita irregular e não sei como ajustar os pagamentos",
    ],
    howWeHelp: [
      "Cálculo trimestral preciso do Estimated Tax (1040-ES / 1120-W)",
      "Projeção de receita e ajustes ao longo do ano",
      "Pagamentos via EFTPS dentro do prazo, sem juros e multas",
      "Monitoramento do safe harbor para te proteger de penalidades",
    ],
    benefits: [
      { title: "Zero multa por underpayment", description: "Mantemos você dentro das regras de safe harbor o ano inteiro." },
      { title: "Fluxo de caixa previsível", description: "Você sabe quanto separar a cada trimestre — sem susto no fim do ano." },
      { title: "Ajustes ao longo do ano", description: "Receita mudou? Recalculamos. Sem pagar nem mais nem menos do que o devido." },
    ],
    faq: [
      { q: "Quando começam os pagamentos trimestrais?", a: "Geralmente abril, junho, setembro e janeiro. Calculamos as datas exatas para você." },
      { q: "E se minha receita for muito irregular?", a: "Usamos o método de anualização para ajustar os pagamentos a cada trimestre." },
    ],
    ctaHeadline: "Pague o que é devido — nem um centavo a mais, nem multa por menos.",
    ctaSubheadline: "Em uma conversa rápida descobrimos seu cenário de Estimated Tax para o ano.",
  },

  firpta: {
    emotionalHook:
      "Vendeu imóvel nos EUA como estrangeiro? O IRS já está com 15% do valor bruto. Vamos recuperar o que é seu.",
    story: [
      "FIRPTA é uma das regras mais rigorosas do sistema americano: na venda de imóvel por estrangeiro não-residente, o comprador retém 15% do valor bruto e envia ao IRS.",
      "Em muitos casos esse valor é muito maior do que o imposto realmente devido. Nós cuidamos do Withholding Certificate e da recuperação via Tax Return, devolvendo dinheiro para o seu bolso.",
    ],
    pains: [
      "Vou vender meu imóvel nos EUA e descobri sobre a retenção de 15%",
      "Já vendi e o comprador reteve — quero saber se posso recuperar",
      "Não entendo a diferença entre 8288, 8288-A e 8288-B",
      "Estou no fechamento e o closing agent pediu documentação FIRPTA",
    ],
    howWeHelp: [
      "Análise prévia da retenção sobre a venda do imóvel",
      "Solicitação do Withholding Certificate (Form 8288-B) quando aplicável",
      "Preparação de Form 8288 e 8288-A para o closing",
      "Recuperação do imposto retido via Tax Return seguinte",
    ],
    benefits: [
      { title: "Dinheiro de volta", description: "Em muitos casos, recuperamos integralmente o valor retido." },
      { title: "Closing sem atraso", description: "Documentação FIRPTA pronta para o dia do fechamento." },
      { title: "Zero risco com IRS", description: "Todo o processo conduzido dentro das regras, sem brechas." },
    ],
    faq: [
      { q: "Quanto tempo leva para recuperar a retenção?", a: "Via Tax Return, geralmente entre 3 e 6 meses após a submissão. Com 8288-B, antes mesmo do closing." },
      { q: "Vale a pena para qualquer valor de venda?", a: "Vale sempre que o imposto real for menor que os 15% retidos — o que é a regra em quase todos os casos." },
    ],
    ctaHeadline: "Aquele dinheiro retido pelo IRS pode voltar para sua conta.",
    ctaSubheadline: "Fale conosco antes do closing — quanto antes começamos, mais opções você tem.",
  },

  fbar: {
    emotionalHook:
      "Esquecer o FBAR pode custar até US$ 10.000 por conta. E o IRS não esquece.",
    story: [
      "Se você é contribuinte nos EUA e tem contas no exterior cujo saldo agregado ultrapassou US$ 10.000 em qualquer momento do ano, o FinCEN Form 114 (FBAR) é obrigatório.",
      "É um dos formulários com as multas mais pesadas do sistema americano. A boa notícia: é simples cumprir quando você tem alguém que faz isso há anos. E se está atrasado, ainda dá para regularizar.",
    ],
    pains: [
      "Acabei de descobrir que deveria ter declarado o FBAR e nunca declarei",
      "Tenho contas no Brasil e não sei se preciso reportar",
      "Já declarei FBAR mas não tenho certeza se foi feito corretamente",
      "Recebi notificação do IRS sobre contas no exterior",
    ],
    howWeHelp: [
      "Identificação das contas reportáveis no exterior",
      "Preparação e envio do FinCEN Form 114 (FBAR) no prazo",
      "Integração com Form 8938 (FATCA) quando aplicável",
      "Regularização de FBARs em atraso via Streamlined Procedures",
    ],
    benefits: [
      { title: "Proteção contra multas", description: "Multas por FBAR não declarado podem chegar a US$ 10.000 por conta. Evite com compliance preventivo." },
      { title: "Regularização tranquila", description: "Se está em atraso, conduzimos o Streamlined Procedures sem trauma." },
      { title: "Visão integrada", description: "FBAR + FATCA + Tax Return tratados como um sistema único, sem inconsistências." },
    ],
    faq: [
      { q: "Quem precisa declarar FBAR?", a: "Qualquer US Person (cidadão, residente, Green Card holder) com saldo agregado >US$ 10.000 em contas no exterior em qualquer momento do ano." },
      { q: "E se eu não declarei nos últimos anos?", a: "Existe o Streamlined Procedures, programa do IRS para regularização. Conduzimos o processo para você." },
    ],
    ctaHeadline: "Está em dia com o FBAR? Tem certeza?",
    ctaSubheadline: "Conversa rápida e confidencial para avaliar sua situação — antes que o IRS pergunte.",
  },

  "quit-claim-deed": {
    emotionalHook:
      "Transferir um imóvel parece simples — até descobrir o custo de um erro de redação.",
    story: [
      "O Quit Claim Deed é uma ferramenta poderosa para transferir título de imóvel rapidamente. Mas qualquer detalhe errado — assinatura, notarização, registro, imposto de selo — vira problema no Cartório, no IRS ou na herança.",
      "Cuidamos do documento, da notarização, do registro no County Clerk e da análise dos impactos fiscais. Você assina com a tranquilidade de quem fez certo desde o primeiro passo.",
    ],
    pains: [
      "Quero transferir imóvel para meu cônjuge, filhos ou LLC",
      "Não sei se Quit Claim Deed é o instrumento certo para meu caso",
      "Tenho medo dos impactos fiscais (gift tax, doc stamp tax)",
      "Já tentei sozinho e o cartório rejeitou o documento",
    ],
    howWeHelp: [
      "Elaboração do Quit Claim Deed conforme leis da Flórida",
      "Coordenação de assinatura, notarização e testemunhas",
      "Registro junto ao County Clerk competente",
      "Análise dos impactos fiscais (Doc Stamp Tax, gift tax)",
    ],
    benefits: [
      { title: "Segurança jurídica", description: "Documento elaborado dentro das normas da Flórida e devidamente registrado." },
      { title: "Sem surpresas fiscais", description: "Analisamos gift tax, doc stamp e impactos no Tax Return antes da transferência." },
      { title: "Processo completo", description: "Da redação ao registro — você só assina." },
    ],
    faq: [
      { q: "Quit Claim Deed protege contra dívidas anteriores do imóvel?", a: "Não, ele só transfere o que o concedente tem. Por isso a análise prévia é fundamental." },
      { q: "Posso usar Quit Claim para transferir imóvel para uma LLC?", a: "Sim, e é uma estrutura comum. Avaliamos impactos antes de executar." },
    ],
    ctaHeadline: "Faça a transferência certa, da primeira vez.",
    ctaSubheadline: "Conversa breve para entender seu caso e desenhar o caminho mais seguro.",
  },

  "recadastramento-anual-florida": {
    emotionalHook:
      "Esquecer o Annual Report é o jeito mais rápido — e mais bobo — de perder sua empresa.",
    story: [
      "Toda empresa registrada na Flórida precisa enviar o Annual Report à Sunbiz. Atrasou? US$ 400 de multa. Não enviou? A empresa vira Inactive e depois Dissolved — e aí o problema é grande.",
      "Cuidamos do envio dentro do prazo, mantemos seus dados atualizados e, se sua empresa já caiu em Inactive ou Dissolved, conduzimos a reativação.",
    ],
    pains: [
      "Esqueci do Annual Report e levei multa de US$ 400",
      "Minha empresa virou Inactive e não sei o que fazer",
      "Mudei de endereço/Registered Agent e não atualizei na Sunbiz",
      "Quero garantir que isso nunca mais aconteça",
    ],
    howWeHelp: [
      "Submissão do Annual Report na Sunbiz dentro do prazo (1º de janeiro a 1º de maio)",
      "Atualização de Registered Agent, sócios e endereço",
      "Reativação de empresas Inactive ou Dissolved",
      "Acompanhamento de cobranças e late fees",
    ],
    benefits: [
      { title: "Sua empresa sempre ativa", description: "Compliance contínuo com a Sunbiz, sem riscos de dissolução." },
      { title: "Dados sempre corretos", description: "Endereço, sócios e Registered Agent atualizados conforme realidade." },
      { title: "Reativação possível", description: "Caiu em Inactive ou Dissolved? Ainda dá para recuperar — começamos hoje." },
    ],
    faq: [
      { q: "Qual o prazo do Annual Report?", a: "De 1º de janeiro a 1º de maio de cada ano. Depois disso, multa fixa de US$ 400." },
      { q: "Posso reativar uma empresa Dissolved?", a: "Sim, dentro de prazos específicos da Flórida. Quanto antes começarmos, melhor." },
    ],
    ctaHeadline: "Coloque sua empresa em dia. Hoje.",
    ctaSubheadline: "Verificamos o status na Sunbiz e indicamos o próximo passo — sem custo.",
  },
};
