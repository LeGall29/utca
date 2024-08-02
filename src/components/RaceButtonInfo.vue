<template>
  <q-btn
    no-caps
    rounded
    :ripple="false"
    style="background-color: rgba(255, 255, 255, 0.8); width: 25%"
    text-color="black"
    :href="route"
    class="borderblue q-mx-l"
  >
    <div class="q-py-none q-px-xl">
      <div class="text-h6 text-weight-bold">
        {{ text }}
      </div>
    </div>
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RaceButtonInfo",
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>
<style>
.borderblue {
  /*bordure du main des courses*/
  border: 2px black solid;
  border-radius: 15px;
  padding: 15px;
  border-color: royalblue;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
