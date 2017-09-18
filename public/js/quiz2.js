/* global $ */
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Questões %current de %total',
  questions: [
    {
      'q': 'Acerca do Gerenciamento de Configuração e de Ativos de Serviços (GCAS), analise as alternativas abaixo e relacione-as.<p>' + 
       '    1. ICs internos.<p>' + 
       '    2. IC’s externo.<p>' +
       '    3. ICs de interface.<p>'+
       '    4. ICs organizacionais.<p>' +
       '( ) Necessidades de clientes externos e acordos com estes.<p>' +
       '( ) Documentação de descreve a estratégia do negócio, políticas internas.<p>' +
       '( ) Ativos tangíveis (servidor, roteador) e intangíveis (software necessário para entregar determinado serviço).<p>'+
       '( ) Que são necessários para entrega do serviço fim a fim.'
      ,
      'options': [
        '2, 4, 1 e 3.',
        '1, 2, 3 e 4.',
        '2, 4, 3 e 1.',
        '4, 3, 2 e 1.',
        '3, 2, 4 e 1.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns',
      'incorrectResponse': 'A resposta certa é : 2, 4, 1 e 3.'
    },
    {
      'q': 'Banco de Dados do Gerenciamento da Configuração (BDGC’s) e Sistema de Gerenciamento da Configuração (SGC) ambos são elementos de qual entidade maior?',
      'options': [
        'Registro de Ativos.',
        'Sistema de Gerenciamento da Capacidade.',
        'Melhoria Contínua.',
        'Sistema de Gerenciamento de Conhecimento do Serviço (SGCS).',
        'Banco de Dados de Erros Conhecidos.'
      ],
      'correctIndex': 3,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Sistema de Gerenciamento de Conhecimento do Serviço (SGCS)'
    },
    {
      'q': ' Qual das declarações a seguir sobre uma mudança padrão está INCORRETA?',
      'options': [
        'Elas devem ser implementadas o mais rápido possível.',
        'Elas são pré-autorizadas pelo Gerenciamento de Mudança.',
        'Elas têm baixo risco.',
        'Elas seguem um procedimento ou instrução de trabalho.',
        'Elas possuem um ativados para acionar a mudança.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Elas devem ser implementadas o mais rápido possível.'
    },
    {
      'q': 'Qual das seguintes é um objetivo do Gerenciamento de Liberação e Implantação?',
      'options': [
        ' Padronizar métodos e procedimentos usados para eficiência de todas as Mudanças',
        'Assegurar que todas as mudanças para ativos de serviço e itens de configuração<p>(IC’s) sejam registradas no Sistema de Gerenciamento da Configuração (SGC).',
        'Assegurar que o risco da mudança para o negócio é mínimo.',
        'Definir e acordar planos de liberação e implementação com clientes e partes interessadas.',
        'Ele deve ser implementado o mais rápido possível.'
      ],
      'correctIndex': 3,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Definir e acordar planos de liberação e implementação com clientes e partes interessadas.'
    },
     {
      'q': 'Qual dos seguintes é a definição CORRETA de uma Unidade de Liberação?',
      'options': [
        'Uma unidade de avaliação de riscos.',
        'Uma equipe de pessoas responsáveis por Implantar uma liberação.',
        'Uma função descrita dentro da Transição de Serviço.',
        'Uma medida de custo.',
        'A porção de um serviço ou infraestrutura de TI que é normalmente liberada junto.'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: A porção de um serviço ou infraestrutura de TI que é normalmente liberada junto.'
    },
    {
      'q': ' Qual das seguintes atividades são beneficiadas pelo registro de relacionamentos entre itens de configuração (IC’s)?<p>'+
      '1. Avaliação de impacto e causa de incidentes e problemas.<p>'+
      '2. Avaliação de impacto e causa de incidentes e problemas.<p>'+
      '3. Planejamento e desenho de uma mudança para um serviço existente.<p>'+
      '4. Planejamento de uma autorização de uma tecnologia ou upgrade de software.',
      'options': [
        '1 e 2 apenas.',
        '1, 2 e 4 apenas.',
        '1, 3 e 4 apenas.',
        '1, 2 e 3 apenas.',
        'Todas acima.'
      ],
      'correctIndex': 4,
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
      'q': 'Qual dos seguintes não é um propósito da Transição de Serviço?',
      'options': [
        'Garantir que um serviço possa ser gerenciado, operado e suportado.',
        'Fornecer conhecimento sobre o Gerenciamento de Mudanças e Gerenciamento de Liberação e Implantação.',
        'Fornecer treinamento e certificação em gerenciamento de projetos.',
        'Planejar e gerenciar requisitos de capacidade e recursos para gerenciar uma liberação.',
        'Garantir que os ativos necessários para a entrega dos serviços estejam controlados adequadamente.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Fornecer treinamento e certificação em gerenciamento de projetos.'
    },
    {
      'q': 'Qual das seguintes opções é a hierarquia usada no Gerenciamento do Conhecimento?',
      'options': [
        'Sabedoria – Informação – Dados – Conhecimento.',
        'Dados – Informação – Conhecimento – Sabedoria.',
        'Conhecimento – Sabedoria – Informação – Dados.',
        'Informação – Dados – Conhecimento – Sabedoria.',
        'Informação – Sabedoria – Informação – Dados. '
      ],
      'correctIndex': 1,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa: Dados – Informação – Conhecimento – Sabedoria.'
    },
    {
      'q': 'Qual das seguintes áreas a tecnologia pode ajudar a suportar durante o estágio Transição de Servido do ciclo de vida?<p>'+
      '1. Data mining e ferramentas de workflow.<p>'+
      '2. Sistemas de medição e relatórios.<p>'+
      '3. Tecnologias de liberação e implantação<p>'+
      '4. Desenhos de Processos.',
      'options': [
        '1 e 2 apenas.',
        '1, 2 e 4 apenas.',
        '1, 3 e 4 apenas.',
        '1, 2 e 3 apenas.',
        'Todas acima.'
      ],
      'correctIndex': 3,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:1, 2 e 3 apenas.'
    },
    // continuação
    {
      'q': 'Quais dos grupos de processos abaixo estão descritos no livro de Transição de Serviços da ITIL?',
      'options': [
        'Gerenciamento de Mudança, Gerenciamento de Configuração e de Ativo de Serviço, Gerenciamento de Incidente.',
        'Gerenciamento de Demanda, Gerenciamento de Capacidade, Gerenciamento de Nível de Serviço.',
        'Gerenciamento de Incidente, Gerenciamento de Problema, Cumprimento de Requisição.',
        'Gerenciamento de Mudança, Gerenciamento de Conhecimento, Gerenciamento de Capacidade.',
        'Gerenciamento de Mudança, Gerenciamento de Configuração e de Ativo de Serviço, Gerenciamento de Liberação e Implantação.'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:Gerenciamento de Mudança, Gerenciamento de Configuração e de Ativo de Serviço, Gerenciamento de Liberação e Implantação.'
    },
    {
      'q': 'Qual das seguintes declarações está CORRETA?',
      'options': [
        'O sistema de Gerenciamento da Configuração faz parte do Banco de Dados de Erros Conhecidos (BDEC).',
        'O sistema de Gerenciamento de Conhecimento de Serviço faz parte do Sistema de Gerenciamento da Configuração (SGC).',
        'O sistema de Gerenciamento da Configuração faz parte do Sistema de Gerenciamento do Conhecimento de Serviço (SGCS).',
        'O sistema de Gerenciamento da Configuração faz parte do Banco de Dados dep Gerenciamento da Configuração (BDGC).',
        'O sistema de Gerenciamento de Conhecimento de Serviço faz parte do Banco de Dados de Erros Conhecidos (BDEC).'
      ],
      'correctIndex': 2,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:O sistema de Gerenciamento da Configuração faz parte do Sistema de Gerenciamento do Conhecimento de Serviço (SGCS).'
    },
    {
      'q': 'Qual das seguintes declarações MELHOR descreve uma Biblioteca de Mídia Definitiva (BMD)?',
      'options': [
        'Uma localização segura onde peças de hardware são mantidas.',
        'Uma biblioteca segura onde versões autorizadas definitivas de todos os itens de configuração de software são armazenadas e protegidas.',
        'Uma banco de dados que contém definições de todos os IC’s e tipos de mídia.',
        'Uma biblioteca segura onde versões autorizadas definitivas de todos os softwares e backups são armazenadas e protegidas.',
        'Uma biblioteca segura onde os backups são armazenados e protegidos.'
      ],
      'correctIndex': 1,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:Uma biblioteca segura onde versões autorizadas definitivas de todos os itens de configuração de software são armazenadas e protegidas.'
    },
     {
      'q': 'Qual dos seguintes melhor descreve uma autoridade de mudança?',
      'options': [
        'O Comitê Consultivo de Mudanças.',
        'Alguém com o maior poder hierárquico para tomar decisões sobre quais mudanças deveriam ser aprovadas.',
        'Um papel, pessoa ou grupo de pessoas que fornece autorização formal para cada tipo de mudança.',
        'O gerente de Mudança que fornece autorização formal para cada mudança.',
        'O dono do Serviço que fornece autorização formal para cada mudança.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:Um papel, pessoa ou grupo de pessoas que fornece autorização formal para cada tipo de mudança.'
    },
    {
      'q': 'A Transição de Serviço efetiva pode melhorar significamente a habilidade do provedor de serviços em lidar com volumes de quê?',
      'options': [
        'Requisições de Serviço.',
        'Eventos e Liberações.',
        'Incidentes e Problemas.',
        'Redefinição de Senhas.',
        'Mudanças e Liberações.'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:Mudanças e Liberações.'
    },
    {
      'q': 'Qual é o nome da área onde versões definitivas de todas as mídias de Itens de Configuração são armazenadas e protegidas?',
      'options': [
        'Biblioteca de Mídia Definitiva.',
        'Armazém de Software Definitivo.',
        'Biblioteca Segura de Software.',
        'Sistema de Gerenciamento do Conhecimento de Serviço.',
        'Biblioteca de Mídia Temporária.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:Biblioteca de Mídia Definitiva.'
    },
     {
      'q': 'Qual declaração sobre o Comitê Consultivo de Mudança Emergencial (CCME) está CORRETA?',
      'options': [
        'O CCME irá ser usado para mudanças emergenciais onde pode não existir tempo para acionar um Comitê Consultivo de Mudança (CCM).',
        'O CCME considera cada Requisição de Mudança com alta prioridade.',
        'Entre os deveres do CCME está a revisão de mudanças emergenciais realizadas.',
        'O CCME será presidido pelo Gerente de TI.',
        'O CCME será usando para mudanças não emergenciais.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:O CCME irá ser usado para mudanças emergenciais onde pode não existir tempo para acionar um Comitê Consultivo de Mudança (CCM).'
    },
    {
      'q': 'Qual dos seguintes o processo de gerenciamento de liberação e implantação trata?<p>'+
      ' I - Definição e acordo sobre planos e implantação.<p>'+
      ' II- Garantir de que os pacotes de liberação possam ser rastreados.<p>'+
      ' III - Autorização de mudanças para suportas o processo.',
      'options': [
        '1 e 2 apenas.',
        '1 e 3 apenas.',
        '2 e 3 apenas.',
        'Todas acima.',
        'Nenhuma acima.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:1 e 2 apenas'
    },
    {
      'q': 'Qual dos seguintes são exemplos de ferramentas que podem dar suporte a etapa da transição de serviço do ciclo de vida de serviço?<p>'+
      ' I - Uma ferramenta para armazenar versões definitivas de software.<p>'+
      ' II- Uma ferramenta do fluxo de trabalho para gerenciar mudanças.<p>'+
      ' III-Uma ferramenta de distribuição automática de software.<p>'+
      ' IV- Ferramentas de teste e validação.',
      'options': [
        '1 e 2 apenas.',
        '1,3 e 4 apenas.',
        '1,2 e 3 apenas.',
        '2,3 e 4 apenas.',
        'Todas acima.'
      ],
      'correctIndex': 4,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:Todas acima'
    },
    {
      'q': 'Qual dos seguintes seria armazenado na Biblioteca de Mídia Definitiva (BDM)?<p>'+
      ' I - Cópias de software comprado.<p>'+
      ' II- Cópias de software desenvolvido internamente.<p>'+
      ' III-Documentação relacionada à licença.<p>'+
      ' IV- A programação de Mudança.',
      'options': [
        '1 e 2 apenas.',
        '1,3 e 4 apenas.',
        '1,2 e 3 apenas.',
        '2,3 e 4 apenas.',
        'Todas acima.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Parabéns!',
      'incorrectResponse': 'Resposta certa:1,2 e 3 apenas.'
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