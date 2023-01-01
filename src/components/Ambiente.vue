<template>
  <section>
    <q-img
      src="../assets/ambiente/meioambiente.webp"
      :ratio="(16/4)"
      width="100%"
      spinner-color="primary"
      spinner-size="82px"
    />
    <div class="bg-primary fit row justify-center" style="padding-bottom: 300px">
      <div class="row items-center fit container justify-around">
        <h1 class="text-weight-bolder full-width text-white text-uppercase q-pa-md q-py-md">
          Meio Ambiente
        </h1>
        <div class="text-white q-pa-md q-py-md">
          <p>A Alpha é uma empresa de Consultoria especialista em Meio Ambiente, possuimos profissionais como Engenheiros Ambientais e Biológos, todos devidamente credenciados e ativos no CREA e CRbio. Estamos prontos para lhe tender em suas demandas ambientais:</p>
          <p>Realizamos assessoria para emissão todas as licenças ambientais, tanto no âmbito das secretarias municipais quanto no INEA, atuamos em todo o Estado do Rio de Janeiro.</p>
          <p>Conte com a Alpha para: Cadastro Técnico Federal do IBAMA, Emissão ou renovação de Licença de Operação, Elaboração de PGRCC - Programa de Gerenciamento de Resíduo Sólido, Emissão de Outorga para poço arteziano, Realização de Auditoria Ambiental DZ 056, Elaboração de PRAD - Plano de Recuperação de Áreas Degradadas, Avaliação de Ruído Ambiental conforme CONAMA 001/90, LAIA - Levantamento de Aspectos e Impactos Ambientais e diversos outros serviços ambientais. Entre em contato conosco!</p>

        </div>
        <div class="col-md-8 col-xs-12">
          <q-list v-for="(item, i) in lista" :key="i" @click="setText(item)" style="max-width: 400px" >
            <q-item clickable v-ripple>
              <q-item-section class="text-h6" :class="itemText.label == item.label ? 'text-bold text-secondary': 'text-white' ">{{item.label}}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-md-4 col-xs-12 relative-position mobile-only">

          <q-card class="z-top" style="width: 80vw; min-height: 300px">
            <q-img
              :src="itemText.img"
              :ratio="16/9"
              width="80vw"
              spinner-color="primary"
              spinner-size="82px"
            />
            <q-card-section>
              <div v-html="itemText.text"></div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12 relative-position mobile-hide">
          <q-img
            src="../assets/ambiente.jpg"
            :ratio="12/14"
            width="100vw"
            class="bg_imagem"
            spinner-color="primary"
            spinner-size="82px"
          />
          <q-card class="z-top cardPosition" style="width: 500px; min-height: 300px">
            <q-img
              :src="itemText.img"
              :ratio="16/9"
              width="500px"
              spinner-color="primary"
              spinner-size="82px"
            />
            <q-card-section>
              <div v-html="itemText.text"></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import img12 from '../assets/ambiente/12.jpg'
import img21 from '../assets/ambiente/21.jpg'
import img24 from '../assets/ambiente/24.jpg'
import img22 from '../assets/ambiente/22.jpg'
import img23 from '../assets/ambiente/23.jpg'
import img1 from '../assets/ambiente/1.jpg'
import img18 from '../assets/ambiente/18.jpg'
import img2 from '../assets/ambiente/2.jpg'


