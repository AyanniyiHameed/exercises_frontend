// function scope- variables declared inside the scope are trapped inside the function

function dream() {
    const scenario = "I had a bad dream";
    console.log(scenario);
}

dream(); 
console.log(scenario); // ReferenceError: scenario is not defined

// Block Scope (let and const) any variable inside a {} cannot be accessed from outside the block
// well except if it's a var that can be used everywhere

if (true) {
    let blockScope = "i am out of sight";
    var notBlockScope = "i full ground anywhere";
}

console.log(notBlockScope); // "i full ground anywhere"
console.log(blockScope);    // ReferenceError



// lexical  scope means that inner functions have access to variables in their outer scope
function outer() {
    const movie = "Mission Impossible";
    
    function inner() {
        console.log(movie); // Finds 'movie' in the parent's scope
    }
    inner();
}
outer();