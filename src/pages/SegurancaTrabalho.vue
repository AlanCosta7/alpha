<template>
  <section class="row flex flex-center">
    <q-img
      src="../assets/imagem1.jpg"
      :ratio="(16/4)"
      width="100%"
      spinner-color="primary"
      spinner-size="82px"
    />
    <div class="container">
      <h1>Consultoria Especializada em Segurança do trabalho</h1>
      <div>
        <p>A Alpha é uma empresa de Consultoria especialista em Segurança no Trabalho, possuimos um quadro técnico de Engenheiros de Segurança no Trabalho, Médicos do Trabalho, Técnicos de Segurança no Trabalho e Instrutores. Nossos profissionais possuem mais de 16 anos de experiência e estamos prontos para lhe atender.</p>
        <p>Somos especialistas em elaboração de PGR, PCMSO e LTCAT e também fazemos o envios dos eventos 2210, 2220, 2240 para o eSocial!</p>
        <p>Além disso, realizamos todos dos demais serviços de Segurança tais como:</p>
        <p>Elaboração de AET - Análise Ergonomica do Trabalho - NR 17, Elaboração de Laudo de Insalubridade NR 15, Elaboração de Laudo de Periculosidade NR 16 dentre outros serviços de Segurança no Trabalho.</p>
        <p>Se sua empresa precisa treinar seus funcionários, a Alpha está pronta para lhe atender, possuimos um time de intrutores altamente qualificados para realizar treinamentos como:</p>
        <p>Treinamento de CIPA - NR 05, Treinamento de EPI's - NR 06, Treinamento de NR 10, Treinamento de NR 12, Treinamento de NR 20, Treinamento de NR 18, Treinamento de Segurança em Espaço Confinado - NR 33, Treinamento de Trabalho em Altura- NR 35,dentre outros.</p>
      </div>
    </div>
    <Servico />
  </section>
</template>

<script setup>
import Servico from '../components/Servico.vue';

</script>

<style>

</style>
