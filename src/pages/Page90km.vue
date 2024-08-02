<template>
  <q-page class="custom90">
    <RacePage
      route-inscription="/#/Maintenance"
      route-parcours="https://www.openrunner.com/route-details/18279541"
      route-reglement="https://nuage.cda22.org/s/ZkCqEgMxa8MbB5J"
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
  name: "90kmPage",
  components: { RacePage },
});
</script>
<style>
.custom90 {
  background-image: url(../assets/90km.jpg);
  background-size: cover;
}
</style>
