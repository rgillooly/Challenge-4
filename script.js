const questions = [
{question:"what is a variable?",
answers: {
    a: "a random number",
    b: "a random letter",
    c: "a way to store a piece of data"
},
correctAnswer: "c"},{question:"what is a function?",
answers: {
    a: "a way to count",
    b: "a random letter",
    c: "a way to execute a series of commands"
},
correctAnswer: "c"},{question:"what does the = operator mean?",
answers: {
    a: "the two sides are equivalent",
    b: "add the two sides together",
    c: "the data on the right is assigned to the data on the left"
},
correctAnswer: "c"},{question:"what are curly braces for?",
answers: {
    a: "creating functions",
    b: "making the compiler ignore code",
    c: "creating strings"
},
correctAnswer: "a"},{question:"what is a semicolon for?",
answers: {
    a: "adding randomness",
    b: "ending certain lines",
    c: "commenting code"
},
correctAnswer: "b"},{question:"what is a method?",
answers: {
    a: "a number",
    b: "a letter",
    c: "a command to the computer"
},
correctAnswer: "c"}];

var timeLeft = 180

timer (); {
    for (timeLeft > 0; timeLeft--;) {
        Math.random(questions)
    }
}

if (verifier () = 0); {
    timeLeft =- 5
}
