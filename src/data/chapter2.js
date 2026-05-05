const chapter2 = {
  id: 2,
  title: 'C++ Programming Basics',
  description: 'Learn how to actually write C++ code. We will cover the basic structure, how to store data in variables, and how to talk to the user.',
  topics: [
    {
      id: "your-first-program",
      title: "Your First C++ Program",
      description: "Write and understand the classic 'Hello World' program line by line.",
      explanation: {
        beginner: `
          Every programmer starts with the same project: making the computer say "Hello World!". It's a simple tradition that proves your tools are working.
          
          In C++, this requires about 5-6 lines of code. Each line has a specific purpose, like a piece of a puzzle.
        `,
        intermediate: `
          A basic C++ program consists of a **Preprocessor Directive** (\`#include\`), a **Main Function** (\`int main()\`), and a **Statement** (\`cout\`). 
          
          C++ is **case-sensitive**, meaning \`Main\` is different from \`main\`. Almost every line (statement) must end with a semicolon (\`;\`).
        `,
        advanced: `
          The entry point of any hosted C++ implementation is the \`main\` function. It must return an \`int\`. The \`cout\` object is an instance of \`std::ostream\` defined in the \`<iostream>\` header. 
          
          The \`<<\` operator is the insertion operator, which inserts the string literal into the output stream buffer.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Hello World Breakdown",
          code: `
#include <iostream>    // 1. Give us tools to print text
using namespace std;   // 2. Use a standard 'vocabulary'

int main() {           // 3. The program starts here
    cout << "Hello!";  // 4. Print the word 'Hello'
    return 0;          // 5. Success! The program ends
}
          `,
          explanation: "This is the most basic structure. Without these pieces, the computer won't know where to start or how to speak."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the name of the function where every C++ program starts?",
          answer: "main()"
        },
        {
          difficulty: "easy",
          question: "What symbol must be at the end of most C++ code lines?",
          answer: "A semicolon (;)"
        },
        {
          difficulty: "medium",
          question: "What would happen if you forgot to include <iostream>?",
          answer: "The computer wouldn't understand what 'cout' is, and the program wouldn't compile."
        },
        {
          difficulty: "medium",
          question: "Is 'COUT' the same as 'cout' in C++?",
          answer: "No, C++ is case-sensitive. 'cout' must be lowercase."
        },
        {
          difficulty: "hard",
          question: "Write a program that prints 'C++ is fun!' to the screen.",
          answer: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "C++ is fun!";\n    return 0;\n}`
        }
      ]
    },
    {
      id: "code-structure",
      title: "How C++ Code is Structured",
      description: "An overview of headers, namespaces, functions, and the return statement.",
      explanation: {
        beginner: `
          Think of a C++ file like a **House**. 
          - The \`#include\` lines are the **Utilities** (Electricity, Water) you bring in.
          - The \`int main()\` is the **Front Door** where you enter.
          - The \`{ }\` curly braces are the **Walls** that hold everything inside.
        `,
        intermediate: `
          C++ code is organized into blocks. Statements are executed sequentially from top to bottom within the \`main\` function. 
          - **Header Files:** Provide declarations for external functions.
          - **Namespaces:** Prevent name collisions by grouping code.
          - **Return 0:** Passes an exit code back to the Operating System.
        `,
        advanced: `
          The structure follows the C++ standard for translation units. Preprocessor directives are handled before the actual compilation phase. 
          The \`using namespace std;\` is a using-directive that makes all names from the \`std\` namespace visible without qualification, though this is often discouraged in large-scale professional headers to avoid namespace pollution.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A Clean Structure",
          code: `
#include <iostream>

int main() {
    // Everything between the curly braces
    // is part of the 'main' block.
    
    std::cout << "Structured Code";
    
    return 0;
}
          `,
          explanation: "Notice the curly braces { }. They act like a container for your instructions."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What do curly braces { } do in C++?",
          answer: "They group code together into a block."
        },
        {
          difficulty: "easy",
          question: "What does #include do?",
          answer: "It brings in a library or 'toolkit' so you can use its features."
        },
        {
          difficulty: "medium",
          question: "What is the purpose of 'return 0;' at the end of main?",
          answer: "It tells the computer that the program finished successfully."
        }
      ]
    },
    {
      id: "comments",
      title: "Comments in C++",
      description: "Learn how to write notes to yourself (and others) that the computer ignores.",
      explanation: {
        beginner: `
          Imagine writing a recipe but adding sticky notes that say "Careful, the oven gets hot!". 
          **Comments** are sticky notes for your code. The computer completely ignores them, but they are vital for humans to understand what is happening.
        `,
        intermediate: `
          There are two types of comments in C++:
          1. **Single-line:** Starts with \`//\`. Everything after it on that line is ignored.
          2. **Multi-line:** Starts with \`/*\` and ends with \`*/\`. Useful for long descriptions.
        `,
        advanced: `
          Comments should explain the "Why," not the "What." Good code is often self-documenting for "What" it does, but comments clarify design decisions, complex algorithms, or edge cases that aren't immediately obvious from the syntax.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Notes in Code",
          code: `
#include <iostream>
using namespace std;

int main() {
    // This is a single-line comment
    cout << "Hi!"; // This prints hi
    
    /* This is a 
       multi-line 
       comment */
       
    return 0;
}
          `,
          explanation: "The computer only 'sees' the cout and return lines. The rest is just for you!"
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which symbols start a single-line comment?",
          answer: "//"
        },
        {
          difficulty: "easy",
          question: "Does a comment slow down your program?",
          answer: "No, the computer ignores them entirely during compilation."
        },
        {
          difficulty: "medium",
          question: "How do you start and end a multi-line comment?",
          answer: "Start with /* and end with */"
        }
      ]
    },
    {
      id: "variables-storing-info",
      title: "Variables — Storing Information",
      description: "Learn how to create labeled 'boxes' in memory to hold data.",
      explanation: {
        beginner: `
          A **Variable** is just a box with a label. 
          If you want to remember a player's score, you create a box called "score" and put a number inside. 
          Later, you can open the box, see what's inside, or change it to a new number.
        `,
        intermediate: `
          To create a variable, you must specify a **Type** and a **Name**. This is called 'declaration'. 
          Ex: \`int age;\` 
          Giving it a value is called 'initialization'. 
          Ex: \`age = 25;\`
        `,
        advanced: `
          A variable is a symbolic name for a memory location. When you declare \`int x\`, the compiler reserves a specific number of bytes (usually 4 for an int) in RAM. The name \`x\` is associated with the address of that memory block.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Score Box",
          code: `
#include <iostream>
using namespace std;

int main() {
    int score = 0;      // Create box 'score', put 0 in it
    score = 100;        // Change the contents to 100
    
    cout << score;      // Look inside the box and print
    return 0;
}
          `,
          explanation: "Variables allow your program to 'remember' things and change them as the program runs."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is a variable?",
          answer: "A named storage location in the computer's memory."
        },
        {
          difficulty: "medium",
          question: "What is the difference between declaring and initializing a variable?",
          answer: "Declaring is creating the box; initializing is putting the first value inside it."
        }
      ]
    },
    {
      id: "data-types",
      title: "Data Types — What Kind of Data?",
      description: "Explore the different shapes of variable boxes: numbers, letters, and more.",
      explanation: {
        beginner: `
          Not all data is the same. You wouldn't try to fit a pizza into a coin slot! 
          In C++, you must tell the computer what *shape* of data fits in your box:
          - **int**: Whole numbers (1, 2, -50).
          - **double**: Decimals (3.14, 0.99).
          - **char**: One single letter ('A', 'z').
          - **bool**: True or False.
        `,
        intermediate: `
          Types determine how much memory is used and what operations are possible. 
          - \`int\` (Integer): Usually 4 bytes.
          - \`char\` (Character): 1 byte.
          - \`float\` vs \`double\`: \`double\` is "double precision" and more accurate for decimals.
        `,
        advanced: `
          C++ is a **statically typed** language, meaning type checking occurs at compile time. 
          Fundamental types vary in size depending on the architecture (32-bit vs 64-bit), but the \`<climits>\` header defines their ranges. \`bool\` is unique as it represents a logical state but typically occupies 1 byte of storage for addressing purposes.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A Mix of Types",
          code: `
int age = 20;           // Whole number
double price = 19.99;   // Decimal
char grade = 'A';       // One letter
bool isHappy = true;    // Yes/No
          `,
          explanation: "Choose the right type for the job. You can't put 3.14 into an 'int' without losing the .14!"
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which data type would you use for a person's age?",
          answer: "int"
        },
        {
          difficulty: "easy",
          question: "Which data type would you use for a price like $5.50?",
          answer: "double (or float)"
        },
        {
          difficulty: "medium",
          question: "What does a 'bool' variable store?",
          answer: "Only one of two values: true or false."
        }
      ]
    },
    {
      id: "constants",
      title: "Constants — Values That Never Change",
      description: "How to lock a variable so its value can't be accidentally modified.",
      explanation: {
        beginner: `
          A **Constant** is a box that you glue shut after putting something inside. 
          If you define the value of PI (3.14), you don't want your code to accidentally change it to 4.0 later. Constants prevent this mistake.
        `,
        intermediate: `
          Use the \`const\` keyword before the data type. 
          Ex: \`const int DAYS_IN_WEEK = 7;\` 
          If you try to change a \`const\` later, the compiler will throw an error and stop you.
        `,
        advanced: `
          Constants provide **Read-Only** memory access. Using \`const\` allows the compiler to perform certain optimizations, as it knows the value will not change. It also improves code safety by enforcing "const-correctness."
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Locked Box",
          code: `
#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    
    // PI = 2.0; // This line would cause an error!
    
    cout << "PI is: " << PI;
    return 0;
}
          `,
          explanation: "Constants are great for settings, math values, or rules that should stay the same."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What keyword is used to make a variable unchangeable?",
          answer: "const"
        },
        {
          difficulty: "medium",
          question: "Why would you use a constant instead of a regular variable?",
          answer: "To prevent accidental changes to values that should remain the same throughout the program."
        }
      ]
    },
    {
      id: "user-input",
      title: "Getting Input from the User",
      description: "Learn how to make your program interactive using cin.",
      explanation: {
        beginner: `
          Up until now, our programs just talked *at* us. To make them listen, we use **cin** (pronounced 'see-in'). 
          Think of \`cout\` as a mouth and \`cin\` as an ear.
        `,
        intermediate: `
          While \`cout\` uses the insertion operator (\`<<\`), \`cin\` uses the **extraction operator** (\`>>\`). 
          The arrows point *into* the variable because data is moving from the keyboard *into* your box.
        `,
        advanced: `
          \`cin\` is an object of class \`istream\`. It reads input from the standard input stream (usually the keyboard). It uses whitespace (spaces, tabs, newlines) as delimiters, meaning it stops reading at the first space it encounters.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Asking for a Number",
          code: `
#include <iostream>
using namespace std;

int main() {
    int favoriteNumber;
    
    cout << "Enter your favorite number: ";
    cin >> favoriteNumber; // Program pauses here
    
    cout << "I like " << favoriteNumber << " too!";
    return 0;
}
          `,
          explanation: "The program will wait until the user types a number and presses 'Enter'."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which command is used to get input from the keyboard?",
          answer: "cin"
        },
        {
          difficulty: "easy",
          question: "Which way do the arrows point for cin?",
          answer: "To the right (>>)"
        },
        {
          difficulty: "medium",
          question: "If a user types '10 20' for a single cin >> x; command, what will x be?",
          answer: "x will be 10. The 20 will be left in the input buffer."
        }
      ]
    },
    {
      id: "anatomy-of-a-program-advanced",
      title: 'The Anatomy of a C++ Program',
      description: "A more technical look at the setup, directives, and main function.",
      explanation: {
        beginner: "This topic breaks down the 'skeleton' of a C++ file, from the #include at the top to the return 0 at the bottom.",
        intermediate: "Understanding preprocessor directives and how namespaces like 'std' work to organize standard library tools.",
        advanced: `Before you can write code, you need to understand the basic skeleton that every single C++ program requires to run.

### Preprocessor Directives (The Setup)
Think of a preprocessor directive as telling the computer: *"Hey, before you start reading my code, go fetch this toolkit for me."*
* Statements starting with a \`#\` (like \`#include <iostream>\`) are directives. 
* \`#include\` literally copies and pastes the contents of a toolkit (a header file) into your code. 
* \`<iostream>\` stands for **I**nput/**O**utput **Stream**. It gives us the tools to print text to the screen and read text from the keyboard.

### The \`using namespace std;\` Directive
In C++, many standard tools are grouped into a "namespace" called \`std\` (standard). 
* Without this line, every time you want to print something, you have to write \`std::cout\`. 
* By adding this line, you are saying *"I am using the standard toolkit"*, allowing you to just write \`cout\`.

### The \`main()\` Function (The Engine)
This is the most important part of your program. The **\`main()\`** function is where your program actually begins running.
* When you double-click an app, the computer looks directly for \`main()\` and starts executing the code inside its curly braces \`{}\`.
* It ends with \`return 0;\`, which is the program's way of telling the computer: *"I finished successfully without crashing!"*`
      },
      examples: [
        {
          level: "advanced",
          title: 'A Minimal C++ Program',
          code: `#include <iostream> // 1. Fetch the Input/Output toolkit\nusing namespace std; // 2. Let us use standard commands easily\n\nint main() {         // 3. This is where the program starts\n    cout << "Welcome to C++!"; // 4. Print to the screen\n    return 0;        // 5. Tell the computer we finished successfully\n}`,
          explanation: "The minimum code required for a functional output program."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'What is the exact entry point where every C++ program begins executing?',
          answer: 'The `main()` function. The operating system actively looks for this function to start running your code.'
        },
        {
          difficulty: "medium",
          question: 'Why do we need `#include <iostream>`?',
          answer: 'Because basic C++ doesn\'t actually know how to print to the screen on its own! We have to include the input/output toolkit to gain access to commands like `cout`.'
        }
      ]
    },
    {
      id: "variables-advanced",
      title: 'Variables: Boxes to Store Data (Deep Dive)',
      description: "Technical details on variable types, memory, and type casting.",
      explanation: {
        beginner: "Variables are boxes in memory. This section looks at the different 'shapes' of these boxes in more detail.",
        intermediate: "Comparing integers, floating points, and characters, and learning how to lock them with 'const'.",
        advanced: `To do anything useful, a program needs to remember information (like a player's score or a user's name). We store this information in **variables**.

### What is a Variable?
Think of a variable as a labeled box in the computer's memory. You give the box a name, you tell the computer what *type* of thing can fit in the box, and then you put something inside it.

### Fundamental Data Types (The Box Shapes)
You cannot put a word into a box meant for whole numbers. You must declare the type:
* **\`int\` (Integer):** Stores whole numbers (e.g., 5, -20, 1000).
* **\`float\` or \`double\`:** Stores numbers with decimals (e.g., 3.14, -0.99). \`double\` is just a larger, more precise float.
* **\`char\` (Character):** Stores exactly *one* single letter or symbol, wrapped in single quotes (e.g., \`'A'\`, \`'?'\`).
* **\`bool\` (Boolean):** Acts like a light switch. It can only hold \`true\` (ON) or \`false\` (OFF).

### Constants (Locked Boxes)
Sometimes you want to create a box, put a value inside, and permanently lock it so neither you nor anyone else can accidentally change it later. You use the \`const\` keyword for this (e.g., \`const float PI = 3.14;\`).`
      },
      examples: [
        {
          level: "advanced",
          title: 'Type Casting',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int totalPizzaSlices = 11;\n    int people = 4;\n    \n    // If we divide int by int, 11/4 = 2. It throws away the decimal!\n    // We use (float) to temporarily treat it as a decimal.\n    float slicesPerPerson = (float)totalPizzaSlices / people;\n    \n    cout << "Slices each: " << slicesPerPerson << endl; // Prints 2.75\n    return 0;\n}`,
          explanation: "Converting one data type to another temporarily to ensure precision in math."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What happens if you try to put the decimal `3.99` into an `int` variable?',
          answer: 'The computer will chop off the decimal entirely (truncation). The variable will just hold the number `3`. It does not round up.'
        }
      ]
    },
    {
      id: "talking-to-user-advanced",
      title: 'Talking to the User (Streams & Formatting)',
      description: "Advanced input/output techniques, manipulators, and stream behavior.",
      explanation: {
        beginner: "A look at how data flows like a river (stream) between the keyboard, your program, and the screen.",
        intermediate: "Using operators like << and >> and formatting tools like setw().",
        advanced: `A program isn't very interactive if it can't talk to the user. C++ handles this using **streams**. Think of a stream as a conveyer belt moving data.

### Output (\`cout\`)
**\`cout\`** stands for Character Output. 
* We use the insertion operator **\`<<\`** to push data onto the conveyer belt heading to the computer screen.
* You can chain multiple \`<<\` together to print sentences mixed with variables.
* **\`endl\`** stands for End Line. It hits "Enter" to move to the next line.

### Input (\`cin\`)
**\`cin\`** stands for Character Input. 
* We use the extraction operator **\`>>\`** to pull data off the keyboard conveyer belt and drop it straight into a variable box.
* The program will physically pause and wait for the user to type something and press Enter.

### Formatting Output (Manipulators)
Sometimes you want things to look pretty, like aligning prices in a menu. C++ provides manipulators like \`setw(10)\` (Set Width), which reserves exactly 10 spaces of room on the screen for whatever prints next.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Using setw() for Alignment',
          code: `#include <iostream>\n#include <iomanip> // Needed for setw()\nusing namespace std;\n\nint main() {\n    cout << setw(10) << "Item" << setw(10) << "Price" << endl;\n    cout << "--------------------" << endl;\n    cout << setw(10) << "Apple" << setw(10) << "$1" << endl;\n    cout << setw(10) << "Watermelon" << setw(10) << "$5" << endl;\n    return 0;\n}`,
          explanation: "Creating formatted tables in the console."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What happens if a user types "John Doe" when using `cin >> name`?',
          answer: '`cin` stops reading as soon as it hits a space. It will only capture "John" into the variable, leaving "Doe" sitting on the conveyer belt for the next input command.'
        }
      ]
    }
  ]
};

export default chapter2;
