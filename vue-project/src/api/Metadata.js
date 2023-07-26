import Feign from './Feign';
class MetadataApi {
    listViewMetadata = 'get /public/rest/ListMeta.json';
}
const oMetadataApi = new MetadataApi();
Feign.targetAll(oMetadataApi);
export default oMetadataApi;