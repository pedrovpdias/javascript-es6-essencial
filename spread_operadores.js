//Spread Operator
var partes = ['ombro', 'joelho'];
var musica = ['cabeca', ...partes, 'e', 'pe'];
console.log(musica);

function fn(x, y, z) {
	console.log(`X: ${x} \nY: ${y} \nZ:${z}`);
}

var args = [0, 1, 2];
fn(...args);


// -- Operadores Binários --
//In
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho');
console.log(0 in arvores);				//true
console.log(3 in arvores);				//true
console.log(5 in arvores);				//false
console.log('cedro' in arvores);		//false
console.log('length' in arvores);		//true

//Objetos predefinidos
console.log('PI' in Math);				//true

var minhaString = new String('coral');
console.log('length' in minhaString);	//true

//Objetos personalizados
var meuCarro = {
	marca: 'Honda',
	modelo: 'Civic',
	ano: '2020'
}; 
console.log('marca' in meuCarro);		//true
console.log('modelo' in meuCarro);		//true

// Instanceof
var dia = new Date(2012, 12, 17);
console.log(dia instanceof Date);		//true
