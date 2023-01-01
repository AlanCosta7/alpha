<template>
  <div class="bg-grey-2 fit row justify-center" style="padding-top: 50px; padding-bottom: 150px" id="servicos">
    <div class="">
      <div class="text-weight-bolder text-h4 text-uppercase q-pa-md q-py-md">
        Serviços
      </div>
      <q-list bordered class="rounded-borders" v-for="(item, i) in lista" :key="i" >
        <q-expansion-item
          style="width: 90vw; max-width: 600px"
          class="bg-white"
          expand-separator
          :label="item.title"
        >
          <q-card class="bg-grey-4">
            <q-img width="100%" :ratio="20/7"  :src="item.img" alt="imagem" />
            <q-card-section>
              <div v-html="item.text"></div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img14 from '../assets/ambiente/14.jpg'
import img6 from '../assets/ambiente/6.jpg'
import img7 from '../assets/ambiente/7.jpg'
import img10 from '../assets/ambiente/10.jpg'
import img25 from '../assets/ambiente/25.jpg'
import img11 from '../assets/ambiente/11.jpg'
import img26 from '../assets/ambiente/26.jpg'
import img5 from '../assets/ambiente/5.jpg'
import img8 from '../assets/ambiente/8.jpg'
import img4 from '../assets/ambiente/4.jpg'
import img19 from '../assets/ambiente/19.jpg'

