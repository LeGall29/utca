<template>
  <q-page class="customRacePage">
    <HeaderUTCA></HeaderUTCA>
    <div class="q-mt-md row justify-evenly">
      <NavButton
        class="col-sm-2"
        v-for="(btn, index) in listBtsNav"
        :key="index"
        :route="btn.route"
        :text="btn.text"
      />
    </div>

    <div class="q-mt-md row justify-evenly">
      <RaceButtonInfo
        class="col-sm-2 q-px-xl"
        v-for="(btn, index) in listBtnInfo1"
        :key="index"
        :route="btn.route"
        :text="btn.text"
      />
    </div>
    <div class="q-mt-md row justify-evenly">
      <RaceButtonInfo
        class="col-sm-2 q-px-xl"
        v-for="(btn, index) in listBtnInfo2"
        :key="index"
        :route="btn.route"
        :text="btn.text"
      />
    </div>
    <div class="q-mt-md row justify-evenly">
      <RaceButtonInfo
        class="col-sm-2 q-px-xl"
        v-for="(btn, index) in listBtnInfo3"
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
import HeaderUTCA from "src/components/HeaderUTCA.vue";
import FooterUTCA from "src/components/FooterUTCA.vue";
import NavButton from "src/components/NavButton.vue";
import RaceButtonInfo from "src/components/RaceButtonInfo.vue";

export default defineComponent({
  name: "RacePage",
  components: { HeaderUTCA, FooterUTCA, RaceButtonInfo, NavButton },
  props: {
    routeInscription: {
      type: String,
      required: true,
    },
    routeParcours: {
      type: String,
      required: true,
    },
    routeReglement: {
      type: String,
      required: true,
    },
    routeGPS: {
      type: String,
      required: true,
    },
    routeRavitaillement: {
      type: String,
      required: true,
    },
    routeHebergement: {
      type: String,
      required: true,
    },
    routeResultat: {
      type: String,
      required: true,
    },
    routeFAQ: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      listBtsNav: [
        {
          text: "Accueil",
          route: "/",
        },
        {
          text: "90 km",
          route: "/90km",
        },
        {
          text: "60 km",
          route: "/60km",
        },
        {
          text: "47 km",
          route: "/47km",
        },
        {
          text: "32 km",
          route: "/32km",
        },
        {
          text: "20 km",
          route: "/20km",
        },
        {
          text: "11 km",
          route: "/11km",
        },
        {
          text: "Bénévoles",
          route: "/Benevoles",
        },
        {
          text: "Photos",
          route: "/Photos",
        },
        {
          text: "Contacts",
          route: "/Contacts",
        },
      ],
      listBtnInfo1: [
        {
          text: "Inscription",
          route: this.routeInscription,
        },
        {
          text: "Parcours",
          route: this.routeParcours,
        },
        {
          text: "Règlement",
          route: this.routeReglement,
        },
      ],
      listBtnInfo2: [
        {
          text: "Trace GPS",
          route: this.routeGPS,
        },
        {
          text: "Ravitaillement",
          route: this.routeRavitaillement,
        },
        {
          text: "Hebergement",
          route: this.routeHebergement,
        },
      ],
      listBtnInfo3: [
        {
          text: "FAQ",
          route: this.routeFAQ,
        },
        {
          text: "Résultat",
          route: this.routeResultat,
        },
      ],
    };
  },
});
</script>
<style></style>
