<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-black z-max">
      <q-toolbar>
        <div class="q-pa-md cursor-pointer" @click="setAncora('index')">
          <q-img
            src="../assets/logo_top.png"
            width="200px"
            spinner-color="primary"
            spinner-size="82px"
          />

        </div>
        <q-space />
        <q-btn color="white" class="mobile-only" flat icon="menu" @click="(drawerLeft = !drawerLeft)" />
        <q-list class="row items-center mobile-hide"  >
          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
            @setAncora="setAncora"
            @setSelect="setSelect"
            :select="select"
          />
        </q-list>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerLeft"
      bordered
    >
      <q-list >
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          @setAncora="setAncora"
          @setSelect="setSelect"
          :select="select"
        />
      </q-list>
    </q-drawer>

    <q-page-sticky position="bottom-right" class="z-top" :offset="[18, 18]">
      <q-btn push round size="xl" color="positive" @click="sendWhatsapp()">
        <q-img
          src="../assets/whatsapp.png"
          :ratio="1"
          width="30px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </q-btn>
    </q-page-sticky>

    <q-footer>
      <Clientes />
      <Footer />
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from '../components/EssentialLink.vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Footer from '../components/Footer.vue';
import Clientes from '../components/Clientes.vue';
import { openURL } from 'quasar'

const linksList = reactive([
  {
    title: 'Empresa',
    link: 'empresa'
  },
  {
    title: 'Treinamentos',
    link: 'treinamento'
  },
  {
    title: 'Segurança do trabalho',
    link: 'seguranca-trabalho'
  },
  {
    title: 'Meio Ambiente',
    link: 'meio-ambiente'
  },
  {
    title: 'Qualidade',
    link: 'qualidade'
  },
  {
    title: 'Contatos',
    link: 'contatos'
  },
])
const router = useRouter()
const route = useRoute()

let drawerLeft = ref(false)
let select = ref(null)

function setSelect(item) {
  select.value = item
}

function setAncora(item) {
  drawerLeft.value = false

  if(item == 'seguranca-trabalho' || item == 'meio-ambiente' || item == 'qualidade' || item == 'contatos') {
    router.push({name: item})
  } else {
    let contexIndex = route.name == 'index' ? true:false
    if(!contexIndex) {
      router.push({name: 'index'})
    }

    setTimeout(() => {
      var scrollDiv = document.getElementById(`${item}`).offsetTop
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    }, 500)
  }
}

function sendWhatsapp() {
  let url = 'https://api.whatsapp.com/send?phone=5521972640515'
  openURL(url)
}
</script>
