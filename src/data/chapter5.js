const chapter5 = {
  id: 5,
  title: 'Functions',
  description: 'Learn how to break your program into reusable, manageable pieces called functions — the single most important skill in programming.',
  topics: [
    {
      id: "what-is-function",
      title: "What is a Function and Why Do We Need One?",
      description: "Learn how to organize your code into reusable blocks to avoid repetition.",
      explanation: `Imagine you are writing a recipe book and you need to write the instructions for "boiling water" 15 different times throughout the book. That is a lot of wasted space.

Instead, you write it once, label it "How to Boil Water", and every other recipe just says "See page 5 for How to Boil Water."

**Functions work exactly like this in programming.** A function is a named, reusable block of code. You write it once, and you can "call" (run) it as many times as you like from anywhere in your program.

### The Anatomy of a Function
A function has four parts:
1. **Return Type:** What type of data does the function hand back when it is done? If it gives nothing back, the type is \`void\`.
2. **Name:** What you call it. Convention is to use verbs (e.g., \`calculateArea\`, \`printMenu\`).
3. **Parameters:** The information you hand to the function to work with (like giving a calculator two numbers).
4. **Body:** The actual code inside the curly braces that runs when you call it.

### Function Prototypes
Because C++ reads code top to bottom, if you call a function before you define it, the compiler gets confused. A **prototype** is a quick "heads up" declaration at the top of the file that says *"Hey, I promise I will fully define this function later."*

Functions are the primary tool for **modularization** — by breaking a large program into small, independent functions, you make the code easier to read, test, and debug. Each function should ideally perform one specific task. At a deeper level, function calls involve pushing the return address and arguments onto the stack, jumping to the function's memory address, and popping the stack upon completion.`,
      examples: [
        {
          title: 'Your First Function',
          code: `#include <iostream>
using namespace std;

// Prototype at the top
void printSeparatorLine();

int main() {
    cout << "Student Report" << endl;
    printSeparatorLine(); // Call the function
    cout << "Name: Alice" << endl;
    printSeparatorLine(); // Call it again!
    return 0;
}

// Definition (the actual code)
void printSeparatorLine() {
    cout << "--------------------" << endl;
}`,
          explanation: "A simple void function that does not return any value."
        },
        {
          title: 'Functions with Parameters and Return Values',
          code: `#include <iostream>
using namespace std;

// Returns an int, takes two int "ingredients"
int add(int numberA, int numberB) {
    int result = numberA + numberB;
    return result; // Hand the answer back
}

int main() {
    int sum = add(10, 5); // Catch the returned answer
    cout << "10 + 5 = " << sum << endl;
    
    // You can even use it directly:
    cout << "3 + 7 = " << add(3, 7) << endl;
    return 0;
}`,
          explanation: "A function that receives two numbers, adds them, and gives the answer back."
        }
      ],
      questions: [
        {
          question: 'What is the purpose of a function prototype?',
          answer: 'A prototype is a declaration that tells the compiler a function exists and what its signature is (return type, name, and parameter list) before the actual definition appears. This allows you to call it before it is defined in the file.'
        },
        {
          question: 'What does `void` mean as a return type?',
          answer: '`void` means "nothing". The function performs a task but does not hand any data back to whoever called it.'
        },
        {
          question: 'What is the difference between a function\'s "parameter" and its "argument"?',
          answer: 'A parameter is the placeholder variable defined in the function\'s header (e.g., `int x`). An argument is the actual real value you pass in when you call the function (e.g., `add(10, 5)` — here 10 and 5 are the arguments).'
        }
      ]
    },
    {
      id: "pass-by-value-reference",
      title: "Passing by Value vs Passing by Reference",
      description: "The two different ways data can be handed to a function — and why it matters.",
      explanation: `When you hand a function some data to work with, there are two very different ways this can happen. Understanding the difference is one of the most important concepts in C++.

### Passing by Value (The Photocopy)
This is the default. When you pass a variable to a function by value, the function receives a **complete copy** (like a photocopy) of your data.
* The function can scribble all over its photocopy.
* Your original is completely unaffected.
* Changes inside the function are thrown away when the function ends.

### Passing by Reference (The Original Document)
If you put an ampersand \`&\` after the type in the parameter list, the function receives direct access to the **original variable** — not a copy.
* Any changes the function makes are permanent and directly affect the original variable.
* This is essential when you want a function to modify multiple variables at once (since \`return\` can only give back one value).
* It is also faster because the computer doesn't need to waste time making a copy of large data.

### The Best of Both Worlds: \`const\` Reference
If you want the speed of a reference but the safety of a value pass, use \`const\`:
\`void func(const int& x)\`
This gives the function direct access (fast, no copy) but blocks any attempts to modify the variable.`,
      examples: [
        {
          title: 'Passing by Value (The Original is Safe)',
          code: `#include <iostream>
using namespace std;

// Receives a COPY. Original is safe.
void tryToDouble(int number) {
    number = number * 2;
    cout << "Inside function: " << number << endl;
}

int main() {
    int myNum = 10;
    tryToDouble(myNum);
    cout << "After function: " << myNum << endl; // Still 10!
    return 0;
}`,
          explanation: "Proving that the original variable does not change."
        },
        {
          title: 'Passing by Reference (The Original is Modified)',
          code: `#include <iostream>
using namespace std;

// The & means 'reference' — not a copy!
void actuallyDouble(int& number) {
    number = number * 2;
}

int main() {
    int myNum = 10;
    actuallyDouble(myNum); // Passes the original directly
    cout << "After function: " << myNum << endl; // Now it's 20!
    return 0;
}`,
          explanation: "The & gives the function access to the original."
        },
        {
          title: 'Swapping Two Variables (Classic Reference Use Case)',
          code: `#include <iostream>
using namespace std;

void swap(int& a, int& b) {
    int temp = a; // Save 'a' temporarily
    a = b;         // Overwrite 'a' with 'b'
    b = temp;      // Put old 'a' into 'b'
}

int main() {
    int x = 10, y = 20;
    cout << "Before: x=" << x << ", y=" << y << endl;
    swap(x, y);
    cout << "After:  x=" << x << ", y=" << y << endl;
    return 0;
}`,
          explanation: "A function that returns two modified values is only possible with references."
        }
      ],
      questions: [
        {
          question: 'Why might you prefer passing by reference instead of by value?',
          answer: 'Two reasons: (1) Performance — for large data like structs, making a copy is slow. (2) Modification — when you actually need the function to change the original variable.'
        },
        {
          question: 'Without references, how would you write a `swap` function?',
          answer: 'You simply cannot. Without references, the function only receives copies of `a` and `b`, so swapping them inside the function does nothing to the originals.'
        }
      ]
    },
    {
      id: "overloading-defaults",
      title: "Function Overloading and Default Arguments",
      description: "Using the same function name for different types and providing optional parameters.",
      explanation: `Once you are comfortable with basic functions, C++ offers several powerful upgrades.

### Function Overloading (Same Name, Different Behavior)
You can have multiple functions with the **identical name**, as long as their parameter lists are different. The compiler figures out which one to call automatically based on what arguments you pass. This is a form of Polymorphism!

For example, you could have an \`add(int, int)\` that adds integers and an \`add(double, double)\` that adds decimals. When you call \`add(3, 5)\`, C++ uses the int version. When you call \`add(3.5, 2.1)\`, it uses the double version.

**Important:** You cannot overload a function by only changing its return type. The compiler resolves overloading based only on the parameter list.

### Default Arguments (Optional Ingredients)
You can give a function parameter a **default value**. If the caller provides the argument, the default is ignored. If the caller omits it, the default kicks in.
* Rule: Default arguments must be on the **rightmost** parameters only. You cannot have \`void func(int x = 5, int y)\` — once a parameter has a default, everything to its right must also have a default.

### Inline Functions (Speed Hack)
Calling a function has a tiny bit of overhead (the program has to jump to a different memory location and back). For tiny, frequently-called functions, adding the \`inline\` keyword asks the compiler to copy the function's body directly into every place it's called, eliminating the jump. It is a speed-vs-size trade-off.

Note: \`inline\` is a request, not a command. Modern compilers may ignore it if they think it would hurt performance, or inline functions you didn't mark.`,
      examples: [
        {
          title: 'Function Overloading',
          code: `#include <iostream>
using namespace std;

// Version 1: No arguments, prints a default line
void display() {
    for(int j=0; j<30; j++) cout << '*';
    cout << endl;
}

// Version 2: Custom character and length
void display(char ch, int n) {
    for(int j=0; j<n; j++) cout << ch;
    cout << endl;
}

int main() {
    display();          // Calls version 1
    display('=', 20);   // Calls version 2
    display('-', 10);   // Calls version 2
    return 0;
}`,
          explanation: "Two functions named 'display' that behave differently based on what you pass."
        },
        {
          title: 'Default Arguments',
          code: `#include <iostream>
using namespace std;

// Default values for both parameters
void drawBox(int width = 10, char border = '*') {
    for(int i=0; i<width; i++) cout << border;
    cout << endl;
}

int main() {
    drawBox();          // Uses defaults: 10, '*'
    drawBox(20);        // Width 20, border still '*'
    drawBox(5, '#');    // Width 5, border '#'
    return 0;
}`,
          explanation: "Parameters with pre-set values for when the caller omits them."
        }
      ],
      questions: [
        {
          question: 'Can you overload a function by only changing its return type?',
          answer: 'No. The compiler resolves overloading based only on the parameter list (types and count). The return type is ignored, so two functions with the same name and parameters but different return types will cause a compilation error.'
        },
        {
          question: 'Can you put a default argument as the first parameter? (e.g., `void func(int x = 5, int y)`)',
          answer: 'No. Once a parameter has a default, every parameter to its right must also have a default. Defaults must be at the rightmost positions only.'
        },
        {
          question: 'Does the `inline` keyword guarantee that the function will actually be inlined?',
          answer: 'No. It is a request, not a command. Modern compilers are smart — they may ignore it or inline functions you didn\'t mark.'
        }
      ]
    },
    {
      id: "scope-storage",
      title: "Variable Scope and Storage Classes",
      description: "Where variables live, how long they survive, and the static keyword.",
      explanation: `Every variable in C++ has a **scope** (where it can be seen and used) and a **lifetime** (how long it lives in memory). This concept prevents variables from accidentally interfering with each other.

### Local Variables (Automatic Storage)
Variables declared inside a function (or any \`{}\` block) only exist inside that block. When the block ends, they are destroyed. They contain garbage values if not initialized.

### Global Variables (External Storage)
Variables declared outside all functions are visible to every function in the file and live for the entire duration of the program. They are automatically initialized to zero.
* Powerful, but risky — overuse leads to bugs that are very hard to find because any function anywhere can modify them.

### Static Local Variables (The Exception to the Rule)
A local variable declared with the \`static\` keyword is the best of both worlds:
* It is **visible only** within its function (like a normal local variable).
* But it **persists in memory** for the whole program (like a global variable).
* Most importantly: it only gets initialized once, and it **remembers its value** between function calls.

### Scope Collision
If a local and global variable share the same name, the local one "hides" the global one inside that scope. The global variable still exists — it is just invisible while you are inside the function that defines a local variable with the same name.`,
      examples: [
        {
          title: 'Local vs Global Scope',
          code: `#include <iostream>
using namespace std;

int globalScore = 0; // Global — everyone can see this

void addPoints(int points) {
    int bonus = 5;     // Local — only visible inside this function
    globalScore += points + bonus;
}

int main() {
    addPoints(10);
    addPoints(20);
    // cout << bonus; // ERROR! bonus doesn't exist out here.
    cout << "Final score: " << globalScore << endl;
    return 0;
}`,
          explanation: "Demonstrating where variables can and cannot be accessed."
        },
        {
          title: 'Static Variables (Remembering Between Calls)',
          code: `#include <iostream>
using namespace std;

int generateID() {
    static int id = 0; // Initialized ONLY the very first time
    id++;
    return id;
}

int main() {
    cout << "Player 1 ID: " << generateID() << endl; // 1
    cout << "Player 2 ID: " << generateID() << endl; // 2
    cout << "Player 3 ID: " << generateID() << endl; // 3
    return 0;
}`,
          explanation: "A classic use case: an auto-incrementing ID generator."
        }
      ],
      questions: [
        {
          question: 'What is the difference between a global variable and a static local variable?',
          answer: 'Both exist for the entire program lifetime, but a global variable can be accessed by ANY function, while a static local variable can only be accessed from within the single function where it was defined.'
        },
        {
          question: 'What value does an uninitialized static local variable hold by default?',
          answer: 'Zero. Static and global variables are automatically zero-initialized by the compiler. This is different from local automatic variables, which hold unpredictable garbage values.'
        },
        {
          question: 'Why are global variables generally discouraged in professional code?',
          answer: 'Because any function anywhere can read or modify them. In a large program, tracking down which function corrupted a global variable becomes nearly impossible.'
        }
      ]
    }
  ]
};

export default chapter5;
