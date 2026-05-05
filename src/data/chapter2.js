const chapter2 = {
  id: 2,
  title: 'C++ Programming Basics',
  description: 'Basic syntax, program construction, input/output operations, and understanding variables and basic arithmetic operators.',
  topics: [
    {
      title: 'Program Structure and Directives',
      explanation: `Every C++ program has a specific structure. It begins with preprocessor directives, followed by the \`main()\` function where execution starts.

### Preprocessor Directives
Statements starting with a \`#\` (like \`#include <iostream>\`) are preprocessor directives. 
* They are instructions to the compiler to perform actions *before* the actual compilation begins. 
* \`#include\` tells the compiler to physically insert the contents of another file into your source code. 
* \`<iostream>\` is a header file containing declarations for input/output operations.

### The \`using namespace std;\` Directive
A namespace is a declarative region that provides a scope to the identifiers (names of types, functions, variables) inside it.
* The C++ Standard Library is housed in the \`std\` namespace. 
* Using this directive allows you to write \`cout\` instead of explicitly writing \`std::cout\` every time.

### The \`main()\` Function
This is the **entry point** of every C++ program. 
* The operating system calls \`main()\` to start execution. 
* It returns an \`int\` value to the OS; a return of \`0\` typically indicates successful execution.`,
      examples: [
        {
          title: 'A Minimal C++ Program',
          description: 'The absolute bare minimum structure of a C++ program.',
          code: `#include <iostream> // Preprocessor directive\nusing namespace std; // Namespace declaration\n\nint main() { // Entry point\n    cout << "Welcome to C++ Programming Basics!"; // Output statement\n    return 0; // Exit status\n}`
        },
        {
          title: 'Without the using directive',
          description: 'How a program looks if you do not bring the std namespace into scope.',
          code: `#include <iostream>\n\nint main() {\n    std::cout << "Notice the std:: prefix required here." << std::endl;\n    return 0;\n}`
        },
        {
          title: 'Multiple Return Points',
          description: 'Returning non-zero error codes based on program state.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int status = 1;\n    \n    if(status == 1) {\n        cout << "Critical Error encountered!" << endl;\n        return 1; // Tells OS the program failed\n    }\n    \n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What does the preprocessor do when it encounters `#include <iostream>`?',
          answer: 'It physically inserts the contents of the `iostream` header file into the source code at that exact location before the compiler translates the code into machine language.'
        },
        {
          question: 'Why is `return 0;` used at the end of the `main()` function?',
          answer: 'It signals to the operating system that the program has executed successfully without any errors.'
        },
        {
          question: 'Is it mandatory to use `using namespace std;`?',
          answer: 'No. It is a convenience feature. In professional codebases, it is often avoided in global scope to prevent "namespace pollution" (naming conflicts).'
        }
      ]
    },
    {
      title: 'Variables, Constants, and Data Types',
      explanation: `Programs need to store data in memory, and variables are the names given to these memory locations.

### Fundamental Data Types
* **Integer Types:** \`int\` (typically 4 bytes), \`short\` (2 bytes), \`long\` (4 or 8 bytes). Used for whole numbers.
* **Character Type:** \`char\` (1 byte). Stores a single ASCII character (like \`'A'\`).
* **Floating-Point Types:** \`float\` (4 bytes, single precision), \`double\` (8 bytes, double precision). Used for numbers with fractional parts.
* **Boolean Type:** \`bool\`. Can only hold \`true\` (1) or \`false\` (0).

### Constants
Sometimes you want a variable whose value **cannot be changed** after initialization. You use the \`const\` keyword. 
* Example: \`const float PI = 3.14159f;\`
* Any attempt to reassign \`PI\` later in the program will cause a compilation error.

### Variable Definition
Variables must be defined before they are used. The definition tells the compiler the type and name of the variable, allowing it to allocate the correct amount of memory.`,
      examples: [
        {
          title: 'Variable Definition and Assignment',
          description: 'Defining various types of variables and assigning them values.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int studentAge = 20;\n    char grade = 'A';\n    float gpa = 3.8f;\n    bool isPassing = true;\n\n    cout << "Age: " << studentAge << endl;\n    cout << "Grade: " << grade << " (" << gpa << ")" << endl;\n    return 0;\n}`
        },
        {
          title: 'Using Constants',
          description: 'Defining a constant to prevent accidental modification.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    const float PI = 3.14159f;\n    float radius = 5.0f;\n    float area = PI * radius * radius;\n    \n    // PI = 3.0f; // This would cause a compiler error!\n    \n    cout << "Area: " << area << endl;\n    return 0;\n}`
        },
        {
          title: 'Type Casting',
          description: 'Converting one data type into another.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int totalApples = 11;\n    int people = 4;\n    \n    // If we don't cast, 11/4 = 2 (integer division)\n    // By casting to float, 11.0/4 = 2.75\n    float applesPerPerson = (float)totalApples / people;\n    \n    cout << "Apples each: " << applesPerPerson << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the difference between a character literal and a string literal?',
          answer: 'A character literal (e.g., \'A\') uses single quotes and represents a single character (usually 1 byte). A string literal (e.g., "Hello") uses double quotes and represents an array of characters, ending with a hidden null terminator.'
        },
        {
          question: 'What is the purpose of the `const` qualifier?',
          answer: 'It marks a variable as read-only. Once initialized, its value cannot be changed, protecting it from accidental modification during program execution.'
        },
        {
          question: 'What happens when you assign a float value like 3.9 to an int variable?',
          answer: 'C++ truncates the decimal part without rounding. The int variable will hold the value 3.'
        }
      ]
    },
    {
      title: 'Input, Output, and Manipulators',
      explanation: `C++ handles I/O via **streams**. The \`iostream\` library provides two main objects: \`cout\` and \`cin\`.

### Output (\`cout\`)
The insertion operator \`<<\` is used to send data to the standard output stream (usually the screen). You can chain multiple insertion operators to print multiple items on a single line.

### Input (\`cin\`)
The extraction operator \`>>\` is used to pull data from the standard input stream (usually the keyboard) and store it into a variable. \`cin\` automatically converts the textual input into the correct data type of the variable receiving it.

### Manipulators
Manipulators are instructions sent to the stream to alter its formatting. 
* \`endl\`: Inserts a newline character and flushes the output buffer.
* \`setw()\`: Defined in \`<iomanip>\`, it sets the width of the next field to be output. Useful for aligning columns of data.
* \`setprecision()\`: Controls how many decimal places are displayed for floating-point numbers.`,
      examples: [
        {
          title: 'Basic Input and Output',
          description: 'Taking an integer from the user and printing it.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int fahrenheit;\n    cout << "Enter temperature in Fahrenheit: ";\n    cin >> fahrenheit;\n    \n    int celsius = (fahrenheit - 32) * 5 / 9;\n    cout << "Temperature in Celsius: " << celsius << endl;\n    return 0;\n}`
        },
        {
          title: 'Using setw() for Alignment',
          description: 'Formatting output into clean columns.',
          code: `#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << setw(10) << "City" << setw(15) << "Population" << endl;\n    cout << "-------------------------" << endl;\n    cout << setw(10) << "London" << setw(15) << 8900000 << endl;\n    cout << setw(10) << "Tokyo" << setw(15) << 13900000 << endl;\n    return 0;\n}`
        },
        {
          title: 'Advanced Stream Formatting',
          description: 'Controlling decimal precision for currency.',
          code: `#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    float price = 12.34567f;\n    \n    cout << fixed << setprecision(2);\n    cout << "Formatted Price: $" << price << endl; // Prints 12.35\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What does the extraction operator `>>` do when it encounters a space while reading a string?',
          answer: 'It stops reading. `cin >>` uses whitespace (spaces, tabs, newlines) as delimiters, so it will only read a single word.'
        },
        {
          question: 'Why must you include `<iomanip>` to use `setw`?',
          answer: 'Because `setw` is a parameterized manipulator, and the definitions for manipulators that take arguments are located in the `iomanip` (I/O manipulation) header, not the standard `iostream` header.'
        },
        {
          question: 'What is the difference between `\\n` and `endl`?',
          answer: 'Both insert a new line, but `endl` additionally forces the output buffer to flush, meaning data is immediately written to the screen rather than waiting in memory.'
        }
      ]
    }
  ]
};

export default chapter2;
