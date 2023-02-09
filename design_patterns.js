// Factory
function Pessoa(customProperties) {
	return {
		name: 'Pedro',
		lastName: 'Dias',
		...customProperties
	}
}

const p = Pessoa({lastName: 'Bola', age : 29});
console.log(p);

// Singleton
function Agent() {
	if(!Agent.instance) {
		Agent.instance = this;
	}

	return Agent.instance
}

const agente = Agent.call({ name: 'Killjoy' });
const agente2 = Agent.call({ name: 'Raze'});
console.log(agente);
console.log(agente2);

// Decorator
/*function readonly(target, nam, descriptor) {
	descriptor.writable = false;
	return descriptor;
}

class Job {
	@readonly
	title() {
		return 'CEO'
	}
}*/

// Observer
class Observable {
	constructor() {
		this.observables = [];
	}

	subscribe(fn) {
		this.observables.push(fn);
	}

	notify(data) {
		this.observables.forEach(fn => fn(data));
	}

	unsubscribe(fn) {
		this.observables = this.observables.filter(obs => obs !== fn);
	}
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');

// Module
class Person {
	constructor(name) {
		this.name = name;
	}
}

export default Person;
//// import Person from '[file_path]';