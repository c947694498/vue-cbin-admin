<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "./store";
export default defineComponent({
  name: "App",
  setup() {
    const store = useStore()
    useCommit().app.SET_VERSION()
  },
});
</script>

