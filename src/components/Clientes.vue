<template>
  <div class="q-pa-xl bg-white">
    <div class="text-weight-bolder text-black text-h6 text-uppercase q-pa-md q-py-md">Alguns de nossos clientes:</div>
    <q-list class="row items-center justify-around full-width">
      <template v-for="(item, i) in lista" :key="i" >
        <q-img
          :src="item"
          :ratio="1"
          width="100px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </template>
    </q-list>
    <div v-if="!indexContatos" class="row justify-center q-ma-xl">
      <q-btn color="positive" rounded icon="phone" label="Fale conosco" @click="faleconoso()" />
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import img1 from '../assets/clientes/1.png'
import img2 from '../assets/clientes/2.png'
import img3 from '../assets/clientes/3.png'
import img4 from '../assets/clientes/4.png'
import img5 from '../assets/clientes/5.png'
import img6 from '../assets/clientes/6.png'
import img7 from '../assets/clientes/7.png'
import img8 from '../assets/clientes/8.png'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const indexContatos = computed(() => route.name == 'contatos')

let lista = ref([img1, img2, img3, img4, img5, img6, img7, img8])

function faleconoso() {
  router.push({name: 'contatos'})
}
</script>

<style>

</style>
