<template>
  <q-page class="customBG">
    <HeaderUTCA></HeaderUTCA>
    <div class="row justify-evenly">
      <RaceButton
        class="col-sm-2"
        v-for="(btn, index) in listBtn1"
        :route="btn.route"
        :key="index"
        :text-color="btn.textColor"
        :distance="btn.distance"
        :depart="btn.depart"
        :arrivee="btn.arrivee"
        :relais="btn.relais"
      />
    </div>
    <div class="q-mt-md row justify-evenly">
      <RaceButton
        class="col-sm-2 q-px-xl"
        v-for="(btn, index) in listBtn2"
        :route="btn.route"
        :key="index"
        :text-color="btn.textColor"
        :distance="btn.distance"
        :depart="btn.depart"
        :arrivee="btn.arrivee"
        :relais="btn.relais"
      />
    </div>
    <div class="q-mt-md row justify-evenly">
      <InfoButton
        class="col-sm-2 q-px-xl"
        v-for="(btn, index) in listBtn3"
        :key="index"
        :route="btn.route"
        :text="btn.text"
      />
    </div>
    <FooterUTCA></FooterUTCA>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import HeaderUTCA from "/src/components/HeaderUTCA.vue";
import FooterUTCA from "src/components/FooterUTCA.vue";
import RaceButton from "src/components/RaceButton.vue";
import InfoButton from "src/components/InfoButton.vue";

export default defineComponent({
  name: "IndexPage",
  components: { HeaderUTCA, FooterUTCA, RaceButton, InfoButton },
  data() {
    return {
      listBtn1: [
        {
          route: "/90km",
          textColor: "orange",
          distance: "90 km",
          depart: "Lannion",
          arrivee: "Lannion",
          relais: "SOLO TRIO",
        },
        {
          route: "/60km",
          textColor: "blue",
          distance: "60 km",
          depart: "Trégastel",
          arrivee: "Lannion",
          relais: "SOLO DUO",
        },
        {
          route: "/47km",
          textColor: "purple",
          distance: "47 km",
          depart: "Landrellec",
          arrivee: "Lannion",
          relais: "",
        },
      ],
      listBtn2: [
        {
          route: "/32km",
          textColor: "green",
          distance: "32 km",
          depart: "Ile Grande",
          arrivee: "Lannion",
          relais: "",
        },
        {
          route: "/20km",
          textColor: "red",
          distance: "20 km",
          depart: "Pors Mabo",
          arrivee: "Lannion",
          relais: "",
        },
        {
          route: "/11km",
          textColor: "pink",
          distance: "11 km",
          depart: "Beg Hent",
          arrivee: "Lannion",
          relais: "",
        },
      ],
      listBtn3: [
        {
          route: "Benevoles",
          text: "Bénévoles",
        },
        {
          route: "Photos",
          text: "Photos",
        },
        {
          route: "Environnement",
          text: "Environnement",
        },
        {
          route: "Contacts",
          text: "Contact",
        },
      ],
    };
  },
});
</script>
<style>
.customBG {
  background-image: url(../assets/index.jpg);
  background-size: cover;
}
</style>
