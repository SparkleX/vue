import { defineAsyncComponent } from 'vue'

export default function openChooseFromList(table) {
    const AsyncComp = defineAsyncComponent(() =>
    //import(`./${table}Cfl.vue`)
	import(`./ChooseFromList.vue`)
    )
    return AsyncComp;    
}

