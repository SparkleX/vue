import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import Label from './framework/control/Label.vue'
import SuperInput from './framework/control/SuperInput.vue'
import SuperButton from './framework/control/SuperButton.vue'
import SuperCheck from './framework/control/SuperCheck.vue'
import SuperRadio from './framework/control/SuperRadio.vue'
import SuperSelect from './framework/control/SuperSelect.vue'
import SuperLink from './framework/control/SuperLink.vue'
import SuperTable from './framework/control/SuperTable.vue'

import Tab from './framework/control/Tab.vue'
import TabContent from './framework/control/TabContent.vue'
import GridContainer from './framework/layout/GridContainer.vue'
import GridLayout from './framework/layout/GridLayout.vue'
import FormContainer from './framework/layout/FormContainer.vue'
import FormElement from './framework/layout/FormElement.vue'
import Detail from './framework/floorplan/Detail.vue'
import List from './framework/floorplan/List.vue'
import Dialog from './framework/dialog/Dialog.vue'
import MessageToast from './framework/dialog/MessageToast.vue'
import MessageBox from './framework/dialog/MessageBox.vue'

const app = createApp(App)
app.component('SuperInput', SuperInput);
app.component('SuperButton', SuperButton);
app.component('SuperCheck', SuperCheck);
app.component('SuperRadio', SuperRadio);
app.component('SuperSelect', SuperSelect);
app.component('SuperLink', SuperLink);
app.component('SuperTable', SuperTable);

app.component('Label', Label);
app.component('Tab', Tab);
app.component('TabContent', TabContent);
app.component('GridContainer', GridContainer);
app.component('GridLayout', GridLayout);
app.component('FormContainer', FormContainer);
app.component('FormElement', FormElement);
app.component('Detail', Detail);
app.component('List', List);
app.component('Dialog', Dialog);
app.component('MessageToast', MessageToast);
app.component('MessageBox', MessageBox);

app.use(router)

app.mount('#app')