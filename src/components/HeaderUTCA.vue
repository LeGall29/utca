<template>
    <div class="row q-mx-md justify-between">
        <div class="col-2">
          <q-img src="~assets/logo_UTCA.png" width="95%"></q-img>
        </div>
        <div class="col-6 order-xs-first text-center self-center text-primary ">
          <div class="text-h3 text-weight-bold q-mb-sm">Ultra Tour des Côtes d'Armor</div>
          <div class="text-h4 text-weight-bold">18 février 2024</div>
        </div>
        <div class="col-2 justify-end">
          <q-img class="" src="~assets/logo_CDA.png" width="80%"></q-img>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderUTCA',
})
</script>