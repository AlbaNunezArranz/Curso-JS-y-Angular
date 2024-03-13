var animal = "panda";
var printer = "";

console.log(animal);

switch (animal) {
    case "panda":
        printer = "Has acertado, es un PANDA!";
    break;
    case "perro":
        printer = "No es un perro";
    break;
    case "gato":
        printer = "No es un gato";
    break;
    case "zorro":
        printer = "No es un zorro";
    break;
    default:
        printer = "No es un cute animal";
    break;  
}

console.log(printer);