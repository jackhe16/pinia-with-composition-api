<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

import { useHomeStore } from "./Home.store";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const homeStore = useHomeStore();

    onMounted(() => {
      homeStore.table.fetchList(); // ??
    });

    return {
      homeStore,
    };
  },
});
</script>
