import { defineAsyncComponent } from 'vue'

export default function openChooseFromList(table) {
    const AsyncComp = defineAsyncComponent(() =>
    //import(`./${table}Cfl.vue`)
	import(`../framework/choose/ChooseFromList.vue`)
    )
    return AsyncComp;    
}

