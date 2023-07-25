<script setup>
import SuperInput from './control/SuperInput.vue'
import SuperLabel from './control/SuperLabel.vue'
import SuperButton from './control/SuperButton.vue'
import SuperCheck from './control/SuperCheck.vue'
</script>


<template>
  <SuperLabel v-model:value="a"></SuperLabel>
  <SuperInput v-model:value="a"></SuperInput>
  <SuperInput v-model:value="YesNo"></SuperInput>
  <SuperLabel ></SuperLabel>
  <SuperCheck v-model:value ="YesNo" valYes="T" valNo="F"></SuperCheck>
  <SuperCheck v-model:value ="YesNo" valYes="T" valNo="F"></SuperCheck>
  <!--<input type="checkbox" :checked="YesNo"/>-->
  <SuperButton :value="text" @click="onClickButton"/>
  <input v-model="a" />
</template>



<script>
export default {
  data: function () {
    return { 
      a: "234",
      b: "aaa",
      text:"Button",
      YesNo: true
    }
  },
  methods: {
    onClickButton(event) {
      alert(1);
      
    },
  },  
}
</script>