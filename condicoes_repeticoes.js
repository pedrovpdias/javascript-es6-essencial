const array = [2, 3, 4, 5, 6, 7, 8, 10, 15, 20];

//ForEach
/*array.forEach(item => {
	if(item % 2 === 0){
		console.log(`O número ${item} é divisível por 2`);
	} else if(item % 3 === 0) {
		console.log(`O número ${item} é divisível por 3`);
	} else if (item % 5 === 0) {
		console.log(`O número ${item} é divisível por 5`);
	}
});*/

//Switch Case
/*const fruit = 'uva'
;

switch(fruit) {
	case 'banana':
		console.log('R$ 3,00 / kg');
		break;
	case 'mamão':
		console.log('R$ 5,00 / kg');
		break;
	case 'uva':
	case 'morango':
		console.log('R$ 2,00 / kg'); 
		break;
	default:
		console.log('Produto fora de estoque');
		break;
}*/

//For
/*const arrayFor = ['one', 'two', 'three'];

for(let index = 0; index < arrayFor.length; index++) {
	const element = arrayFor[index];
	console.log(`Element #${index}: ${element}`);
}*/

//While - do while
/*var n = 0;
var x = 3;

while(n < 3) {
	console.log(n * 2);
	n++;
}

do {
	console.log(x * 2);
	x--;
} while(x < 3 && x > 0);*/

//For in - For of
/*let arr = [3, 5, 7];
arr.foo = 'hello';

for(let i in arr) {
	console.log(i);
}
for(let i of arr) {
	console.log(i);
}*/

// Break && Continue
var index = 0;

while(true) {
	index++;

	if(index > 2) {
		break;
	}

	console.log(index);
}

var arr = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < arr.length; i++) {
	const element = arr[i];

	if(element % 2 === 0) {
		continue;
	}

	console.log(element);
}