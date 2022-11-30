<template>
  <div class="bg-grey-2 fit row justify-center" id="treinamento">
    <div class="">
      <div class="text-weight-bolder text-center text-h4 text-uppercase q-pa-md q-py-md" style="padding-top: 150px">
        Treinamentos
      </div>

      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        :navigation="!mobile"
        padding
        arrows
        height="500px"
        class="bg-grey-1 rounded-borders"
      >
        <q-carousel-slide :name="i+1" v-for="(item, i) in numberLista" :key="i" class="column no-wrap ">
          <q-list class="row fit justify-start items-center q-gutter-xs no-wrap">
            <template v-for="(opc, ind) in itemLista" :key="ind" class="" >
              <q-card class="q-ma-sm" style="width: 100vw; max-width: 300px; height: 400px" @click="setSelectTreinamento(opc)">
                <q-img height="250px" :src="opc.img" />
                <q-card class="borda bg-white q-pa-md" style="width: 100vw; max-width: 300px; border-radius: 30px 30px 0 0">
                  <div class="q-pt-md text-center ellipsis-2-lines text-weight-bolder">{{opc.title}}</div>
                  <div class="text-subtitle2 ellipsis-3-lines	">{{opc.text}}</div>
                </q-card>
              </q-card>
            </template>
          </q-list>
        </q-carousel-slide>
      </q-carousel>


      <q-dialog v-model="dialogTreinamento" :maximized="mobile" class="z-max">
        <q-card>
          <q-img
            :src="selectTreinamento.img"
            :ratio="15/5"
            width="100%"
            spinner-color="primary"
            spinner-size="82px"
          />
          <q-card-section class="row items-center">
            <div class="text-h6 q-my-md">{{selectTreinamento.title}}</div>
            <div>{{selectTreinamento.text}}</div>
            <div v-html="selectTreinamento.descricao" ></div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="positive" class="q-px-md" rounded icon="phone" label="Fale conosco" @click="faleconoso" />
            <q-btn flat label="Fechar" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>
  </div>
</template>

