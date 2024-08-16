<template>
  <section >
    <div class="row items-center justify-center">
      <div class="col-10 text-white column">
        <h2>Benefícios Adicionais</h2>
        <div style="max-width: 900px">
          <p>
            <ul>
              <li>Fundamentos da NR 01: Entenda os princípios e diretrizes da Norma Regulamentadora 01, o ponto de partida para a criação de PGRs.</li>
              <li>Identificação de Perigos e Riscos: Aprenda a identificar e avaliar os perigos e riscos no ambiente de trabalho, uma habilidade essencial para criar ambientes seguros.</li>
              <li>Modelos de Documentos: Tenha acesso a modelos práticos de documentos, incluindo inventários de riscos, políticas de segurança, procedimentos operacionais padrão e mais.</li>
              <li>Ferramentas de Avaliação de Riscos: Utilize ferramentas como matrizes de risco para classificar e priorizar riscos.</li>
              <li>Experiência Prática: Aproveite a experiência de um profissional com reputação comprovada no campo de Segurança no Trabalho.</li>
            </ul>
          </p>
        </div>

        <div class="q-my-lg">
          <q-btn color="accent" text-color="black" rounded label="Obter e-book" @click="onClick()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGlobalStore } from '../stores/globalStore'

const global = useGlobalStore()
function onClick() {
  global.onEvent({
    label: 'call_to_action',
    value: 'Benefícios Adicionais'
  })
  global.onClick()
}
</script>

<style>

</style>
