//Array
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(1, 2, 3);

console.log(arr);
console.log(arr2);
console.log(arr3);

const arr4 = Array(3); // array vazio de 3 posições
const arr5 = Array(3, 2);

console.log(arr4);
console.log(arr5);

const divs = document.querySelectorAll('div');
const arrayFrom = Array.from(divs);

console.log(divs);
console.log(arrayFrom);

//Adicionar elementos no final do array
console.log(arr.push('String')); // retorna o tamanho do array
console.log(arr);

//Remover último elemento do array
console.log(arr.pop()); // retorna item removido
console.log(arr);

//Adicionar elementos no inicio do array
console.log(arr.unshift('String')); // retorna o tamanho do array
console.log(arr);

//Remover primeiro elemento do array
console.log(arr.shift()); // retorna item removido
console.log(arr);

//Mesclar arrays
const salgados = ['coxinha', 'esfirra', 'quibe'];
const doces = ['brigadeiro', 'beijinho', 'cajuzinho'];

const comida = salgados.concat(doces); // retorna novo array
console.log(comida);

//Divide array
const arrSlice = [1, 'a', 2, 'b', 3, 'c'];
console.log(arrSlice.slice(0, 2)); 	// [1, a]
console.log(arrSlice.slice(2)); 	// [2, b, 3, c]
console.log(arrSlice.slice(-1)); 	// [c]
console.log(arrSlice.slice(-3));	// [b, 3, c]

//Adicionar elementos removendo antigos
const arrSplice = [5, 'e', 4, 'd', 3, 'c'];
console.log(arrSplice.splice(2)); // Remove e retorna elementos a partir do index 2
console.log(arrSplice.splice(0, 0 , 'first')); //splice(posição_alterar, qtde_itens_removidos, item_add) / retorna itens removidos

console.log(arrSplice);