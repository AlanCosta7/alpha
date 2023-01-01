<template>
  <div>
    <q-responsive class="responsive" style="height:100vh">
      <q-carousel
        animated
        v-model="slide"
        :navigation="!mobile"
        infinite
        :autoplay="autoplay"
      >
          <q-carousel-slide class="dimmed" v-for="(item, i) in banner" :key="i" :name="i" :img-src="item.img" >
            <div class="column fit flex flex-center text-white text-uppercase" >
              <div class="container" style="z-index:1">
                <h2 class="text-left text-weight-bolder q-ma-none mobile-hide">{{item.title}}</h2>
                <h3 class="text-left text-weight-bolder q-ma-none mobile-only">{{item.title}}</h3>
                <h4 class="text-left q-pa-none q-ma-none mobile-hide">{{item.descricao}}</h4>
                <h5 class="text-left q-pa-none q-ma-none mobile-only">{{item.descricao}}</h5>
                <div class="q-my-xl q-gutter-md">
                  <q-btn color="positive" rounded icon="phone" label="Fale conosco" @click="faleconoso('zap')" />
                  <q-btn color="positive" rounded icon="email" label="Email" @click="faleconoso('email')" />
                </div>
              </div>
            </div>
          </q-carousel-slide>
      </q-carousel>
    </q-responsive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { openURL, Platform } from 'quasar'
import imagem1 from '../assets/imagem1.jpg'
import imagem2 from '../assets/imagem2.jpg'
import imagem3 from '../assets/imagem3.jpg'



let slide = ref(0)
let autoplay = ref(true)

let banner = ref([
  {
    img: imagem1,
    title: 'Segurança do trabalho',
    descricao: 'Consultoria em Segurança no Trabalho, Meio Ambiente e Qualidade'
  },
  {
    img: imagem2,
    title: 'Segurança do Trabalho',
    descricao: 'Consultoria em Segurança no Trabalho, Meio Ambiente e Qualidade'
  },
  {
    img: imagem3,
    title: 'Segurança do trabalho',
    descricao: 'Consultoria em Segurança no Trabalho, Meio Ambiente e Qualidade'
  }
])
let mobile = computed(() => Platform?.is?.mobile)

function faleconoso(item) {
  if(item == 'zap') {
    let tel = '21972640515'
    openURL(`https://api.whatsapp.com/send?phone=55${tel}`);
  } else {
    openURL('mailto:contato@alphaehs.com.br')
  }
}

</script>

<style scoped>
  .responsive {
    margin-top: 0px;
  }
</style>
