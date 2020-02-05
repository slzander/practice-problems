// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
    if (str.includes('_') || str.includes('-')) {
        let array = str.split(/_|-/)
        for (i = 1; i < array.length; i++) {
            array[i] = array[i][0].toUpperCase() + array[i].slice(1)
        }
        return array.join('')
    } else {
        return str
    }
}