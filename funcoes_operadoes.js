/*function fn() {
	return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
	return 'Code here';
}

//Funções são objetos
fn.prop = 'Posso criar propiedades dentro da função';

console.log(fn());
console.log(fn.prop);

const gender = {
	MAN: Symbol('M'),
	WOMAN: Symbol('W')
};

const people = [
	{
		name: 'Guilherme',
		age: 26,
		gender: gender.MAN
	},
	{
		name: 'Pedro',
		age: 28,
		gender: gender.MAN
	},
	{
		name: 'Jennifer',
		age: 19,
		gender: gender.WOMAN
	}
];

console.log('Itens: ', people.length);
console.log('A variável é um array: ', Array.isArray(people));

people.forEach((person, index, arr) => {
	console.log(`${index} - ${person.name}`, arr);
});

//Filtrar Array
const men = people.filter(person => person.gender === gender.MAN);
console.log('Lista de homens: ', men);

const peopleWithCourse = people.map(person => {
	person.course = 'JavaScript ES6 Essentials';
	return person;
});
console.log('\n Pessoas com a adição do curso: ', peopleWithCourse);*/

//Transformar um array em outro tipo
//Sintaxe:
// "variavel".reduce(("novo valor gerado", "array_item", "index", "arr") => {"função"}, "valor_inicial_variavel_gerada");
/*const totalAge = people.reduce((age, person) => {
	age += person.age;
	return age;
}, 0);
console.log('\nSoma da idade das pessoas: ', totalAge);

const totalEvenAges = people
						.filter(person => person.age %2 === 0)
							evenAge += person.age;
							return evenAge;
						}, 0);
console.log('\nSoma das idades pares: ', totalEvenAges);*/

//Incremento e Decremento
/*
const a = ++2; // 3
const b = 2++; // 2
*/

// Negação (-) e Adição (+)
/*
-3
+"3" 	// retorna 3
+true 	// retorna 1
+false 	// retorna 0
-true 	// retorna -1
*/

//Exponenciação (**)

//Ternário
// condição ? valor1 : valor2