<template>
  <div class="q-pa-xl bg-grey-8 row fit items-center">
    <div class="col-xs-12 col-sm-8 col-lg-9 q-gutter-md">
      <div class="text-weight-bolder text-white text-h4">
        Alpha consultoria
      </div>
      <div class="text-secondary text-weight-light text-white text-uppercase	">
        Email:contato@alphaehs.com.br
      </div>
      <div class="text-weight-light text-white text-uppercase	">
        Telefone e WhatsApp<br>
        (21) 97264-0515 <br>
        (21) 96655-5161
      </div>
    </div>
    <div class="col-xs-12 col-sm-4 col-lg-3 q-gutter-md q-mt-xl ">
      <q-btn round flat @click="onOpen('https://www.facebook.com/alphaehs')" >
        <q-img
          src="../assets/facebook.png"
          :ratio="1"
          width="40px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </q-btn>
      <q-btn round flat @click="onOpen('https://www.instagram.com/alphaehs/')" >
        <q-img
          src="../assets/instagram.png"
          :ratio="1"
          width="40px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </q-btn>
      <q-btn round flat @click="onOpen('https://www.linkedin.com/company/alpha-consultoria-em-ehs')" >
        <q-img
          src="../assets/linkedin.png"
          :ratio="1"
          width="40px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </q-btn>
      <q-btn round flat @click="onOpen('https://api.whatsapp.com/send?phone=5521972640515')" >
          <q-img
            src="../assets/whatsapp.png "
            :ratio="1"
            width="40px"
            spinner-color="primary"
            spinner-size="82px"
          />
      </q-btn>
      <q-btn round icon="email" outline color="white" @click="onOpen('mailto:contato@alphaehs.com.br')" >
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { openURL } from "quasar"

function onOpen(item) {
  openURL(item)
}
</script>

<style>

</style>
