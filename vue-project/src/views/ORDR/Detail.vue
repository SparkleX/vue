<template>
	<Detail title="Sales Order" :showFooter="!ui.viewMode" ref="detail">
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
							<FormElement label="Business Partner">
								<SuperLink v-model:value="data.CardId" :editable="!ui.viewMode" linkTo="CARD"></SuperLink>
							</FormElement>
						</FormContainer>
					</GridLayout>
					<GridLayout>
						<FormContainer>
							<FormElement label="Document Number">
								<SuperInput v-model:value="data.DocNum" :editable="!ui.viewMode"/>
							</FormElement>
						</FormContainer>
					</GridLayout>					
				</GridContainer>
				<SuperTable label="Details" v-model:value="data.DOC1" :columnHeader="['Node Id','#','Item','Qty','Price','Total']" :columns="['NodeId','LineNum','ItemId','Qty','Price','LineTotal']">
					<template #toolsbar>
						<SuperButton icon="add" @press="onPressAddLine"/>
						<SuperButton icon="delete" @press="onPressDeleteLine"/>
					</template>
					<template #NodeId="{row}">
						<SuperInput v-model:value="row.NodeId" :editable="false"></SuperInput>
					</template>
					<template #LineNum="props" >
						<SuperInput v-model:value="props.row.LineNum" :editable="false"></SuperInput>
					</template>
					<template #ItemId="{row}" >
						<SuperLink v-model:value="row.ItemId" :editable="!ui.viewMode" linkTo="ITEM"/>
					</template>		
					<template #Qty="{row}" >
						<SuperInput v-model:value="row.Qty" :editable="!ui.viewMode"></SuperInput>
					</template>	
					<template #Price="{row}" >
						<SuperInput v-model:value="row.Price" :editable="!ui.viewMode"></SuperInput>
					</template>	
					<template #LineTotal="{row}" >
						<SuperInput v-model:value="row.LineTotal" :editable="!ui.viewMode"></SuperInput>
					</template>																			
				</SuperTable>
			</TabContent>
			<TabContent :value="ui.tab" activeValue="2" title="Logitics">
				<h3>Paris</h3>
				<p>Paris is the capital of France.</p>
			</TabContent>
			<TabContent :value="ui.tab" activeValue="3" title="Accounting">
				<h3>Tokyo</h3>
				<p>Tokyo is the capital of Japan.</p>
			</TabContent>
		</Tab>
	</Detail>
</template>
<script setup>
import { markRaw,defineAsyncComponent } from 'vue'
import BaseDetail from '../../framework/floorplan/BaseDetail'
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
		onPressAddLine(evt) {
			if(!this.data.DOC1) {
				this.data.DOC1=[];
			}
			this.data.DOC1.push({});
		},
		onPressDeleteLine(evt) {

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


