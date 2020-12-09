// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


function pigIt(str){
    let arrayOfWords = str.split(' ')
    let transformedArray = arrayOfWords.map(word => {
        if(word.match(/[a-z]/i)){
            let wordArray = word.split('')
            let firstLetter = wordArray.shift()
            wordArray.push(firstLetter)
            wordArray.push('ay')
            return wordArray.join('')
        } else {
            return word
        }
    })

    return transformedArray.join(' ')    
}
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !