<template>
  <q-page>
    <Header />
    <div class="gradiente">
      <Aprender />
      <Beneficios />
      <Autor />
    </div>
  </q-page>
</template>

<script setup>
import Header from '../components/Header_Land.vue'
import Aprender from '../components/Aprender.vue'
import Beneficios from '../components/Beneficios.vue'
import Autor from '../components/Autor.vue'

</script>
