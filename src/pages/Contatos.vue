<template>
  <section>
    <q-img
      src="../assets/contatos/contatos.webp"
      :ratio="(16/4)"
      width="100%"
      spinner-color="primary"
      spinner-size="82px"
    />
    <div class="bg-primary fit row justify-center" style="padding-bottom: 300px">
      <div class="items-center fit container justify-around">
        <div>
          <h1 class="text-weight-bolder full-width text-white text-uppercase q-pa-md q-py-md">
            Fale conosco
          </h1>
          <div class="row items-start justify-around text-white q-pa-md q-gutter-md">
            <div class="col-md-5 col-xs-12 column">
              <div class=" q-gutter-md">
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
              <div class="column items-start q-gutter-md q-mt-lg">
                <div>
                  Siga nossas redes sociais
                </div>

                <q-btn flat @click="onOpen('https://www.facebook.com/alphaehs')" >
                  <q-img
                    src="../assets/facebook.png"
                    :ratio="1"
                    width="40px"
                    spinner-color="primary"
                    spinner-size="82px"
                  />
                  <span class="q-px-md">/alphaehs</span>
                </q-btn>
                <q-btn flat @click="onOpen('https://www.instagram.com/alphaehs/')" >
                  <q-img
                    src="../assets/instagram.png"
                    :ratio="1"
                    width="40px"
                    spinner-color="primary"
                    spinner-size="82px"
                  />
                  <span class="q-px-md">/alphaehs</span>
                </q-btn>
                <q-btn flat @click="onOpen('https://www.linkedin.com/company/alpha-consultoria-em-ehs')" >
                  <q-img
                    src="../assets/linkedin.png"
                    :ratio="1"
                    width="40px"
                    spinner-color="primary"
                    spinner-size="82px"
                  />
                  <span class="q-px-md text-caption">/company/alpha-consultoria-em-ehs</span>
                </q-btn>
                <q-btn flat @click="onOpen('https://api.whatsapp.com/send?phone=5521972640515')" >
                    <q-img
                      src="../assets/whatsapp.png "
                      :ratio="1"
                      width="40px"
                      spinner-color="primary"
                      spinner-size="82px"
                    />
                  <span class="q-px-md">(21) 97264-0515</span>
                </q-btn>
                <q-btn flat icon="email" size="lg" outline color="white" @click="onOpen('mailto:contato@alphaehs.com.br')" >
                  <span class="q-px-md text-caption">contato@alphaehs.com.br</span>
                </q-btn>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Form from '../components/Form.vue'
import { ref } from 'vue'
import { openURL } from "quasar"

function onOpen(item) {
  openURL(item)
}

</script>

