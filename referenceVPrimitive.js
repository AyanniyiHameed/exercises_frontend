// Primitive vs. Reference Behavior
// In JavaScript, how data is stored in memory depends on the type.

// 1. Primitives which are Passed by Value
// Types like Number, String, Boolean, null, and undefined are simple.-
// When you assign them to a new variable, JavaScript creates a copy of the actual value.

let a = 15;
let b = a; // 'b' gets a brand new copy of 15
b = 20;

console.log(a); // 15 (unchanged)
console.log(b); // 20


//Reference Types (Passed by Reference)
// Objects, Arrays, and Functions are stored differently. The variable doesn't hold the data;-
// it holds a reference (an address or a pointer) to where that data lives in memory.

let user1 = { name: "jaguar" };
let user2 = user1; // user2 now points to the same object (user 1) in memory and basically becomes user1
                    // but think of it as it's referencing that

user2.name = "Bob";

console.log(user1.name); // "Bob" (Wait, what?! why is it the same lol, where is jaguar, o ti lo)
console.log(user2.name); // "Bob"