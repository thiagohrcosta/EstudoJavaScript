// Operadores relacionais

const a = 5;
const b = 6;

console.log( a > b);  // resposta boolean FALSE;
console.log( a < b);  // resposta boolean TRUE;
console.log( a >= b); // resposta boolean FALSE;
console.log( a <= b); // resposta boolean TRUE;

console.log ("=========================");

// Operadores de Igualdade
// == igual a 
// != diferente de
// === igual e do mesmo tipo
// !== diferente inclusive do tipo

const d = 5;
const e = '5';

console.log( d == e);
console.log( d != e);
console.log( d === e);
console.log( d !== e);

console.log ("=========================");

// Operadores lógicos
// São tipicamente usados com valores booleanos
// && - "e"
// ||   "ou"
// !    "não"

const f = 6;
const g = 6;

console.log( f > 3 && g > 5 ); 
console.log( f == 6 && g > 6);
console.log( f > 7 || g < 7);
console.log( f > 7 || g > 7);
console.log( f == g || a !== b);

console.log( (f == b || g != f) );
console.log( !true);

console.log ("=========================");

// Operadores aritiméticos
// *, / , %, +, -

const h = 3;
const i = 10;

console.log( h % i);
console.log( h * i);
console.log( h + i);
console.log( h - i);
console.log( h / i);