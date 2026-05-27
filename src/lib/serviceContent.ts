// Conteúdo emocional e persuasivo para cada página de serviço.
// As chaves seguem o `slug` definido em src/lib/site.ts.

export type ServiceContent = {
<<<<<<< HEAD
  emotionalHook: string;       // sub-headline impactante da página
  story: string[];             // 2–3 parágrafos conectando com a dor e a transformação
  urgencyNote: string;         // alerta curto sobre o custo de não agir
  whoIsFor: string[];          // perfil de quem precisa deste serviço
  pains: string[];             // dores reais que o cliente sente agora
  howWeHelp: string[];         // como a empresa resolve, de forma humana
  benefits: { title: string; description: string }[];
=======
  emotionalHook: string; // sub-headline da página (apelativo)
  story: string[]; // 2–3 parágrafos conectando com a dor do cliente
  pains: string[]; // dores que o cliente está sentindo agora
  howWeHelp: string[]; // como a empresa resolve, de forma humana
  benefits: { title: string; description: string }[]; // 3–4 benefícios tangíveis
>>>>>>> 2f8349a9d1e612bad415713dfc4784e77249e6ea
  faq: { q: string; a: string }[];
  ctaHeadline: string;
  ctaSubheadline: string;
};

export const serviceContent: Record<string, ServiceContent> = {
<<<<<<< HEAD

  // ─────────────────────────────────────────
  // 1. PREPARAÇÃO DE IMPOSTOS
  // ─────────────────────────────────────────
  "preparacao-impostos": {
    emotionalHook:
      "Você não deveria perder noites de sono com o IRS. Mas provavelmente está perdendo.",

    story: [
      "Todo ano a mesma angústia chega junto com o calendário fiscal: o medo de errar um número, o medo de pagar mais do que deveria, o medo de uma carta do IRS aparecendo seis meses depois. Quem vive entre o Brasil e os EUA carrega esse peso dobrado — dois sistemas, dois prazos, duas chances de errar.",
      "A verdade é que a maioria das pessoas paga mais imposto do que deveria — e nunca descobre, porque nunca teve alguém olhando o cenário completo com elas. Deduções esquecidas, créditos não aproveitados, rendas do Brasil declaradas duas vezes sem necessidade.",
      "Quando você trabalha com especialistas que conhecem os dois lados dessa equação, isso muda. Você para de pagar pelo que não deve, para de temer o IRS e passa a usar o Tax Return como o que ele realmente é: uma oportunidade de planejamento.",
    ],

    urgencyNote:
      "⚠ Declarações fora do prazo geram multa automática de 5% ao mês sobre o imposto devido. Se você também tem obrigações no Brasil (DIRPF, CBE), os dois prazos correm ao mesmo tempo.",

    whoIsFor: [
      "Brasileiros residentes nos EUA com renda aqui e/ou no Brasil",
      "Cidadãos americanos morando ou com negócios no Brasil",
      "Donos de LLC ou corporation que precisam da declaração empresarial",
      "Quem quer revisar declarações dos últimos 3 anos para recuperar valores pagos a mais",
    ],

    pains: [
      "\"Tenho medo de errar e receber uma notificação do IRS meses depois\"",
      "\"Pago mais imposto do que deveria porque não conheço as deduções\"",
      "\"Não sei como declarar minha renda do Brasil e dos EUA ao mesmo tempo\"",
      "\"Já atrasei o prazo e não sei se ainda dá para regularizar\"",
    ],

    howWeHelp: [
      "Analisamos seu cenário completo — PF e PJ, renda americana e brasileira — antes de qualquer número",
      "Mapeamos cada dedução e crédito legal aplicável ao seu perfil específico",
      "Coordenamos sua declaração americana com a brasileira (DIRPF, CBE) para eliminar bitributação",
      "Você só assina — cuidamos do envio, prazos, comprovantes e qualquer comunicação com o IRS",
    ],

    benefits: [
      {
        title: "Pague o que é justo — nem um dólar a mais",
        description:
          "Estratégia tributária real que identifica tudo a que você tem direito dentro da lei — antes de fechar qualquer número.",
      },
      {
        title: "Nunca mais tema uma carta do IRS",
        description:
          "Declaração revisada por especialistas, documentada, dentro dos prazos. Se o IRS perguntar, temos resposta.",
      },
      {
        title: "Brasil e EUA como um sistema único",
        description:
          "Tratamos sua vida fiscal nos dois países de forma integrada. Sem contradições, sem pagar duas vezes pelo mesmo.",
      },
    ],

    faq: [
      {
        q: "Preciso declarar nos EUA mesmo morando no Brasil?",
        a: "Se você é cidadão americano, tem Green Card ou teve renda nos EUA, a obrigação existe independente de onde mora. Avaliamos sua situação específica sem custo.",
      },
      {
        q: "Posso recuperar imposto que paguei a mais nos anos anteriores?",
        a: "O IRS permite Amended Returns (Form 1040-X) dos últimos 3 anos. Em muitos casos recuperamos valores significativos. Fazemos a análise para descobrir se o seu é um desses casos.",
      },
      {
        q: "O que acontece se eu não declarar?",
        a: "Multa de 5% ao mês sobre o imposto devido, mais juros. Em casos graves, o IRS pode determinar o valor por conta própria — quase sempre maior que o real.",
      },
      {
        q: "Quanto tempo antes do prazo devo começar?",
        a: "Idealmente 6 a 8 semanas antes. Assim temos tempo para levantar documentos, analisar o cenário e, se necessário, solicitar extensão de prazo sem penalidade.",
      },
    ],

    ctaHeadline: "Sua próxima declaração pode ser a mais tranquila da sua vida.",
    ctaSubheadline:
      "Fale com um especialista hoje. Em 30 minutos você descobre quanto pode economizar legalmente e o que precisa fazer agora.",
  },

  // ─────────────────────────────────────────
  // 2. ABERTURA DE EMPRESAS
  // ─────────────────────────────────────────
  "abertura-empresas": {
    emotionalHook:
      "Você decidiu empreender nos EUA. Esse é o passo mais corajoso. Não desperdice na burocracia.",

    story: [
      "A maior economia do mundo tem uma promessa real para quem decide empreender aqui: mercado enorme, previsibilidade jurídica, acesso a capital. Mas tem também um labirinto de siglas — LLC, C-Corp, S-Corp, EIN, ITIN, Registered Agent, Operating Agreement — que pode transformar o sonho em frustração antes mesmo do primeiro cliente.",
      "O erro mais comum é escolher a estrutura errada no começo. Uma LLC que deveria ser C-Corp para captar investidor. Um C-Corp que gera dupla tributação desnecessária. Uma S-Corp aberta por não-residente sem perceber que a lei americana não permite. Cada erro aqui custa tempo, dinheiro e, às vezes, a empresa inteira.",
      "Com o apoio certo, você toma essa decisão uma vez, da forma certa. Analisamos seu modelo de negócio, indicamos a estrutura ideal, cuidamos de todo o registro, do EIN ao primeiro mês contábil. Você chega na reunião de apresentação com tudo pronto.",
    ],

    urgencyNote:
      "⚠ Abrir a empresa no nome errado ou na estrutura errada pode gerar custo tributário relevante já no primeiro ano fiscal. A análise antes de abrir é sempre mais barata que a correção depois.",

    whoIsFor: [
      "Brasileiros que querem empreender ou expandir para os EUA",
      "Empreendedores digitais que precisam de estrutura americana para receber pagamentos",
      "Investidores em imóveis que querem proteger patrimônio via LLC",
      "Empresas brasileiras que abrem subsidiária na Flórida",
    ],

    pains: [
      "\"Não sei se devo abrir LLC ou C-Corp — e tenho medo de escolher errado\"",
      "\"Já tentei sozinho e travei no EIN, no Operating Agreement ou na abertura da conta\"",
      "\"Não tenho SSN e não sei se consigo abrir empresa sem ele\"",
      "\"Ouvi que a estrutura errada pode gerar imposto dobrado lá na frente\"",
    ],

    howWeHelp: [
      "Reunião estratégica para entender seu negócio, perfil tributário e plano de crescimento",
      "Recomendação técnica da estrutura ideal (LLC, C-Corp, S-Corp) para o seu caso específico",
      "Registro completo no estado da Flórida + EIN + ITIN quando necessário",
      "Apoio direto na abertura de conta bancária comercial com nossos parceiros",
    ],

    benefits: [
      {
        title: "Estrutura certa desde o primeiro dia",
        description:
          "Sua empresa nasce pronta para crescer — sem retrabalho, sem custo tributário desnecessário, sem reformulação futura.",
      },
      {
        title: "Do zero ao operacional em semanas",
        description:
          "Registro, EIN, conta bancária, primeiro mês contábil. Você foca no negócio enquanto a gente cuida da máquina administrativa.",
      },
      {
        title: "Alguém que fala português e entende seu contexto",
        description:
          "Não é só traduzir formulário. É entender de onde você vem, o que você quer construir, e montar o melhor caminho para isso.",
      },
    ],

    faq: [
      {
        q: "Preciso morar nos EUA para abrir empresa aqui?",
        a: "Não. Não-residentes podem ser sócios de LLC e C-Corp. Há implicações fiscais específicas que analisamos caso a caso — inclusive como você vai receber os lucros de volta.",
      },
      {
        q: "Qual a diferença real entre LLC e C-Corp?",
        a: "LLC é mais simples, tem pass-through de imposto e é ideal para a maioria dos negócios. C-Corp é necessária para receber investimento externo (venture capital) e emitir ações. A escolha certa depende do seu plano.",
      },
      {
        q: "Quanto tempo leva o processo completo?",
        a: "Da decisão à empresa com conta bancária funcionando, geralmente entre 3 e 6 semanas. Em situações de urgência conseguimos acelerar o processo.",
      },
      {
        q: "E se eu já abri a empresa na estrutura errada?",
        a: "Existe como converter ou reestruturar. Avaliamos o custo tributário da mudança e o custo de manter como está — e recomendamos o caminho mais inteligente.",
      },
    ],

    ctaHeadline: "Sua empresa nos EUA pode estar pronta — e do jeito certo — em semanas.",
    ctaSubheadline:
      "Conte o projeto. Em 30 minutos mostramos a estrutura ideal, o cronograma e o próximo passo concreto.",
  },

  // ─────────────────────────────────────────
  // 3. ESCRITA CONTÁBIL MENSAL
  // ─────────────────────────────────────────
  "escrita-contabil": {
    emotionalHook:
      "Você não consegue crescer o que não consegue medir. E gestão no escuro tem custo real.",

    story: [
      "Quantas vezes você tomou uma decisão importante — contratar alguém, renovar o espaço, aumentar o estoque — com base em estimativa? Quantas vezes o fim do mês chegou e os números na conta não bateram com o que você imaginava que tinha ganhado?",
      "Negócio sem contabilidade em dia não é negócio — é aposta. E aposta em dollar tem consequência em dollar. Sem saber o que entra e o que sai de verdade, a empresa cresce até um ponto e para. Porque decisão sem dado confiável é limitante.",
      "Com bookkeeping mensal estruturado, esse cenário muda completamente. Todo dia 5 você abre o relatório do mês anterior: quanto entrou, quanto saiu por categoria, qual foi o lucro real, o que está crescendo, o que está drenando. E aí você toma decisão como empresário — não como apostador.",
    ],

    urgencyNote:
      "⚠ Banco, investidor ou auditor pode pedir demonstrações financeiras a qualquer momento. Empresa sem bookkeeping em dia perde crédito, oportunidades de investimento e leva meses de corrida para regularizar.",

    whoIsFor: [
      "Donos de LLC ou corporation com movimento mensal recorrente",
      "Empresas que precisam de relatórios gerenciais para tomar decisão",
      "Quem quer se preparar para linha de crédito, investidor ou auditoria",
      "Negócios com meses de bookkeeping atrasado que precisam regularizar",
    ],

    pains: [
      "\"Não sei se minha empresa realmente está dando lucro — ou estou apenas movimentando dinheiro\"",
      "\"Misturo conta pessoal e empresarial sem querer e perco o controle\"",
      "\"O banco pediu demonstrações financeiras e eu não tenho nada atualizado\"",
      "\"Vivo com medo de chegar no Tax Return sem saber o que vai aparecer\"",
    ],

    howWeHelp: [
      "Bookkeeping mensal completo: lançamentos, categorização, conciliação bancária e de cartões",
      "Relatórios gerenciais em português — DRE, balancete e análise de variação",
      "Consultor disponível para tirar dúvidas no mês a mês, não só no fechamento",
      "Documentação organizada e pronta para banco, investidor ou Tax Return a qualquer momento",
    ],

    benefits: [
      {
        title: "Clareza total dos seus números todo mês",
        description:
          "Você sabe exatamente quanto a empresa fatura, quanto gasta, quanto sobra — por categoria, por período, por serviço.",
      },
      {
        title: "Decisões com base em dados reais",
        description:
          "Contratar, cortar custo, expandir, pausar: cada decisão importante apoiada em número confiável, não em intuição.",
      },
      {
        title: "Tax Return sem surpresa e sem correria",
        description:
          "Quando o prazo chegar, tudo está documentado. Sem levantamento emergencial, sem estresse, sem multa por atraso.",
      },
    ],

    faq: [
      {
        q: "Vocês trabalham com QuickBooks, Xero ou outro software?",
        a: "Trabalhamos com as principais plataformas. Ajudamos a escolher a melhor para o volume do seu negócio e fazemos a migração se necessário.",
      },
      {
        q: "Posso contratar agora e regularizar meses anteriores ao mesmo tempo?",
        a: "Sim. Fazemos catch-up bookkeeping de meses (ou anos) atrasados. O preço e o prazo dependem do volume — analisamos antes.",
      },
      {
        q: "Com que frequência recebo os relatórios?",
        a: "Mensalmente, com fechamento até o 5º dia útil do mês seguinte. Relatórios ad hoc por demanda quando você precisar.",
      },
      {
        q: "Preciso de bookkeeping se minha empresa é pequena?",
        a: "Especialmente se é pequena — porque é quando cada real importa mais e o dono tem menos tempo para ficar olhando números. Organizamos isso por você.",
      },
    ],

    ctaHeadline: "Seu negócio merece clareza. Comece a medir o que importa.",
    ctaSubheadline:
      "Fale com a gente hoje. No próximo fechamento mensal, você já tem seus números organizados.",
  },

  // ─────────────────────────────────────────
  // 4. FOLHA DE PAGAMENTO
  // ─────────────────────────────────────────
  "folha-pagamento": {
    emotionalHook:
      "Contratar gente boa é uma vitória. Errar a folha de pagamento pode transformar essa vitória em multa.",

    story: [
      "Você construiu o negócio, chegou na hora de crescer o time, e de repente se vê diante de uma máquina burocrática: withholding federal, withholding estadual, FICA, FUTA, SUTA, W-2, 1099-NEC, prazos trimestrais do IRS, prazos anuais do estado. Cada erro nessa engrenagem tem multa com juros.",
      "E antes de tudo isso ainda tem a decisão mais importante: esse profissional é funcionário (W-2) ou contratado independente (1099)? A resposta errada pode gerar uma reclassificação pelo IRS — com cobrança retroativa de todos os encargos que deveriam ter sido recolhidos.",
      "Quando você terceiriza o payroll para quem faz isso todo dia, esse peso some do seu radar. Seu time recebe certinho, na data certa, com holerite correto. Os impostos são recolhidos dentro do prazo. E você usa esse tempo para crescer — não para calcular folha.",
    ],

    urgencyNote:
      "⚠ Multa por falha no depósito de payroll taxes começa em 2% do valor e pode chegar a 15%. O IRS não aceita 'não sabia' como justificativa — e a responsabilidade é do dono da empresa, não do contador.",

    whoIsFor: [
      "Empresas com funcionários formais (W-2) na Flórida ou em outros estados",
      "Donos de C-Corp que precisam se pagar via payroll",
      "Negócios com prestadores de serviço que precisam emitir 1099 corretamente",
      "Empresas em crescimento que não querem que a folha vire gargalo",
    ],

    pains: [
      "\"Nunca tive funcionário formal — não sei nem por onde começar com a folha\"",
      "\"Tenho medo de errar o withholding e receber multa do IRS\"",
      "\"Não sei se devo contratar como W-2 ou 1099 — e as consequências de errar\"",
      "\"Perco horas todo mês calculando manualmente — isso não escala\"",
    ],

    howWeHelp: [
      "Processamento de payroll mensal ou quinzenal, automatizado e dentro dos prazos",
      "Emissão de W-2 e 1099-NEC dentro dos prazos legais para todos os colaboradores",
      "Recolhimento e reporte de todos os impostos trabalhistas federais e estaduais",
      "Orientação estratégica na decisão entre funcionário (W-2) e contratado independente (1099)",
    ],

    benefits: [
      {
        title: "Compliance total — sem multa, sem susto",
        description:
          "Todos os depósitos e relatórios nos prazos corretos. Se o IRS ou o estado perguntar, temos tudo documentado.",
      },
      {
        title: "Seu time recebe sempre certinho",
        description:
          "Pagamento pontual e holerite correto são parte da cultura da empresa. Ajudamos a construir isso desde o início.",
      },
      {
        title: "Tempo livre para o que importa",
        description:
          "As horas que você gastava calculando folha voltam para o negócio — para estratégia, para cliente, para crescimento.",
      },
    ],

    faq: [
      {
        q: "Vocês atendem empresa com apenas 1 funcionário?",
        a: "Sim. Inclusive o próprio dono de C-Corp que se paga via payroll — o que é obrigatório nessa estrutura.",
      },
      {
        q: "E se eu tiver funcionários em mais de um estado?",
        a: "Cuidamos de payroll multi-estadual, incluindo nexus tax, registro estadual e recolhimento correto para cada estado.",
      },
      {
        q: "Como funciona a emissão de 1099 para prestadores?",
        a: "Identificamos quem precisa receber 1099-NEC, preparamos e enviamos o formulário dentro do prazo — para o prestador e para o IRS.",
      },
      {
        q: "Posso mudar de contador de payroll e vocês assumem no meio do ano?",
        a: "Sim. Fazemos a transição preservando todo o histórico do ano — sem lacunas no reporte anual.",
      },
    ],

    ctaHeadline: "Tire a folha de pagamento da sua lista de preocupações.",
    ctaSubheadline:
      "Cuidamos de cada cálculo, cada prazo, cada formulário. Você cuida do time e do crescimento.",
  },

  // ─────────────────────────────────────────
  // 5. PLANEJAMENTO TRIBUTÁRIO
  // ─────────────────────────────────────────
  "planejamento-tributario": {
    emotionalHook:
      "Cada ano sem estratégia tributária é dinheiro deixado na mesa. Ou pior — pago duas vezes.",

    story: [
      "Quem vive e opera entre Brasil e EUA tem uma oportunidade real que a maioria não aproveita: estruturar patrimônio usando o melhor dos dois sistemas. Mas tem também o risco concreto da bitributação — pagar imposto no Brasil sobre o que já pagou nos EUA, ou vice-versa, por não conhecer os mecanismos de crédito disponíveis.",
      "A maioria das pessoas descobre o planejamento tributário depois de perder dinheiro. Depois de pagar a mais por anos seguidos. Depois de estruturar herança de forma que criou problema em vez de resolver. Depois de remeter dividendos sem entender o impacto fiscal dos dois lados.",
      "Planejamento tributário não é um relatório que você arquiva. É uma decisão estratégica anual que, quando bem feita, se paga várias vezes no próprio ano. O melhor momento para começar foi no começo. O segundo melhor momento é agora.",
    ],

    urgencyNote:
      "⚠ A Receita Federal brasileira e o IRS americano cruzam dados com frequência crescente via FATCA e CRS. Inconsistências entre declarações nos dois países podem gerar fiscalização simultaneamente nos dois lados.",

    whoIsFor: [
      "Brasileiros com renda ou patrimônio nos EUA e no Brasil",
      "Donos de empresa que querem reduzir carga tributária legalmente",
      "Investidores em imóveis nos EUA que precisam estruturar a operação com eficiência",
      "Quem pensa em herança e quer deixar patrimônio sem burocracia para os filhos",
    ],

    pains: [
      "\"Tenho renda nos dois países e sinto que estou pagando imposto duas vezes sobre a mesma coisa\"",
      "\"Comprei imóvel nos EUA sem saber dos impactos fiscais — quero entender o que ainda dá para fazer\"",
      "\"Quero deixar patrimônio para meus filhos, mas não sei como estruturar entre Brasil e EUA\"",
      "\"Nunca tive planejamento tributário — sempre paguei o que chegava e torci para estar certo\"",
    ],

    howWeHelp: [
      "Diagnóstico completo da sua situação patrimonial e tributária nos dois países",
      "Estratégia anual de redução tributária legal — aproveitando tratados, créditos e estruturas disponíveis",
      "Integração da declaração americana com a brasileira para eliminar bitributação de forma definitiva",
      "Planejamento patrimonial e sucessório para proteger o que você construiu",
    ],

    benefits: [
      {
        title: "O serviço que se paga sozinho",
        description:
          "Em muitos casos, a economia gerada já no primeiro ano é maior que o custo do planejamento. Calculamos isso antes.",
      },
      {
        title: "Proteção contra fiscalização",
        description:
          "Declarações consistentes nos dois países, documentação de suporte. Nada para esconder — e tudo para mostrar.",
      },
      {
        title: "Patrimônio que passa para quem você ama",
        description:
          "Sucessão planejada significa menos imposto, menos burocracia e zero conflito para seus herdeiros.",
      },
    ],

    faq: [
      {
        q: "Planejamento tributário faz sentido para quem tem patrimônio pequeno?",
        a: "Sim. O efeito composto da economia tributária ao longo dos anos é poderoso — quanto antes você começa, mais você acumula.",
      },
      {
        q: "Existe algum risco legal no planejamento tributário?",
        a: "Planejamento tributário é completamente legal. É diferente de sonegação. Usamos apenas mecanismos previstos na lei americana e no tratado Brasil-EUA.",
      },
      {
        q: "Vocês trabalham com advogados para questões de herança?",
        a: "Sim. Temos parceiros jurídicos especializados em planejamento sucessório Brasil-EUA para quando a situação exige visão legal além da contábil.",
      },
      {
        q: "Com que frequência o planejamento precisa ser revisado?",
        a: "Anualmente, no mínimo. Leis mudam, sua situação muda, oportunidades aparecem e fecham. O planejamento precisa acompanhar.",
      },
    ],

    ctaHeadline: "Você já pagou imposto demais este ano. Ano que vem não precisa.",
    ctaSubheadline:
      "Agende uma conversa estratégica. Em 30 minutos você sai com clareza sobre quanto pode economizar legalmente.",
  },

  // ─────────────────────────────────────────
  // 6. SALES TAX
  // ─────────────────────────────────────────
  "sales-tax": {
    emotionalHook:
      "Sales Tax errado não faz barulho — até o dia que a notificação estadual chega.",

    story: [
      "O Sales Tax da Flórida tem uma armadilha que pega muita empresa desprevenida: a responsabilidade pelo imposto correto é sempre do vendedor — não do cliente. Se você cobrou a menos, paga a diferença do próprio bolso, mais juros. Se não cobrou e deveria, o estado vai atrás. Se cruzou o nexus em outro estado sem saber, abre passivo tributário em dois lugares ao mesmo tempo.",
      "Para e-commerce, o tema ficou ainda mais complexo depois da decisão South Dakota vs. Wayfair: hoje, mesmo vendendo de longe, você pode ter obrigação de coletar Sales Tax em estados onde nunca pisou. E cada estado tem suas próprias regras de produto, prazo e alíquota.",
      "Cuidamos de tudo: cadastro no estado, apuração mensal, recolhimento dentro do prazo e, se necessário, regularização de períodos em atraso. Você foca em vender. A gente garante que o imposto sobre cada venda está correto.",
    ],

    urgencyNote:
      "⚠ A Florida Department of Revenue realiza auditorias retroativas de até 3 anos. Multas por Sales Tax não recolhido incluem 10% do valor mais 12% de juros anuais — sem teto.",

    whoIsFor: [
      "Empresas com ponto físico ou venda online na Flórida",
      "E-commerce que cruza limite de vendas em outros estados (nexo econômico)",
      "Negócios que receberam notificação estadual sobre Sales Tax",
      "Empresas que cresceram e nunca verificaram se estão em compliance",
    ],

    pains: [
      "\"Não tenho certeza se estou cobrando Sales Tax corretamente em todos os produtos\"",
      "\"Comecei a vender para vários estados e não sei onde tenho nexus\"",
      "\"Recebi uma notificação do Departamento de Receita e não sei o que fazer\"",
      "\"Meu e-commerce cresceu rápido e nunca parei para verificar o compliance\"",
    ],

    howWeHelp: [
      "Cadastro no Departamento de Receita da Flórida e outros estados com nexo identificado",
      "Apuração mensal das vendas tributáveis e do imposto devido por jurisdição",
      "Recolhimento automático dentro do prazo, sem multa",
      "Regularização de períodos em atraso e negociação de penalidades quando necessário",
    ],

    benefits: [
      {
        title: "Zero risco de auditoria estadual",
        description:
          "Compliance contínuo, declarações em dia, documentação organizada. Se o estado pedir, temos tudo.",
      },
      {
        title: "Nexus mapeado em todos os estados",
        description:
          "Identificamos onde você tem obrigação de coletar Sales Tax antes que o estado descubra por você.",
      },
      {
        title: "Margens protegidas",
        description:
          "Sem surpresas de impostos pagos do próprio bolso. Você sabe exatamente quanto de cada venda é seu.",
      },
    ],

    faq: [
      {
        q: "E-commerce precisa se preocupar com Sales Tax em estados onde não tem escritório?",
        a: "Após Wayfair (2018), sim. Se você ultrapassou o limite de vendas em um estado, tem obrigação de coletar. Avaliamos seu volume por estado.",
      },
      {
        q: "Posso recuperar Sales Tax pago indevidamente?",
        a: "Em muitos casos sim, dentro do prazo de prescrição estadual. Analisamos seu histórico.",
      },
      {
        q: "Como funciona a regularização se estou em atraso?",
        a: "Dependendo do tempo e do valor, existem programas de voluntary disclosure que reduzem ou eliminam multas. Conduzimos o processo.",
      },
      {
        q: "Qual a alíquota de Sales Tax na Flórida?",
        a: "A alíquota estadual base é 6%, mas municípios adicionam até 2,5%. E alguns produtos são isentos. A conta certa depende do produto e do destino.",
      },
    ],

    ctaHeadline: "Descubra agora se seu Sales Tax está correto — antes do estado descobrir por você.",
    ctaSubheadline:
      "Uma conversa rápida para mapear sua exposição. Sem custo, sem compromisso, com clareza.",
  },

  // ─────────────────────────────────────────
  // 7. CONSULTORIA PREMIUM
  // ─────────────────────────────────────────
  "consultoria-premium": {
    emotionalHook:
      "Quando o jogo é grande, você precisa de um estrategista — não de mais um prestador de serviço.",

    story: [
      "Existe um momento na vida de todo empresário quando as decisões ficam grandes demais para serem tomadas só. Fusão, captação, expansão internacional, reestruturação societária, planejamento sucessório complexo. Não é para tirar uma dúvida rápida — é para ter alguém que conhece sua operação de dentro, pensa estrategicamente com você e está disponível quando o assunto urge.",
      "A maioria dos escritórios de contabilidade executa. Declara, fecha, processa, envia. Mas ninguém senta para perguntar: 'Para onde você quer ir? O que você está tentando construir? E qual é o caminho mais inteligente de lá para cá?'",
      "Na Consultoria Premium você tem exatamente isso: um consultor sênior dedicado, que mergulha no seu caso, entende a totalidade da sua operação e está do seu lado nas decisões que importam. É parceria — não fornecedor.",
    ],

    urgencyNote:
      "⚠ Decisões estratégicas tomadas sem visão contábil e tributária completa costumam gerar custo corretivo muito maior do que o custo preventivo de ter o consultor certo antes.",

    whoIsFor: [
      "Empresários com operações complexas ou multi-jurisdicionais",
      "Quem está diante de uma decisão grande: captação, fusão, expansão, sucessão",
      "Investidores com patrimônio significativo nos EUA e/ou no Brasil",
      "Clientes que querem um ponto focal único que conhece toda a operação",
    ],

    pains: [
      "\"Estou tomando decisões grandes sem ter certeza de que tenho o apoio certo\"",
      "\"Meu negócio cresceu e a contabilidade comum já não dá conta do que eu preciso\"",
      "\"Quero alguém pensando estrategicamente comigo — não só executando\"",
      "\"Quando tenho urgência, fico esperando resposta de uma fila de atendimento\"",
    ],

    howWeHelp: [
      "Diagnóstico 360° da sua operação: fiscal, contábil, patrimonial e estratégica",
      "Consultor sênior dedicado com canal direto e atendimento prioritário",
      "Plano de ação personalizado com objetivos, prazos e responsáveis claros",
      "Reuniões estratégicas recorrentes para ajustar rota conforme o negócio evolui",
    ],

    benefits: [
      {
        title: "Visão estratégica, não só execução",
        description:
          "Alguém que enxerga sua operação como um todo e te ajuda a tomar as decisões certas — antes que o custo apareça.",
      },
      {
        title: "Você fala com seu consultor, não com uma fila",
        description:
          "Atendimento prioritário quando a situação pede urgência. Canal direto, resposta rápida, sem burocracia.",
      },
      {
        title: "ROI mensurado em cada decisão",
        description:
          "Cada recomendação vem com impacto financeiro estimado. Você sabe o que está ganhando ao seguir a estratégia.",
      },
    ],

    faq: [
      {
        q: "Para quem faz sentido a Consultoria Premium?",
        a: "Para quem tem operações complexas, está diante de decisões estratégicas importantes ou simplesmente quer ter um parceiro sênior que conhece seu caso de dentro — não um prestador que atende centenas de clientes iguais.",
      },
      {
        q: "Qual a diferença para os outros serviços?",
        a: "Os outros serviços são pontuais. A Consultoria Premium é um acompanhamento contínuo, com consultor dedicado, visão integrada de toda a operação e acesso prioritário.",
      },
      {
        q: "Como funciona na prática?",
        a: "Reuniões agendadas regularmente, canal direto com o consultor, plano de ação revisado periodicamente e acesso para dúvidas e urgências fora da agenda.",
      },
      {
        q: "Inclui outros serviços (Tax, Payroll, etc.)?",
        a: "Sim, a Consultoria Premium coordena todos os serviços contábeis dentro de uma visão unificada. Você não precisa gerenciar vários prestadores — centralizamos tudo.",
      },
    ],

    ctaHeadline: "Você não precisa carregar as decisões grandes sozinho.",
    ctaSubheadline:
      "Agende uma conversa confidencial com um consultor sênior. Em 30 minutos você entende como funciona e se faz sentido para o seu momento.",
  },

  // ─────────────────────────────────────────
  // 8. TRIBUTAÇÃO INTERNACIONAL
  // ─────────────────────────────────────────
  "tributacao-internacional": {
    emotionalHook:
      "Operar entre países pode ser sua maior vantagem competitiva. Ou sua maior exposição fiscal. Depende de quem está olhando por você.",

    story: [
      "Quem opera em mais de um país está, simultaneamente, diante de uma oportunidade e de um campo minado. A oportunidade: aproveitar estruturas fiscais eficientes, tratados bilaterais, créditos tributários e jurisdições que trabalham a seu favor. O campo minado: FATCA, CRS, FBAR, bitributação, inconsistências entre declarações nos dois países, penalidades por não conformidade que chegam a seis dígitos.",
      "A maioria das pessoas que tem renda ou patrimônio internacional assume que está em ordem — até que recebe uma correspondência do IRS perguntando sobre uma conta no exterior que nunca foi declarada, ou descobre que está pagando imposto no Brasil sobre renda que já tributou nos EUA porque nunca aplicou o crédito corretamente.",
      "Tributação internacional é uma das áreas mais técnicas da contabilidade. E também uma das mais rentáveis quando bem estruturada. Organizamos sua operação cross-border aproveitando cada benefício legal disponível — e mantendo você em compliance nos dois lados.",
    ],

    urgencyNote:
      "⚠ O intercâmbio automático de informações financeiras entre Brasil e EUA (via FATCA e CRS) está ativo e crescendo. Contas não reportadas e renda não declarada têm risco real de detecção — com multas severas em ambos os países.",

    whoIsFor: [
      "Brasileiros com renda, contas ou investimentos nos EUA",
      "Empresas com operações ou subsidiárias em mais de um país",
      "Quem remete dividendos, royalties ou lucros entre Brasil e EUA",
      "Investidores com ativos em múltiplas jurisdições",
    ],

    pains: [
      "\"Pago imposto no Brasil sobre a mesma renda que já declarei nos EUA — isso não deveria acontecer\"",
      "\"Tenho receita ou bens em mais de um país e não sei se estou em compliance\"",
      "\"Quero remeter lucros dos EUA para o Brasil de forma eficiente — mas não sei como\"",
      "\"Recebi algo relacionado a FATCA ou CRS e não entendi o que fazer\"",
    ],

    howWeHelp: [
      "Diagnóstico completo da sua exposição fiscal internacional e identificação de inconsistências",
      "Estruturação de operações cross-border para máxima eficiência fiscal dentro da lei",
      "Aplicação correta de tratados e créditos para eliminar bitributação de forma definitiva",
      "Compliance de FATCA, CRS e todas as obrigações acessórias nos dois países",
    ],

    benefits: [
      {
        title: "Fim da bitributação",
        description:
          "Você não paga duas vezes pelo mesmo. Aplicamos cada tratado e crédito disponível para que cada dólar seja tributado apenas uma vez.",
      },
      {
        title: "Compliance total em dois países",
        description:
          "FATCA, CRS, FBAR, Form 8938, DIRPF, CBE — tudo declarado de forma consistente e integrada, sem brechas.",
      },
      {
        title: "Capital que circula com eficiência",
        description:
          "Remessas, dividendos e royalties estruturados para preservar o máximo do seu retorno, com segurança jurídica.",
      },
    ],

    faq: [
      {
        q: "Como sei se realmente estou sujeito à bitributação?",
        a: "Se você tem renda em mais de um país e não está aplicando créditos tributários e tratados corretamente, muito provavelmente está. Fazemos o diagnóstico.",
      },
      {
        q: "O que acontece se eu nunca declarei contas no exterior para o IRS?",
        a: "Dependendo do tempo e dos valores, há programas de regularização (Streamlined Procedures) que permitem corrigir sem as penalidades máximas. Quanto antes, melhor.",
      },
      {
        q: "Vocês atendem operações fora de Brasil e EUA?",
        a: "Sim. Temos rede de parceiros para apoiar operações em outras jurisdições — especialmente Europa e América Latina.",
      },
      {
        q: "Quais formas de remessa de dinheiro dos EUA para o Brasil vocês apoiam?",
        a: "Dividendos de LLC, distribuição de C-Corp, prolabore, royalties, empréstimos entre partes relacionadas. Cada forma tem tratamento fiscal diferente — analisamos o melhor para o seu caso.",
      },
    ],

    ctaHeadline: "Sua operação internacional pode trabalhar a seu favor — muito mais do que está agora.",
    ctaSubheadline:
      "Agende uma conversa com um especialista em tributação Brasil-EUA. Sem custo, com clareza.",
  },

  // ─────────────────────────────────────────
  // 9. IMPOSTO DE RENDA ESTIMADO
  // ─────────────────────────────────────────
  "imposto-de-renda-estimado": {
    emotionalHook:
      "Deixar para pagar o IRS só no fim do ano parece mais fácil — mas pode custar caro demais.",

    story: [
      "O sistema tributário americano funciona em cima de um princípio simples: você paga imposto ao longo do ano, não só no Tax Return. Para quem é empregado, o empregador já faz isso automaticamente via withholding. Mas para quem é self-employed, freelancer, tem renda de aluguel ou distribuição de empresa, a responsabilidade é sua — e o IRS não avisa quando o prazo está chegando.",
      "Se você estima dever mais de US$ 1.000 de imposto no ano (PF) ou US$ 500 (C-Corp), é obrigatório fazer pagamentos trimestrais. Não fez? O IRS aplica uma penalidade de underpayment automaticamente — mesmo que você pague tudo no Tax Return. É como pagar aluguel no fim do ano quando deveria pagar mensalmente: o caseiro cobra atraso.",
      "Calculamos o valor exato que você precisa pagar em cada trimestre, organizamos via EFTPS e garantimos que você fica dentro do safe harbor. Sem multa, sem surpresa, sem cálculo manual.",
    ],

    urgencyNote:
      "⚠ Os quatro prazos de Estimated Tax são: 15 de abril, 15 de junho, 15 de setembro e 15 de janeiro. Atrasar qualquer um gera penalidade automática — calculada individualmente por trimestre, não pelo total do ano.",

    whoIsFor: [
      "Self-employed, freelancers e profissionais autônomos nos EUA",
      "Donos de LLC que distribuem lucros sem reter imposto na fonte",
      "Investidores com renda de aluguel ou dividendos relevantes",
      "Qualquer contribuinte que espera dever mais de US$ 1.000 no ano",
    ],

    pains: [
      "\"Não sei se preciso pagar Estimated Tax — nem quanto, nem quando\"",
      "\"Já levei penalidade de underpayment mesmo tendo pagado tudo no Tax Return\"",
      "\"Minha renda é irregular e não sei como calcular os pagamentos trimestrais\"",
      "\"Já paguei a mais por excesso de cautela — quero otimizar sem arriscar multa\"",
    ],

    howWeHelp: [
      "Cálculo trimestral preciso do Estimated Tax baseado na sua receita e deduções projetadas",
      "Monitoramento de receita ao longo do ano para ajustar os pagamentos em tempo real",
      "Pagamentos via EFTPS organizados e confirmados dentro do prazo",
      "Aplicação do safe harbor para garantir proteção contra penalidade em qualquer cenário",
    ],

    benefits: [
      {
        title: "Zero penalidade de underpayment",
        description:
          "Mantemos você dentro das regras de safe harbor o ano inteiro. Não importa o que aconteça com sua receita.",
      },
      {
        title: "Fluxo de caixa previsível",
        description:
          "Você sabe exatamente quanto separar a cada trimestre. Sem susto, sem descapitalizar no Tax Return.",
      },
      {
        title: "Ajuste em tempo real",
        description:
          "Receita mudou no meio do ano? Recalculamos. Nem mais nem menos que o necessário.",
      },
    ],

    faq: [
      {
        q: "Quando exatamente vencem os pagamentos trimestrais?",
        a: "Em geral: 15 de abril, 15 de junho, 15 de setembro e 15 de janeiro do ano seguinte. Calculamos as datas exatas para o seu ano fiscal.",
      },
      {
        q: "O que é safe harbor e por que ele importa?",
        a: "Safe harbor é uma regra do IRS que garante que você não leva multa de underpayment se pagar ao longo do ano pelo menos 100% do imposto do ano anterior (ou 110% para renda acima de US$ 150k). Usamos isso para te proteger mesmo quando a receita é imprevisível.",
      },
      {
        q: "E se minha receita for muito variável?",
        a: "Usamos o método de anualização (Annualized Income Installment Method) que calcula o pagamento exato para cada trimestre com base na renda real daquele período — sem pagar a mais nos trimestres ruins.",
      },
      {
        q: "Esse serviço está incluído no Tax Return?",
        a: "São serviços complementares. O Tax Return fecha o ano. O Estimated Tax garante que o ano inteiro transcorreu em compliance. Podemos combinar os dois.",
      },
    ],

    ctaHeadline: "Pague o que é devido — nem um centavo a mais, nem penalidade por menos.",
    ctaSubheadline:
      "Em uma conversa rápida descobrimos o seu cenário de Estimated Tax para o ano todo.",
  },

  // ─────────────────────────────────────────
  // 10. FIRPTA
  // ─────────────────────────────────────────
  firpta: {
    emotionalHook:
      "O IRS retém 15% do valor bruto da sua venda antes mesmo do fechamento. Esse dinheiro pode voltar para você.",

    story: [
      "FIRPTA é uma das regras mais impactantes — e menos conhecidas — do sistema tributário americano: quando um estrangeiro não-residente vende imóvel nos EUA, o comprador é legalmente obrigado a reter 15% do valor bruto da transação e enviar diretamente ao IRS. Não é 15% do lucro. É 15% do valor total da venda.",
      "Em uma venda de US$ 400.000, isso significa US$ 60.000 indo para o IRS antes mesmo do closing. E na maior parte dos casos, esse valor é muito maior do que o imposto realmente devido — porque o imposto incide sobre o ganho, não sobre o preço cheio.",
      "Existe uma forma de recuperar esse dinheiro — e às vezes de evitar a retenção integral ainda antes do fechamento. Com o Withholding Certificate (Form 8288-B), você demonstra ao IRS o imposto real sobre o ganho e negocia uma retenção menor. Cuidamos de todo esse processo — do cálculo à submissão, do closing à restituição.",
    ],

    urgencyNote:
      "⚠ O processo de Withholding Certificate precisa ser iniciado ANTES do closing. Se a venda já aconteceu, o caminho é o Tax Return — mas quanto antes você começa, mais rápido o dinheiro volta.",

    whoIsFor: [
      "Estrangeiros não-residentes com imóvel à venda nos EUA",
      "Quem já vendeu imóvel e quer recuperar o valor retido",
      "Compradores que precisam entender a obrigação de retenção FIRPTA",
      "Investidores com portfólio de imóveis nos EUA",
    ],

    pains: [
      "\"Vou fechar a venda do meu imóvel e o closing agent me falou sobre retenção de 15% — o que faço?\"",
      "\"Já vendi e o comprador reteve US$ 60.000 — quero entender como recuperar\"",
      "\"Não sei a diferença entre os formulários 8288, 8288-A e 8288-B\"",
      "\"O prazo do closing está próximo e ainda não tenho a documentação FIRPTA\"",
    ],

    howWeHelp: [
      "Análise do ganho real para calcular o imposto efetivo e determinar se a retenção de 15% é maior que o necessário",
      "Solicitação do Withholding Certificate (Form 8288-B) para reduzir a retenção antes do closing quando aplicável",
      "Preparação dos formulários 8288 e 8288-A para o closing agent",
      "Tax Return com recuperação do valor retido acima do imposto real devido",
    ],

    benefits: [
      {
        title: "Recupere o dinheiro que é seu",
        description:
          "Na maioria dos casos, o imposto real é menor que os 15% retidos. Recuperamos a diferença via Tax Return — às vezes dezenas de milhares de dólares.",
      },
      {
        title: "Closing sem complicação",
        description:
          "Documentação FIRPTA completa e correta para o dia do fechamento. Sem atraso, sem surpresa de última hora.",
      },
      {
        title: "Processo do início ao fim",
        description:
          "Do Withholding Certificate à restituição, cuidamos de tudo. Você foca na venda — nós no IRS.",
      },
    ],

    faq: [
      {
        q: "Quanto tempo leva para recuperar o valor retido?",
        a: "Via Tax Return, geralmente 3 a 6 meses após a submissão. Com o Withholding Certificate aprovado antes do closing, você evita a retenção excessiva desde o início.",
      },
      {
        q: "E se eu for residente fiscal nos EUA — FIRPTA ainda se aplica?",
        a: "Residentes fiscais (Green Card, Substantial Presence Test) não estão sujeitos à retenção FIRPTA. Mas precisam declarar o ganho normalmente no Tax Return.",
      },
      {
        q: "Qual o prazo para pedir o Withholding Certificate?",
        a: "O pedido precisa ser feito antes do closing ou no máximo no dia. Quanto antes começarmos, mais opções temos.",
      },
      {
        q: "Vale a pena para qualquer valor de venda?",
        a: "Vale sempre que o imposto real sobre o ganho for menor que 15% do valor bruto — o que é a regra na maioria dos casos.",
      },
    ],

    ctaHeadline: "Aquele dinheiro retido pelo IRS pode voltar para a sua conta.",
    ctaSubheadline:
      "Fale conosco antes do closing — quanto antes começamos, mais opções você tem para reduzir ou recuperar a retenção.",
  },

  // ─────────────────────────────────────────
  // 11. FBAR
  // ─────────────────────────────────────────
  fbar: {
    emotionalHook:
      "Se você tem conta no exterior e vive nos EUA, pode estar devendo uma declaração ao IRS — sem saber.",

    story: [
      "O FBAR (FinCEN Form 114) é um dos formulários com as consequências mais severas do sistema americano — e um dos menos conhecidos. A regra é simples: qualquer US Person (cidadão, residente, Green Card holder) que tenha contas bancárias, de investimento ou outros ativos financeiros no exterior cujo saldo agregado tenha ultrapassado US$ 10.000 em qualquer momento do ano, precisa declarar. Não é uma opção. É uma obrigação legal.",
      "A multa para quem não declara por desconhecimento chega a US$ 10.000 por conta, por ano. Para quem o IRS entende como intencional, o valor pode triplicar — e há casos de processo criminal. E o pior: muita gente que tem esse dever simplesmente não sabe. Não porque escondeu — mas porque nunca foi informada.",
      "A boa notícia: se você está em atraso, ainda dá para regularizar sem as penalidades máximas, via programas como o Streamlined Procedures. Mas isso tem prazo — e a janela fica mais estreita a cada ano que passa com o cruzamento automático de dados (FATCA/CRS) aumentando.",
    ],

    urgencyNote:
      "⚠ O IRS cruzou informações com mais de 110 países via FATCA/CRS. Contas no Brasil, Portugal, Cayman, Suíça e dezenas de outros países já estão no radar. A janela de regularização voluntária existe hoje — pode não existir amanhã.",

    whoIsFor: [
      "Brasileiros com Green Card ou residência fiscal nos EUA com contas no Brasil",
      "Cidadãos americanos morando no Brasil com contas locais",
      "Quem nunca declarou FBAR e quer regularizar antes que o IRS pergunte",
      "Quem declarou mas não tem certeza se foi feito corretamente",
    ],

    pains: [
      "\"Acabei de descobrir que deveria estar declarando FBAR há anos e nunca declarei\"",
      "\"Tenho conta no Brasil e não sei se preciso reportar para o IRS\"",
      "\"Já declarei mas nunca soube se fiz do jeito certo\"",
      "\"Recebi algo do IRS ou do banco sobre contas no exterior e não entendo o que é\"",
    ],

    howWeHelp: [
      "Análise de todas as suas contas e ativos no exterior para identificar o que precisa ser reportado",
      "Preparação e envio do FinCEN Form 114 (FBAR) dentro do prazo — ou em atraso via Streamlined Procedures",
      "Integração com Form 8938 (FATCA) quando os valores obrigam declaração dupla",
      "Condução do processo de regularização para quem está em atraso, minimizando penalidades",
    ],

    benefits: [
      {
        title: "Proteção contra multas devastadoras",
        description:
          "Até US$ 10.000 por conta por ano por não-conformidade não-intencional. O compliance preventivo é infinitamente mais barato.",
      },
      {
        title: "Regularização com tranquilidade",
        description:
          "Se está em atraso, o Streamlined Procedures permite corrigir sem as penalidades máximas. Conduzimos o processo inteiro.",
      },
      {
        title: "Visão integrada FBAR + FATCA + Tax Return",
        description:
          "As três declarações precisam ser consistentes entre si. Cuidamos de tudo como um sistema único, sem contradições.",
      },
    ],

    faq: [
      {
        q: "Como sei se realmente preciso declarar FBAR?",
        a: "Se você é US Person (cidadão, residente, Green Card) e o saldo total de todas as suas contas no exterior ultrapassou US$ 10.000 em qualquer dia do ano, precisa. Fazemos essa análise com você.",
      },
      {
        q: "Minha conta no Brasil tem apenas o salário que recebo aqui. Preciso declarar?",
        a: "Se o saldo ultrapassou US$ 10.000 em algum momento, sim. O critério é o saldo — não a origem do dinheiro.",
      },
      {
        q: "O que é o Streamlined Procedures?",
        a: "É um programa do IRS para residentes e não-residentes que estão em atraso com declarações por desconhecimento (não-intencional). Permite regularizar pagando uma multa muito menor que as penalidades normais.",
      },
      {
        q: "Se eu regularizar, o IRS vai me autuar pelos anos anteriores?",
        a: "O Streamlined Procedures dá proteção contra as penalidades máximas quando bem conduzido. Avaliamos seu caso antes de iniciar qualquer processo.",
      },
    ],

    ctaHeadline: "Está em dia com o FBAR? Tem certeza?",
    ctaSubheadline:
      "Conversa rápida e confidencial para avaliar sua situação — antes que o IRS faça a pergunta por você.",
  },

  // ─────────────────────────────────────────
  // 12. QUIT CLAIM DEED
  // ─────────────────────────────────────────
  "quit-claim-deed": {
    emotionalHook:
      "Transferir um imóvel parece simples — até que um detalhe errado trava o processo no cartório, no IRS ou na herança.",

    story: [
      "O Quit Claim Deed é um dos instrumentos mais utilizados na Flórida para transferir título de imóvel entre partes conhecidas: cônjuge para cônjuge, para filhos, para uma LLC de proteção patrimonial. É rápido, relativamente simples — mas exige atenção em cada detalhe.",
      "Qualquer erro na redação, na identificação das partes, na notarização ou no registro faz o documento ser rejeitado. E alguns erros só aparecem anos depois, quando o imóvel é vendido ou incluído em inventário — na pior hora possível.",
      "Além da parte legal, existe o impacto fiscal: transferência de imóvel pode acionar Doc Stamp Tax da Flórida, gift tax federal ou impactar o stepped-up basis da herança. Fazer certo não é só uma questão de papel — é proteger o patrimônio que você construiu.",
    ],

    urgencyNote:
      "⚠ Transferências de imóvel sem análise fiscal prévia podem gerar gift tax inesperado acima da exclusão anual (US$ 18.000 por pessoa em 2024) e comprometer o stepped-up basis que protege seus herdeiros de pagar imposto sobre valorização.",

    whoIsFor: [
      "Quem quer transferir imóvel para cônjuge, filhos ou outros familiares",
      "Proprietários que querem colocar imóvel dentro de uma LLC",
      "Quem precisa remover ou adicionar um nome na escritura",
      "Herdeiros que precisam atualizar o título após falecimento",
    ],

    pains: [
      "\"Quero colocar meu imóvel em uma LLC mas não sei como fazer sem pagar imposto desnecessário\"",
      "\"Preciso transferir a propriedade para meu cônjuge antes de uma viagem longa — não sei o processo\"",
      "\"Já tentei sozinho e o cartório rejeitou o documento por falta de algum requisito\"",
      "\"Ouvi falar em gift tax e stepped-up basis mas não entendo como isso me afeta\"",
    ],

    howWeHelp: [
      "Análise prévia dos impactos fiscais da transferência (Doc Stamp Tax, gift tax, stepped-up basis)",
      "Elaboração do Quit Claim Deed em conformidade com as leis da Flórida",
      "Coordenação completa de assinatura, notarização e testemunhas",
      "Registro junto ao County Clerk competente com acompanhamento até a confirmação",
    ],

    benefits: [
      {
        title: "Transferência sem complicação legal",
        description:
          "Documento elaborado dentro das normas da Flórida, devidamente notarizado, registrado e confirmado.",
      },
      {
        title: "Nenhuma surpresa fiscal",
        description:
          "Analisamos gift tax, Doc Stamp e impacto no stepped-up basis antes de executar — não depois.",
      },
      {
        title: "Do início ao fim, você só assina",
        description:
          "Cuidamos de cada etapa do processo. Seu imóvel chega no destino certo, do jeito certo, sem estresse.",
      },
    ],

    faq: [
      {
        q: "Quit Claim Deed protege o comprador contra dívidas anteriores do imóvel?",
        a: "Não. O Quit Claim transfere apenas o que o concedente tem — sem garantias. Por isso é mais usado em transferências entre partes de confiança, não em vendas comerciais.",
      },
      {
        q: "Preciso pagar imposto para transferir meu imóvel para uma LLC?",
        a: "Depende. Em alguns casos há isenção de Doc Stamp Tax. Em outros, há incidência. Avaliamos antes da transferência para evitar custo desnecessário.",
      },
      {
        q: "Quais são as vantagens de colocar um imóvel em LLC?",
        a: "Proteção de patrimônio pessoal contra processos relacionados ao imóvel, além de vantagens fiscais e facilidade de transferência futura. Analisamos se faz sentido para o seu caso.",
      },
      {
        q: "Preciso estar nos EUA para assinar?",
        a: "Não. O processo pode ser conduzido remotamente com notarização e envio de documentos.",
      },
    ],

    ctaHeadline: "Faça a transferência certa, na primeira tentativa.",
    ctaSubheadline:
      "Uma conversa rápida para entender seu caso, analisar os impactos e desenhar o caminho mais seguro.",
  },

  // ─────────────────────────────────────────
  // 13. RECADASTRAMENTO ANUAL FLÓRIDA
  // ─────────────────────────────────────────
  "recadastramento-anual-florida": {
    emotionalHook:
      "Esquecer o Annual Report da Sunbiz é o jeito mais rápido — e mais caro — de perder sua empresa na Flórida.",

    story: [
      "Toda empresa registrada na Flórida tem uma obrigação anual com o estado: o Annual Report submetido via Sunbiz entre 1º de janeiro e 1º de maio. É um formulário simples. Mas simples não significa irrelevante.",
      "Atrasou o envio? US$ 400 de multa fixa a partir de 2 de maio. Não enviou até setembro? O estado dissolve administrativamente a empresa. E empresa Administratively Dissolved na Flórida não pode assinar contratos, abrir conta, processar pagamento ou comprovar existência legal para nenhuma finalidade.",
      "Restabelecer uma empresa dissolvida é possível — mas tem prazo, custo e burocracia que poderiam ser completamente evitados com uma submissão de US$ 138 feita a tempo. Cuidamos disso por você. Automaticamente, todo ano, sem que você precise lembrar.",
    ],

    urgencyNote:
      "⚠ Se sua empresa já aparece como 'Inactive' ou 'Administratively Dissolved' na Sunbiz, a janela de restabelecimento é limitada. Empresa dissolvida não pode operar legalmente — qualquer contrato assinado nesse período pode ser questionado.",

    whoIsFor: [
      "Donos de LLC ou corporation registrada na Flórida",
      "Quem perdeu o prazo e quer evitar a multa de US$ 400",
      "Quem tem empresa Inactive ou Dissolved e quer restabelecer",
      "Quem mudou de endereço, sócios ou Registered Agent e precisa atualizar",
    ],

    pains: [
      "\"Esqueci do Annual Report e levei a multa de US$ 400 — quero evitar que isso se repita\"",
      "\"Minha empresa aparece como Inactive na Sunbiz e não sei o que fazer\"",
      "\"Mudei de endereço e Registered Agent mas nunca atualizei na Sunbiz\"",
      "\"Tenho várias empresas e não consigo controlar os prazos de todas\"",
    ],

    howWeHelp: [
      "Submissão do Annual Report dentro do prazo (antes de 1º de maio) para todas as suas empresas na Flórida",
      "Atualização de Registered Agent, sócios, gerentes e endereço conforme realidade atual",
      "Restabelecimento de empresas Inactive ou Administratively Dissolved com acompanhamento até conclusão",
      "Monitoramento anual para que você nunca mais precise se preocupar com esse prazo",
    ],

    benefits: [
      {
        title: "Sua empresa sempre ativa e em compliance",
        description:
          "Submissão garantida antes do prazo todo ano. Você não precisa lembrar — a gente cuida.",
      },
      {
        title: "Dados sempre atualizados na Sunbiz",
        description:
          "Registered Agent, endereço e composição societária atualizados evitam problemas jurídicos e correspondências perdidas.",
      },
      {
        title: "Empresa dissolvida? Ainda tem solução",
        description:
          "Conduzimos o processo de restabelecimento completo — do pedido na Sunbiz ao certificado de Good Standing.",
      },
    ],

    faq: [
      {
        q: "Qual exatamente o prazo do Annual Report?",
        a: "De 1º de janeiro até 1º de maio de cada ano. A partir do dia 2 de maio, multa de US$ 400. Em setembro, dissolução administrativa.",
      },
      {
        q: "Minha empresa está Inactive ou Dissolved — o que isso significa na prática?",
        a: "Empresa Inactive perdeu o Good Standing mas pode ser restabelecida. Dissolved foi formalmente encerrada pelo estado e o nome pode ser tomado por outro. Os dois têm solução — mas tempo importa.",
      },
      {
        q: "Preciso estar nos EUA para fazer o Annual Report?",
        a: "Não. O processo é online. Você assina uma autorização e cuidamos de tudo remotamente.",
      },
      {
        q: "Vocês monitoram todas as empresas que tenho?",
        a: "Sim. Para clientes com múltiplas empresas, mantemos um calendário de compliance e submetemos todos os Annual Reports dentro do prazo, com confirmação.",
      },
    ],

    ctaHeadline: "Coloque sua empresa em dia com a Flórida. Agora.",
    ctaSubheadline:
      "Verificamos o status atual na Sunbiz e indicamos o próximo passo — sem custo inicial.",
  },
};
=======
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
>>>>>>> 2f8349a9d1e612bad415713dfc4784e77249e6ea
