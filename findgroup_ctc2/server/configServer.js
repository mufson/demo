
var tagClass = [
	 {name:'脑洞',value:'c9665e1fe709d94c642c8e0d2496f6b2',isSelect:false},
     {name:'娱乐',value:'9acf9c6f117a4c2d02de30294ec29da9',isSelect:false},
     {name:'八卦',value:'4c86df2e996c06ba7b1620ae6c874e9e',isSelect:false},
     {name:'次元',value:'d2810bafbc9315a25afecdea0e6c9e77',isSelect:false},
     {name:'思想',value:'eacb6d48047c11da76074e2ccbe28948',isSelect:false},
     {name:'时政',value:'6a3cd7e0bbbf54a8b78d1fc242da9676',isSelect:false},
     {name:'技术',value:'a95dd3e179418be1ecd2a719a22db70e',isSelect:false},
     {name:'设计',value:'b08890a6ef3b65218573ed90770b08fd',isSelect:false},
     {name:'读书',value:'a25661f0fb2a8205e2ed2a41411a31b4',isSelect:false},
     {name:'同行',value:'7aaf4e65f2f0d67b954200a726ba9098',isSelect:false},
     {name:'职位',value:'b652de80d6a54f83ce3cb04aaddc0c7e',isSelect:false},
     {name:'游戏',value:'ba08216f13dd1742157412386eee1225',isSelect:false},
     {name:'单身',value:'489f60ccb08fc3f420fb36fc8a824ef4',isSelect:false},
     {name:'同性',value:'3722df394247e76c181f680cfcb995cc',isSelect:false},
     {name:'老乡',value:'e6b3372a588a9fd6139b09538e7f93fe',isSelect:false},
     {name:'校友',value:'9e199575bbffcf9abaa605f0bc5396c7',isSelect:false},
     {name:'减肥',value:'51192f0f0b385a6f6cf50873453aac20',isSelect:false},
     {name:'聚会',value:'1ff96246c4fe23aa90326fa8514597a9',isSelect:false},
     {name:'活动',value:'36c6f572a02b70284bee20c40b5ab640',isSelect:false}
 ]
var checkConfig = {
	"groupName":{
		required:"请输入群名",
		minlength:2,
		minError:"群名请至少输入2位字符",
		maxlength:16,
		maxError:"群名最多为16位字符",
	},
	"introduce":{
		required:"请输入群介绍",
		minlength:5,
		minError:"群介绍请至少输入5位字符",
		maxlength:60,
		maxError:"群介绍最多为60位字符",
	},
	"groupLabel":{
		required:"请至少选择一个群标签",
	}
	
}
var category_list = [
	{
		id:1,
		key:"",
		name:"全部"
	},
	{
		id:2,
		key:"dde62c5633eb0b4242c588bcfa412b53",
		name:"交友"
	},
	{
		id:3,
		key:"36c6f572a02b70284bee20c40b5ab640",
		name:"活动"
	},
	{
		id:4,
		key:"6adafe274922df64e5cf3fd59fa61135",
		name:"行业"
	},
	{
		id:5,
		key:"4ef520d6cd20ba4a727af08e17e4939e",
		name:"学习"
	},
	{
		id:6,
		key:"b00a65e94a223b1cc173ea1fbbfc0e7a",
		name:"话题"
	},
	];
	wx.setStorageSync('category_list', category_list);
function getTagClass() {
	return tagClass;
}
function getCheckConfig() {
	return checkConfig;
}


module.exports = {
	getCheckConfig: getCheckConfig,
	getTagClass: getTagClass
}
