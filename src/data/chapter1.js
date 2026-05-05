const chapter1 = {
  id: 1,
  title: 'Introduction to C++ and Basic Syntax',
  description: 'The foundation of C++ programming. Learn the core syntax, data types, operators, and basic I/O mechanisms required to begin your journey.',
  topics: [
    {
      title: 'Introduction to C++ & History',
      explanation: 'C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". It has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.\n\nThe language was designed with an orientation toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications, including desktop applications, video games, servers (e.g. e-commerce, Web search, or SQL servers), and performance-critical applications (e.g. telephone switches or space probes).\n\nC++ is standardized by the International Organization for Standardization (ISO), with the latest standard version ratified and published by ISO in December 2020 as ISO/IEC 14882:2020 (informally known as C++20).',
      examples: [
        {
          title: 'Hello World - The Standard Starting Point',
          description: 'A simple program to output "Hello, World!" to the console. Notice the use of the iostream library.',
          code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`
        },
        {
          title: 'Hello World with using namespace std',
          description: 'A variation of the classic program that demonstrates how bringing the standard namespace into scope can shorten your code.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Who is the creator of the C++ programming language?',
          answer: 'Bjarne Stroustrup created C++ at Bell Labs in the early 1980s.'
        },
        {
          question: 'What was the original name of C++?',
          answer: 'The language was originally known as "C with Classes" before being renamed to C++ in 1983.'
        },
        {
          question: 'What is the standard body that oversees C++ updates?',
          answer: 'The International Organization for Standardization (ISO).'
        },
        {
          question: 'What is the purpose of the #include <iostream> directive?',
          answer: 'It includes the standard input/output stream library, allowing you to use std::cin and std::cout for console I/O.'
        }
      ]
    },
    {
      title: 'Variables and Data Types',
      explanation: 'In C++, a variable is a named storage location in memory that holds a value. The type of value that a variable can hold is defined by its data type. C++ provides a rich set of built-in as well as user-defined data types.\n\nPrimitive (Built-in) Data Types:\n- int: Used for integer values (e.g., 5, -10, 1000). Typically takes 4 bytes of memory.\n- float: Single-precision floating-point numbers (e.g., 3.14f). Typically takes 4 bytes.\n- double: Double-precision floating-point numbers (e.g., 3.14159). Typically takes 8 bytes, offering higher precision.\n- char: Character data type (e.g., \'A\', \'z\'). Typically takes 1 byte.\n- bool: Boolean data type representing true or false.\n- void: Represents the absence of a type, typically used for functions that do not return a value.\n\nModifiers:\nData types can be modified using modifiers like signed, unsigned, short, and long to alter their storage size or range of values. For example, an unsigned int can only store non-negative values, effectively doubling its maximum positive limit compared to a standard signed int.\n\nInitialization:\nVariables should ideally be initialized when declared to avoid undefined behavior resulting from garbage values in memory. C++ supports C-style initialization (int a = 5;), constructor initialization (int a(5);), and modern uniform initialization (int a{5};).',
      examples: [
        {
          title: 'Basic Data Types Initialization',
          description: 'Declaring and initializing variables of various fundamental types.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    float height = 5.9f;\n    double pi = 3.1415926535;\n    char grade = 'A';\n    bool isStudent = true;\n\n    cout << "Age: " << age << endl;\n    cout << "Height: " << height << endl;\n    cout << "Grade: " << grade << endl;\n    return 0;\n}`
        },
        {
          title: 'Using Modifiers',
          description: 'Demonstrating the use of unsigned and long modifiers.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    unsigned int distance = 4000000000; // Large positive integer\n    long long population = 7800000000LL;\n\n    cout << "Distance: " << distance << endl;\n    cout << "Population: " << population << endl;\n    return 0;\n}`
        },
        {
          title: 'Uniform Initialization (C++11)',
          description: 'Using curly braces for strict initialization.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int value{10};\n    double price{19.99};\n    \n    // int narrow{4.5}; // Error: prevents narrowing conversions\n    \n    cout << "Value: " << value << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the difference between float and double?',
          answer: 'float is a single-precision floating-point type usually taking 4 bytes, while double is a double-precision floating-point type usually taking 8 bytes, offering roughly twice the decimal precision.'
        },
        {
          question: 'Why is uniform initialization (brace initialization) preferred in modern C++?',
          answer: 'Because it prevents narrowing conversions (e.g., trying to initialize an int with a double value will cause a compiler error rather than silently truncating the value) and provides a consistent syntax.'
        },
        {
          question: 'What does the unsigned modifier do?',
          answer: 'It restricts the data type to only store non-negative values (0 and positive numbers), which doubles the maximum positive value the type can hold.'
        },
        {
          question: 'What is the typical memory size of a char in C++?',
          answer: '1 byte.'
        }
      ]
    },
    {
      title: 'Operators and Expressions',
      explanation: 'An operator is a symbol that tells the compiler to perform specific mathematical or logical manipulations. C++ is rich in built-in operators and provides the following types of operators:\n\n1. Arithmetic Operators: Used to perform mathematical operations (+, -, *, /, %). The modulo operator (%) returns the remainder of an integer division.\n\n2. Relational Operators: Used to compare two values (==, !=, >, <, >=, <=). They return a boolean result (true or false).\n\n3. Logical Operators: Used to combine conditional statements (&& [Logical AND], || [Logical OR], ! [Logical NOT]).\n\n4. Assignment Operators: Used to assign values to variables (=, +=, -=, *=, /=, %=).\n\n5. Bitwise Operators: Used to perform operations on the binary representations of integers (&, |, ^, ~, <<, >>). These are crucial for low-level system programming.\n\n6. Unary Operators: Operators that operate on a single operand, such as increment (++) and decrement (--). Note the difference between prefix (++a) and postfix (a++) forms: prefix increments the value before it is used in the expression, while postfix uses the current value and increments it afterward.\n\nExpressions are combinations of variables, constants, and operators that are evaluated to produce a value.',
      examples: [
        {
          title: 'Arithmetic and Modulo',
          description: 'Basic math operations including the remainder operator.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3;\n    cout << "Addition: " << a + b << endl;\n    cout << "Division: " << a / b << endl; // Integer division yields 3\n    cout << "Modulo: " << a % b << endl;   // Remainder is 1\n    return 0;\n}`
        },
        {
          title: 'Relational and Logical Combinations',
          description: 'Checking multiple conditions simultaneously.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    bool hasLicense = true;\n    \n    // Logical AND\n    if (age >= 18 && hasLicense) {\n        cout << "Can drive." << endl;\n    }\n    \n    // Logical OR\n    if (age < 18 || !hasLicense) {\n        cout << "Cannot drive." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'Prefix vs Postfix Increment',
          description: 'Understanding the order of evaluation in unary increment operators.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int y = x++; // y gets 5, then x becomes 6\n    cout << "x: " << x << ", y: " << y << endl;\n\n    int a = 5;\n    int b = ++a; // a becomes 6, then b gets 6\n    cout << "a: " << a << ", b: " << b << endl;\n    return 0;\n}`
        },
        {
          title: 'Bitwise Operators',
          description: 'Manipulating bits directly.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5;  // 0101\n    int b = 9;  // 1001\n    cout << "a & b: " << (a & b) << endl; // 0001 (1)\n    cout << "a | b: " << (a | b) << endl; // 1101 (13)\n    cout << "a ^ b: " << (a ^ b) << endl; // 1100 (12)\n    cout << "a << 1: " << (a << 1) << endl; // 1010 (10)\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the output of 15 % 4?',
          answer: '3, because 15 divided by 4 is 3 with a remainder of 3.'
        },
        {
          question: 'What is the difference between = and ==?',
          answer: '= is the assignment operator used to assign a value to a variable. == is the relational equality operator used to compare if two values are equal.'
        },
        {
          question: 'Explain the difference between prefix (++i) and postfix (i++).',
          answer: 'Prefix (++i) increments the value of i and then returns the new value. Postfix (i++) returns the current value of i for the expression, and then increments i afterward.'
        },
        {
          question: 'What does the bitwise left shift operator (<<) effectively do to an integer?',
          answer: 'It shifts the bits to the left, which effectively multiplies the integer by 2 for each position shifted (assuming no overflow).'
        }
      ]
    },
    {
      title: 'Basic Input and Output (I/O)',
      explanation: 'C++ uses a stream-based I/O model. A stream is an entity where a program can either insert or extract characters. The `<iostream>` library provides the definitions for these streams.\n\n- `std::cout`: The standard output stream, typically corresponding to the monitor. Used with the insertion operator (`<<`).\n- `std::cin`: The standard input stream, typically corresponding to the keyboard. Used with the extraction operator (`>>`).\n- `std::cerr`: The standard error stream, used for outputting error messages immediately (unbuffered).\n- `std::clog`: The standard log stream, used for general logging (buffered).\n\nWhen using `cin`, whitespace (spaces, tabs, newlines) acts as a delimiter, meaning `cin >> stringVariable` will only read up to the first space. To read an entire line including spaces, the `getline()` function is used.\n\nFormatting Output:\nManipulators can be used to format output. Examples include `std::endl` (inserts a newline and flushes the buffer), `std::setw` (sets width), `std::setprecision` (sets floating-point precision), and `std::fixed` (forces standard decimal notation instead of scientific).',
      examples: [
        {
          title: 'Basic cin and cout',
          description: 'Reading a single word or number and printing it.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age;\n    cout << "Enter your age: ";\n    cin >> age;\n    cout << "You are " << age << " years old." << endl;\n    return 0;\n}`
        },
        {
          title: 'Reading Full Lines with getline',
          description: 'How to read strings that contain spaces.',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string fullName;\n    cout << "Enter your full name: ";\n    getline(cin, fullName);\n    cout << "Hello, " << fullName << "!" << endl;\n    return 0;\n}`
        },
        {
          title: 'Formatting Output',
          description: 'Using iomanip manipulators to control the display of numbers.',
          code: `#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double pi = 3.1415926535;\n    cout << "Default: " << pi << endl;\n    cout << "Fixed & Precision 2: " << fixed << setprecision(2) << pi << endl;\n    cout << "Width 10: " << setw(10) << pi << endl;\n    return 0;\n}`
        },
        {
          title: 'Handling Multiple Inputs',
          description: 'Chaining the extraction operator to read multiple variables.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, y;\n    cout << "Enter two numbers separated by a space: ";\n    cin >> x >> y;\n    cout << "Sum: " << (x + y) << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Why does `cin >> myString` fail to read a sentence like "Hello World"?',
          answer: 'Because the extraction operator (>>) stops reading when it encounters whitespace. It will only read "Hello".'
        },
        {
          question: 'What is the purpose of std::endl?',
          answer: 'It inserts a newline character into the output stream and flushes the stream buffer to ensure all data is immediately written to the device.'
        },
        {
          question: 'What header file must be included to use setprecision and setw?',
          answer: 'The <iomanip> header.'
        },
        {
          question: 'What is the difference between cout and cerr?',
          answer: 'cout is for standard output and is buffered. cerr is for standard error output and is unbuffered, meaning it displays immediately even if the program crashes shortly after.'
        }
      ]
    }
  ]
};

export default chapter1;
