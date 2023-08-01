export default function openChooseFromList(table) {
    alert(table);
    const component = () => import(`./${table}Cfl.vue`);
    alert(component);
    
}

