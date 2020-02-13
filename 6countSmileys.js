// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same

function countSmileys(arr) {
    let total = 0
    arr.map(emoticon => {
      console.log(emoticon)
        if(emoticon[0] === ':' || emoticon[0] === ';'){
            if(emoticon[1] === '-' || emoticon[1] === '~'){
                if (emoticon[2] === ')' || emoticon[2] === 'D'){
                    total += 1
                }
            } else if (emoticon[1] === ')' || emoticon[1] === 'D'){
                total += 1
            }
        }
    })
    return total
}