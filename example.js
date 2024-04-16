import { addValues, stringifyValue, invertBoolean, convertToNumber, coerceToType } from "./homework2.js";


try {
    console.log("addValues")
    console.log(addValues(5, 6))
    console.log(addValues("5", "6"))
    console.log(addValues("Hello", "World"))
    console.log(addValues("abc", 6))
} catch(error) {
    console.log(error.message)
}


console.log("\nstringifyValue")
console.log(stringifyValue(5))
console.log(stringifyValue(NaN))
console.log(stringifyValue(null))
console.log(stringifyValue("abc"))
console.log(stringifyValue(true))


try {
    console.log("\n invertBoolean")
    console.log(invertBoolean(true))
    console.log(invertBoolean(false))
    console.log(invertBoolean("abc"))
} catch(error) {
    console.log(error.message)
}


try {
    console.log("\nconvertToNumber")
    console.log(convertToNumber("5"))
    console.log(convertToNumber(123))
    console.log(convertToNumber(true))
    console.log(convertToNumber(NaN))
} catch(error) {
    console.log(error.message)
}


try {
    console.log("\ncoerceToType")
    console.log(coerceToType(5, "string"))
    console.log(coerceToType("5", "string"))
    console.log(coerceToType(null, "number"))
    console.log(coerceToType(true, "boolean"))
    console.log(coerceToType(true, "number"))
    //console.log(coerceToType("true", "number"))
    console.log(coerceToType(123, "boolean"))
} catch(error) {
    console.log(error.message)
}


