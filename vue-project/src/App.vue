<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <div class="grid-container">
      <div class="item1">Business One</div>
      <div class="item2">
        Business Partner<p></p>
        Item Master Data<p></p>
        Sales Order<p></p>
      </div>
      <div class="item3">
        <RouterView />
        <!--<RouterLink to="/about">About</RouterLink>-->
      </div>
    </div>
</template>

  
<style scoped>
.item1 { 
  grid-area: header; 
  background-color: black;
  height: 3rem;
  color: aliceblue;
  font-size: 2rem;  

}
.item2 { 
  grid-area: menu; 
  background-color: #0000A0;
  height: calc(100vh - 3rem);
  color: aliceblue;
  font-size: 1rem;    
}
.item3 { 
  background-color: white;
  grid-area: main;
}
.grid-container {
  display: grid;
  height: 100%;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main main';
}</style>