<template>
  <q-btn
    no-caps
    rounded
    :ripple="false"
    style="background-color: rgba(255, 255, 255, 0.8); width: 9%"
    text-color="black"
    :to="route"
    class="nav"
  >
    <div class="q-py-none">
      <div class="text-h7 text-weight-bold">
        {{ text }}
      </div>
    </div>
  </q-btn>
</template>

<script>
import { Ripple } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavButton",
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
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none; /* enleve les points*/
  text-align: center;
}
</style>
