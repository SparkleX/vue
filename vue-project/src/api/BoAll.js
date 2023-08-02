import Feign from './Feign';
class BoAll {
	findAll = 'get /api/{table}/data';
}
const oBoAll = new BoAll();
Feign.targetAll(oBoAll);
export default oBoAll;