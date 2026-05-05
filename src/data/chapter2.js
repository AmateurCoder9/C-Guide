const chapter2 = {
  id: 2,
  title: 'C++ Programming Basics',
  description: 'Learn how to actually write C++ code. We will cover the basic structure, how to store data in variables, and how to talk to the user.',
  topics: [
    {
      title: 'The Anatomy of a C++ Program',
      explanation: `Before you can write code, you need to understand the basic skeleton that every single C++ program requires to run.

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
* It ends with \`return 0;\`, which is the program's way of telling the computer: *"I finished successfully without crashing!"*`,
      examples: [
        {
          title: 'A Minimal C++ Program',
          description: 'The absolute bare minimum structure you need to print a message to the screen.',
          code: `#include <iostream> // 1. Fetch the Input/Output toolkit\nusing namespace std; // 2. Let us use standard commands easily\n\nint main() {         // 3. This is where the program starts\n    cout << "Welcome to C++!"; // 4. Print to the screen\n    return 0;        // 5. Tell the computer we finished successfully\n}`
        },
        {
          title: 'Without the using directive',
          description: 'If we remove `using namespace std;`, we have to be very specific about where commands come from.',
          code: `#include <iostream>\n\nint main() {\n    // Notice the std:: prefix required here.\n    std::cout << "This is more typing." << std::endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the exact entry point where every C++ program begins executing?',
          answer: 'The `main()` function. The operating system actively looks for this function to start running your code.'
        },
        {
          question: 'Why do we need `#include <iostream>`?',
          answer: 'Because basic C++ doesn\'t actually know how to print to the screen on its own! We have to include the input/output toolkit to gain access to commands like `cout`.'
        },
        {
          question: 'What does `return 0;` do?',
          answer: 'It signals to the operating system that the `main()` function has reached the end and executed successfully without any fatal errors.'
        }
      ]
    },
    {
      title: 'Variables: Boxes to Store Data',
      explanation: `To do anything useful, a program needs to remember information (like a player's score or a user's name). We store this information in **variables**.

### What is a Variable?
Think of a variable as a labeled box in the computer's memory. You give the box a name, you tell the computer what *type* of thing can fit in the box, and then you put something inside it.

### Fundamental Data Types (The Box Shapes)
You cannot put a word into a box meant for whole numbers. You must declare the type:
* **\`int\` (Integer):** Stores whole numbers (e.g., 5, -20, 1000).
* **\`float\` or \`double\`:** Stores numbers with decimals (e.g., 3.14, -0.99). \`double\` is just a larger, more precise float.
* **\`char\` (Character):** Stores exactly *one* single letter or symbol, wrapped in single quotes (e.g., \`'A'\`, \`'?'\`).
* **\`bool\` (Boolean):** Acts like a light switch. It can only hold \`true\` (ON) or \`false\` (OFF).

### Constants (Locked Boxes)
Sometimes you want to create a box, put a value inside, and permanently lock it so neither you nor anyone else can accidentally change it later. You use the \`const\` keyword for this (e.g., \`const float PI = 3.14;\`).`,
      examples: [
        {
          title: 'Creating and Filling Variables',
          description: 'How to declare boxes of different shapes and put data inside them.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // 1. Declare the type and name\n    int playerLives;\n    \n    // 2. Put data inside (Assign)\n    playerLives = 3;\n    \n    // You can also do it all on one line:\n    char grade = 'A';\n    float gpa = 3.8;\n    bool isPassing = true;\n\n    cout << "Lives: " << playerLives << endl;\n    cout << "Grade: " << grade << endl;\n    return 0;\n}`
        },
        {
          title: 'Using Constants',
          description: 'Locking a variable so it cannot be modified.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    const float PI = 3.14159;\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    \n    // PI = 3.0; // ERROR! You cannot change a locked box.\n    \n    cout << "Area: " << area << endl;\n    return 0;\n}`
        },
        {
          title: 'Type Casting (Intermediate)',
          description: 'Temporarily changing a box shape to do math properly.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int totalPizzaSlices = 11;\n    int people = 4;\n    \n    // If we divide int by int, 11/4 = 2. It throws away the decimal!\n    // We use (float) to temporarily treat it as a decimal.\n    float slicesPerPerson = (float)totalPizzaSlices / people;\n    \n    cout << "Slices each: " << slicesPerPerson << endl; // Prints 2.75\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What happens if you try to put the decimal `3.99` into an `int` variable?',
          answer: 'The computer will chop off the decimal entirely (truncation). The variable will just hold the number `3`. It does not round up.'
        },
        {
          question: 'What is the difference between a character (char) and a string?',
          answer: 'A `char` uses single quotes (\'A\') and can hold exactly one single symbol. A string uses double quotes ("Hello") and can hold multiple characters.'
        },
        {
          question: 'Why would you ever use `const` instead of a normal variable?',
          answer: 'Safety. If you have a value like the speed of light or a tax rate that absolutely should never change while the program is running, `const` prevents you or other programmers from accidentally modifying it and breaking the math.'
        }
      ]
    },
    {
      title: 'Talking to the User (Input and Output)',
      explanation: `A program isn't very interactive if it can't talk to the user. C++ handles this using **streams**. Think of a stream as a conveyer belt moving data.

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
Sometimes you want things to look pretty, like aligning prices in a menu. C++ provides manipulators like \`setw(10)\` (Set Width), which reserves exactly 10 spaces of room on the screen for whatever prints next.`,
      examples: [
        {
          title: 'Basic Input and Output',
          description: 'Asking the user for their age and responding.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age; // Create an empty box\n    \n    cout << "How old are you? "; // Ask a question\n    cin >> age; // Pause and wait for the user to type\n    \n    cout << "Wow, you are " << age << " years old!" << endl;\n    return 0;\n}`
        },
        {
          title: 'Multiple Inputs at Once',
          description: 'You can chain inputs together if the user types them separated by spaces.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int length, width;\n    \n    cout << "Enter the length and width (separated by a space): ";\n    cin >> length >> width;\n    \n    cout << "The area is: " << (length * width) << endl;\n    return 0;\n}`
        },
        {
          title: 'Using setw() for Alignment (Intermediate)',
          description: 'Using the iomanip toolkit to align columns perfectly.',
          code: `#include <iostream>\n#include <iomanip> // Needed for setw()\nusing namespace std;\n\nint main() {\n    cout << setw(10) << "Item" << setw(10) << "Price" << endl;\n    cout << "--------------------" << endl;\n    cout << setw(10) << "Apple" << setw(10) << "$1" << endl;\n    cout << setw(10) << "Watermelon" << setw(10) << "$5" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What direction do the arrows point for `cout` versus `cin`?',
          answer: 'For `cout`, the arrows point TOWARDS the screen (`cout << "text"`). For `cin`, the arrows point FROM the keyboard TOWARDS the variable (`cin >> variable`).'
        },
        {
          question: 'What happens if a user types a word when `cin` is expecting an `int`?',
          answer: 'The program will fail to read the input. The integer variable will usually be set to 0, and the input stream will enter a failure state, skipping all future inputs until cleared.'
        },
        {
          question: 'What happens if a user types "John Doe" when using `cin >> name`?',
          answer: '`cin` stops reading as soon as it hits a space. It will only capture "John" into the variable, leaving "Doe" sitting on the conveyer belt for the next input command.'
        }
      ]
    }
  ]
};

export default chapter2;
