import {defineStore} from "pinia";
import type {Passenger, PassengerState} from "../types";

export const usePassengerStore = defineStore('passenger', {
    state: (): PassengerState => ({
        passenger: null
    }),
    actions: {
        setPassenger(passenger: Passenger): void {
            this.passenger = passenger
        }
    }
})