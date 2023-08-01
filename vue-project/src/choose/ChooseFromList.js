import { defineAsyncComponent } from 'vue'

export default function openChooseFromList(table) {
    const AsyncComp = defineAsyncComponent(() =>
    import(`./${table}Cfl.vue`)
    )
    return AsyncComp;
    //alert(table);
    //const component = () => import(`./${table}Cfl.vue`);
    //alert(component);
    
}

