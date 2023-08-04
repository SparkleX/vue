<template>
	<Detail title="Business Partner" :showFooter="!ui.viewMode">
		<component :is="chooseFromList" />
		<template #toolsbar>
			<SuperButton value="New" :visible="ui.viewMode" @press="onClickNew" type="emphasis"></SuperButton>
			<SuperButton value="Edit" :visible="ui.viewMode" @press="onClickEdit" type="emphasis"></SuperButton>
			<SuperButton value="Duplicate" :visible="ui.viewMode" @press="onClickEdit"></SuperButton>
			<SuperButton value="Delete" :visible="ui.viewMode" @press="onClickDelete"></SuperButton>
			<SuperButton value="Open BP" :visible="ui.viewMode" @press="onClickChooseBP"></SuperButton>
			<SuperButton value="Open Item" :visible="ui.viewMode" @press="onClickChooseItem"></SuperButton>
		</template>

		<template #footer>
			<SuperButton value="Save" @press="onClickSave" type="emphasis"></SuperButton>
			<SuperButton value="Cancel" @press="onClickCancel"></SuperButton>
		</template>
		<Tab v-model:value="ui.tab">
			<TabContent id="General" :value="ui.tab" activeValue="1" title="General">
				<GridContainer>
					<GridLayout>
						<FormContainer>
							<FormElement label="BP Type">
								<Select v-model:value="data.CardType" :codes="codes.BPType" :editable="!ui.viewMode"></Select><br>
							</FormElement>
							<FormElement label="BP Code">
								<SuperInput v-model:value="data.CardCode" :editable="!ui.viewMode"></SuperInput>
							</FormElement>
							<FormElement label="BP Name">
								<SuperInput v-model:value="data.CardName"></SuperInput>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Balance">
								<SuperInput v-model:value="YesNo"></SuperInput>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Balance">
								<SuperCheck v-model:value="YesNo" valYes="T" valNo="F" label="Hello" :editable="!ui.viewMode"></SuperCheck>
							</FormElement>
							<FormElement label="">
								<SuperCheck id="aaa" v-model:value="YesNo" valYes="T" valNo="F" label="World" :editable="!ui.viewMode"></SuperCheck>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Balance">
								<SuperButton :value="text" @press="onClickButton"></SuperButton>
							</FormElement>
							<FormElement label="">
								<SuperInput v-model:value="RadioValue"></SuperInput>
							</FormElement>
							<FormElement label="">
								<Radio v-model:value="RadioValue" label="O1" valActive="A" :editable="!ui.viewMode"></Radio>
								<Radio v-model:value="RadioValue" label="O2" valActive="B" :editable="!ui.viewMode"></Radio>
								<Radio v-model:value="RadioValue" label="O3" valActive="C" :editable="!ui.viewMode"></Radio>
							</FormElement>
							<FormElement label="AAA">
								<SuperInput v-model:value="SelectValue"></SuperInput>
							</FormElement>
							<FormElement label="BBB">
								<Select v-model:value="SelectValue" :codes="codes.BPType" :editable="!ui.viewMode"></Select>
							</FormElement>
						</FormContainer>
					</GridLayout>
				</GridContainer>
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
<script setup>
import SuperInput from '../../framework/control/SuperInput.vue'
import Label from '../../framework/control/Label.vue'
import Button from '../../framework/control/SuperButton.vue'
import SuperCheck from '../../framework/control/SuperCheck.vue'
import SuperRadio from '../../framework/control/SuperRadio.vue'
import SuperSelect from '../../framework/control/SuperSelect.vue'
import Tab from '../../framework/control/Tab.vue'
import TabContent from '../../framework/control/TabContent.vue'
import Detail from '../../framework/floorplan/Detail.vue'
import GridContainer from '../../framework/layout/GridContainer.vue'
import GridLayout from '../../framework/layout/GridLayout.vue'
import FormContainer from '../../framework/layout/FormContainer.vue'
import FormElement from '../../framework/layout/FormElement.vue'
import openChooseFromList from '../../choose/ChooseFromList'
import { markRaw,defineAsyncComponent } from 'vue'
import BaseDetail from '../../framework/floorplan/BaseDetail'
</script>
<script>
export default {
	extends: BaseDetail,
	data: function () {
		return {
			chooseFromList: null,
			table: "CARD",
			ui: {
				tab: "1",
				addMode: false,
				viewMode: true,
				updateMode: false
			},
			codes: {
				BPType: [
					{ value: "C", desc: "Customer" },
					{ value: "S", desc: "Supplier" },
					{ value: "L", desc: "Lead" }
				]
			},
			data: {
				CardType: "S",
				CardCode: "C001",
				CardName: "Microsoft"
			},
			a: "88888888",
			b: "aaa",
			text: "Button",
			YesNo: true,
			RadioValue: "B",
			SelectValue: "1",
			
		}
	},

	methods: {

		onClickButton(event) {
			alert(1);
		},
		onClickChooseBP(event) {
			this.chooseFromList = markRaw(openChooseFromList('CARD1'));
		},
		onClickChooseItem(event) {
			this.chooseFromList = markRaw(openChooseFromList('ITEM'));
		}
	},
}
</script>


