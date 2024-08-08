import {createRouter, createWebHistory, RouteLocationNormalizedGeneric} from 'vue-router'
import HomeView from "../views/HomeView.vue";
import NotFoundView from '../views/NotFoundView.vue';
import NetworkErrorView from "../views/NetworkErrorView.vue";
import DetailView from "../views/passenger/DetailView.vue";
import LayoutView from "../views/passenger/LayoutView.vue";
import AirlineView from '../views/passenger/AirlineView.vue';
import EditView from '../views/passenger/EditView.vue';
import * as nProgress from "nprogress";
import PassengerService from "../services/PassengerService.ts";
import {usePassengerStore} from "../store/passenger.ts";


const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'home',
        props: (route: RouteLocationNormalizedGeneric) => ({
            page: parseInt(route.query?.page?.toString() || "1"),
            per_page: parseInt(route.query?.per_page?.toString() || "10")
        }),
    },
    {
        path: "/:id",
        component: LayoutView,
        props: true,
        children: [
            {path: "details", name: "passenger-detail-view", component: DetailView, props: true},
            {path: "airline", name: "passenger-airline-view", component: AirlineView, props: true},
            {path: "edit", name: "passenger-edit-view", component: EditView, props: true}
        ],
        beforeEnter: (to: any) => {
            const id = to.params.id
            const passengerStore = usePassengerStore()
            PassengerService.getPassenger(id).then(res => {
                if (res.status === 204) {
                    return router.push({name: 'not-found', params: {resource: 'passenger'}})
                }
                passengerStore.setPassenger(res.data)
            }).catch(() => {
                router.push({name: 'network-error'})
            })
        },
    },
    {path: '/network-error', component: NetworkErrorView, name: 'network-error'},
    {path: '/:resource(.*)', component: NotFoundView, name: 'not-found', props: true},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})

router.beforeEach(() => {
    nProgress.start()
})

router.afterEach(() => {
    nProgress.done()
})


export default router