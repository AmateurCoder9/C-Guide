const chapter2 = {
  id: 2,
  title: 'C++ Programming Basics',
  description: 'Basic syntax, program construction, input/output operations, and understanding variables and basic arithmetic operators.',
  topics: [
    {
      title: 'Program Structure and Directives',
      explanation: 'Every C++ program has a specific structure. It begins with preprocessor directives, followed by the `main()` function where execution starts.\n\nPreprocessor Directives:\nStatements starting with a `#` (like `#include <iostream>`) are preprocessor directives. They are instructions to the compiler to perform actions before the actual compilation begins. `#include` tells the compiler to insert the contents of another file into your source code. `<iostream>` is a header file that contains declarations for input/output operations.\n\nThe `using namespace std;` Directive:\nA namespace is a declarative region that provides a scope to the identifiers (the names of types, functions, variables, etc) inside it. The C++ Standard Library is housed in the `std` namespace. Using this directive allows you to write `cout` instead of `std::cout`.\n\nThe `main()` Function:\nThis is the entry point of every C++ program. The operating system calls `main()` to start execution. It returns an `int` value to the OS; a return of `0` typically indicates successful execution.',
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
        }
      ]
    },
    {
      title: 'Variables, Constants, and Data Types',
      explanation: 'Programs need to store data in memory, and variables are the names given to these memory locations.\n\nFundamental Data Types:\n- Integer Types: `int` (typically 4 bytes), `short` (2 bytes), `long` (4 or 8 bytes). Used for whole numbers.\n- Character Type: `char` (1 byte). Stores a single ASCII character (like \'A\').\n- Floating-Point Types: `float` (4 bytes, single precision), `double` (8 bytes, double precision). Used for numbers with fractional parts.\n- Boolean Type: `bool`. Can only hold `true` (1) or `false` (0).\n\nConstants:\nSometimes you want a variable whose value cannot be changed after initialization. You can use the `const` keyword. For example, `const float PI = 3.14159f;`.\n\nVariable Definition:\nVariables must be defined before they are used. The definition tells the compiler the type and name of the variable, allowing it to allocate the correct amount of memory.',
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
        }
      ]
    },
    {
      title: 'Input, Output, and Manipulators',
      explanation: 'C++ handles I/O via streams. The `iostream` library provides two main objects: `cout` and `cin`.\n\nOutput (`cout`):\nThe insertion operator `<<` is used to send data to the standard output stream (usually the screen). You can chain multiple insertion operators to print multiple items on a single line.\n\nInput (`cin`):\nThe extraction operator `>>` is used to pull data from the standard input stream (usually the keyboard) and store it into a variable. `cin` automatically converts the textual input into the correct data type of the variable receiving it.\n\nManipulators:\nManipulators are instructions sent to the stream to alter its formatting. \n- `endl`: Inserts a newline character and flushes the output buffer.\n- `setw()`: Defined in `<iomanip>`, it sets the width of the next field to be output. Useful for aligning columns of data.',
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
        }
      ]
    }
  ]
};

export default chapter2;
