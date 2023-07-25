<template>
    <div class="tab">
      <!--  <button class="tablinks" @click="openCity(event, 'London')">London</button>
        <button class="tablinks" @click="openCity(event, 'Paris')">Paris</button>
        <button class="tablinks" @click="openCity(event, 'Tokyo')">Tokyo</button>-->
        <button v-for="item in this.$slots.content()" class="tablinks" @click="openTab($event, item.props.id)">
            {{item.props.title}}
        </button>
    </div>
    <slot name="content"></slot>

</template>
 
<style scoped>
/* Style the tab */
.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
    background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s;
}

/* Fade in tabs */
@-webkit-keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
<script setup>
import { ref, h} from 'vue'
</script>
<script>
export default {
    props: ['value'],
   /* render(createElement) {
        //this.$slots.content()[0].props.id

        return 'Hello world';
  },*/
    methods: {
        openTab(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            //evt.currentTarget.className += " active";
        }
    }
}
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs_fade
//https://snipcart.com/blog/vue-render-functions#Definition
</script>
