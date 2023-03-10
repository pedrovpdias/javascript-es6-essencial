//Orientação a Objetos
'use strict';

/*onst myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);
console.log(myText.constructor === String);

function Pessoa(name) {
	this.name = name;
}

const p = new Pessoa('Pedro');
console.log(p);

function Pessoa2(name) {
	this.name = name;

	return {
		name: 'Ana'
	}
}

const p2 = new Pessoa2('Pedro');
console.log(p2);

function Animal() {
	this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro instanceof Animal);
console.log(cachorro.__proto__ === Animal.prototype);
console.log(Animal.__proto__ === Function.prototype);*/

/*function Animal(qtdePatas) {
	this.qtdePatas = qtdePatas;
	this.movimentar = function(){};
}

function Cachorro(morde) {
	Animal.call(this, 4);

	this.morde = morde;
	this.latir = function() {
		console.log('Au! Au!');
	}
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);*/

/*function Animal() {}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {};

function Cachorro(morde) {
	this.qtdePatas = 4;
	this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
	console.log('Au! Au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pitbull);*/

//Classes
class Animal {
	constructor(){
		this.qtdePatas = 0;
	}

	movimentar() {}
}

class Cachorro extends Animal {
	constructor(morde) {
		super();
		this.qtdePatas = 4;
		this.morde = morde;
	}

	latir() {
		console.log('Au! Au!');
	}
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);



class Person {
	static walk() {
		console.log('Walking...');
	}
}

console.log(Person.walk());
console.log(Cachorro.latir());