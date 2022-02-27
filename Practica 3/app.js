// function greet() {
//   console.log(`Hello`);
// }
const greet = () => {
  console.log(`Hello`);
};
greet(); //invoke

//

// functions as parameters
// function logGreeting(fn) {
//   fn();
// }
// si ocupamos 2 argumentos usamos el ()
// const logGreeting = (fn) => {
//   fn();
// };

////////////////////////////////////////7777777///////////77777777777
// const logGreeting = (fn) => {
//   //  Las Functions expressions created on the fly tienen por objetivo ahorrar líneas de código al
//   // no ser necesario declarar un prototipo para enviar una función como parámetro. En la clase
//   // anterior abordamos el siguiente segmento de código en el que declaramos la función “greet”
//   // y después la pasamos como parámetro:
//   fn();
// };
// logGreeting(greet);

// Podemos refactorizar ese código, y definir una “function expression created on the fly” de la
// siguiente forma:
let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
  console.log(`Hello from a function created on the fly`);
});

////////////////////////////////////////7777777///////////77777777777

// estamos pasando la función greet como
// parámetro e invocandola con el nombre del argumento fn

//

// // function expression
// let greetMe = function () {
//   console.log(`Hello from the function expression`);
// };
const greetMe = () => console.log(`Hello from the function expression`);
greetMe();

// logGreeting(greetMe);
// // functions are first class, pass it as a parameter

////////////////////////////////////////7777777///////////77777777777
// Interpolación de strings
////////////////////////////////////////7777777///////////77777777777
// En un esquema “clásico” , la interpolación de strings en javascripts sucede de la siguiente
// forma
const logGreeting1 = (miNombre, miColor) => {
  console.log(
    `Hola` + miNombre + `good Morning! ur favorite color is ` + miColor
  );
};
logGreeting1(`Carlos`, `Red`);

require(`./greet`);
