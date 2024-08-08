<script setup lang="ts">
import type {Passenger} from "../../types";
import {useMessageStore} from "../../store/message.ts";
import {useRouter} from "vue-router";

const props = defineProps<{ passenger: Passenger | undefined }>()
const store = useMessageStore();
const router = useRouter();
const updatePassenger = () => {
  store.updateMessage(`Updating Passenger ${props.passenger?.name}...`)
  setTimeout(() => {
    store.resetMessage()
    router.push({name: 'passenger-detail-view'})
  }, 5000)


}
</script>

<template>
  <div class="flex justify-center mt-4 text-center">
    <div>
      <h1 class="text-xl font-bold">Edit Passenger</h1>
      <button @click="updatePassenger" class="text-white bg-blue-400 p-2 rounded">Update Passenger</button>
    </div>
  </div>
</template>

<style scoped>

</style>