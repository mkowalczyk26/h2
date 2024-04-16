export function addValues(a, b) {
    const typeA = typeof(a)
    const typeB = typeof(b);

    if (typeA == "number" && typeB == "number") {
        return a + b;
    } else if (typeA == "string" || typeB == "string") {
        if (!isNaN(Number(a)) && !isNaN(Number(b)))
            return Number(a) + Number(b)
    }

    throw new Error("forbidden operation")

}

export function stringifyValue(val) {
    const typeVal = typeof(val)

    if (typeVal == "object") {
        return JSON.stringify(val)
    } else if (typeVal == "undefined") {
        return "undefined"
    } else if (typeVal == "null") {
        return "null"
    } else {
        return val.toString()
    }

}

export function invertBoolean(val) {
    const typeVal = typeof(val)

    if (typeVal == "boolean") {
        return !val
    }

    throw new Error("argument is not boolean")

}

export function convertToNumber(val) {
    const typeVal = typeof(val)

    if (typeVal == "string"){
        return parseFloat(val)
    } else if (typeVal == "number" && !isNaN(val)) {
        return val
    } else if (typeVal == "boolean") {
        if (val == true) 
            return 1
        else    
            return 0
    }

    throw new Error("conversion is not possible")

}

export function coerceToType(val, type) {
    const typeVal = typeof(val)

    if (type == "string"){
        return val.toString()
    } else if (type == 'number') {
        if (typeVal != "boolean" && !isNaN(Number(val))) {
            return Number(val)   
        } else {
            if (val == true)
                return 1
            else if (val == false)
                return 0
        } 
    } else if (type == "boolean") {
        if (typeVal == "boolean")
            return val
        if (typeVal == "string" || typeVal == "number") {
            if (val == "true" || val == 1)
                return true
            else if (val == "false" || val == 0)
                return false
        }
    }

    throw new Error("coercion is not possible")

}