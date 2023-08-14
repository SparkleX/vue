<template>
	<Detail ref="detail" title="合作伙伴" :showFooter="!ui.viewMode">
		<component :is="chooseFromList" />
		<template #toolsbar>
			<SuperButton value="New" :visible="ui.viewMode" @press="onClickNew" type="emphasis"></SuperButton>
			<SuperButton value="Edit" :visible="ui.viewMode" @press="onClickEdit" type="emphasis"></SuperButton>
			<SuperButton value="Delete" :visible="ui.viewMode" @press="onClickDelete"></SuperButton>
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
								<SuperSelect v-model:value="data.CardType" :codes="codes.BPType" :editable="!ui.viewMode"/>
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
								<SuperInput v-model:value="data.Balance"></SuperInput>
							</FormElement>
							<FormElement label="Active">
								<SuperCheck v-model:value="data.Active" valYes="Y" valNo="N" />
							</FormElement>
						</FormContainer>
					</GridLayout>
					<!--<GridLayout>
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
								<SuperRadio v-model:value="RadioValue" label="O1" valActive="A" :editable="!ui.viewMode"></SuperRadio>
								<SuperRadio v-model:value="RadioValue" label="O2" valActive="B" :editable="!ui.viewMode"></SuperRadio>
								<SuperRadio v-model:value="RadioValue" label="O3" valActive="C" :editable="!ui.viewMode"></SuperRadio>
							</FormElement>
							<FormElement label="AAA">
								<SuperInput v-model:value="SelectValue"></SuperInput>
							</FormElement>
							<FormElement label="BBB">
								<SuperSelect v-model:value="SelectValue" :codes="codes.BPType" :editable="!ui.viewMode"></SuperSelect>
							</FormElement>
						</FormContainer>
					</GridLayout>-->
				</GridContainer>
			</TabContent>
			<TabContent :value="ui.tab" activeValue="2" title="Contacts">
				<GridContainer>
					<GridLayout>
						<FormContainer>
							<FormElement label="Contact Person">
								<SuperInput value="abc Rd." :editable="!ui.viewMode"></SuperInput>
							</FormElement>
						</FormContainer>
					</GridLayout>
				</GridContainer>
			</TabContent>
			<TabContent :value="ui.tab" activeValue="3" title="Address">
				<GridContainer>
					<GridLayout>
						<FormContainer>
							<FormElement label="Ship To">
								<SuperInput value="abc Rd." :editable="!ui.viewMode"></SuperInput>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Bill To">
								<SuperInput value="abc Rd." :editable="!ui.viewMode"></SuperInput>
							</FormElement>
						</FormContainer>
					</GridLayout>
				</GridContainer>
			</TabContent>
		</Tab>
	</Detail>
</template>
<script setup>
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
			}
		}
	},

	methods: {
		onClickButton(event) {
			alert(1);
		}
	},
}
</script>