let lista = ref([
  {
    label: 'Licenciamento ambiental',
    img: img12,
    text: `<p>Licenciamento ambiental é um processo administrativo executado pelos órgãos ambientais competentes que pode conceder o licenciamento para a instalação, a ampliação e a operação de empreendimentos e atividades que utilizam de recursos ambientais, considerando os potenciais riscos de poluição, ou de degradação ambiental.</p>
    <p>As licenças podem ser emitidas no âmbito Federal (IBAMA), Estadual (INEA, CETESB, entre outros) e no âmbito municipal (Secretarias). Isso irá depender do local, e impacto que o seu empreendimento pode causar.</p>
    <p>Mas não se preocupe, a ALPHA resolve tudo isso para você, através de seus consultores formados por uma equipe multidisciplinar!
    Precisa emitir ou renovar sua licença de operação? Fale com a gente, iremos até você!</p>`
  },
  {
    label: 'Cadastro Técnico Federal do IBAMA',
    img: img18,
    text: `<p>O Cadastro Técnico Federal de Atividades Potencialmente Poluidoras e/ou utilizadoras de Recursos Ambientais (CTF/APP) é o registro obrigatório de pessoas físicas e jurídicas que realizam atividades passíveis de controle ambiental.</p>
    <p>A Alpha realiza o enquadramento de seu empreendimento, auxilia na obtenção do cadastro, faz o acompanhamento trimestral e ainda o inventário anual dos resíduos gerados.</p>
    <p>Fale com a gente e fique tranqüilo para focar no seu negócio, a Alpha cuida do CTF pra você!</p>`
  },
  {
    label: 'PGRS – PROGRAMA DE GERÊNCIAMENTO DE RESÍDUOS SÓLIDOS',
    img: img21,
    text: `<p>O PGRS (Plano de Gerenciamento de Resíduos Sólidos) é um documento técnico que identifica a tiplogia e a quantidade de resíduos sólidos gerados e quais as práticas ambientalmente corretas adotadas pelas empresas para a segregação, coleta, armazenamento, transporte, reciclagem, destinação e disposição final. </p>
    <p>A Lei nº 12.305/2010 que instituiu a Política Nacional de Resíduos Sólidos estabelece o PGRS como um dos seus instrumentos e específica quem deve elaborá-lo, além de trazer especificações sobre o conteúdo mínimo. Essa Lei foi regulamentada pelo Decreto nº 7.404/2010. Resolução CONAMA nº 313 de 29 de outubro de 2002.</p>
    <p>Portanto se sua indústria gera resíduos, você precisa ter esse procedimento implantado na sua organização. Entre em contato com a Alpha, iremos até você e te ajudaremos com essa necessidade!</p>`
  },
  {
    label: 'OUTORGAS PARA USO DE POÇOS ARTESIANOS',
    img: img24,
    text: `<p>A Outorga de Direito de Uso de Recursos Hídricos (OUT) é o ato administrativo mediante o qual o órgão ambiental autoriza o uso de recursos hídricos, superficiais ou subterrâneos, por prazo determinado, nos termos e condições que especifica. Um dos principais objetivos da outorga é o controle quantitativo e qualitativo dos usos da água e o efetivo exercício dos direitos de acesso à água. (Lei nº 9.433, de 8 de janeiro de 1997, art. 11)
    Nós realizamos todo o processo de emissão ou renovação de outorga do poço artesiano de seu empreendimento, entre em contato com a Alpha.</p>`
  },
  {
    label: 'AUDITORIA AMBIENTAL',
    img: img22,
    text: `<p>As Auditorias Ambientais são processos sistemáticos de verificação, documentado e realizado de forma independente, nas modalidades Auditoria Ambiental de Controle e Auditoria Ambiental de Acompanhamento, executado no âmbito do processo de licenciamento ambiental para obter evidências e avaliá-las objetivamente, quanto a atividade licenciada.</p>
    <p>Os resultados dessas auditorias são consolidados no Relatório de Auditoria Ambiental, documento destinado ao órgão ambiental e elaborado pela equipe auditora. De uma maneira geral, esses resultados apontam conformidades e não-conformidades no desempenho ambiental da atividade, que norteiam e orientam a elaboração de um Plano de Ação para implantação de melhorias ou adequações no processo ou nos sistemas de controle.</p>
    <p>O procedimento da Auditoria Ambiental atende a DZ-056.R-3 – Diretriz para realização de Auditoria Ambiental do INEA e a Resolução SMAC n.º 550/2014.</p>
    <p>A Alpha possui auditores qualificados para realização dessa auditoria, entre em contato com a gente!</p>`
  },
  {
    label: 'LEVANTAMENTO DE ASPECTOS E IMPACTOS AMBIENTAIS',
    img: img23,
    text: `<p>Aspecto Ambiental são todas as matérias de um empreendimento que podem interagir com o meio ambiente durante uma atividade ou processo.</p>
    <p>Já o Impacto Ambiental é a conseqüência dessa interação que gera modificações no meio ambiente, seja ela benéfica ou prejudicial, por exemplo: Manipulação de um produto químico é considerado um aspecto ambiental enquanto uma possível contaminação do solo por esse produto, é chamada de impacto ambiental.</p>
    <p>E o Levantamento de Aspectos e Impactos Ambientais (LAIA) é um estudo aprofundado para conhecer melhor a conexão da empresa com o meio ambiente ao seu redor e sua relação com os recursos naturais.</p>
    <p>Esse levantamento é fundamental para uma boa gestão de meio ambiente de sua empresa, entre em contato com a Alpha, nós vamos te ajudar o LAIA.</p>`
  },
  {
    label: 'PRAD – PLANO DE RECUPERAÇÃO DE ÁREAS DEGRADADAS',
    img: img1,
    text: `<p>A elaboração de um Plano de Recuperação de Área Degradada é mais comumente necessário quando solicitado pelos órgãos ambientais como parte integrante dos processos de licenciamento ambiental de atividades degradadoras do meio ambiente. Outra ocasião em que é necessária a elaboração de um PRAD é através de sanção administrativa de um empreendimento por causar degradação ao meio ambiente, sendo o projeto realizado como medida compensatória.</p>
    <p>Este plano tem como objetivo apresentar as diretrizes para a recuperação das áreas degradadas, em estudo, desenvolvendo ações de controle, adotando medidas de minimização da ação dos agentes erosivos e recuperação ambiental das áreas afetadas.
      Se seu empreendimento precisa, por algum motivo fazer um PRAD, entre em contato com a Alpha Consultoria, nossos profissionais irão te ajudar.</p>`
  },
  {
    label: 'AVALIAÇÃO DE RUÍDO AMBIENTAL',
    img: img2,
    text: `<p>O Laudo de Ruído Ambiental ou Relatório de Ruído Ambiental consiste nos resultados do monitoramento de ruído ambiental realizado no entorno de determinado empreendimento. Esse documento técnico registra os níveis de pressão sonora obtidos a partir da medição realizada em campo.</p>
    <p>O relatório usa como base a norma ABNT NBR 10.151:2019 e é realizado por profissional habilitado, com equipamentos devidamente calibrados.</p>
    <p>Entre em contato conosco, iremos te ajudar com essa necessidade!</p>`
  }
])

let itemText = ref(
  {
    label: 'Licenciamento ambiental',
    img: img12,
    text: `<p>Licenciamento ambiental é um processo administrativo executado pelos órgãos ambientais competentes que pode conceder o licenciamento para a instalação, a ampliação e a operação de empreendimentos e atividades que utilizam de recursos ambientais, considerando os potenciais riscos de poluição, ou de degradação ambiental.</p>
    <p>As licenças podem ser emitidas no âmbito Federal (IBAMA), Estadual (INEA, CETESB, entre outros) e no âmbito municipal (Secretarias). Isso irá depender do local, e impacto que o seu empreendimento pode causar.</p>
    <p>Mas não se preocupe, a ALPHA resolve tudo isso para você, através de seus consultores formados por uma equipe multidisciplinar!
    Precisa emitir ou renovar sua licença de operação? Fale com a gente, iremos até você!</p>`
  })

function setText(item) {
  itemText.value = item
}
</script>

<style>
  .bg_imagem {
    position: absolute;
    z-index: 0;
    right: 50px;
    max-width: 500px;
    right: inherit;
    top: -260px;
    border-radius: 10px;

  }
  .cardPosition {
    position: absolute;
    z-index: 1;
    left: -100px;
    top: -200px

  }
</style>
