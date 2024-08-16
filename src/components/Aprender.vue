<template>
  <section class="flex flex-center" :style="mobile?'':'height: 100vh'">
    <div class="row items-center justify-around">
      <div class="col-md col-xs-10">
        <q-img
          src="../assets/LandPage_PGR/AMOSTRA.png"
          :ratio="1"
          :width="mobile?'300px':'500px'"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
      <div class="col-md col-xs-10 q-pr-lg text-white column">
        <h2>O que você vai aprender?</h2>
        <p>
          <ul>
            <li>Fundamentos da NR 01: Entenda os princípios e diretrizes da Norma Regulamentadora 01, o ponto de partida para a criação de PGRs.</li>
            <li>Identificação de Perigos e Riscos: Aprenda a identificar e avaliar os perigos e riscos no ambiente de trabalho, uma habilidade essencial para criar ambientes seguros.</li>
            <li>Modelos de Documentos: Tenha acesso a modelos práticos de documentos, incluindo inventários de riscos, políticas de segurança, procedimentos operacionais padrão e mais.</li>
            <li>Ferramentas de Avaliação de Riscos: Utilize ferramentas como matrizes de risco para classificar e priorizar riscos.</li>
            <li>Experiência Prática: Aproveite a experiência de um profissional com reputação comprovada no campo de Segurança no Trabalho.</li>
          </ul>
        </p>

        <div class="q-my-lg">
          <q-btn color="accent" text-color="black" rounded label="Obter e-book" @click="onClick()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGlobalStore } from '../stores/globalStore'
import { computed } from 'vue'

const global = useGlobalStore()
const mobile = computed(() => global.mobile)

function onClick() {
  global.onEvent({
    label: 'call_to_action',
    value: 'O que você vai aprender?'
  })
  global.onClick()
}
</script>

<style>

</style>
