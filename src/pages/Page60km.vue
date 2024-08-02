<template>
  <q-page class="custom60">
    <RacePage
      route-inscription="test2"
      route-parcours="test"
      route-reglement="test3"
      route-g-p-s="test"
      route-ravitaillement="test4"
      route-hebergement="test"
      route-f-a-q="test"
      route-resultat="test"
    ></RacePage>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import RacePage from "src/components/RacePage.vue";
export default defineComponent({
  name: "60kmPage",
  components: { RacePage },
});
</script>
<style>
.custom60 {
  background-image: url(../assets/60km.jpg);
  background-size: cover;
}
</style>