<script setup>
  import { openURL, Platform } from 'quasar'
  import { ref, computed } from 'vue'
  import img1 from '../assets/treinamento/1.jpg'
  import img2 from '../assets/treinamento/2.jpg'
  import img3 from '../assets/treinamento/3.jpg'
  import img4 from '../assets/treinamento/4.jpg'
  import img5 from '../assets/treinamento/5.jpg'
  import img6 from '../assets/treinamento/6.jpg'
  import img119 from '../assets/treinamento/119.jpg'
  import img8 from '../assets/treinamento/8.jpg'
  import img9 from '../assets/treinamento/9.jpg'
  import img10 from '../assets/treinamento/10.jpg'
  let dialogTreinamento = ref(false)
  let selectTreinamento = ref({})
  let mobile = computed(() => Platform?.is?.mobile)

  let slide = ref(1)

  let lista = ref([
    {
      title: 'NR 35 - TRABALHO EM ALTURA',
      img: img1,
      descricao: `
        <div>O objetivo deste curso é capacitar os trabalhadores através de treinamento teórico e prático para a realização do trabalho em altura com segurança. O principal objetivo é evitar acidentes do trabalho e mortes, além de eliminar perdas e danos também para o empregador.</div>
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <ul>
          <li>Normas e regulamentos aplicáveis ao trabalho em altura;</li>
          <li>Análise de Risco e condições impeditivas;</li>
          <li>Riscos potenciais inerentes ao trabalho em altura e medidas de prevenção e controle;</li>
          <li>Sistemas, equipamentos e procedimentos de proteção coletiva;</li>
          <li>Equipamentos de Proteção Individual para trabalho em altura: seleção, inspeção, conservação e limitação de uso;</li>
          <li>Acidentes típicos em trabalhos em altura;</li>
          <li>Condutas em situações de emergência;</li>
          <li>Noções de técnicas de resgate e de primeiros socorros;</li>
          <li>Preenchimento da Permissão de Trabalho em Altura;</li>
          <li>Práticas de elaboração de APR – Análise Preliminar de Risco;</li>
          <li>Práticas de trabalho em altura realizada em campo.</li>
        </ul>
        <p>Carga horária: 08 horas</p>
      `,
      text: 'Todo trabalho realizado acima de 2.00 m, é considerado trabalho em altura, e para executar essa atividade com segurança, é obrigatório a realização de treinamento conforme estabelece a NR 35.'
    },
    {
      title: 'NR 33 - ESPAÇO CONFINADO',
      img: img2,
      descricao: `
        <div>O objetivo deste curso é capacitar os profissionais que acessam espaços confinados bem como supervisores de entrada e vigias, a realizarem a atividade com segurança, cumprindo todos os requisitos da NR 33.</div>
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <p><b>ENTRANTES E VIGIAS</b></p>
        <ul>
          <li>Definições;</li>
          <li>Noções básicas sobre Legislação;</li>
          <li>Reconhecimento, avaliação e controle de riscos;</li>
          <li>Funcionamento de equipamentos utilizados;</li>
          <li>Procedimentos e utilização da Permissão de Entrada e Trabalho;</li>
          <li>Noções de resgate e primeiros socorros</li>
        </ul>

        <p>SUPERVISOR DE ENTRADA</p>
        <ul>
          <li>Legislação;</li>
          <li>Definição de espaço confinado;</li>
          <li>Identificação de espaço confinado;</li>
          <li>Estudo de casos – acidentes/estatísticas;</li>
          <li>Reconhecimento, avaliação e controle de riscos;</li>
          <li>Riscos dos espaços confinados e Medidas de controle de riscos;</li>
          <li>Funcionamento de equipamentos utilizados;</li>
          <li>Monitoramento das atmosferas;</li>
          <li>Procedimentos e utilização da Permissão de Entrada e Trabalho;</li>
          <li>Responsabilidades;</li>
          <li>Movimentadores de pessoas, cordas, polias e mosquetões; uso de tripé para resgate;</li>
          <li>Proteção respiratória/Uso de equipamentos de suprimento de ar para respiração humana;</li>
          <li>Noções de resgate e primeiros socorros;</li>
          <li>Primeiros socorros (RCP) – parada cardiorrespiratória, nível de consciência, asfixia, lesão cervical, controle de hemorragia e fraturas;</li>
        </ul>

        <p>Carga horária: 40 horas (supervisor de entrada)</p>
        <p>Carga horária: 16 horas (vigia e/ou entrante)</p>
        <p>Carga horária: 08 horas (reciclagem)</p>
        `,
      text: 'Espaço confinado é qualquer área ou ambiente não projetado para ocupação humana contínua, que possua meios limitados de entrada e saída, cuja ventilação existente é insuficiente para remover contaminantes ou onde possa existir a deficiência ou enriquecimento de oxigênio.'
    },
    {
      title: 'NR 05 - COMISSÃO INTERNA DE PREVÊNCÃO DE ACIDENTES (CIPA)',
      img: img3,
      descricao: `
        <div>O curso visa instruir tecnicamente os trabalhadores quanto à prevenção de acidentes e doenças decorrentes do trabalho, de modo a tornar compatível permanentemente o trabalho com a preservação da vida e a promoção da saúde do trabalhador.</div>
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <ul>
          <li>Estudo do ambiente, das condições de trabalho, bem como dos riscos originados do processo produtivo;</li>
          <li>Metodologia de investigação e análise de acidentes e doenças do trabalho;</li>
          <li>Noções sobre acidentes e doenças do trabalho decorrentes de exposição aos riscos existentes na empresa;</li>
          <li>Noções sobre a Síndrome da Imunodeficiência Adquirida – AIDS, e medidas de prevenção;</li>
          <li>Noções sobre as legislações trabalhistas e previdenciária relativas à segurança e saúde no trabalho;</li>
          <li>Princípios gerais de higiene do trabalho e de medidas de controle dos riscos;</li>
          <li>Organização da CIPA e outros assuntos necessários ao exercício das atribuições da Comissão.</li>
        </ul>
        <p>Carga horária: De acordo com o grau de Risco da Empresa, entre em contato para mais informações.</p>
        `,
      text: 'Comissão formada pelos empregados da empresa com o objetivo de fortalecer a cultura de segurança da empresa.'
    },
    {
      title: 'NR 20 – CURSO DE SEGURANÇA E SAÚDE NO TRABALHO COM INFLAMÁVEIS E COMBUSTÍVEIS.',
      img: img4,
      descricao: `
        <p>Carga Horária: A Carga horária do Curso de NR 20 varia de acordo com a classificação de risco do empreendimento e também de acordo com a atividade realizada.</p>
        <p>Entre em contato conosco para maiores informações.</p>
        `,
      text: 'O objetivo do curso de NR 20 é capacitar os trabalhadores para evitarem acidentes nas atividades de manipulação e/ou armazenamento de líquidos combustíveis e inflamáveis, visando proteger a vida e o patrimônio, bem como reduzir as conseqüências sociais de um sinistro e dos danos ao meio ambiente.'
    },
    {
      title: 'NR 10 – Segurança em Eletricidade',
      img: img5,
      descricao: `
        <p>A Alpha consultoria, realiza os treinamentos nas duas modalidades através de profissionais altamente qualificados e experientes.</p>
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <ul>
          <li>Introdução à segurança com eletricidade</li>
          <li>Riscos em instalações e serviços com eletricidade</li>
          <li>Técnicas de análise de risco</li>
          <li>Medidas de controle de risco elétrico</li>
          <li>Normas Técnicas Brasileiras - NBR da ABNT: NBR -5410, NBR 14039 e outras</li>
          <li>Regulamentações do MTE</li>
          <li>Equipamentos de proteção coletiva</li>
          <li>Equipamentos de proteção individual</li>
          <li>Rotinas de trabalho - Procedimentos</li>
          <li>Documentação de instalações elétricas</li>
          <li>Riscos adicionais</li>
          <li>Proteção e combate a incêndios</li>
          <li>Acidentes de origem elétrica</li>
          <li>Primeiros socorros</li>
          <li>Responsabilidades</li>
        </ul>
        <p>Treinamento de NR 10 Básico – Carga Horária 40 horas</p>
        `,
      text: 'O Curso de Segurança em Instalações Elétricas - NR10 Básico é requisito obrigatório para profissionais que trabalham direta ou indiretamente com Baixa Tensão (BT), além do curso básico, os profissionais que interagem direta ou indiretamente com Alta Tensão (AT), devem cursar o NR-10 Complementar – SEP (Sistema Elétrico de Potência).'
    },
    {
      title: 'NR 10 SEP',
      img: img6,
      descricao: `
        <ul>
          <li>Organização do Sistema Elétrico de Potencia - SEP.</li>
          <li>
            <p>Organização do trabalho:</p>
            <ul>
              <li>a) programação e planejamento dos serviços;</li>
              <li>b) trabalho em equipe;</li>
              <li>c) prontuário e cadastro das instalações;</li>
              <li>d) métodos de trabalho; e</li>
              <li>e) comunicação.</li>
            </ul>
          </li>
          <li>Aspectos comportamentais.</li>
          <li>Condições impeditivas para serviços.</li>
          <li>
            <p>Riscos típicos no SEP e sua prevenção:</p>
            <ul>
              <li>a) proximidade e contatos com partes energizadas;</li>
              <li>b) indução;</li>
              <li>c) descargas atmosféricas;</li>
              <li>d) estática;</li>
              <li>e) campos elétricos e magnéticos;</li>
              <li>f) comunicação e identificação; e</li>
              <li>g) trabalhos em altura, máquinas e equipamentos especiais.</li>
            </ul>
          </li>
          <li>Técnicas de análise de Risco no SEP.</li>
          <li>Procedimentos de trabalho - análise e discussão.</li>
          <li>
            <p>Técnicas de trabalho sob tensão:</p>
            <ul>
              <li>a) em linha viva;</li>
              <li>b) ao potencial;</li>
              <li>c) em áreas internas;</li>
              <li>d) trabalho a distância;</li>
              <li>e) trabalhos noturnos; e</li>
              <li>f) ambientes subterrâneos.</li>
            </ul>
          </li>
          <li>Equipamentos e ferramentas de trabalho (escolha, uso, conservação, verificação, ensaios).</li>
          <li>Sistemas de proteção coletiva.</li>
          <li>Equipamentos de proteção individual.</li>
          <li>Posturas e vestuários de trabalho.</li>
          <li>Segurança com veículos e transporte de pessoas, materiais e equipamentos.</li>
          <li>Sinalização e isolamento de áreas de trabalho.</li>
        </ul>
        <p>Treinamento de NR 10 SEP – Carga Horária 40 horas</p>
        `,
      text: 'Pré requisito: Ter realizado o curso básico de NR 10 com carga horária de 40 horas'
    },
    {
      title: 'NR 12 Máquinas e Equipamentos',
      img: img119,
      descricao: `
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <ul>
          <li>Apresentação da Norma NR12</li>
          <li>Cenário Brasileiro de Acidentes de Trabalho</li>
          <li>Estrutura da NR 12</li>
          <li>Pontos importantes da NR 12</li>
          <li>Responsabilidade dos Trabalhadores</li>
          <li>Arranjo Físico e Instalações</li>
          <li>Instalações e Dispositivos Elétricos</li>
          <li>Dispositivos de Partida, Acionamento e Parada</li>
          <li>Sistemas de Segurança</li>
          <li>Dispositivos de Parada de Emergência</li>
          <li>Componentes Pressurizados</li>
          <li>Transportadores de Materiais</li>
          <li>Aspectos Ergonômicos nos Trabalhos em Máquinas e Equipamentos</li>
          <li>Riscos Adicionais</li>
          <li>Manutenção, Inspeção, Preparação, Ajustes e Reparos</li>
          <li>Sinalização</li>
          <li>Procedimentos de trabalho e Segurança</li>
          <li>Projeto, fabricação, importação, venda, locação, leilão, cessão a qualquer título e exposição;</li>
          <li>Capacitação;</li>
          <li>Outros Requisitos Específicos de Segurança</li>
          <li>Disposições Finais</li>
        </ul>
        <p>CARGA HORÁRIA: 04 HORAS</p>
        `,
      text: 'Com o curso de NR-12, o profissional irá obter conhecimento de procedimentos como os de operação, manutenção e inspeção de máquinas e equipamentos, bem como conhecer e aplicar os métodos para controle de riscos estabelecidos na respectiva Norma, visando garantir a segurança e a integridade física de todos os trabalhadores envolvidos nas diversas etapas de serviços.'
    },
    {
      title: 'NR 11 – SEGURANÇA NA OPERAÇÃO DE EMPILHADEIRA',
      img: img8,
      descricao: `
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <ul>
          <li>Introdução;</li>
          <li>Tipos e modelos de empilhadeiras;</li>
          <li>Ponto de Equilíbrio;</li>
          <li>Estabilidade: centro de gravidade, base;</li>
          <li>Centro de carga;</li>
          <li>Inspeção Preventiva;</li>
          <li>Tipos e causas de acidentes com empilhadeira;</li>
          <li>Regras de Operação;</li>
          <li>Regras Básicas de Operação, operações diversas sem carga, com carga e com cargas especiais;</li>
          <li>Regras Básicas de Segurança;</li>
          <li>Sinalização de Segurança;/il>
          <li>Equipamento de Proteção Individual;</li>
          <li>Direção Defensiva;</li>
          <li>Exercícios Práticos;</li>
        </ul>
        <p>CARGA HORÁRIA: 08 horas</p>
        `,
      text: ''
    },
    {
      title: 'NR 11 – SEGURANÇA NA OPERAÇÃO DE PONTE ROLANTE',
      img: img9,
      descricao: `
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <ul>
          <li>Introdução;</li>
          <li>Tipos e modelos de pontes rolantes;</li>
          <li>Conceitos;</li>
          <li>Estabilidade: centro de gravidade, base, centro de carga;</li>
          <li>Componentes da Ponte Rolante;</li>
          <li>Motor elétrico, viga, trólei (carro) talha, botoeira, freio, gancho, moitão;</li>
          <li>Cabo de aço etc;</li>
          <li>Regras de Operação;</li>
          <li>Regras Básicas de Operação, partida da ponte rolante, operações diversas sem carga, com carga e com cargas especiais;</li>
          <li>Regras Básicas de Segurança;</li>
          <li>De acordo com a NR11 (Norma Regulamentadora);</li>
          <li>Exercícios Práticos;</li>
          <li>Exercícios evolutivos: verificação da manutenção diária pelo operador (conforme NR11), identificação dos componentes da máquina, identificação das alavancas de comando e botoeiras instrumentos do painel, reconhecer os movimentos básicos, operação sem carga, operação com carga, e cargas especiais.</li>
        </ul>
        <p>CARGA HORÁRIA: 16 horas</p>
        `,
      text: ''
    },
    {
      title: 'NR 18 – CONDIÇÕES E MEIO AMBIENTE DE TRABALHO PARA INDÚSTRIA DA CONSTRUÇÃO',
      img: img10,
      descricao: `
        <h6>CONTEÚDO PROGRAMÁTICO</h6>
        <ul>
          <li>Informações sobre as condições e meio ambiente de trabalho;</li>
          <li>Riscos inerentes a sua função;</li>
          <li>Uso adequado dos Equipamentos de Proteção Individual - EPI;</li>
          <li>Informações sobre os Equipamentos de Proteção Coletiva - EPC, existentes no canteiro de obra.</li>
          <li>Noções sobre Condições inseguras</li>
          <li>Noções sobre Ato Inseguro</li>
        </ul>
        <p>CARGA HORÁRIA: 06 horas</p>
        `,
      text: 'O Treinamento NR18 é um treinamento de integração, obrigatório para todo trabalhador da construção civil antes deste iniciar suas atividades e sempre que necessário. O Objetivo é que seja repassada as obrigações e responsabilidades dos funcionários, quanto a utilização dos EPI’s, condições inseguras e conscientização sobre atos inseguros.'
    },
  ])

  let numberLista = computed(() => {
    if(mobile.value) {
      return lista.value.length
    } else {
      return parseInt(lista.value.length-3)
    }
  })

  let itemLista = computed(() => {
    if(mobile.value) {
      let result = lista.value.slice(slide.value-1, slide.value)
      console.log('result 1', result, slide.value-1, slide.value+1)
      return result
    } else {
      let result = lista.value.slice(slide.value-1, slide.value+3)
      console.log('result 2', result, slide.value-1, slide.value+3)
      return result
    }
  })



  function setSelectTreinamento(item) {
    dialogTreinamento.value = true
    selectTreinamento.value = item
  }

  function faleconoso() {
    let tel = '21972640515'
    openURL(`https://api.whatsapp.com/send?phone=55${tel}`);
    dialogTreinamento.value = fechar

  }

</script>

<style scoped>
.borda {
  margin-top: -25px
}

</style>
