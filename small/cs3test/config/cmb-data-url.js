var http = "https://find2.data-source.cn/";

var addRess = {


	"public": "public",
	"public": "public"

}

function getUrl(id) {
	return http + addRess[id];
}

module.exports = {
	getUrl: getUrl
}
