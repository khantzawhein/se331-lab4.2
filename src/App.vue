<script setup lang="ts">
import {useMessageStore} from "./store/message.ts";
import {storeToRefs} from "pinia";

const store = useMessageStore();
const {message} = storeToRefs(store);
</script>

<template>
  <div id="layout">
    <div id="flashMessage" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <main class="container mx-auto py-4">
      <h3 class="text-xl text-center font-bold">Passenger App</h3>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
@keyframes yellowfade {
  from {
    background-color: yellow;
  }

  to {
    background-color: white;
  }
}

#flashMessage {
  animation: yellowfade 5s ease-in-out;
}

#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
