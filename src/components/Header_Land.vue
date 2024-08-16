<template>
  <section class="gradiente_cinza q-pa-md relative-position	" :style="mobile?'':'height: 100vh'">
    <div class="row items-center justify-around">

      <div class="col-xs-10 col-md-6 text-left column" style="width: 600px">
        <q-img
          src="../assets/LandPage_PGR/logo.png"
          width="200px"
          spinner-color="primary"
          spinner-size="82px"
        />
        <h1>
          E-book - Guia prático para elaboração de PGR
        </h1>
        <h6>
          Um guia completo para profissionais de Segurança no Trabalho com o objetivo de criar excelentes Programas de Gerenciamento de Riscos (PGRs) em conformidade com a NR 01.
        </h6>
        <div>
          <q-btn color="accent" text-color="black" rounded label="Obter e-book" @click="onClick()" />
        </div>
      </div>
      <div class="col-xs-10 col-md-5">

      </div>
    </div>
    <div v-if="mobile" class="q-py-xl q-my-xl"></div>
    <div class="q-py-xl">
      <q-img
        :class="mobile ? 'absolute-bottom':'absolute-bottom-right'"
        src="../assets/LandPage_PGR/pgr.png"
        :width="mobile?'300px':'700px'"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useGlobalStore } from '../stores/globalStore'

const global = useGlobalStore()
const mobile = computed(() => global.mobile)

function onClick() {
  global.onEvent({
    label: 'call_to_action',
    value: 'E-book - Guia prático para elaboração de PGR'
  })
  global.onClick()
}

</script>

<style>

</style>
