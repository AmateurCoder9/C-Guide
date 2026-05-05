const chapter5 = {
  id: 5,
  title: 'Functions',
  description: 'Learn how to break your program into reusable, manageable pieces called functions — the single most important skill in programming.',
  topics: [
    {
      id: "function-intro",
      title: "What is a Function? Why Break Code into Parts?",
      description: "Learn how to organize your code into reusable blocks to avoid repetition and mess.",
      explanation: {
        beginner: `
          Imagine you're writing a cookbook. Instead of writing the 10 steps to "make a pie crust" in every single pie recipe, you write it once at the beginning and just say "Refer to the pie crust recipe."
          
          A **Function** is exactly that for code. It's a named block of instructions that you write once and "call" whenever you need it.
        `,
        intermediate: `
          Functions are the primary tool for **Modularization**. By breaking a large program into small, independent functions, you make the code easier to read, test, and debug. 
          Each function should ideally perform one specific task.
        `,
        advanced: `
          Functions provide functional abstraction and help manage the complexity of software systems. In C++, function calls involve pushing the return address and arguments onto the stack, jumping to the function's memory address, and then popping the stack upon completion. This follows the **Procedural Programming** paradigm.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Reusable Line",
          code: `
void printLine() {
    cout << "----------" << endl;
}

int main() {
    printLine(); // Call it
    cout << "Content";
    printLine(); // Call it again
    return 0;
}
          `,
          explanation: "We defined 'printLine' once, but used it twice. This saves time and keeps the code clean."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the main purpose of a function?",
          answer: "To create a reusable block of code that can be called multiple times."
        },
        {
          difficulty: "medium",
          question: "What happens to the program flow when a function is called?",
          answer: "The program jumps to the function's code, runs it, and then returns to where it left off in the main code."
        }
      ]
    },
    {
      id: "writing-first-function",
      title: "Writing Your First Function",
      description: "Learn the syntax for defining your own functions and calling them from main.",
      explanation: {
        beginner: `
          To write a function, you need three things:
          1. **Return Type**: What kind of data comes out? (use \`void\` for nothing).
          2. **Name**: What do you want to call it?
          3. **Body**: The code inside \`{ }\`.
          
          You define it *outside* of main, and call it *inside* of main.
        `,
        intermediate: `
          Definition syntax: \`return_type name() { ... }\`. 
          In C++, you must define a function (or provide a **prototype**) before you call it, because the compiler reads the file from top to bottom.
        `,
        advanced: `
          A function signature consists of the function name and its parameter list. The return type is not part of the signature used for overload resolution. C++ functions follow the C-style calling convention by default.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A Greet Function",
          code: `
#include <iostream>
using namespace std;

// Definition
void sayHi() {
    cout << "Hello there!";
}

int main() {
    sayHi(); // The Call
    return 0;
}
          `,
          explanation: "The 'void' keyword tells C++ that this function doesn't give back a number or letter—it just does a task."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which keyword is used if a function doesn't return a value?",
          answer: "void"
        },
        {
          difficulty: "medium",
          question: "Where should you usually define your functions in relation to main()?",
          answer: "Either above main(), or provide a prototype above main() and the definition below it."
        }
      ]
    },
    {
      id: "parameters-arguments",
      title: "Parameters and Arguments — Passing Data In",
      description: "Learn how to give your functions the 'ingredients' they need to do their job.",
      explanation: {
        beginner: `
          Imagine a blender. You can't just press "Blend"; you have to put fruit inside first. 
          The fruit is the **Argument**. The blender's slot for fruit is the **Parameter**.
          
          Parameters allow you to send information *into* a function so it can work with different data every time.
        `,
        intermediate: `
          A **Parameter** is the variable listed in the function definition (the placeholder). 
          An **Argument** is the actual value passed during the function call.
        `,
        advanced: `
          C++ supports multiple parameter passing mechanisms. By default, parameters are passed by **value**, meaning a local copy is created on the function's stack frame. This ensures that the original argument in the calling scope remains unchanged.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A Personalized Greet",
          code: `
void greet(string name) {
    cout << "Hello, " << name;
}

int main() {
    greet("Alice"); // "Alice" is the argument
    greet("Bob");   // "Bob" is the argument
}
          `,
          explanation: "The function 'greet' has one parameter (name). We can pass different arguments to get different results."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the difference between a parameter and an argument?",
          answer: "A parameter is the variable in the function definition; an argument is the actual value passed to it."
        },
        {
          difficulty: "medium",
          question: "Can a function have more than one parameter?",
          answer: "Yes, you can have many parameters separated by commas."
        }
      ]
    },
    {
      id: "return-values",
      title: "Return Values — Getting Data Out",
      description: "Learn how functions can calculate results and hand them back to you.",
      explanation: {
        beginner: `
          A function can do more than just print things; it can calculate an answer and "hand it back" to you. 
          Think of it like a calculator: you give it numbers, and it **Returns** the result.
        `,
        intermediate: `
          To return data, replace \`void\` with a data type (like \`int\`) and use the **return** keyword inside the function. Once \`return\` is executed, the function ends immediately.
        `,
        advanced: `
          The return statement transfers control back to the caller and provides a value that replaces the function call expression. Modern C++ compilers use **Return Value Optimization (RVO)** to eliminate unnecessary copies when returning objects from functions.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "An Adding Machine",
          code: `
int add(int a, int b) {
    return a + b; // Hand back the sum
}

int main() {
    int sum = add(5, 10); // Catch the returned 15
    cout << sum;
}
          `,
          explanation: "Instead of printing, the function sends the number 15 back to main, where we store it in 'sum'."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which keyword is used to send a value back from a function?",
          answer: "return"
        },
        {
          difficulty: "medium",
          question: "If a function's return type is 'double', what kind of data must it return?",
          answer: "A decimal number (double precision)."
        }
      ]
    },
    {
      id: "overloading-intro",
      title: "Function Overloading — Same Name, Different Job",
      description: "How to use the same function name for different types of data.",
      explanation: {
        beginner: `
          In C++, you can have two functions with the **exact same name** as long as they take different kinds of inputs. 
          It's like the word "Play". You "Play" a game, or you "Play" a song. Same word, different action depending on what you're using it with.
        `,
        intermediate: `
          This is called **Function Overloading**. The compiler decides which function to use by looking at the arguments you pass. If you pass an int, it uses the 'int' version; if you pass a double, it uses the 'double' version.
        `,
        advanced: `
          Function overloading is a compile-time polymorphism. The compiler uses **name mangling** to generate unique internal names for overloaded functions based on their parameter types. Note that return types are not considered for overloading.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Overloaded Add",
          code: `
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}
          `,
          explanation: "C++ is smart enough to know which 'add' to use based on whether you give it whole numbers or decimals."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Can two functions have the same name in C++?",
          answer: "Yes, if they have different parameter lists (Function Overloading)."
        },
        {
          difficulty: "hard",
          question: "Can you overload a function by only changing the return type?",
          answer: "No. The compiler only looks at the parameters to distinguish between functions."
        }
      ]
    },
    {
      id: "scope-intro",
      title: "Scope — Where Variables Live",
      description: "Understand where your variables can be seen and used within your program.",
      explanation: {
        beginner: `
          Variables have "territories" called **Scope**. 
          A variable created inside a function is a **Local Variable**. It only exists inside those curly braces. 
          A variable created outside of everything is a **Global Variable**. Everyone can see it.
        `,
        intermediate: `
          **Local scope** prevents functions from accidentally messing with each other's data. 
          **Global scope** should be used sparingly because it can make debugging very difficult when any part of the program can change a variable.
        `,
        advanced: `
          Scope defines the visibility and lifetime of an identifier. Local variables have **automatic storage duration** (stack-allocated), while global variables have **static storage duration**. C++ also supports block scope (inside any { }) and namespace scope.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Local Secret",
          code: `
void myFunc() {
    int secret = 10; // Local
}

int main() {
    // cout << secret; // ERROR! Main can't see 'secret'
}
          `,
          explanation: "Since 'secret' was born inside myFunc, it dies when myFunc ends. Main never knew it existed."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Where can a 'Local' variable be accessed?",
          answer: "Only inside the function (or block) where it was defined."
        },
        {
          difficulty: "medium",
          question: "What is a 'Global' variable?",
          answer: "A variable defined outside of all functions that can be accessed from anywhere in the program."
        }
      ]
    },
    {
      id: "function-advanced",
      title: 'What is a Function? (Deep Dive)',
      description: "Detailed breakdown of function parts, anatomy, and prototypes.",
      explanation: {
        beginner: "This section revisits the idea of functions as reusable instructions.",
        intermediate: "Mastering the four parts of a function: return type, name, parameters, and body.",
        advanced: `Imagine you are writing a recipe book and you need to write the instructions for "boiling water" 15 different times throughout the book. That is a lot of wasted space.

Instead, you write it once, label it "How to Boil Water", and every other recipe just says "See page 5 for How to Boil Water."

**Functions work exactly like this in programming.**

### What is a Function?
A function is a named, reusable block of code. You write it once, and you can "call" (run) it as many times as you like from anywhere in your program.

### The Anatomy of a Function
A function has four parts:
1. **Return Type:** What type of data does the function hand back when it is done? If it gives nothing back, the type is \`void\`.
2. **Name:** What you call it. Convention is to use verbs.
3. **Parameters:** The information you hand to the function to work with.
4. **Body:** The actual code inside the curly braces that runs when you call it.

### Function Prototypes
Because C++ reads code top to bottom, if you call a function before you define it, the compiler gets confused. A **prototype** is a quick "heads up" declaration at the top of the file that says *"Hey, I promise I will fully define this function later."*`
      },
      examples: [
        {
          level: "advanced",
          title: 'Functions with Parameters and Returns',
          code: `#include <iostream>\nusing namespace std;\n\n// Returns an int, takes two int "ingredients"\nint add(int numberA, int numberB) {\n    int result = numberA + numberB;\n    return result; // Hand the answer back\n}\n\nint main() {\n    int sum = add(10, 5); // Catch the returned answer\n    cout << "10 + 5 = " << sum << endl;\n    return 0;\n}`,
          explanation: "A technical example showing data passing in and a result passing out."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'What is the purpose of a function prototype?',
          answer: 'To inform the compiler about a function\'s existence and its signature before it is actually called, allowing for flexible code organization.'
        }
      ]
    },
    {
      id: "passing-methods-advanced",
      title: 'Passing by Value vs Passing by Reference (Advanced)',
      description: "The memory mechanics of how data is handed to functions.",
      explanation: {
        beginner: "Do you give the function a copy of your paper (Value) or the actual original paper (Reference)?",
        intermediate: "Understanding the ampersand & syntax and its impact on the original variables.",
        advanced: `When you hand a function some data to work with, there are two very different ways this can happen. Understanding the difference is one of the most important concepts in C++.

### Passing by Value (The Photocopy)
The default. When you pass a variable to a function by value, the function receives a **complete copy** (like a photocopy) of your data.
* The function can scribble all over its photocopy.
* Your original is completely unaffected.
* Changes inside the function are thrown away when the function ends.

### Passing by Reference (The Original Document)
If you put an ampersand \`&\` after the type in the parameter list, the function receives direct access to the **original variable** — not a copy.
* Any changes the function makes are permanent and directly affect the original variable.
* This is essential when you want a function to modify multiple variables at once.
* It is also faster because the computer doesn't need to waste time making a copy of large data.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Swapping Two Variables',
          code: `#include <iostream>\nusing namespace std;\n\nvoid swap(int& a, int& b) {\n    int temp = a; \n    a = b;        \n    b = temp;     \n}\n\nint main() {\n    int x = 10, y = 20;\n    swap(x, y);\n    cout << "x=" << x << ", y=" << y; // x=20, y=10\n    return 0;\n}`,
          explanation: "Using references to modify multiple variables from within a single function call."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'How do you pass something by reference without allowing the function to modify it?',
          answer: 'Use a `const` reference: `void func(const MyStruct& s)`. This provides the efficiency of a reference with the safety of a value pass.'
        }
      ]
    },
    {
      id: "features-advanced",
      title: 'Advanced Function Features (Deep Dive)',
      description: "Function overloading, default arguments, and inline optimization.",
      explanation: {
        beginner: "C++ functions can have 'superpowers' like optional arguments or the ability to share names.",
        intermediate: "Rules for overloading and the performance benefits of inline functions.",
        advanced: `Once you are comfortable with basic functions, C++ offers several powerful upgrades.

### Function Overloading (Same Name, Different Behavior)
You can have multiple functions with the **identical name**, as long as their parameter lists are different. The compiler figures out which one to call automatically. This is a form of Polymorphism!

### Default Arguments (Optional Ingredients)
You can give a function parameter a **default value**. If the caller provides the argument, the default is ignored. If the caller omits it, the default kicks in. 
* Rule: Default arguments must be on the **rightmost** parameters only.

### Inline Functions (Speed Hack)
Calling a function has a tiny bit of overhead. For tiny, frequently-called functions, adding the \`inline\` keyword asks the compiler to copy the function's body directly into every place it's called, eliminating the jump.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Default Arguments in Action',
          code: `#include <iostream>\nusing namespace std;\n\nvoid drawBox(int width = 10, char border = '*') {\n    for(int i=0; i<width; i++) cout << border;\n    cout << endl;\n}\n\nint main() {\n    drawBox();      // 10, '*'\n    drawBox(5, '#'); // 5, '#'\n    return 0;\n}`,
          explanation: "Allowing callers to omit parameters while providing sensible defaults."
        }
      ],
      questions: [
        {
          difficulty: "medium",
          question: 'Can you put a default argument as the first parameter? (e.g., `void func(int x = 5, int y)`)',
          answer: 'No. Defaults must be at the rightmost positions only.'
        }
      ]
    },
    {
      id: "storage-classes-advanced",
      title: 'Variable Scope and Storage Classes (Advanced)',
      description: "Local vs Global scope, static variables, and memory persistence.",
      explanation: {
        beginner: "Where does a variable live, and how long does it survive?",
        intermediate: "Understanding local, global, and static variables and their role in memory management.",
        advanced: `Every variable in C++ has a **scope** (where it can be seen and used) and a **lifetime** (how long it lives in memory).

### Local Variables (Automatic Storage)
Variables declared inside a function only exist inside that block. They are destroyed when the block ends.

### Global Variables (External Storage)
Variables declared outside all functions are visible to every function and live for the program's duration. They are automatically initialized to zero.

### Static Local Variables (The Exception to the Rule)
A local variable declared with the \`static\` keyword:
* Is **visible only** within its function.
* But it **persists in memory** for the whole program.
* It only gets initialized once and **remembers its value** between calls.`
      },
      examples: [
        {
          level: "advanced",
          title: 'The Static Counter',
          code: `#include <iostream>\nusing namespace std;\n\nint countCalls() {\n    static int count = 0;\n    return ++count;\n}\n\nint main() {\n    cout << countCalls() << " "; // 1\n    cout << countCalls() << " "; // 2\n    return 0;\n}`,
          explanation: "Using a static local variable to maintain state across function calls without using a global variable."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What is the difference between a global variable and a static local variable?',
          answer: 'Both persist for the entire program, but globals are accessible to all functions, while static locals are private to the function that defined them.'
        }
      ]
    }
  ]
};

export default chapter5;
