<script setup lang="ts">
import {usePassengerStore} from "../../store/passenger.ts";
import {storeToRefs} from "pinia";

console.log('LayoutView');
const passengerStore = usePassengerStore();
const {passenger} = storeToRefs(passengerStore);

</script>

<template>
  <div>
    <nav class="text-center mt-4">
      <router-link :to="{name: 'passenger-detail-view'}" exact-active-class="text-blue-500" exact>Details</router-link>
      |
      <router-link :to="{name: 'passenger-airline-view'}" exact-active-class="text-blue-500" exact>Airline</router-link>
      |
      <router-link :to="{name: 'passenger-edit-view'}" exact-active-class="text-blue-500" exact>Edit</router-link>
    </nav>
    <router-view :passenger="passenger"></router-view>
  </div>
</template>

<style scoped>

</style>