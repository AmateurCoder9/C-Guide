const chapter3 = {
  id: 3,
  title: 'Functions and Modularity',
  description: 'Break down complex programs into smaller, manageable, and reusable blocks of code known as functions. Learn about scope, parameters, and recursion.',
  topics: [
    {
      title: 'Function Definition, Declaration, and Calling',
      explanation: 'A function is a group of statements that together perform a task. Every C++ program has at least one function, which is `main()`, and all the most trivial programs can define additional functions.\n\nModularity: Functions divide code into logical blocks. This makes the code easier to read, debug, and maintain. Reusability is a key benefit: write a function once, use it multiple times.\n\nDeclaration (Prototype): Tells the compiler about a function\'s name, return type, and parameters. It allows the function to be called before it is fully defined. Usually placed above `main()` or in header files.\n\nDefinition: Provides the actual body of the function. It contains the code that executes when the function is called.\n\nCalling: Executing a function by writing its name followed by parentheses containing any necessary arguments. If the function returns a value, the call can be used as an expression.\n\nReturn Type: The data type of the value the function sends back to the caller. If it sends nothing back, the return type must be `void`.',
      examples: [
        {
          title: 'Basic Function Structure',
          description: 'A simple function that prints a greeting.',
          code: `#include <iostream>\nusing namespace std;\n\n// Function definition\nvoid sayHello() {\n    cout << "Hello from the function!" << endl;\n}\n\nint main() {\n    sayHello(); // Function call\n    return 0;\n}`
        },
        {
          title: 'Function Prototypes',
          description: 'Declaring a function before main and defining it after.',
          code: `#include <iostream>\nusing namespace std;\n\n// Function prototype\nint add(int a, int b);\n\nint main() {\n    int result = add(5, 10);\n    cout << "Sum: " << result << endl;\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}`
        },
        {
          title: 'Functions Returning Values',
          description: 'Calculating the square of a number and returning it.',
          code: `#include <iostream>\nusing namespace std;\n\nint square(int num) {\n    return num * num;\n}\n\nint main() {\n    int sq = square(7);\n    cout << "Square of 7 is " << sq << endl;\n    return 0;\n}`
        },
        {
          title: 'Void Functions with Return',
          description: 'Using an empty return statement to exit a void function early.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid checkPositive(int n) {\n    if (n <= 0) {\n        cout << "Not positive." << endl;\n        return; // Exits the function early\n    }\n    cout << "Positive!" << endl;\n}\n\nint main() {\n    checkPositive(-5);\n    checkPositive(10);\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the purpose of a function prototype?',
          answer: 'It informs the compiler about the function\'s name, return type, and parameters before its actual definition is encountered, allowing the function to be called earlier in the code.'
        },
        {
          question: 'Can a function return multiple values in C++?',
          answer: 'Directly, a function can only return one value. However, you can return multiple values by returning an object, a struct, a std::pair/std::tuple, or by passing arguments by reference.'
        },
        {
          question: 'What does a return type of `void` signify?',
          answer: 'It signifies that the function performs an action but does not return any value back to the caller.'
        },
        {
          question: 'What happens if a non-void function does not have a return statement?',
          answer: 'It leads to undefined behavior. The compiler might warn you, but if executed, it can return garbage values or crash.'
        }
      ]
    },
    {
      title: 'Parameters: Pass by Value vs Pass by Reference',
      explanation: 'When calling functions, you pass data to them via arguments. C++ provides two primary ways to pass arguments to functions:\n\n1. Pass by Value: The default mechanism. A copy of the actual argument is created and passed to the function. Any modifications made to the parameter inside the function do NOT affect the original variable in the caller\'s scope. This is safe but can be inefficient for large data structures like massive objects or arrays (which decay to pointers anyway).\n\n2. Pass by Reference: Instead of a copy, a reference (an alias) to the original variable is passed. This is done by appending an ampersand (`&`) to the parameter type. Modifications made to the reference parameter directly modify the original variable. This is highly efficient and allows a function to effectively "return" multiple values by modifying the arguments passed to it.\n\n3. Pass by Const Reference: Used when you want the efficiency of passing by reference (no copying) but want to guarantee that the function will not modify the original value. Syntax: `const Type& var`.',
      examples: [
        {
          title: 'Pass by Value',
          description: 'Modifying the parameter does not change the original variable.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid modifyValue(int x) {\n    x = 100; // Only changes the local copy\n}\n\nint main() {\n    int a = 5;\n    modifyValue(a);\n    cout << "a is still: " << a << endl; // Outputs 5\n    return 0;\n}`
        },
        {
          title: 'Pass by Reference',
          description: 'Using & to modify the original variable.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid modifyReference(int &x) {\n    x = 100; // Changes the original variable\n}\n\nint main() {\n    int a = 5;\n    modifyReference(a);\n    cout << "a is now: " << a << endl; // Outputs 100\n    return 0;\n}`
        },
        {
          title: 'Swapping Two Numbers',
          description: 'A classic example where pass by reference is mandatory.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    swap(x, y);\n    cout << "x: " << x << ", y: " << y << endl; // x: 20, y: 10\n    return 0;\n}`
        },
        {
          title: 'Pass by Const Reference',
          description: 'Passing large data efficiently without risking modification.',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid printString(const string &str) {\n    // str += " modified"; // ERROR: str is const\n    cout << str << endl;\n}\n\nint main() {\n    string msg = "Super long and heavy string...";\n    printString(msg);\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the primary disadvantage of pass by value?',
          answer: 'It creates a copy of the argument, which consumes additional memory and CPU cycles, making it highly inefficient for large data structures like structs, classes, or vectors.'
        },
        {
          question: 'How do you specify that a parameter is passed by reference?',
          answer: 'By placing an ampersand (&) next to the data type in the parameter list (e.g., `void func(int &x)`).'
        },
        {
          question: 'Why use `const` reference instead of standard pass by value?',
          answer: 'It combines the performance benefits of pass by reference (avoiding the overhead of copying) with the safety of pass by value (the function cannot alter the original data).'
        },
        {
          question: 'If a function needs to alter the caller\'s variable, which passing mechanism must be used?',
          answer: 'Pass by reference (or pass by pointer).'
        }
      ]
    },
    {
      title: 'Function Overloading and Default Arguments',
      explanation: 'Function Overloading: C++ allows you to specify more than one function of the same name in the same scope. These functions are called overloaded functions. The compiler determines which function to call based on the number, types, and sequence of arguments passed. Note: You cannot overload functions distinguished by return type alone.\n\nDefault Arguments: C++ allows you to assign default values to function parameters. If a caller omits an argument for a parameter with a default value, the default value is used. If the caller provides a value, the default is overridden.\n\nRules for Default Arguments:\n1. Default arguments must be assigned from right to left. You cannot have a non-default parameter following a default parameter.\n2. Default arguments should generally be defined in the function prototype (header), not the definition, to avoid redefinition errors.\n\nCombining Both: Be careful when combining function overloading and default arguments, as it can lead to ambiguous function calls where the compiler cannot decide which version to use.',
      examples: [
        {
          title: 'Function Overloading by Type',
          description: 'Having multiple add functions for different data types.',
          code: `#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\ndouble add(double a, double b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(5, 10) << endl;       // Calls int version\n    cout << add(3.5, 2.1) << endl;    // Calls double version\n    return 0;\n}`
        },
        {
          title: 'Function Overloading by Number of Arguments',
          description: 'Same type, different parameter count.',
          code: `#include <iostream>\nusing namespace std;\n\nint multiply(int a, int b) {\n    return a * b;\n}\n\nint multiply(int a, int b, int c) {\n    return a * b * c;\n}\n\nint main() {\n    cout << multiply(2, 3) << endl;       // Outputs 6\n    cout << multiply(2, 3, 4) << endl;    // Outputs 24\n    return 0;\n}`
        },
        {
          title: 'Default Arguments',
          description: 'Providing fallback values.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid greet(string name, string greeting = "Hello") {\n    cout << greeting << ", " << name << "!" << endl;\n}\n\nint main() {\n    greet("Alice");                 // Uses default "Hello"\n    greet("Bob", "Good morning");   // Overrides default\n    return 0;\n}`
        },
        {
          title: 'Right-to-Left Rule',
          description: 'Demonstrating valid default argument placement.',
          code: `#include <iostream>\nusing namespace std;\n\n// Valid: Default arguments are at the end\nvoid configure(int id, int retries = 3, int timeout = 30) {\n    cout << "ID: " << id << " Retries: " << retries << " Timeout: " << timeout << endl;\n}\n\n// Invalid: void invalidConfig(int id = 1, int max) {}\n\nint main() {\n    configure(101);\n    configure(102, 5);\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Can two functions be overloaded if they differ only in their return type?',
          answer: 'No. The compiler cannot determine which function to call based solely on what the return value will be assigned to (or if it\'s ignored entirely). The parameter lists must differ.'
        },
        {
          question: 'What is the rule for placing default arguments in a parameter list?',
          answer: 'Default arguments must be specified from right to left. Once a parameter has a default argument, all subsequent parameters to its right must also have default arguments.'
        },
        {
          question: 'What is an ambiguous function call?',
          answer: 'It occurs when the compiler finds two or more overloaded functions that could match a function call equally well (often due to implicit type conversions or default arguments), making it impossible to determine which one to execute.'
        },
        {
          question: 'If a default argument is defined in the function prototype, should it be repeated in the definition?',
          answer: 'No, repeating it in the definition usually results in a compilation error. It should only be specified once, typically in the prototype.'
        }
      ]
    }
  ]
};

export default chapter3;
