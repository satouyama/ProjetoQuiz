/* global $ */
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Questões %current de %total',
  questions: [
    {
      'q': 'Quais as atividades do gerenciamento de mudança ?',
      'options': [
        'Registrar, avaliar, autorizar e revisar a mudança.',
        'Programar a implantação da mudança.',
        'Coordenar a implantação da mudança.',
        'Revisar e fechar a requisição da mudança',
        'Registrar, avaliar, autorizar e revisar a requisição da mudança.'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns',
      'incorrectResponse': 'Resposta certa: Registrar, avaliar, autorizar e revisar a requisição da mudança.'
    },
    {
      'q': 'Qual o objetivo da transição de serviços ?',
      'options': [
        'É garantir que as implantações de serviços sejam gerenciadas de acordo com os requerimentos definidos no ciclo de desenho de serviço.',
        'É garantir que as implantações de serviços sejam gerenciadas de acordo com os requerimentos definidos no ciclo de estratégia de serviço.',
        'É garantir que as implantações de serviços sejam gerenciadas de acordo com os requerimentos definidos no ciclo de operação de serviço.',
        'É garantir que as implantações de serviços sejam gerenciadas de acordo com os requerimentos definidos no ciclo de melhoria contínua.',
        'É garantir que as implantações de serviços não sejam gerenciadas de acordo com os requerimentos definidos no ciclo de desenho de serviço.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: É garantir que as implantações de serviços sejam gerenciadas de acordo com os requerimentos definidos no ciclo de desenho de serviço.'
    },
    {
      'q': 'Marque a questão incorreta. Os processos do ciclo de transição de serviços são:',
      'options': [
        'Planejamento e suporte da transição',
        'Gerenciamento de mudanças',
        'Gerenciamento de configuração e de ativos de serviço.',
        'Planejamento de liberação e implantação.',
        'Validação e teste de serviço.'
      ],
      'correctIndex': 3,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Planejamento de liberação e implantação. '
    },
    {
      'q': 'Sobre o gerenciamento de configuração e ativos de serviço.<p>'+
      'I - O objetivo do gerenciamento da configuração e ativo é definir e controlar os serviços e componentes de TI e manter informações de configuração.<p>'+
      'II – Item de configuração é um componente físico ou lógico com identificação única que é útil para a entrega de serviço de TI.<p>'+
      'III – Modelo de configuração é a representação dos itens de configuração agrupados através da identificação de seus relacionamentos.<p>'+
      'É correto o que se afirma em:',
      'options': [
        'I Apenas.',
        'II Apenas.',
        'I e II Apenas.',
        'I e III Apenas.',
        'I,II e III Apenas'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: I,II e III.'
    },
     {
      'q': 'Algumas das atividades de validação e teste de serviço.<p>'+
      'I - Validação e gerenciamento de teste.<p>'+
      'II – Planejar e desenhar teste.<p>'+
      'III – Verificar o plano de teste e desenho de teste.<p>'+
      'IV – Preparar o ambiente de teste.<p>'+
      'É correto o que se afirma em:',
      'options': [
        'I Apenas.',
        'II e III Apenas.',
        'III Apenas.',
        'I,III e IV Apenas.',
        'Todas as alternativas.'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Todas as alternativas.'
    },
    {
      'q': 'sobre gerenciamento de configuração e ativo de serviços.<p>'+
      'Marque a alternativa incorreta.',
      'options': [
        'Biblioteca segura é uma área segura onde estão armazenados os softwares, incluindo as versões de teste e homologação.',
        'Armazém seguro é um local lógico onde são armazenados todos os hardwares da empresa antes de entrarem em produção.',
        'Peças sobressalentes é uma área reservada para o armazenamento seguro de peças de hardware definitivo.',
        'Linha de base é a configuração de um item de configuração que tenha sido revista e acordada e serve com parâmetro para auditorias no BDGC e para ponto de retorno da configuração de um item de configuração em caso de falhas de liberação.',
        'Instantâneo é o estado atual de um item de configuração ou de um conjunto de itens de configuração e serve para auditoria no banco de dados do gerenciamento da configuração.'
      ],
      'correctIndex': 1,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Armazém seguro é um local lógico onde são armazenados todos os hardwares da empresa antes de entrarem em produção.'
    },
    {
      'q': 'A respeito do gerenciamento do conhecimento.<p>'+
      'I - O objetivo do gerenciamento do conhecimento é garantir que informações confiáveis e seguras estejam disponíveis através do ciclo de vida do serviço.<p>'+
      'II – Estrutura de dados para informação para conhecimento para sabedoria é a capacidade de capturar, analisar os dados e transforma- los em informação para que as experiências negativas sejam repetidas e as positivas possam ser melhoradas ou evitadas.<p>'+
      'III – Sistema de gerenciamento e conhecimento de serviço é um repositório central de armazenamento de hardware e software.<p>'+
      'É correto o que se afirma em:',
      'options': [
        'I Apenas.',
        'II Apenas.',
        'III Apenas.',
        'I e II Apenas.',
        'II e III apenas.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: I apenas.'
    },
    {
      'q': 'Proposta de mudança é uma proposta e avaliação inicial elaborada como um estudo prévio dos impactos, custos e riscos de uma mudança para aprovação da viabilidade da solicitação de uma mudança',
      'options': [
        'Verdadeiro',
        'Falso'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Verdadeiro.'
    },
    {
      'q': 'Requisição de mudança é uma solicitação formal de uma mudança desprezando os detalhes da mudança solicitada.',
      'options': [
        'Verdadeiro',
        'Falso'
      ],
      'correctIndex': 1,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Falso.'
    },
    {
      'q': 'Instrução de trabalho é um documento contendo instruções detalhadas dos passos a serem seguidos para uma atividade a ser executada dentro de um registo de mudança.',
      'options': [
        'Verdadeiro',
        'Falso'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Verdadeiro.'
    }
  ]
  

});

if(questions.incorrectResponse){
            $.ajax({
      url: '/testar',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({number:questions[1].incorrectResponse})}
  );
  }