JavaScript Scope & Memory Fundamentals
A brief explanation and code demonstration of how JavaScript handles variable visibility, closures, and memory allocation.

1. Scope in JavaScript
Scope determines where variables can be accessed in your code.

Function Scope: Variables declared with var inside a function are only available within that function.

Block Scope: Variables declared with let and const inside curly braces {} (if-statements, loops) cannot be accessed from outside.

Lexical Scope: Inner functions have access to variables defined in their outer (parent) scope based on where the functions are physically written in the code.


2. Closures: The Counter Example in repo
A closure occurs when a function "remembers" its lexical scope even after the outer function has finished executing



3. Primitive vs. Reference Behavior
JavaScript handles data differently depending on the type.

Primitives (Passed by Value)
Types: String, Number, Boolean, null, undefined.

Behavior: When you copy a primitive, you create a completely new, independent copy in memory. Changing one does not affect the other.

Reference Types (Passed by Reference)
Types: Objects, Arrays, Functions.

Behavior: Variables hold a "pointer" to the object's location in memory. If two variables point to the same object, modifying one will update the other.
