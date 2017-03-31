var pubsub = {};

	(function(q){
		var topics = {},
		subUid = -1;
		
		//发布方法
		q.publish = function (topic,args) {
			if(!topic[topic]){
				return false;
			}
			
			setTimeout(function () {
				
				var subscribers = topics[topic],
				len = subscribers?subscribers.length:0;
				
				while (len--){
					subscribers[len].func(topic,args);
				}
				
			},0);
		};
		
		//订阅方法
		q.subscribe = function (topic,func) {
			if (!topics[topic]) {
				topics[topic] = [];
			}
		}; 
	});

 