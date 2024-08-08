<script setup lang="ts">
import PassengerService from "../services/PassengerService.ts";
import {Passenger} from "../types";
import {ref, toRefs, watchEffect} from "vue";
import {useRouter} from "vue-router";

const props = withDefaults(defineProps<{
  per_page?: number,
  page?: number
}>(), {
  per_page: 10,
  page: 1
})

const {per_page, page} = toRefs(props)
const passengers = ref<Passenger[]>([])
const totalPages = ref<number>(0)
const router = useRouter();
watchEffect(async () => {
      try {
        const {data} = await PassengerService.getPassengers(props.per_page, props.page)
        passengers.value = data.data
        totalPages.value = data.totalPages
      } catch (e) {
        await router.push({
          name: 'network-error'
        })
      }
    }
)
</script>

<template>

  <div>
    <p class="font-bold text-center mt-5">List of Passengers</p>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-3">
      <div @click="$router.push({name: 'passenger-detail-view', params: {id: passenger._id}})"
           class="px-3 py-3 rounded border border-gray-900 shadow hover:shadow-lg hover:shadow-blue-200 cursor-pointer"
           v-for="passenger in passengers" :key="passenger._id">
        <p>Name: {{ passenger.name }}</p>
        <p>Trips: {{ passenger.trips }}</p>
      </div>
    </div>

    <div class="paginator flex justify-center mt-4">
      <router-link :to="{name: 'home', query: {per_page, page: page - 1}}" v-if="page !== 1"
                   class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-3">Previous
      </router-link>
      <router-link :to="{name: 'home', query: {per_page, page: page + 1}}" v-if="page !== totalPages"
                   class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Next
      </router-link>
    </div>
  </div>

</template>

<style scoped>

</style>