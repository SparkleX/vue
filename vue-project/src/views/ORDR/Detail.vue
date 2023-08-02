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
							<FormElement label="Business Parter">
								<SuperLink v-model:value="data.CardId" :editable="!ui.viewMode"></SuperLink>
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
import SuperLink from '../../framework/control/SuperLink.vue'
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


