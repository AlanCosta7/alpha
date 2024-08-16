<template>
  <div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md form"
    >
      <div class="text-h6" :class="dark?'text-black':'text-white'">Estamos prontos para tornar sua empresa mais segura e sustentável. Entre em contato conosco:</div>
      <div class="row justify-between items-center">
        <div class="col-5">
          <q-input bg-color="white" lazy-rules :rules="[val => (val && val.length > 0) || 'Qual o seu nome?']" color="secondary" outlined v-model="form.name" type="text" label="Nome completo:" />
        </div>
        <div class="col-5">
          <q-input bg-color="white" lazy-rules :rules="[val => (val && val.length > 0) || 'Qual o seu telefone?']" color="secondary" outlined v-model="form.tel" type="text" mask="(##)#####-####" label="Telefone:" />
        </div>
      </div>
      <div>
          <q-input bg-color="white" lazy-rules :rules="[val => (val && val.length > 0) || 'Qual o seu e-mail?']" color="secondary" outlined v-model="form.email" type="email" label="Email:" />
      </div>
      <div>
          <q-input bg-color="white" lazy-rules :rules="[val => (val && val.length > 0) || 'Como podemos te ajudar?']" color="secondary" outlined v-model="form.msg" type="textarea" label="Mensagem:" />
      </div>
      <div>
        <q-btn label="Enviar" :disabled="validarForm" type="submit" color="secondary"/>
        <q-btn label="Limpar" type="reset" color="white" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { openURL } from "quasar";

const props = defineProps(['dark'])
let dark = computed(() => props.dark)

let validarForm = computed(() => {
  if (form.value.name && form.value.tel && form.value.email && form.value.msg) {
    return false
  } else {
    return true
  }
})

let form = ref({
  name: '',
  subject: '',
  tel: '',
  email: '',
  msg: '',
  text: '',
  html: '',
})

async function onSubmit() {
  form.value.text = `Name: ${form.value.name},\n Tel: ${form.value.tel},\n Email: ${form.value.email},\n Mensagem: ${form.value.msg}`
  var texto = window.encodeURIComponent(form.value.text);

  sendWhatsapp(texto)

}

function onReset() {
  form.value = {
    name: '',
    subject: '',
    tel: '',
    email: '',
    text: '',
    html: '',
  }
}

function sendWhatsapp(text) {
  let url = `https://api.whatsapp.com/send?phone=5521995459445&text=${text}`
  openURL(url)
}
</script>

<style>
.form {
  opacity: 1;
}
</style>
