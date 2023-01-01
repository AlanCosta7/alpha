<template>
  <q-item
    clickable
    v-ripple
    @click="ancora(link)"
  >
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from 'vue'
const emit = defineEmits(['setAncora'])

const props = defineProps({title: String, link: String})

let title = computed(() => props.title)
let link = computed(() => props.link)

function ancora(item) {
  emit('setAncora', item)
}
</script>
