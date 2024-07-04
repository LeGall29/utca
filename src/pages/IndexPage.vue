<template>
  <q-page class="customBG">
    <HeaderUTCA></HeaderUTCA>
    <div class="row justify-evenly">
      <RaceButton class="col-md-2" v-for="(btn,index) in listBtn1" :key="index" :text-color="btn.textColor" :distance="btn.distance" :depart="btn.depart"
        :arrivee="btn.arrivee" :relais="btn.relais"/>
    </div>
    <div class="q-mt-md row justify-evenly">
      <RaceButton class="col-md-2 q-px-xl" v-for="(btn,index) in listBtn2" :key="index" :text-color="btn.textColor" :distance="btn.distance" :depart="btn.depart"
        :arrivee="btn.arrivee" :relais="btn.relais"/>
    </div>
    <div class="q-mt-md row justify-evenly">
      <InfoButton class="col-md-2 q-px-xl" v-for="(btn,index) in listBtn3" :key="index" :text="btn.text"/>
    </div>
    <FooterUTCA></FooterUTCA>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderUTCA from '/src/components/HeaderUTCA.vue';
import FooterUTCA from 'src/components/FooterUTCA.vue';
import RaceButton from 'src/components/RaceButton.vue';
import InfoButton from 'src/components/InfoButton.vue';


export default defineComponent({
  name: 'IndexPage',
  components:{HeaderUTCA,FooterUTCA,RaceButton,InfoButton},
  data(){
    return {
      listBtn1:[
        {textColor:"orange",distance:"90 km", depart:"Lannion", arrivee:"Lannion", relais:"SOLO TRIO"},
        {textColor:"blue", distance:"60 km", depart:"Trégastel", arrivee:"Lannion", relais:"SOLO DUO"},
        {textColor:"green", distance:"32 km", depart:"Ile Grande", arrivee:"Lannion", relais:""},
      ],
      listBtn2:[
        {textColor:"red", distance:"20 km", depart:"Pors Mabo", arrivee:"Lannion", relais:""},
        {textColor:"pink", distance:"10 km", depart:"Beg Hent", arrivee:"Lannion", relais:""},
        {textColor:"purple", distance:"25 km", depart:"Beg Hent", arrivee:"Lannion", relais:""}
      ],
      listBtn3:[{text:"Bénévoles"},{text:"Photos"},{text:"Environnement"},{text:"Contact"}]
    }
  }
})
</script>
<style>
.customBG{
  background-image: url(../assets/index.jpg);
  background-size: cover;
}
</style>
