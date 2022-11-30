<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-black z-max mobile-hide">
      <q-toolbar>
        <div class="q-pa-md">
          <q-img
            src="../assets/logo_top.png"
            width="200px"
            spinner-color="primary"
            spinner-size="82px"
          />

        </div>
        <q-space />

        <q-list class="row items-center" >
          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
            @setAncora="setAncora"
          />
        </q-list>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from '../components/EssentialLink.vue'
import { reactive } from 'vue'

const linksList = reactive([
  {
    title: 'Empresa',
    link: 'empresa'
  },
  {
    title: 'Treinamento',
    link: 'treinamento'
  },
  {
    title: 'Serviços',
    link: 'servicos'
  },
  {
    title: 'Meio Ambiente',
    link: 'ambiente'
  },
  {
    title: 'Qualidade',
    link: 'qualidade'
  },
])

function setAncora(item) {
  console.log('ancora', item)

  setTimeout(() => {
    var scrollDiv = document.getElementById(`${item}`).offsetTop
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
  }, 100)
}


</script>
