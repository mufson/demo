var http = "https://api.ratdata.com/api/v1/";
var addRess = {

	"heartbeat": "user/heartbeat",
	"authentication": "user/authentication",
	"update_location": "upload/location",
	"get_category":"group/get_category",
	"edit_group":"group/edit_group",
	"del_gropu":"/group/del_group",
	"edit_group_do":"/group/edit_group_do",
	"get_group_info": "group/get_group_info",
	"get_group_recommend_list": "group/get_group_recommend_list",
	'upload_qrcode_image':"upload/upload_qrcode_image",
	"my_group":"group/my_group",
	"add_group":"group/add_group"
}

function getUrl(id) {
	return http + addRess[id];
}

module.exports = {
	getUrl: getUrl
}
