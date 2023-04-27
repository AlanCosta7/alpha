<template>
  <q-item
    clickable
    v-ripple
    @click="ancora(link)"
    :class="select==link?'text-weight-bold':'text-weight-regular'"
  >
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed, ref } from 'vue'
const emit = defineEmits(['setAncora', 'setSelect'])

const props = defineProps({title: String, link: String, select: String})
let select = computed(() => props.select)

let title = computed(() => props.title)
let link = computed(() => props.link)

function ancora(item) {
  select.value = null
  emit('setAncora', item)
  emit('setSelect', item)
}
</script>
