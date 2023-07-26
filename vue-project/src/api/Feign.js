
import jQuery from "jquery";

class Feign {
	targetAll = function (theClass) {
		for (const method in theClass) {
			const url = theClass[method];
			const proxy = this.target(url);
			theClass[method] = proxy;
		}
	};
	target = function (apiDesc) {
		return this.ajax.bind(apiDesc);
	};

	ajax = async function (queryOrBody, urlParam) {
		const urlArray = this.split(" ");
		const param = {};
		param.method = urlArray[0].toLowerCase();

		//param.url = helper.formatUrl(urlArray[1], urlParam);
		param.url = urlArray[1];


		param.contentType = "application/json";
		param.dataType = 'json';
		param.processData = true;
		param.data = queryOrBody;
		if (queryOrBody && queryOrBody.headers) {
			param.headers = queryOrBody.headers;
		}
		if (param.method != "get") {
			param.data = JSON.stringify(queryOrBody);
		}


		try {
			const response = await jQuery.ajax(param);

			return response;
		} catch (e) {
		}
	};

};
const oFeign = new Feign();
export default oFeign;

