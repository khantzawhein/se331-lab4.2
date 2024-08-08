<script setup lang="ts">
import {Passenger} from "../../types";

const props = defineProps<{ passenger: Passenger | undefined }>()
</script>

<template>
  <div v-if="passenger" class="mt-4">
    <h1>Passenger Details</h1>
    <p>ID: {{ passenger._id }}</p>
    <p>Name: {{ passenger.name }}</p>
    <p>Trips: {{ passenger.trips }}</p>
  </div>
</template>

<style scoped>

</style>