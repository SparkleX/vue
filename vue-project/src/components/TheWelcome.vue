<script setup>
import SuperInput from './control/SuperInput.vue'
import SuperLabel from './control/SuperLabel.vue'
import SuperButton from './control/SuperButton.vue'
import SuperCheck from './control/SuperCheck.vue'
import SuperRadio from './control/SuperRadio.vue'
</script>


<template>
  <SuperLabel v-model:value="a"></SuperLabel><br>
  <SuperInput v-model:value="a"></SuperInput><br>
  <SuperInput v-model:value="YesNo"></SuperInput><br>
  <SuperLabel ></SuperLabel><br>
  <SuperCheck v-model:value ="YesNo" valYes="T" valNo="F" label="Hello"></SuperCheck><br>
  <SuperCheck id="aaa" v-model:value ="YesNo" valYes="T" valNo="F" label="World"></SuperCheck><br>
  <!--<input type="checkbox" :checked="YesNo"/>-->
  <SuperButton :value="text" @click="onClickButton"/><br>
  <input type="radio" name="contact"><input type="radio" name="contact" checked><input type="radio" name="contact"><br>
  <SuperInput v-model:value="RadioValue"></SuperInput><br>
  <SuperRadio v-model:value="RadioValue" label="O1" valActive="A"></SuperRadio><br>
  <SuperRadio v-model:value="RadioValue" label="O2" valActive="B"></SuperRadio><br>
  <SuperRadio v-model:value="RadioValue" label="O3" valActive="C"></SuperRadio><br>
</template>

<script>
export default {
  data: function () {
    return { 
      a: "234",
      b: "aaa",
      text:"Button",
      YesNo: true,
      RadioValue: "B"
    }
  },
  methods: {
    onClickButton(event) {
      alert(1);
      
    },
  },  
}
</script>