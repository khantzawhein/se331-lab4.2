<script setup lang="ts">
import {Passenger} from "../../types";

const props = defineProps<{ passenger: Passenger | undefined }>()
</script>

<template>
  <div v-if="passenger?.airline" class="mt-4">
    <h1>Airline Details</h1>
    <div v-for="airline in passenger.airline">
      <p>ID: {{ airline._id }}</p>
      <p>Name: {{ airline.name }}</p>
      <p>Country: {{ airline.country }}</p>
      <img :src="airline.logo" alt="Airline Logo">
      <p>Slogan: {{ airline.slogan }}</p>
      <p>Head Quarter: {{ airline.head_quaters }}</p>
      <p>Website: {{ airline.website }}</p>
      <p>Established: {{ airline.established }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>