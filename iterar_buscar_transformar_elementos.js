//ForEach
const arr = [1, 'b', 3, 'd', 5, 'f'];

// array.forEach( (valor_atual, index_atual, array) )
arr.forEach((value, index, arr) => {
	console.log(`${index}: ${value}`, arr);
});

//Retorna novo array, de mesmo tamanho, iterando cada item
const arrMap = [1, 2, 3, 4, 5];
console.log(arrMap.map(value => value * 2));
console.log(arr.map((value, index) => `${index}: ${value}`));

//Retorna array com elementos do sub-array concatenados de forma recursiva
const arrFlat = [1, 2, [3, 4, [5, [6, 7]]], 8];
console.log (arrFlat.flat());	// [1, 2, 3, 4, [5, [6, 7]], 8]
console.log(arrFlat.flat(2)); 	// [1, 2, 3, 4, 5, [6, 7], 8]
console.log(arrFlat.flat(3));	//[1, 2, 3, 4, 5, 6, 7, 8]

//Retorna novo array de mesmo tamanho(map) e executa flat(1)
console.log(arrMap.flatMap( value => value * 2 ));
const arrFlatMap = [1, 2, 3, [4, 5], 6];
console.log(arrFlatMap.flatMap( value => Math.pow(value, value) ));

//Retorna um array iterator com as chaves de cada elemento
const arrKeys = arr.keys();

console.log(arrKeys.next());	//{value: 0, done: false}
console.log(arrKeys.next());	//{value: 1, done: false}
console.log(arrKeys.next());	//{value: 2, done: false}
console.log(arrKeys.next());	//{value: 3, done: false}
console.log(arrKeys.next());	//{value: 4, done: false}
console.log(arrKeys.next());	//{value: 5, done: false}
console.log(arrKeys.next()); 	//{value: undefined, done: true}

//Retorna um array iterator com os valores de cada elemento
const arrValues = arr.values();

console.log(arrValues.next());	//{value: 1, done: false}
console.log(arrValues.next());	//{value: b, done: false}
console.log(arrValues.next());	//{value: 3, done: false}
console.log(arrValues.next());	//{value: d, done: false}
console.log(arrValues.next());	//{value: 5, done: false}
console.log(arrValues.next());	//{value: f, done: false}
console.log(arrValues.next()); 	//{value: undefined, done: true}

//Retorna um array iterator com as chaves/valres de cada elemento
const arrayEntries = arr.entries();

console.log(arrayEntries.next());	//{value: [0, 1], done: false}
console.log(arrayEntries.next());	//{value: [1, b], done: false}
console.log(arrayEntries.next());	//{value: [2, 3], done: false}
console.log(arrayEntries.next());	//{value: [3, d], done: false}
console.log(arrayEntries.next());	//{value: [4, 5], done: false}
console.log(arrayEntries.next());	//{value: [5, f], done: false}
console.log(arrayEntries.next());	//{value: undefined, done: true}

//Retorna o primeiro item que satisfa??a a condi????o
const arrFind = [1, 3, 5, 7, 9, 11, 15, 25, 88, 100];
console.log(arrFind.find( value => value % 2 === 0 ));

//Retorna o indice do primeiro item que satisfa??a a condi????o
console.log(arrFind.findIndex( value => value % 3 === 0 ));

//Retorna um array com todos os itens que satisfa??am a condi????o
console.log(arrFind.filter( value => value % 5 === 0 ));

//Retorna o primeiro indice em que um elemento pode ser encontrado
const arrIndexOf = [1, 2, 4, 4, 5, 4, 2];
console.log(arrIndexOf.indexOf(4));

//Retorna o ??ltimo indice em que um elemento pode ser encontrado
console.log(arrIndexOf.lastIndexOf(4));

//Retorna booleano verificando se um elemento existe no array
console.log(arr.includes('a'));	//false
console.log(arr.includes('b'));	//true

//Verifica se pelo menos um item satisfaz uma condi????o
console.log(arr.some( value => value % 5 === 0 ));

//Verifica se os elementos satisfazem uma condi????o
console.log(arr.every(value => value.isNaN)); // false
console.log(arrFind.every( value => value % 1 === 0 )); //true

// Ordena elementos do array de acordo com a condi????o
console.log(arrFind.sort( (current, next) => next - current ));

const students = [
	{name: 'Pedro', grade: 6},
	{name: 'Olavo', grade: 10},
	{name: 'Alecrim', grade: 2}
]

console.log(students.sort( (current, next) => current.grade - next.grade ));

//Inverte o sentido do array
console.log(arr.reverse());

//Transformar array em outro tipo de dado
//Junta todos os elementos separados por delimitador(String)
console.log(arr.join(';'));

//Retorna um novo ipo de dado iterando cada elemento
console.log(students.reduce( (retorno, value) => retorno += value.grade , 0 ));
console.log(students.reduce( (retorno, value) => retorno += `Nome: ${value.name} - Nota: ${value.grade}\n`, ''));