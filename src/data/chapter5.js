const chapter5 = {
  id: 5,
  title: 'Functions',
  description: 'Learn how to break your program into reusable, manageable pieces called functions — the single most important skill in programming.',
  topics: [
    {
      title: 'What is a Function and Why Do We Need One?',
      explanation: `Imagine you are writing a recipe book and you need to write the instructions for "boiling water" 15 different times throughout the book. That is a lot of wasted space.

Instead, you write it once, label it "How to Boil Water", and every other recipe just says "See page 5 for How to Boil Water."

**Functions work exactly like this in programming.**

### What is a Function?
A function is a named, reusable block of code. You write it once, and you can "call" (run) it as many times as you like from anywhere in your program.

### The Anatomy of a Function
A function has four parts:
1. **Return Type:** What type of data does the function hand back when it is done? If it gives nothing back, the type is \`void\`.
2. **Name:** What you call it. Convention is to use verbs (e.g., \`calculateArea\`, \`printMenu\`).
3. **Parameters:** The information you hand to the function to work with (like giving a calculator two numbers).
4. **Body:** The actual code inside the curly braces that runs when you call it.

### Function Prototypes
Because C++ reads code top to bottom, if you call a function before you define it, the compiler gets confused. A **prototype** is a quick "heads up" declaration at the top of the file that says *"Hey, I promise I will fully define this function later."*`,
      examples: [
        {
          title: 'Your First Function',
          description: 'A simple void function that does not return any value.',
          code: `#include <iostream>\nusing namespace std;\n\n// Prototype at the top\nvoid printSeparatorLine();\n\nint main() {\n    cout << "Student Report" << endl;\n    printSeparatorLine(); // Call the function\n    cout << "Name: Alice" << endl;\n    printSeparatorLine(); // Call it again!\n    return 0;\n}\n\n// Definition (the actual code)\nvoid printSeparatorLine() {\n    cout << "--------------------" << endl;\n}`
        },
        {
          title: 'Functions with Parameters and Return Values',
          description: 'A function that receives two numbers, adds them, and gives the answer back.',
          code: `#include <iostream>\nusing namespace std;\n\n// Returns an int, takes two int "ingredients"\nint add(int numberA, int numberB) {\n    int result = numberA + numberB;\n    return result; // Hand the answer back\n}\n\nint main() {\n    int sum = add(10, 5); // Catch the returned answer\n    cout << "10 + 5 = " << sum << endl;\n    \n    // You can even use it directly:\n    cout << "3 + 7 = " << add(3, 7) << endl;\n    return 0;\n}`
        },
        {
          title: 'A Real-World Function (Intermediate)',
          description: 'A function to convert Fahrenheit to Celsius.',
          code: `#include <iostream>\nusing namespace std;\n\n// Receives a float, returns a float\nfloat fahrenheitToCelsius(float fahrenheit) {\n    return (fahrenheit - 32) * 5.0 / 9.0;\n}\n\nint main() {\n    float boilingF = 212.0;\n    float bodyTempF = 98.6;\n    \n    cout << "Boiling: " << fahrenheitToCelsius(boilingF) << "°C" << endl;\n    cout << "Body temp: " << fahrenheitToCelsius(bodyTempF) << "°C" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the purpose of a function prototype?',
          answer: 'A prototype is a declaration that tells the compiler a function exists and what its signature is (return type, name, and parameter list) before the actual definition appears. This allows you to call it before it is defined in the file.'
        },
        {
          question: 'What does `void` mean as a return type?',
          answer: '`void` means "nothing". The function performs a task but does not hand any data back to whoever called it (like printing a line — it does the job but does not give you a value back).'
        },
        {
          question: 'What is the difference between a function\'s "parameter" and its "argument"?',
          answer: 'A parameter is the placeholder variable defined in the function\'s header (e.g., `int x`). An argument is the actual real value you pass in when you call the function (e.g., `add(10, 5)` — here 10 and 5 are the arguments).'
        },
        {
          question: 'Can a function call another function?',
          answer: 'Absolutely yes. Functions can call other functions freely, including themselves (which is called recursion, an advanced topic).'
        }
      ]
    },
    {
      title: 'Passing by Value vs Passing by Reference',
      explanation: `When you hand a function some data to work with, there are two very different ways this can happen. Understanding the difference is one of the most important concepts in C++.

### Passing by Value (The Photocopy)
The default. When you pass a variable to a function by value, the function receives a **complete copy** (like a photocopy) of your data.
* The function can scribble all over its photocopy.
* Your original is completely unaffected.
* Changes inside the function are thrown away when the function ends.

### Passing by Reference (The Original Document)
If you put an ampersand \`&\` after the type in the parameter list, the function receives direct access to the **original variable** — not a copy.
* Any changes the function makes are permanent and directly affect the original variable.
* This is essential when you want a function to modify multiple variables at once.
* It is also faster because the computer doesn't need to waste time making a copy of large data.`,
      examples: [
        {
          title: 'Passing by Value (The Original is Safe)',
          description: 'Proving that the original variable does not change.',
          code: `#include <iostream>\nusing namespace std;\n\n// Receives a COPY. Original is safe.\nvoid tryToDouble(int number) {\n    number = number * 2;\n    cout << "Inside function: " << number << endl;\n}\n\nint main() {\n    int myNum = 10;\n    tryToDouble(myNum);\n    cout << "After function: " << myNum << endl; // Still 10!\n    return 0;\n}`
        },
        {
          title: 'Passing by Reference (The Original is Modified)',
          description: 'The `&` gives the function access to the original.',
          code: `#include <iostream>\nusing namespace std;\n\n// The & means 'reference' — not a copy!\nvoid actuallyDouble(int& number) {\n    number = number * 2;\n}\n\nint main() {\n    int myNum = 10;\n    actuallyDouble(myNum); // Passes the original directly\n    cout << "After function: " << myNum << endl; // Now it's 20!\n    return 0;\n}`
        },
        {
          title: 'Swapping Two Variables (Classic Reference Use Case)',
          description: 'A function that returns two modified values is only possible with references.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid swap(int& a, int& b) {\n    int temp = a; // Save 'a' temporarily\n    a = b;         // Overwrite 'a' with 'b'\n    b = temp;      // Put old 'a' into 'b'\n}\n\nint main() {\n    int x = 10, y = 20;\n    cout << "Before: x=" << x << ", y=" << y << endl;\n    swap(x, y);\n    cout << "After:  x=" << x << ", y=" << y << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Why might you prefer passing by reference instead of by value?',
          answer: 'Two reasons: (1) Performance — for large data like structs, making a copy is slow and wasteful. (2) Modification — when you actually need the function to change the original variable.'
        },
        {
          question: 'How do you pass something by reference without allowing the function to modify it?',
          answer: 'You use `const` with the reference: `void func(const int& x)`. This tells the compiler to give the function direct access (fast, no copy) but to block any attempts to write to the variable.'
        },
        {
          question: 'Without references, how would you write a `swap` function?',
          answer: 'You simply cannot. Without references, the function only receives copies of `a` and `b`, so swapping them inside the function does nothing to the originals.'
        }
      ]
    },
    {
      title: 'Advanced Function Features',
      explanation: `Once you are comfortable with basic functions, C++ offers several powerful upgrades.

### Function Overloading (Same Name, Different Behavior)
You can have multiple functions with the **identical name**, as long as their parameter lists are different. The compiler figures out which one to call automatically based on what arguments you pass. This is a form of Polymorphism!

### Default Arguments (Optional Ingredients)
You can give a function parameter a **default value**. If the caller provides the argument, the default is ignored. If the caller omits it, the default kicks in. 
* Rule: Default arguments must be on the **rightmost** parameters only.

### Inline Functions (Speed Hack)
Calling a function has a tiny bit of overhead (the program has to jump to a different memory location and back). For tiny, frequently-called functions, this overhead can add up.
* Adding the \`inline\` keyword asks the compiler to copy the function's body directly into every place it's called, eliminating the jump.
* It's a speed-vs-size trade-off: your program runs faster but the compiled file gets slightly bigger.`,
      examples: [
        {
          title: 'Function Overloading',
          description: 'Two functions named `display` that behave differently.',
          code: `#include <iostream>\nusing namespace std;\n\n// Version 1: No arguments, prints a default line\nvoid display() {\n    for(int j=0; j<30; j++) cout << '*';\n    cout << endl;\n}\n\n// Version 2: Custom character and length\nvoid display(char ch, int n) {\n    for(int j=0; j<n; j++) cout << ch;\n    cout << endl;\n}\n\nint main() {\n    display();          // Calls version 1\n    display('=', 20);   // Calls version 2\n    display('-', 10);   // Calls version 2\n    return 0;\n}`
        },
        {
          title: 'Default Arguments',
          description: 'Parameters with pre-set values for when the caller is lazy.',
          code: `#include <iostream>\nusing namespace std;\n\n// Default values for both parameters\nvoid drawBox(int width = 10, char border = '*') {\n    for(int i=0; i<width; i++) cout << border;\n    cout << endl;\n}\n\nint main() {\n    drawBox();          // Uses defaults: 10, '*'\n    drawBox(20);        // Width 20, border still '*'\n    drawBox(5, '#');    // Width 5, border '#'\n    return 0;\n}`
        },
        {
          title: 'Inline Functions',
          description: 'A tiny function that is too small to justify the function call overhead.',
          code: `#include <iostream>\nusing namespace std;\n\n// This function is so small, the compiler pastes it inline\ninline float kgToLbs(float kg) {\n    return kg * 2.20462;\n}\n\nint main() {\n    cout << "75 kg = " << kgToLbs(75) << " lbs" << endl;\n    cout << "50 kg = " << kgToLbs(50) << " lbs" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Can you overload a function by only changing its return type?',
          answer: 'No. The compiler resolves overloading based only on the parameter list (types and count). The return type is ignored for overload resolution, so two functions with the same name and parameters but different return types will cause a compilation error.'
        },
        {
          question: 'Can you put a default argument as the first parameter? (e.g., `void func(int x = 5, int y)`)',
          answer: 'No. Once a parameter has a default, every parameter to its right must also have a default. Defaults must be at the rightmost positions only.'
        },
        {
          question: 'Does the `inline` keyword guarantee that the function will actually be inlined?',
          answer: 'No. It is a request, not a command. Modern compilers are smart — they may ignore your `inline` request if they think it would hurt performance, or they may inline functions you didn\'t mark as inline.'
        }
      ]
    },
    {
      title: 'Variable Scope and Storage Classes',
      explanation: `Every variable in C++ has a **scope** (where it can be seen and used) and a **lifetime** (how long it lives in memory). This concept prevents variables from accidentally interfering with each other.

### Local Variables (Automatic Storage)
Variables declared inside a function (or any \`{}\` block) only exist inside that block. When the block ends, they are destroyed. They contain garbage values if not initialized.

### Global Variables (External Storage)
Variables declared outside all functions are visible to every function in the file and live for the entire duration of the program. They are automatically initialized to zero.
* Powerful, but risky — overuse leads to bugs that are very hard to find.

### Static Local Variables (The Exception to the Rule)
A local variable declared with the \`static\` keyword is the best of both worlds:
* It is **visible only** within its function (like a normal local variable).
* But it **persists in memory** for the whole program (like a global variable).
* Most importantly: it only gets initialized once, and it **remembers its value** between function calls.`,
      examples: [
        {
          title: 'Local vs Global Scope',
          description: 'Demonstrating where variables can and cannot be accessed.',
          code: `#include <iostream>\nusing namespace std;\n\nint globalScore = 0; // Global — everyone can see this\n\nvoid addPoints(int points) {\n    int bonus = 5;     // Local — only visible inside this function\n    globalScore += points + bonus;\n}\n\nint main() {\n    addPoints(10);\n    addPoints(20);\n    // cout << bonus; // ERROR! bonus doesn't exist out here.\n    cout << "Final score: " << globalScore << endl;\n    return 0;\n}`
        },
        {
          title: 'Static Variables (Remembering Between Calls)',
          description: 'A classic use case: an auto-incrementing ID generator.',
          code: `#include <iostream>\nusing namespace std;\n\nint generateID() {\n    static int id = 0; // Initialized ONLY the very first time\n    id++;\n    return id;\n}\n\nint main() {\n    cout << "Player 1 ID: " << generateID() << endl; // 1\n    cout << "Player 2 ID: " << generateID() << endl; // 2\n    cout << "Player 3 ID: " << generateID() << endl; // 3\n    return 0;\n}`
        },
        {
          title: 'Scope Collision (Advanced)',
          description: 'What happens when a local and global variable share the same name.',
          code: `#include <iostream>\nusing namespace std;\n\nint x = 100; // Global x\n\nvoid someFunction() {\n    int x = 5; // Local x HIDES the global x inside this function\n    cout << "Inside func: " << x << endl; // Prints 5\n}\n\nint main() {\n    someFunction();\n    cout << "In main: " << x << endl; // Prints 100 (global is untouched)\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the difference between a global variable and a static local variable?',
          answer: 'Both exist for the entire program lifetime, but a global variable can be accessed by ANY function, while a static local variable can only be accessed from within the single function where it was defined.'
        },
        {
          question: 'What value does an uninitialized static local variable hold by default?',
          answer: 'Zero. Static and global variables are automatically zero-initialized by the compiler. This is different from local automatic variables, which hold unpredictable garbage values if not explicitly initialized.'
        },
        {
          question: 'Why are global variables generally discouraged in professional code?',
          answer: 'Because any function anywhere in the program can read or modify them without any control or permission system. In a large program with thousands of functions, tracking down which function accidentally corrupted a global variable becomes nearly impossible.'
        }
      ]
    }
  ]
};

export default chapter5;
