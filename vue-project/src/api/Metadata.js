import Feign from './Feign';
class MetadataApi {
	listViewMetadata = 'get /api/metadata/list/{table}';
	choose = 'get /api/metadata/choose/{table}';
}
const oMetadataApi = new MetadataApi();
Feign.targetAll(oMetadataApi);
export default oMetadataApi;