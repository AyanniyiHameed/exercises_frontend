// closures are simply a situation when a function remembers it's lexical scope even when that function is executed 
// outside of that scope

// The Classic Counter which shows State Preservation

function createCounter() {
    let count = 0; // This variable is "captured"
    return function() {
        count++;
        return count;
    };
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2