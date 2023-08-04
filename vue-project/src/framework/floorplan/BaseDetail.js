import oBoAll from '../../api/BoAll'

export default {
	beforeMount() {
		if (this.$route.params.id == 'new') {
			this.ui.addMode = true;
			this.ui.updateMode = false;
			this.ui.viewMode = false;
			this.onClickNew();
			return;
		}
		this.getByKey();
	},
	errorCaptured: function (err) {
		this.$refs.detail.$refs.message.show(err.message);

		return false;
	},
	methods: {
		messagaToast(message) {
			this.$refs.detail.$refs.toast.show(message);
		},
		messageBox(message) {
			this.$refs.detail.$refs.message.show(message);
		},
		onClickEdit(event) {
			this.ui.viewMode = false;
			this.ui.updateMode = true;
		},
		async getByKey() {
			const data = await oBoAll.findById(null, { table: this.table, id: this.$route.params.id });
			this.data = data;
		},

		onClickCancel(evt) {
			this.$router.go(-1);
		},
		onClickNew(evt) {
			this.ui.viewMode = false;
			this.ui.addMode = true;
			this.ui.updateMode = false;
			for (let v in this.data) {
				this.data[v] = null;
			}
		},
		async onClickDelete(evt) {
			await oBoAll.delete(null, { table: this.table, id: this.data.NodeId });
			this.messagaToast("Operation successfully");
			this.ui.viewMode = false;
			this.$router.go(-1);
		},
		async onClickSave(evt) {
			if (this.ui.addMode) {
				await this.onCreate(evt);
			} else {
				await this.onUpdate(evt);
			}
		},
		async onCreate(evt) {
			const id = await oBoAll.create(this.data, { table: this.table });
			this.messagaToast("Operation successfully");
			this.ui.viewMode = true;
			this.ui.addMode = false;
			this.$router.push({ path: `/${this.table}/Detail/${id}` });
		},
		async onUpdate(evt) {
			await oBoAll.update(this.data, { table: this.table, id: this.data.NodeId });
			this.messagaToast("Operation successfully");
			this.ui.viewMode = true;
			this.ui.updateMode = false;

		},
	}
}