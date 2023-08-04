<template>
	<Detail title="Item Master Data" :showFooter="!ui.viewMode" ref="detail">
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
							<FormElement label="Item Code">
								<SuperInput v-model:value="data.ItemCode" :editable="!ui.viewMode"/>
							</FormElement>
							<FormElement label="Item Name">
								<SuperInput v-model:value="data.ItemName" :editable="!ui.viewMode"/>
							</FormElement>
							<FormElement label="Active">
								<SuperCheck v-model:value="data.Active"/>
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
			table: "ITEM",
			ui: {
				tab: "1",
				addMode: false,
				viewMode: true,
				updateMode: false
			},
			codes: {

			},
			data: {

			}
		}
	},

	methods: {

	},
}
</script>


