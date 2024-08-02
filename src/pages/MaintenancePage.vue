<template>
  <div
    class="fullscreen bg-green text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 15vh">Page en cours de maintenance</div>

      <div class="text-h2" style="opacity: 0.4">
        Cette page sera bientôt disponible
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="green"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MaintenancePage",
});
</script>
