<template>
  <q-layout>
    <q-page-container class="arialFont">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
.arialFont{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
