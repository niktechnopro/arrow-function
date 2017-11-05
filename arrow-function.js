var square = (x) => x*x; // short way for rocket function

console.log(square(9))

var test = {
	name: "Nikolas",

	sayHi : function() {
		console.log(`hello ${this.name}`);
	},

	sayHiTwoAlt () {
		console.log(`Alt way for function, hello ${this.name}`);
	},

	sayHiThree : function() {
		console.log(`regular anonymous function, hello ${this.name}`);
	}
}

// test.sayHiF;
test.sayHi();
test.sayHiTwoAlt();
test.sayHiThree();