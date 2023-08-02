<template>
	<Detail title="Business Partner" :showFooter="!ui.viewMode">
		<component :is="chooseFromList" />
		<template #toolsbar>
			<Button value="New" :visible="ui.viewMode" @onClick="onClickNew" type="emphasis"></Button>
			<Button value="Edit" :visible="ui.viewMode" @onClick="onClickEdit" type="emphasis"></Button>
			<Button value="Duplicate" :visible="ui.viewMode" @onClick="onClickEdit"></Button>
			<Button value="Delete" :visible="ui.viewMode" @onClick="onClickDelete"></Button>
			<Button value="Open BP" :visible="ui.viewMode" @onClick="onClickChooseBP"></Button>
			<Button value="Open Item" :visible="ui.viewMode" @onClick="onClickChooseItem"></Button>
		</template>

		<template #footer>
			<Button value="Save" @onClick="onClickSave" type="emphasis"></Button>
			<Button value="Cancel" @onClick="onClickCancel"></Button>
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
								<Input v-model:value="data.CardCode" :editable="!ui.viewMode"></Input>
							</FormElement>
							<FormElement label="BP Name">
								<Input v-model:value="data.CardName"></Input>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Balance">
								<Input v-model:value="YesNo"></Input>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Balance">
								<Check v-model:value="YesNo" valYes="T" valNo="F" label="Hello" :editable="!ui.viewMode"></Check>
							</FormElement>
							<FormElement label="">
								<Check id="aaa" v-model:value="YesNo" valYes="T" valNo="F" label="World" :editable="!ui.viewMode"></Check>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Balance">
								<Button :value="text" @onClick="onClickButton"></Button>
							</FormElement>
							<FormElement label="">
								<Input v-model:value="RadioValue"></Input>
							</FormElement>
							<FormElement label="">
								<Radio v-model:value="RadioValue" label="O1" valActive="A" :editable="!ui.viewMode"></Radio>
								<Radio v-model:value="RadioValue" label="O2" valActive="B" :editable="!ui.viewMode"></Radio>
								<Radio v-model:value="RadioValue" label="O3" valActive="C" :editable="!ui.viewMode"></Radio>
							</FormElement>
							<FormElement label="AAA">
								<Input v-model:value="SelectValue"></Input>
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
import Input from '../../framework/control/Input.vue'
import Label from '../../framework/control/Label.vue'
import Button from '../../framework/control/Button.vue'
import Check from '../../framework/control/Check.vue'
import Radio from '../../framework/control/Radio.vue'
import Select from '../../framework/control/Select.vue'
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


