<template>
    <q-btn no-caps 
     rounded  
     stack 
     :ripple="false"
     style="background-color:rgba(255, 255, 255, 0.8) ; width: 280px; height: 103px; flex-flow: row-reverse;"
     :text-color="textColor"
     
     class="bordergreen q-mx-xl items-center">
        <div class="q-py-none q-px-xl">
            <div class="text-subtitle2">
                {{ depart +' - '+ arrivee }}
            </div>
            <div class=" text-h4  text-weight-bold">
                {{distance}}
            </div>
            <div v-if="relais" class="text-subtitle2">
                {{ relais }}
            </div>
        </div>
    </q-btn>
</template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'RaceButton',
    components:{},
    props:{
        textColor:{
            type:String,
            default:"black"
        },
        depart:{
            type:String,
            default:undefined
        },
        arrivee:{
            type:String,
            default:undefined
        },
        relais:{
            type:String,
            default:undefined 
        },
        distance:{
            type:String,
            required:true
        }
    },
    data(){
        return {

        }
    }
  })
  </script>
  <style>
.bordergreen{/*exterieur bulle de navigation de l'index*/
	border : 3px green solid;
    border-radius: 50px;
    padding: 15px;
}
  </style>