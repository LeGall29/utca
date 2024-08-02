<template>
  <div class="row q-mx-md justify-between">
    <div class="col-2">
      <a href="/"><q-img src="~assets/logo_UTCA.png" width="95%"></q-img></a>
    </div>
    <div class="col-8 order-xs-first text-center self-center text-primary">
      <div class="text-h3 text-weight-bold q-mb-sm">
        Ultra Tour des Côtes d'Armor
      </div>
      <div class="text-h4 text-weight-bold">23 février 2025</div>
      <div class="text-h4 text-weight-bold">
        <span id="time" v-if="showCountdown">
          {{ jours }} jours {{ heures }}:{{ minutes }}:{{ secondes }}</span
        >
      </div>
    </div>
    <div class="col-2 justify-end">
      <a href="http://athle22.athle.org/" target="_blank"
        ><q-img class="" src="~assets/logo_CDA.png" width="80%"></q-img
      ></a>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderUTCA",
  data() {
    return {
      jours: 0,
      heures: 0,
      minutes: 0,
      secondes: 0,
      utcaStringDate: "2025-02-23T07:00:00",
      idInterval: null,
      showCountdown: true,
    };
  },
  created() {
    this.starCountdown();
  },
  beforeUnmount() {
    clearInterval(this.idInterval);
  },
  methods: {
    starCountdown() {
      const todayDate = Date.now();
      const utcaDate = new Date(this.utcaStringDate);
      let duree = utcaDate - todayDate;
      duree = Math.floor(duree / 1000);
      this.secondes = duree % 60;
      this.secondes = this.secondes < 10 ? "0" + this.secondes : this.secondes;
      duree = Math.floor((duree - this.secondes) / 60);
      this.minutes = duree % 60;
      this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
      duree = Math.floor((duree - this.minutes) / 60);
      this.heures = duree % 24;
      this.heures = this.heures < 10 ? "0" + this.heures : this.heures;
      duree = Math.floor((duree - this.heures) / 24);
      this.jours = duree;
      console.log(duree);

      if (this.secondes <= -1) {
        this.showCountdown = false;
      }
      this.idInterval = setInterval(this.starCountdown, 1000);
    },
  },
});
</script>
