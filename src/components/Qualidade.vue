<template>
  <div class="bg-grey-2 fit row justify-center" style="padding-top: 150px; padding-bottom: 150px" id="qualidade">
    <div class="container">
      <div class="text-weight-bolder text-h4 text-uppercase q-pa-md q-py-md">
        Implantação de Sistema de Gestão - ISO
      </div>
      <div class="q-pa-md q-py-md">
        <p>ISO 9001:2015 -Sistema de Gestão da Qualidade </p>
        <p>ISO 14001:2015 - Sistema de Gestão Ambiental</p>
        <p>ISO 45001:2018 - Sistema de Gestão de Segurança e Saúde Ocupacional</p>
        <p>
          A Alpha possui uma equipe Multidisciplinar formada por Auditores Internos, Auditores Externos, Engenheiros Ambientais, Engenheiros de Segurança,  Gestores e demais profissionais.
          Através desses profissionais podemos assessorar sua empresa na implantação das Normas ISO 9001, 14001 e 45001.
          Realizamos também auditorias internas nas empresas já certificadas.
        </p>
        <div class="q-my-xl q-gutter-md">
          <q-btn color="positive" rounded @click="faleconoso('zap')" >
            <div class="row items-center justify-around q-gutter-md">
              <q-img
                src="../assets/whatsapp.png"
                :ratio="1"
                width="20px"
                spinner-color="primary"
                spinner-size="82px"
              />
              <div>
                Entre em contato conosco!
              </div>
            </div>
          </q-btn>
          <q-btn color="positive" rounded icon="email" label="Email" @click="faleconoso('email')" />
        </div>
      </div>
      <div class="row justify-center">
        <q-img
          src="../assets/logo.svg"
          :ratio="1"
          width="60vw"
          style="max-width: 200px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { openURL } from 'quasar'

function faleconoso(item) {
  if(item == 'zap') {
    let tel = '21972640515'
    openURL(`https://api.whatsapp.com/send?phone=55${tel}`);
  } else {
    openURL('mailto:contato@alphaehs.com.br')
  }
}
</script>

<style>

</style>
