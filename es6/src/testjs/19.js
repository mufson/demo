
	class aa{

		constructor(){
			this.x = 55;
			this.y = 66;
		}
		pt(){
			console.log("pt");
		}
		pt2(){
			this.pt();
			this.pt3();
			console.log("pt2");
		}
		pt3(){
			console.log("pt3");
		}
		static pt4(){
			console.log("pt4");
		}
	}
	
	var st = new aa();
	var st2 = new aa();
	
 	 Object.getPrototypeOf(st).pfg = ()=>{console.log(this.className);}
//	st.pfg();
//	st2.pfg();
    
//  aa.pt4();
	
	var cst = class {
		pt(){
			
			console.log("ptt");
		}
	}
	var sz = new cst();
	
//	sz.pt();
  // 类不存在变量提升
  
	 let size = Symbol('size');
	 
	 class Collection{
	 	
	 	constructor(){
	 		this[size] = 0;
	 	}
	 	add(item){
	 		
	 		this[this[size]]= item;
	 		this[size]++;
	 	}
	 	static sizeof(ist){
	 		
	 		return ist[size];
	 	}
	 	
	 }
	
	let x = new Collection();
	var sk = Collection.sizeof(x);
	 
	var sy = Symbol();
//	console.log(sy);
	
	class Myclass{
		[Symbol.hasInstance](foo){
			console.log(foo);
			return foo instanceof Array;
		}
	}
	
//	[1,2,3] instanceof new Myclass()
	
	class Pons{
		 
		printName(name='there'){
			this.print(`Hello ${name}`);
		}
		
		print(text){
			console.log(text);
		}
	}
	
	const Pon = new Pons();
	Pon.printName('ask');
	
	class logs{
		constructor(){
			this.printName = (name='there')=>{
				this.pringt(`heill${name}`);
			}
		}
		pringt(t){
			console.log(t);
		}
	}
    
	const llg = new logs();
	let {printName} = llg;
	llg.printName('opf');
	printName();
