<template>
  <div class="bg-secondary fit row justify-center" id="empresa">
    <div class="container ">
      <div>
        <div class="text-h4 text-uppercase q-my-md text-bold">Empresa</div>
        <div class="borda text-h6 q-pl-md">A Alpha Consultoria é uma empresa de Engenharia que atua no ramo de Segurança no Trabalho, Meio Ambiente E Qualidade.
  Nosso propósito é difundir a cultura de QSMS nas empresas através do conhecimento técnico e prático de nossos consultores.
  A Alpha acumula mais de 16 anos de experiência através de nosso fundador que atuou em diversas empresas Nacionais e Multinacionais. A Alpha conta também como uma equipe multidisciplinar para atender as diversas necessidades de sua organização.</div>
      </div>
      <div class="q-gutter-md row items-center justify-around q-my-xl">
        <q-card class="col-md-3 col-xs-12 bg-secondary" flat style="width:100vw; max-width: 250px; height: 250px" v-for="(item, i) in lista" :key="i">

          <q-card-section>
            <div class="text-h6 q-my-md">
              <q-icon size="40px" :name="item.icon" /> <span>{{item.title}}</span>
            </div>
            <div>{{item.text}}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let lista = ref([
  {
    title: 'Missão',
    icon: 'article',
    text: 'Nossa missão é atender as necessidades dos nossos clientes com qualidade e inovação, sempre levando em consideração a preservação do meio ambiente e da segurança do trabalhador.'
  },
  {
    title: 'Visão',
    icon: 'public',
    text: 'Ser referência no nosso segmento e contribuir para melhoria das organizações atendidas por nós. Queremos contribuir para um crescimento sustentável e seguro da sua empresa.'
  },
  {
    title: 'Valores',
    icon: 'favorite',
    text: 'Compromisso com a ética, integridade e transparência.'
  }
])

</script>

<style scoped>
.borda {
  border-left: 5px solid #3C8979;
}

@media only screen and (max-width: 600px) {
  .container {
    margin: 100px 60px;
  }
}

@media only screen and (min-width: 600px) {
  .container {
    margin: 100px 100px;
  }
}
</style>
