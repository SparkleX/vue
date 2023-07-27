import Feign from './Feign';
class MetadataApi {
	listViewMetadata = 'get /data/ListMeta.json';
	listViewData = 'get /data/CARDListData.json';
}
const oMetadataApi = new MetadataApi();
Feign.targetAll(oMetadataApi);
export default oMetadataApi;