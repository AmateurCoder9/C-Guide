const chapter2 = {
  id: 2,
  title: 'C++ Language Basics',
  description: 'Your first real lines of code. Learn the fundamental building blocks: output, input, variables, and data types.',
  topics: [
    {
      id: "first-program",
      title: "Your First C++ Program",
      description: "Write and understand the classic 'Hello World' program.",
      explanation: `Every programming journey starts with a tradition: making the computer say "Hello, World!" on the screen. This tiny program teaches you the basic skeleton that every C++ program must have.

Here are the key pieces:

**\`#include <iostream>\`** — This line tells C++ to include a toolbox called "iostream" that contains the tools for printing text to the screen and reading input from the keyboard. Without this line, the \`cout\` command wouldn't work.

**\`using namespace std;\`** — This is a shortcut. It tells the compiler that we want to use the "standard" set of tools without having to type \`std::\` in front of everything. Without it, you would have to write \`std::cout\` instead of just \`cout\`.

**\`int main() { }\`** — This is the starting point of every C++ program. When you run your code, the computer looks for this function first and starts executing whatever is inside the curly braces. The \`int\` means the function gives back a number when it finishes, and the \`return 0;\` at the end tells the operating system "everything went fine."

**\`cout << "Hello, World!";\`** — This is the command that actually prints text. \`cout\` stands for "Character Output" and the \`<<\` symbols are called the "insertion operator" — think of them as arrows pointing text toward the screen.`,
      examples: [
        {
          title: "Hello, World!",
          code: `#include <iostream>  // Include the input/output toolbox
using namespace std; // Use the standard toolbox

int main() {        // Program starts here
    cout << "Hello, World!" << endl; // Print text to screen
    return 0;       // Tell the OS everything went fine
}`,
          explanation: "The absolute minimum C++ program that produces visible output."
        }
      ],
      questions: [
        {
          question: "What does '#include <iostream>' do?",
          answer: "It tells the compiler to include the input/output stream library, which gives us access to 'cout' for printing and 'cin' for reading input."
        },
        {
          question: "What happens if you forget the semicolon at the end of a line?",
          answer: "The compiler will throw an error and refuse to build your program. Every statement in C++ must end with a semicolon."
        },
        {
          question: "What is the purpose of 'return 0' in main()?",
          answer: "It signals to the operating system that the program finished successfully. A non-zero return value typically indicates an error."
        }
      ]
    },
    {
      id: "cout-output",
      title: "Printing to the Screen — cout",
      description: "Master the art of displaying text, numbers, and formatted output.",
      explanation: `\`cout\` (pronounced "see-out") is your primary tool for displaying information on the screen. It stands for **Character Output**.

You use the **insertion operator \`<<\`** to send data to the screen. Think of the arrows as "pushing" your text toward the monitor.

You can chain multiple pieces together in a single line:
\`cout << "My name is " << name << " and I am " << age << " years old.";\`

**\`endl\`** stands for "end line" — it moves the cursor to the next line after printing, just like pressing Enter on your keyboard. Without it, all your text would appear smashed together on one line.

You can also use the **escape sequence \`\\n\`** inside a string to achieve the same effect as \`endl\`, though \`endl\` also flushes the output buffer (forces the text to appear immediately), which matters in more advanced programs.

Other useful escape sequences include:
* \`\\t\` — Inserts a tab space
* \`\\\\\` — Prints an actual backslash
* \`\\"\` — Prints a double quote inside a string`,
      examples: [
        {
          title: "Printing Multiple Things",
          code: `#include <iostream>
using namespace std;

int main() {
    string name = "Alice";
    int age = 20;
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Hello\\tWorld" << endl; // Tab between words
    
    return 0;
}`,
          explanation: "Chaining text and variables together using the << operator."
        }
      ],
      questions: [
        {
          question: "What does 'endl' do?",
          answer: "It inserts a newline character (moves to the next line) and flushes the output buffer."
        },
        {
          question: "Can you print a number and text in the same cout statement?",
          answer: "Yes. You chain them with the << operator: cout << \"Score: \" << 95;"
        }
      ]
    },
    {
      id: "cin-input",
      title: "Reading from the Keyboard — cin",
      description: "Let the user type data into your program interactively.",
      explanation: `If \`cout\` sends data OUT to the screen, \`cin\` (pronounced "see-in") reads data IN from the keyboard. It stands for **Character Input**.

You use the **extraction operator \`>>\`** to pull data from the keyboard into a variable. Notice the arrows point the opposite direction from \`cout\` — they are "pulling" data from the user into your variable.

Here's how it works:
1. Your program reaches a \`cin >> variable;\` line.
2. It pauses and waits for the user to type something and press Enter.
3. Whatever the user typed gets stored inside the variable.

**Important:** \`cin >>\` stops reading at the first space. So if someone types "John Doe", only "John" gets stored. To read an entire line including spaces, you must use \`getline(cin, variable);\` instead.

Also, \`cin\` can fail if the user enters the wrong type of data. If you ask for an integer and they type "hello", the input stream enters a "fail state" and all future reads will also fail until the error is cleared.`,
      examples: [
        {
          title: "A Simple Calculator",
          code: `#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    
    cout << "Enter first number: ";
    cin >> num1;  // Wait for user to type a number
    
    cout << "Enter second number: ";
    cin >> num2;  // Wait again
    
    cout << "Sum: " << num1 + num2 << endl;
    return 0;
}`,
          explanation: "The program pauses at each cin line, waits for the user to type, then continues."
        }
      ],
      questions: [
        {
          question: "What operator is used with cin?",
          answer: "The extraction operator >> (notice it points in the opposite direction from cout's << operator)."
        },
        {
          question: "Why does 'cin >> name' only capture 'John' if you type 'John Doe'?",
          answer: "cin >> stops reading at the first whitespace (space). To read a full line including spaces, use getline(cin, name)."
        }
      ]
    },
    {
      id: "variables",
      title: "Variables — Storing Data",
      description: "Learn how to create named containers that hold information.",
      explanation: `A **variable** is a named box in the computer's memory where you can store a piece of data. You give it a name so you can refer to it later.

Think of variables like labeled jars in a kitchen. One jar is labeled "Sugar" (it holds a sweet substance), another is "Flour" (it holds a powdery substance). In programming, you create a jar, label it, and put data inside.

To create a variable in C++, you must declare it by specifying two things:
1. **The type** — What kind of data will it hold? (a number? text? a decimal?)
2. **The name** — What do you want to call it?

For example: \`int age = 25;\` creates a box labeled "age" that can hold whole numbers, and puts the number 25 inside it right away.

**Naming rules:**
* Must start with a letter or underscore (not a number)
* Cannot contain spaces (use camelCase like \`myAge\` or underscores like \`my_age\`)
* Cannot be a C++ keyword like \`int\`, \`return\`, or \`class\`
* Names are case-sensitive: \`Age\` and \`age\` are two different variables

Variables can be **reassigned** — you can change what's inside the box at any time. But you cannot change the box's type once it is created. An \`int\` box will always hold integers.`,
      examples: [
        {
          title: "Declaring and Using Variables",
          code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;          // A whole number
    float height = 5.9;    // A decimal number
    char grade = 'A';      // A single character
    string name = "Alice"; // A piece of text
    
    cout << name << " is " << age << " years old." << endl;
    
    age = 26; // Reassigning — changing the value inside the box
    cout << "Next year: " << age << endl;
    
    return 0;
}`,
          explanation: "Creating different types of variables and changing their values."
        }
      ],
      questions: [
        {
          question: "What two things must you specify when declaring a variable?",
          answer: "The data type (what kind of data it holds) and the name (the label for the box)."
        },
        {
          question: "Can you change the type of a variable after it has been declared?",
          answer: "No. Once a variable is declared as int, it is always int. You can change its value, but not its type."
        },
        {
          question: "Is 'myVar' the same as 'myvar' in C++?",
          answer: "No. C++ is case-sensitive, so they would be treated as two completely different variables."
        }
      ]
    },
    {
      id: "data-types",
      title: "Data Types — int, float, char, string, bool",
      description: "Understand the different categories of data C++ can work with.",
      explanation: `Every variable in C++ must have a **data type**. The type tells the computer how much memory to reserve and how to interpret the bits stored inside.

Here are the most common types:

### Whole Numbers
* **\`int\`** — Stores whole numbers (no decimals). Example: \`42\`, \`-7\`, \`0\`. Uses 4 bytes (about 32 bits) of memory, which can hold values roughly from -2 billion to +2 billion.

### Decimal Numbers
* **\`float\`** — Stores numbers with decimal points. Example: \`3.14\`, \`-0.5\`. Uses 4 bytes but has limited precision (about 7 significant digits).
* **\`double\`** — Same as float but with double the precision (about 15 significant digits). Uses 8 bytes. Use \`double\` when accuracy matters.

### Text and Characters
* **\`char\`** — Stores a single character. Must use single quotes: \`'A'\`, \`'z'\`, \`'7'\`. Uses 1 byte. Under the hood, it actually stores a number (the ASCII code of the character).
* **\`string\`** — Stores a sequence of characters (words or sentences). Must use double quotes: \`"Hello"\`. The size varies depending on the length of the text.

### True or False
* **\`bool\`** — Stores only two values: \`true\` or \`false\`. Uses 1 byte. Essential for making decisions in your code.

Choosing the right type is important. Using an \`int\` for something that needs decimals will silently drop the decimal part: \`int x = 3.9;\` stores \`3\`, not \`3.9\`.`,
      examples: [
        {
          title: "All Common Types in Action",
          code: `#include <iostream>
using namespace std;

int main() {
    int count = 42;
    double price = 9.99;
    char letter = 'Z';
    string greeting = "Hello!";
    bool isHappy = true;
    
    cout << count << endl;     // 42
    cout << price << endl;     // 9.99
    cout << letter << endl;    // Z
    cout << greeting << endl;  // Hello!
    cout << isHappy << endl;   // 1 (true = 1, false = 0)
    
    return 0;
}`,
          explanation: "Each variable holds a different kind of data, and C++ treats each type differently."
        }
      ],
      questions: [
        {
          question: "What is the difference between float and double?",
          answer: "Both store decimal numbers, but double uses twice the memory (8 bytes vs 4) and has about twice the precision (15 vs 7 significant digits)."
        },
        {
          question: "What happens if you store 3.7 in an int variable?",
          answer: "The decimal part is silently truncated (dropped). The variable will hold 3, not 4."
        },
        {
          question: "What are the only two values a bool variable can hold?",
          answer: "true and false (which are internally represented as 1 and 0)."
        }
      ]
    },
    {
      id: "operators",
      title: "Operators — Doing Math and Comparisons",
      description: "Use arithmetic, assignment, and comparison operators to process data.",
      explanation: `Operators are symbols that tell the computer to perform a specific operation on your data. C++ has several categories of operators.

### Arithmetic Operators (Math)
These work exactly like in school:
* \`+\` Addition, \`-\` Subtraction, \`*\` Multiplication, \`/\` Division
* \`%\` **Modulus** — gives the remainder after division. \`10 % 3\` equals \`1\` because 10 ÷ 3 = 3 remainder 1.

**Watch out for integer division:** \`7 / 2\` gives \`3\`, not \`3.5\`, when both numbers are integers. The decimal part is discarded. To get \`3.5\`, at least one number must be a decimal type: \`7.0 / 2\`.

### Assignment Operators
* \`=\` Assigns a value: \`x = 5;\`
* \`+=\` Adds and assigns: \`x += 3;\` is the same as \`x = x + 3;\`
* \`-=\`, \`*=\`, \`/=\` work the same way for other operations.
* \`++\` Increment: \`x++;\` adds 1 to x.
* \`--\` Decrement: \`x--;\` subtracts 1 from x.

### Comparison Operators
These compare two values and return \`true\` or \`false\`:
* \`==\` Equal to (careful: NOT the same as single \`=\`)
* \`!=\` Not equal to
* \`>\` Greater than, \`<\` Less than
* \`>=\` Greater than or equal, \`<=\` Less than or equal

These comparison operators are the foundation of all decision-making in your programs. When you write \`if (age >= 18)\`, the computer evaluates \`age >= 18\` to either \`true\` or \`false\`, and then decides what to do next.`,
      examples: [
        {
          title: "Operators in Practice",
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    cout << "Add: " << a + b << endl;      // 13
    cout << "Divide: " << a / b << endl;    // 3 (integer division!)
    cout << "Remainder: " << a % b << endl; // 1
    
    a += 5; // a is now 15
    a++;    // a is now 16
    
    cout << "Is a > b? " << (a > b) << endl; // 1 (true)
    
    return 0;
}`,
          explanation: "Arithmetic, shorthand assignment, and comparison operators all in action."
        }
      ],
      questions: [
        {
          question: "What is the difference between '=' and '=='?",
          answer: "'=' assigns a value to a variable. '==' compares two values and returns true or false."
        },
        {
          question: "What does the modulus operator (%) do?",
          answer: "It returns the remainder after integer division. For example, 10 % 3 equals 1."
        },
        {
          question: "Why does 7 / 2 give 3 instead of 3.5?",
          answer: "Because both 7 and 2 are integers, C++ performs integer division and discards the decimal part. Use 7.0 / 2 to get 3.5."
        }
      ]
    },
    {
      id: "constants",
      title: "Constants — Values That Never Change",
      description: "Learn how to create variables whose values are permanently locked.",
      explanation: `Sometimes you have a value that should absolutely never change during the program — like the value of PI (3.14159) or the speed of light. If you accidentally changed PI to 4, your entire program's math would be wrong.

A **constant** is a variable whose value is set once and can never be modified after that. C++ offers two ways to create constants:

### The \`const\` Keyword
You simply add the word \`const\` before the type:
\`const double PI = 3.14159;\`

If you try to change it later (\`PI = 4.0;\`), the compiler will throw an error and refuse to build your program.

### The \`#define\` Preprocessor Directive
This is the older C-style way:
\`#define PI 3.14159\`

This works by literally replacing every occurrence of \`PI\` in your code with \`3.14159\` before compilation. It has no type checking, so \`const\` is generally preferred in modern C++.

### Why Use Constants?
* **Safety:** Prevents accidental modification of critical values.
* **Readability:** \`const double TAX_RATE = 0.08;\` is much clearer than having \`0.08\` scattered everywhere in your code. Those scattered numbers are called "magic numbers" and they make code very hard to understand.
* **Maintenance:** If the tax rate changes, you update it in one place instead of hunting through thousands of lines.`,
      examples: [
        {
          title: "Using Constants",
          code: `#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    const int MAX_PLAYERS = 4;
    
    double radius = 5.0;
    double area = PI * radius * radius;
    
    cout << "Area of circle: " << area << endl;
    
    // PI = 3.0; // ERROR! Cannot modify a constant
    
    return 0;
}`,
          explanation: "Constants protect important values from being accidentally changed."
        }
      ],
      questions: [
        {
          question: "What happens if you try to change the value of a const variable?",
          answer: "The compiler throws an error and refuses to build the program."
        },
        {
          question: "What is a 'magic number' and why is it bad?",
          answer: "A magic number is an unexplained numeric value scattered throughout code (like 0.08 instead of TAX_RATE). It makes code hard to read and maintain."
        }
      ]
    },
    {
      id: "type-casting",
      title: "Type Casting — Converting Between Types",
      description: "Convert data from one type to another when needed.",
      explanation: `Sometimes you need to convert data from one type to another. For example, you might have an \`int\` but need to use it as a \`double\` for a calculation. This conversion is called **type casting**.

### Implicit Casting (Automatic)
C++ will automatically convert some types when it is safe. This is called **widening** — going from a smaller type to a larger one:
* \`int\` → \`double\` is automatic and safe. No data is lost.
* \`char\` → \`int\` is automatic. The character's ASCII code is used.

### Explicit Casting (Manual)
When you go the other direction (like \`double\` → \`int\`), data can be lost (the decimal part gets chopped off). C++ may warn you, and you should explicitly tell it you know what you are doing.

There are two ways to write an explicit cast:
* **C-style cast:** \`(int)3.7\` — This truncates 3.7 to 3.
* **C++ static_cast:** \`static_cast<int>(3.7)\` — Same result, but considered safer and clearer in modern C++.

### Why Does This Matter?
Remember integer division: \`7 / 2\` gives \`3\`. To get \`3.5\`, you can cast one of the values: \`(double)7 / 2\` or \`static_cast<double>(7) / 2\`. This forces C++ to perform floating-point division instead of integer division.`,
      examples: [
        {
          title: "Casting in Action",
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 7, b = 2;
    
    // Without casting — integer division
    cout << "7/2 = " << a / b << endl; // 3
    
    // With casting — proper division
    cout << "7/2 = " << (double)a / b << endl; // 3.5
    
    // Char to int — reveals the ASCII code
    char letter = 'A';
    cout << "ASCII of A: " << (int)letter << endl; // 65
    
    return 0;
}`,
          explanation: "Casting changes how the computer interprets data, allowing you to control precision."
        }
      ],
      questions: [
        {
          question: "What data is lost when you cast a double to an int?",
          answer: "The decimal part is truncated (chopped off). 3.9 becomes 3, not 4."
        },
        {
          question: "What is the difference between implicit and explicit casting?",
          answer: "Implicit casting happens automatically when C++ knows it's safe (like int to double). Explicit casting is done manually by the programmer when data loss is possible."
        }
      ]
    },
    {
      id: "comments",
      title: "Comments — Notes for Humans",
      description: "Write notes in your code that the compiler completely ignores.",
      explanation: `Comments are notes you write inside your code that are completely ignored by the compiler. They exist only for humans to read — to explain what the code does, why you wrote it a certain way, or to leave reminders for yourself.

### Single-Line Comments
Use \`//\` to comment out everything from that point to the end of the line:
\`// This is a comment\`

### Multi-Line Comments
Use \`/* */\` to comment out a block of text that spans multiple lines:
\`/* This is
   a multi-line
   comment */\`

### Why Are Comments Important?
* Code you write today will be confusing in 6 months if you don't explain your thinking.
* Other people reading your code need to understand your logic.
* You can temporarily "disable" lines of code by commenting them out during debugging.

### Best Practices
* Don't write obvious comments like \`x = 5; // set x to 5\` — the code already says that.
* DO write comments that explain **why**: \`x = 5; // Default retry count per company policy\`
* Keep comments up to date. An outdated comment is worse than no comment because it actively misleads readers.`,
      examples: [
        {
          title: "Comment Styles",
          code: `#include <iostream>
using namespace std;

/*
 * Program: Temperature Converter
 * Author: Student
 * Date: 2024
 */

int main() {
    double fahrenheit = 98.6;
    
    // Convert F to C using the standard formula
    double celsius = (fahrenheit - 32) * 5.0 / 9.0;
    
    cout << celsius << " degrees Celsius" << endl;
    return 0;
}`,
          explanation: "Single-line comments explain individual lines. Multi-line blocks describe the program as a whole."
        }
      ],
      questions: [
        {
          question: "Do comments affect how the program runs?",
          answer: "No. The compiler completely ignores all comments. They exist only for human readers."
        },
        {
          question: "When should you NOT write a comment?",
          answer: "When the code is already self-explanatory. Comments should explain WHY, not WHAT. 'x = 5; // set x to 5' is a useless comment."
        }
      ]
    },
    {
      id: "basic-program-structure",
      title: "Putting It All Together — Program Structure",
      description: "Understand the full structure and flow of a complete C++ program.",
      explanation: `Now that you know all the individual pieces, let's see how a complete C++ program is structured from top to bottom.

### The Standard Structure
Every C++ program follows this general layout:

1. **Preprocessor Directives** (\`#include\`) — These go at the very top. They tell the compiler to load external libraries before anything else.

2. **Using Declarations** (\`using namespace std;\`) — A convenience shortcut placed right after the includes.

3. **Global Declarations** — Constants or variables that the entire program needs access to (use sparingly).

4. **Function Prototypes** — Short "previews" of functions you will define later. This lets you call a function before its full code appears.

5. **The \`main()\` Function** — The entry point. Execution always starts here. Everything your program does begins inside main's curly braces.

6. **Other Function Definitions** — Your custom functions, usually placed below main.

### The Flow of Execution
When you run the program, the computer enters \`main()\` and executes statements one by one, from top to bottom. When it encounters a function call, it jumps to that function, executes it, and then jumps back to where it left off. This continues until \`main()\` reaches its \`return\` statement.

Understanding this flow is essential because it means the order of your statements matters. A variable must be declared before it is used. A function must be at least prototyped before it is called.`,
      examples: [
        {
          title: "Complete Program Structure",
          code: `#include <iostream>  // 1. Preprocessor directive
using namespace std; // 2. Using declaration

const double PI = 3.14159; // 3. Global constant

double circleArea(double r); // 4. Function prototype

int main() {                // 5. Entry point
    double radius;
    cout << "Enter radius: ";
    cin >> radius;
    
    cout << "Area: " << circleArea(radius) << endl;
    return 0;
}

double circleArea(double r) { // 6. Function definition
    return PI * r * r;
}`,
          explanation: "A well-organized program showing every structural element in its proper place."
        }
      ],
      questions: [
        {
          question: "Where does a C++ program always begin execution?",
          answer: "Inside the main() function."
        },
        {
          question: "What is a function prototype?",
          answer: "A short declaration at the top of the file that tells the compiler a function exists and what its signature looks like, before the full definition appears later."
        },
        {
          question: "Does the order of statements inside main() matter?",
          answer: "Yes. C++ executes statements from top to bottom. A variable must be declared before it is used, and functions must be at least prototyped before they are called."
        }
      ]
    }
  ]
};

export default chapter2;
