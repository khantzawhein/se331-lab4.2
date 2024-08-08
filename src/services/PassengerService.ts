import * as axios from "axios";

const axiosInstance = axios.default.create({
    baseURL: "https://api.instantwebtools.net/v1",
    headers: {
        "Content-Type": "application/json",
    },
});


export default {
    getPassengers(perPage: number, page: number) {
        return axiosInstance.get(`/passenger?page=${page}&size=${perPage}`);
    },

    getPassenger(id: string) {
        return axiosInstance.get(`/passenger/${id}`);
    }
}