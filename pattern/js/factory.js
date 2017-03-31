var Car = (function() {

	var Car = function(model, year, miles) {

		this.model = model;
		this.year = year;
		this.miles = miles;

	};

	return function(model, year, miles) {
		return new Car(model, year, miles);
	};

}());

function tod(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
}

var tom = new Car("tom", 2009, 20000);
var dudu = new Car("dudu", 2010, 50000);
var tod1 = new tod("tom", 2009, 20000);
var tod2 = new tod("dudu", 2010, 50000);

/*	console.log(tom);
	console.log(dudu);
	console.log(tod1);
	console.log(tod2);*/

var productManager = {};

productManager.creaProductA = function() {
	console.log("ProductA");
};
productManager.creaProductB = function() {
	console.log("ProductB");
};
productManager.factory = function(type) {

		return new productManager[type];
	}
	// productManager.factory('creaProductB');

var page = page || {};

page.dom = page.dom || {};

page.dom.text = function() {
	this.insert = function(where) {
		console.log("我的世界");
		/*		var txt = document.createTextNode(this.url);
				where.appendChild(txt);*/
	};
};

page.dom.Link = function() {
	this.insert = function(where) {
		var link = document.createElement('a');
		link.href = this.url;
		link.appendChild(document.createTextNode(this.url));
		where.appendChild(link);

	}
}
page.dom.factory = function(type) {
	return new page.dom[type];
}
var o = page.dom.factory('text');
//o.insert();

