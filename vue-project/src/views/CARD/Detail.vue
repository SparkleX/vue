<template>
	<Detail title="Business Partner" :showFooter="ui.editable">
		<template #toolsbar>
			<Button value="New" :visible="!ui.editable" @onClick="onClickEdit" type="emphasis"></Button>
			<Button value="Edit" :visible="!ui.editable" @onClick="onClickEdit" type="emphasis"></Button>
			<Button value="Duplicate" :visible="!ui.editable" @onClick="onClickEdit"></Button>
			<Button value="Delete" :visible="!ui.editable" @onClick="onClickDelete"></Button>

		</template>
		<template #footer>
			<Button value="Save" @onClick="onClickCancel" type="emphasis"></Button>
			<Button value="Cancel" @onClick="onClickCancel"></Button>
		</template>
		<Tab v-model:value="ui.tab">
			<TabContent id="General" :value="ui.tab" activeValue="1" title="General">
				<GridContainer>
					<GridLayout>
						<FormContainer>
							<FormElement label="BP Type">
								<Select v-model:value="data.CardType" :codes="codes.BPType" :editable="ui.editable"></Select><br>
							</FormElement>
							<FormElement label="BP Code">
								<Input v-model:value="data.CardCode" :editable="ui.editable"></Input>
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
								<Check v-model:value="YesNo" valYes="T" valNo="F" label="Hello" :editable="ui.editable"></Check>
							</FormElement>
							<FormElement label="">
								<Check id="aaa" v-model:value="YesNo" valYes="T" valNo="F" label="World" :editable="ui.editable"></Check>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Balance">
								<Button :value="text" @click="onClickButton" />
							</FormElement>
							<FormElement label="">
								<Input v-model:value="RadioValue"></Input>
							</FormElement>
							<FormElement label="">
								<Radio v-model:value="RadioValue" label="O1" valActive="A"></Radio>
								<Radio v-model:value="RadioValue" label="O2" valActive="B"></Radio>
								<Radio v-model:value="RadioValue" label="O3" valActive="C"></Radio>
							</FormElement>
							<FormElement label="AAA">
								<Input v-model:value="SelectValue"></Input>
							</FormElement>
							<FormElement label="BBB">
								<Select v-model:value="SelectValue" :codes="SelectValues"></Select><br>
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
</script>
<script>
export default {
	data: function () {
		return {
			ui: {
				tab: 1,
				editable: false,
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
		onClickEdit(event) {
			//alert(this.ui.editable);
			this.ui.editable = true;
		},
		onClickCancel(evt) {
			this.ui.editable = false;
		},
		onClickDelete(evt) {
			this.ui.editable = false;
		},
		onClickButton(event) {
			alert(1);
		},
	},
}
</script>


