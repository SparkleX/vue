import Feign from './Feign';
class BoAll {
	findAll = 	'get /api/{table}/data';
	findById = 	'get /api/{table}/data/{id}';
	create = 	'post /api/{table}/data';
	update = 	'put /api/{table}/data/{id}';
	delete = 	'delete /api/{table}/data/{id}';
}
const oBoAll = new BoAll();
Feign.targetAll(oBoAll);
export default oBoAll;