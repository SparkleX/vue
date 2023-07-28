import { createRouter, createWebHistory } from 'vue-router'
import ORDRList from '../views/ORDR/List.vue'
import ORDRDetail from '../views/ORDR/Detail.vue'
import CARDList from '../views/CARD/List.vue'
import CARDDetail from '../views/CARD/Detail.vue'
import ITEMList from '../views/ITEM/List.vue'
import ITEMDetail from '../views/ITEM/Detail.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: CARDList
		},
		{
			path: '/ORDR/List',
			name: 'ORDRList',
			component: ORDRList
		},
		{
			path: '/ORDR/Detail',
			name: 'ORDRDetail',
			component: ORDRDetail
		},
		{
			path: '/CARD/List',
			name: 'CARDList',
			component: CARDList
		},
		{
			path: '/CARD/Detail/:id',
			name: 'CARDDetail',
			component: CARDDetail
		},
		{
			path: '/ITEM/List',
			name: 'ITEMList',
			component: ITEMList
		}, {
			path: '/ITEM/Detail',
			name: 'ITEMDetail',
			component: ITEMDetail
		}
	]
})

export default router