const lista = ref([
    {
      title: 'IMPLEMETANÇÃO DE GESTÃO  DE SAÚDE E SEGURANÇA NO TRABALHO',
      img: img14,
      text: `<p>Consultoria técnica realizada por profissional com mais de 16 anos de experiência na área de Segurança do Trabalho. Essa consultoria consiste em realização de um diagnóstico inicial das oportunidades de melhorias referente a segurança do trabalho na unidade.</p>
            <p>Essa é uma consultoria que atende a real necessidade do cliente. Entre em contato e descubra mais sobre esse serviço.</p>`
    },
    {
      title: 'PGR – Programa de Gerenciamento de Riscos – NR 01',
      img: img6,
      text: `<p>De acordo com nova NR 01 as empresas devem Gerenciar os Riscos Ocupacionais através de um Programa de Gerenciamento de Riscos - PGR.</p>
      <p>Esse substituiu o antigo PPRA e é obrigatório. Seu objetivo é identificar, avaliar e controlar riscos existentes no ambiente do trabalho. O PGR deve possuir minimamente um inventário de riscos e plano de ação.</p>
      <p>Evite multas e proporcione um local de trabalho mais seguro para seus funcionários, entre em contato com a Alpha e vamos elaborar o PGR para você!</p>`
    },
    {
      title: 'PCMSO – PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL – NR 07',
      img: img7,
      text: `<p>No PCMSO são previstas as ações de saúde que serão adotadas pela empresa, os métodos de rastreamento e diagnóstico precoce dos agravos à saúde relacionados ao trabalho e de constatação da existência de casos de doenças profissionais ou danos irreversíveis à saúde do trabalhador de acordo com o que determina a NR-7 da portaria 3214/78.</p>
      <p>Nosso médico do Trabalho está pronto para te atender, entre em contato e faça uma cotação.</p>`
    },
    {
      title: 'LTCAT – LAUDO TÉCNICO DE CONDIÇÕES DO AMBIENTE DO TRABALHO',
      img: img10,
      text: `<p>O objetivo deste laudo é reunir dados sobre as atividades e condições de trabalho dos empregados. Tem por finalidade cumprir as exigências da legislação previdenciária – artigo 58 da Lei 9.528 de 10/12/1997, dar sustentabilidade técnica às condições ambientais existentes na empresa e subsidiar o enquadramento de tais atividades.</p>`
    },
    {
      title: 'Gestão do eSocial. ',
      img: img25,
      text: `<p>Fazemos a Gestão e envio dos eventos de SST para sua empresa.</p>
      <p>As informações enviadas para o eSocial serão usadas para fazer o PPP eletrônico, é obrigatório para todas as empresas que possuam funcionários exposto a riscos.</p>
      <p>Entre em contato conosco e vamos resolver tudo pra você!</p>`
    },
    {
      title: 'LAUDO DE INSALUBRIDADE E PERICULOSIDADE',
      img: img11,
      text: `<p>Esse laudo tem como finalidade apontar, quais as atividades que podem ser classificadas como perigosas e insalubres. Após a constatação da existência de tais situações, serão propostas medidas que poderão eliminar condições insalubres ou perigosas, neutralizando a ação do agente insalubre ou eliminando a causa da periculosidade, legalmente equiparado nas NR-15 e NR-16 da portaria 3214/78</p>`
    },
    {
      title: 'AET – ANÁLISE ERGONÔMICA DO TRABALHO',
      img: img26,
      text: `<p>A análise ergonômica do trabalho é um documento obrigatório de acordo com a norma regulamentadora nº 17.</p>
      <p>A análise ergonômica  do Trabalho – AET será necessária para todas às empresas que possuem empregados, cujas atividades ou procedimentos os expõem a riscos, que por sua natureza ou método de trabalho, impliquem em levantamento, transporte e descarga individual de materiais, assim como, atividades que exijam sobrecarga muscular estática ou dinâmica do pescoço, ombros, dorso e membros superiores ou inferiores.</p>
      <p>Entre em contato com a gente, vamos te ajudar a realizar essa Análise.</p>`
    },
    {
      title: 'PPR – PROGRAMA DE PROTEÇÃO RESPIRATÓRIA',
      img: img5,
      text: `<p> O Programa de Proteção Respiratória (PPR) é um conjunto de medidas de segurança implementadas para proteger a saúde do trabalhador contra a exposição aos riscos químicos e biológicos existentes no local de trabalho. O objetivo do programa é controlar as doenças ocupacionais causadas pela inalação das impurezas do ar que são prejudiciais à saúde como poeiras, névoas, fumos, vapores e gases químicos. É um processo de seleção, uso e manutenção dos respiradores para cada trabalhador que irá avaliar os riscos respiratórios, adequar as tarefas para eliminar ou minimizar os perigos do ambiente de trabalho e selecionar os Equipamentos de Proteção Respiratória (EPR)  ideal para cada tarefa na jornada de trabalho.</p>
      <p>Entre em contato com a Alpha, nós iremos ajudar você a realizar um programa de proteção respiratória consistente, que além de atender os requisitos legais, irá proporcionar saúde e segurança para seu funcionário.</p>`
    },
    {
      title: 'PCA – PROGRAMA DE CONSERVAÇÃO AUDITIVA',
      img: img8,
      text: `<p>O PCA – Programa de Conservação auditiva é um programa que previne perdas auditivas ocupacionais, é um processo contínuo e dinâmico de implantação de rotinas nas empresas. Onde existir exposição a ruído pelo trabalhador há necessidade de implantação do PCA.</p>
      <p>O PCA envolve a atuação de uma equipe  multidisciplinar, pois são necessárias medidas de engenharia de segurança, medicina do trabalho, fonoaudiologia, treinamento e administração.
Entre em contato com Alpha, nós iremos ajudar você a realizar um programa de conservação auditiva consistente e que gere resultados que você irá ver na prática.</p>`
    },
    {
      title: 'LEVANTAMENTO DE PERIGOS E RISCOS',
      img: img4,
      text: `<p>O Levantamento de Perigos e Riscos é um procedimento onde a consultoria identifica os perigos associados às suas atividades, e estabelece medidas para diminuir probabilidade de ocorrências de eventos adversos que possam trazer danos e prejuízos tanto para a instituição quanto para seus funcionários.</p>
      <p>A Alpha realiza o levantamento de perigos e riscos usando a ISO 45001 como diretriz, o levantamento é feito em campo, e todos os perigos identificados são planilhados e mensurados, e por fim sugeridas formas de controles.</p>`
    },
    {
      title: 'AUDITORIA DE REQUISITOS LEGAIS',
      img: img19,
      text: `<p>De acordo as Normas NBR ISO 9001:15, ISO 14001:15 e ISO 45001:18), as Empresas Certificadas nos Sistemas de Gestão mencionados, estão obrigadas a realizar, periodicamente, a avaliação de todas as legislações aplicáveis ao empreendimento.
Mesmo as empresas não certificadas nas normas mencionadas acima, podem realizar esse tipo de auditoria, afinal, qualquer empreendimento deve cumprir a legislação no âmbito federal, estadual e municipal.</p>
<p>A Alpha realiza a auditoria de requisito legal, através de seus profissionais altamente qualificados, e elabora o relatório de auditoria para acompanhamento das ações de possíveis não conformidades.</p>
<p>Fale com a gente, nós iremos até você para fazer uma visita técnica e te ajudar na necessidade de sua empresa.</p>`
    }
  ])
</script>

<style>

</style>
