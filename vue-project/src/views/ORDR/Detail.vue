<template>
	<Detail title="Sales Order" :showFooter="!ui.viewMode">
		<component :is="chooseFromList" />
		<template #toolsbar>
			<Button value="New" :visible="ui.viewMode" @onClick="onClickNew" type="emphasis"></Button>
			<Button value="Edit" :visible="ui.viewMode" @onClick="onClickEdit" type="emphasis"></Button>
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
							<FormElement label="Business Partner">
								<SuperLink v-model:value="data.CardId" :editable="!ui.viewMode" linkTo="CARD"></SuperLink>
							</FormElement>
							<FormElement label="Items">
								<SuperLink v-model:value="data.CardId" :editable="!ui.viewMode" linkTo="ITEM"></SuperLink>
							</FormElement>
						</FormContainer>
					</GridLayout>
				</GridContainer>
				<SuperTable v-model:value="data.DOC1" :columnHeader="['Node Id','#','Item','Qty','Price','Total']" :columns="['NodeId','LineNum','ItemId','Qty','Price','LineTotal']">
					<template #NodeId="{row}">
						<SuperInput v-model:value="row.NodeId"></SuperInput>
					</template>
					<template #LineNum="props" >
						<SuperInput v-model:value="props.row.LineNum"></SuperInput>
					</template>
					<template #ItemId="{row}" >
						<SuperLink v-model:value="row.ItemId" linkTo="ITEM"/>
					</template>		
					<template #Qty="{row}" >
						<SuperInput v-model:value="row.Qty"></SuperInput>
					</template>	
					<template #Price="{row}" >
						<SuperInput v-model:value="row.Price"></SuperInput>
					</template>	
					<template #LineTotal="{row}" >
						<SuperInput v-model:value="row.LineTotal"></SuperInput>
					</template>																			
				</SuperTable>
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
import SuperLink from '../../framework/control/SuperLink.vue'
import SuperInput from '../../framework/control/SuperInput.vue'
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
import SuperTable from '../../framework/control/SuperTable.vue'
</script>
<script>
export default {
	extends: BaseDetail,
	data: function () {
		return {
			chooseFromList: null,
			table: "ORDR",
			ui: {
				tab: "1",
				addMode: false,
				viewMode: true,
				updateMode: false
			},
			codes: {
			},
			data: {

			},			
		}
	},

	methods: {
		onClickChooseBP(event) {
			this.chooseFromList = markRaw(openChooseFromList('CARD1'));
		},
		onClickChooseItem(event) {
			this.chooseFromList = markRaw(openChooseFromList('ITEM'));
		}
	},
}
</script>


