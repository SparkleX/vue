

<template>
<List title="Business Partners" table="CARD">
</List>
</template>
<script setup>
import List from '../../components/floorplan/List.vue'
</script>
<script>
export default {
  data: function () {
    return { 
      a: "88888888",
      b: "aaa",
      text:"Button",
      YesNo: true,
      RadioValue: "B",
      SelectValue: "1",
      SelectValues : [
        {value:"1", desc:"A"},
        {value:"2", desc:"B"},
        {value:"3", desc:"C"},
        {value:"4", desc:"D"},
      ]
    }
  },
  methods: {
    onClickButton(event) {
      alert(1);
      
    },
  },  
}
</script>