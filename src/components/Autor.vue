<template>
  <section class="q-pa-md flex flex-center relative-position" style="height: 100vh">
    <div class="row items-center justify-around">

      <div class="col-xs-10 col-md-6 text-left column text-white q-mb_xl">
        <h2>Sobre o Autor</h2>
        <p>
          Ezequias Souza, especialista com vasta experiência em SST, formação em Engenharia Ambiental, Engenharia de Segurança no Trabalho e auditoria de normas ISO 9001, 14001, 45001. Atuando desde 2006 em empresas multinacionais, decidi compartilhar conhecimentos valiosos para capacitar você a se destacar na área de Segurança no Trabalho.
        </p>

      </div>
      <div :class="mobile?'col-xs-10 col-md-5 q-py-xl q-my-xl':'col-xs-10 col-md-5 '">
        <q-img
          :class="mobile?'absolute-bottom-right':'absolute-bottom-right'"
          src="../assets/LandPage_PGR/autor.png"
          :width="mobile?'300px':'500px'"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGlobalStore } from '../stores/globalStore'
import { computed } from 'vue'

const global = useGlobalStore()
const mobile = computed(() => global.mobile)

</script>

<style>

</style>
