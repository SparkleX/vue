<script setup>
import SuperInput from './control/SuperInput.vue'
import SuperLabel from './control/SuperLabel.vue'
import SuperButton from './control/SuperButton.vue'
import SuperCheck from './control/SuperCheck.vue'
import SuperRadio from './control/SuperRadio.vue'
import SuperSelect from './control/SuperSelect.vue'
import Tab from './control/Tab.vue'
import Detail from './floorplan/Detail.vue'
</script>


<template>
  <Detail>
    <Tab></Tab>
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
    <SuperInput v-model:value="SelectValue"></SuperInput><br>
    <SuperSelect v-model:value="SelectValue" :codes="SelectValues"></SuperSelect><br>
  </Detail>
</template>
<script>
export default {
  data: function () {
    return { 
      a: "234",
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