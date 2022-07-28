//criar 3 arrays: um string, um de number, um de um numero sozinho e de number, string e boleano
const strings = ['caneta', 'regua', 'isqueiro'];
const numeros = [20,30,10];
const misto = ['copo',50, false];
const num1 = [1987];
const vazios = [];
//pratica guiada pt2
console.log('tamanho array string',strings.length);
console.log('acessando item indice 3', strings[3]); // da undefined pq 3 não existe
console.log('acessando item indice 2', strings[2]); // da isqueiro

//verificando itens do array3
console.log(misto.includes(35)); // false pq nao tem
console.log(misto.includes(true))// true pq tem true na array3 

//imprimindo item unico da array
console.log('imprimindo item unico', num1[0]);
console.log('tamanho array4', num1.length);

//copia de array1 usando sinal de igual
const copiastrings = strings
console.log(strings)
console.log('copia de strings', copiastrings); //nesse caso as duas strings ficam linkados se mexer em uma muda as duas
const copiaStrings = strings.slice();
console.log("copia de strings", copiaStrings);
//adicionando item
copiaStrings.push('caderno');
console.log(strings);
console.log('copia de strings', copiaStrings);

//removendo item especifico
copiaStrings.splice(2, 2);
console.log('copiastrings depois da remoção', copiaStrings);

//ordenando array1
console.log('antes da ordanação', strings);
strings.sort()
console.log('depois da ordanação', strings);
//ordenando array2
console.log('antes da ordanação', numeros);
numeros.sort()
console.log('depois da ordanação', numeros);

/*atividade da aula
1. criar um array de números, bagunçado
2. imprimir original / imprimir ordenado em ordem crescente / imprimir em ordem reversa
3. remover o último item do array / adicionar número 6 / remover número de índice 2*/

const arrayNumber = [3, 27,30, -15,1987];
console.log(arrayNumber);
arrayNumber.sort();
console.log('array em ordem crescente', arrayNumber);
arrayNumber.reverse();
console.log('array em ordem descrente', arrayNumber);
console.log('removido o ultimo numero da array', arrayNumber.pop());
console.log('adicionar o numero 6', arrayNumber.push(6));
console.log(arrayNumber);
arrayNumber.splice(2,1);
console.log(arrayNumber);





