<script setup>
import Input from '../../framework/control/Input.vue'
import Label from '../../framework/control/Label.vue'
import Button from '../../framework/control/Button.vue'
import Check from '../../framework/control/Check.vue'
import Radio from '../../framework/control/Radio.vue'
import Select from '../../framework/control/Select.vue'
import Tab from '../../framework/control/Tab.vue'
import TabContent from '../../framework/control/TabContent.vue'
import Detail from '../../framework/floorplan/Detail.vue'
</script>


<template>
	<Detail title="Business Partner">
		<Tab v-model:value="ui.tab">
			<TabContent id="General" :value="ui.tab" activeValue="1" title="General">
				<Label v-model:value="a"></Label><br>
				<Input v-model:value="a"></Input><br>
				<Input v-model:value="YesNo"></Input><br>
				<Label></Label><br>
				<Check v-model:value="YesNo" valYes="T" valNo="F" label="Hello"></Check><br>
				<Check id="aaa" v-model:value="YesNo" valYes="T" valNo="F" label="World"></Check><br>
				<!--<input type="checkbox" :checked="YesNo"/>-->
				<Button :value="text" @click="onClickButton" /><br>
				<input type="radio" name="contact"><input type="radio" name="contact" checked><input type="radio"
					name="contact"><br>
				<Input v-model:value="RadioValue"></Input><br>
				<Radio v-model:value="RadioValue" label="O1" valActive="A"></Radio><br>
				<Radio v-model:value="RadioValue" label="O2" valActive="B"></Radio><br>
				<Radio v-model:value="RadioValue" label="O3" valActive="C"></Radio><br>
				<Input v-model:value="SelectValue"></Input><br>
				<Select v-model:value="SelectValue" :codes="SelectValues"></Select><br>
			</TabContent>
			<TabContent id="Contacts" :value="ui.tab" activeValue="2" title="Contacts">
				<h3>Paris</h3>
				<p>Paris is the capital of France.</p>
			</TabContent>
			<TabContent id="Address" :value="ui.tab" activeValue="3" title="Address">
				<h3>Tokyo</h3>
				<p>Tokyo is the capital of Japan.</p>
			</TabContent>
		</Tab>
	</Detail>
</template>
<script>
export default {
	data: function () {
		return {
			ui: {
				tab: 1
			},
			a: "88888888",
			b: "aaa",
			text: "Button",
			YesNo: true,
			RadioValue: "B",
			SelectValue: "1",
			SelectValues: [
				{ value: "1", desc: "A" },
				{ value: "2", desc: "B" },
				{ value: "3", desc: "C" },
				{ value: "4", desc: "D" },
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