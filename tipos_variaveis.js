console.log(`Quantidade de Letras: ${textSize}`);

const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma String: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da String da primeira à penúltima letra: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da String da segunda letra até a última: ', secondToEnd);

const twoCharsBeforeFirsPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirsPos);*/


const user = {
	'name': 'Pedro',
	'lastName': 'Bola'
}

const prop = 'job'
user[prop] = 'TI';

//delete user.lastName;

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('\nValores de um objeto: ', Object.values(user));
console.log('\nLista de propriedades e valores do objeto: ', Object.entries(user));

console.log('\nRetorna um novo objeto \'mergeando\' dois ou mais objetos: ', Object.assign(
		{}, //Novo objeto
		user, 
		{
			age: 28
		}
	));