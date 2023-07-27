import Feign from './Feign';
class MetadataApi {
	listViewMetadata = 'get /data/{table}ListMeta.json';
	listViewData = 'get /data/{table}ListData.json';
}
const oMetadataApi = new MetadataApi();
Feign.targetAll(oMetadataApi);
export default oMetadataApi;