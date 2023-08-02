import Feign from './Feign';
class MetadataApi {
	listViewMetadata = 'get /api/metadata/list/{table}';
}
const oMetadataApi = new MetadataApi();
Feign.targetAll(oMetadataApi);
export default oMetadataApi;