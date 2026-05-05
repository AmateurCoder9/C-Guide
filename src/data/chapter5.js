const chapter5 = {
  id: 5,
  title: 'Functions',
  description: 'Modularizing code through functions. Learn declarations, definitions, passing arguments, overloading, inline functions, and storage classes.',
  topics: [
    {
      title: 'Function Fundamentals and Passing Arguments',
      explanation: `Functions break large computing tasks into smaller ones, and enable people to build on what others have done instead of starting over from scratch.

### Structure of a Function
A function must be **declared** (prototyped) before it is used, and **defined** with its actual code body. 
* The prototype tells the compiler the return type, name, and parameter list so it knows how the function can be called.

### Passing by Value
By default, arguments are passed by value. 
* The function receives a **copy** of the actual variable. 
* Modifying this copy inside the function does not affect the original variable in the calling code.

### Passing by Reference
C++ introduces the reference type, denoted by an ampersand (\`&\`). 
* When an argument is passed by reference, the function accesses the **original variable** in the caller's memory space. 
* This allows the function to modify the caller's variables directly.
* It avoids the performance overhead of copying large data structures like structs or objects.`,
      examples: [
        {
          title: 'Function Prototypes and Definitions',
          description: 'A basic function separating prototype and definition.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid starline(); // Prototype\n\nint main() {\n    starline(); // Call\n    cout << "Data Type   Range" << endl;\n    starline(); // Call\n    return 0;\n}\n\nvoid starline() { // Definition\n    for(int j=0; j<20; j++) cout << '*';\n    cout << endl;\n}`
        },
        {
          title: 'Passing by Reference',
          description: 'Using references to modify variables from the calling function.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid scaleData(float& data, float factor) {\n    data = data * factor; // Directly modifies the original variable\n}\n\nint main() {\n    float myData = 100.0f;\n    scaleData(myData, 2.5f);\n    cout << "Scaled Data: " << myData << endl; // Outputs 250\n    return 0;\n}`
        },
        {
          title: 'Swapping Variables (Hard)',
          description: 'A classic use case for passing by reference.',
          code: `#include <iostream>\nusing namespace std;\n\n// Must pass by reference to modify the originals\nvoid swapValues(int& a, int& b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    swapValues(x, y);\n    cout << "x: " << x << ", y: " << y << endl; // Outputs x: 20, y: 10\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the main advantage of passing arguments by reference?',
          answer: 'It avoids the performance overhead of copying data, and it allows the function to directly modify the caller\'s original variables, effectively allowing the function to "return" multiple values.'
        },
        {
          question: 'Why do we need function prototypes?',
          answer: 'Because C++ compilers read code sequentially from top to bottom. A prototype tells the compiler that a function exists (and what its signature is) before it encounters the actual definition, preventing "undeclared identifier" errors.'
        },
        {
          question: 'What happens if you pass by reference but add the `const` keyword? (e.g., `void func(const int& x)`)',
          answer: 'It prevents the function from modifying the variable, while still avoiding the overhead of making a copy. This is the standard best practice for passing large objects that only need to be read.'
        }
      ]
    },
    {
      title: 'Advanced Features: Overloading, Inline, and Defaults',
      explanation: `Modern C++ provides several advanced features to make functions more flexible and efficient.

### Function Overloading
You can have multiple functions with the **same name**, provided their parameter lists (signatures) are different. 
* The compiler figures out which one to call based on the arguments you pass. 
* Note: Changing only the return type is not sufficient to overload a function.

### Inline Functions
Function calls have overhead (pushing arguments to the stack, jumping to the function, returning). 
* For very small, frequently called functions, this overhead is significant. 
* The \`inline\` keyword requests the compiler to insert the function's body directly into the calling code, eliminating the call overhead. 
* This speeds up the program but increases compiled file size (code bloat).

### Default Arguments
A function can be defined with default values for its rightmost parameters. If the caller omits these arguments, the defaults are used automatically.`,
      examples: [
        {
          title: 'Function Overloading',
          description: 'Two functions with the same name doing different things based on arguments.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid repchar() { // Prints 45 asterisks\n    for(int j=0; j<45; j++) cout << '*';\n    cout << endl;\n}\n\nvoid repchar(char ch, int n) { // Prints 'ch', 'n' times\n    for(int j=0; j<n; j++) cout << ch;\n    cout << endl;\n}\n\nint main() {\n    repchar();\n    repchar('=', 30);\n    return 0;\n}`
        },
        {
          title: 'Inline Functions',
          description: 'Requesting the compiler to expand the function inline.',
          code: `#include <iostream>\nusing namespace std;\n\n// Inline request\ninline float lbstokg(float pounds) {\n    return 0.453592 * pounds;\n}\n\nint main() {\n    float lbs = 150.0;\n    cout << lbs << " lbs is " << lbstokg(lbs) << " kg." << endl;\n    return 0;\n}`
        },
        {
          title: 'Default Arguments',
          description: 'Using default values for missing arguments.',
          code: `#include <iostream>\nusing namespace std;\n\n// Default arguments must be right-justified\nvoid display(char ch = '*', int n = 10) {\n    for(int j=0; j<n; j++) cout << ch;\n    cout << endl;\n}\n\nint main() {\n    display(); // Uses '*' and 10\n    display('='); // Uses '=' and 10\n    display('-', 20); // Uses '-' and 20\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Can you overload a function by only changing its return type? (e.g., `int func()` and `float func()`)',
          answer: 'No. The compiler determines which overloaded function to call based solely on the argument list (types, number, and order). The return type is ignored for overload resolution.'
        },
        {
          question: 'What is the trade-off of using `inline` functions?',
          answer: 'Inline functions increase execution speed by eliminating function call overhead, but they increase the memory size of the compiled executable (code bloat) because the function code is duplicated everywhere it is called.'
        },
        {
          question: 'Can you have a default argument as the first parameter but not the second? (e.g., `void func(int x = 5, int y)`)',
          answer: 'No. Once a parameter has a default argument, all subsequent (rightward) parameters must also have default arguments.'
        }
      ]
    },
    {
      title: 'Storage Classes and Variable Scope',
      explanation: `Every variable in C++ has a **storage class**, which dictates its lifetime (how long it exists in memory) and its scope (where it can be accessed in the code).

### 1. Automatic Variables (Local Scope)
Variables defined inside a function. 
* They are created when the function is called and destroyed when it exits. 
* They are not initialized automatically and will contain garbage data if not set.

### 2. External Variables (Global Scope)
Defined outside of all functions. 
* They exist for the lifetime of the program and can be accessed by any function defined after them. 
* They are automatically initialized to 0.

### 3. Static Variables
Defined inside a function with the \`static\` keyword. 
* Like local variables, they are only visible within the function. 
* However, like global variables, their lifetime is the entire duration of the program. 
* They retain their value between function calls and are initialized only once (to 0 by default).`,
      examples: [
        {
          title: 'Scope and Lifetime of Local Variables',
          description: 'Demonstrating that local variables are destroyed upon function exit.',
          code: `#include <iostream>\nusing namespace std;\n\nvoid someFunc() {\n    int a = 10; // Created here\n    cout << a << endl;\n} // 'a' is destroyed here\n\nint main() {\n    someFunc();\n    // cout << a; // ERROR: 'a' is not in scope\n    return 0;\n}`
        },
        {
          title: 'Static Variables',
          description: 'A variable that remembers its state between calls.',
          code: `#include <iostream>\nusing namespace std;\n\nint getNextID() {\n    static int id = 0; // Initialized ONLY ONCE\n    id++;\n    return id;\n}\n\nint main() {\n    cout << "ID 1: " << getNextID() << endl;\n    cout << "ID 2: " << getNextID() << endl;\n    cout << "ID 3: " << getNextID() << endl;\n    return 0;\n}`
        },
        {
          title: 'Global Variables (External Scope)',
          description: 'Variables accessible by multiple independent functions.',
          code: `#include <iostream>\nusing namespace std;\n\nint globalState = 5; // Global variable\n\nvoid modifyState() {\n    globalState += 10; // Can access it\n}\n\nint main() {\n    cout << "Initial: " << globalState << endl;\n    modifyState();\n    cout << "Modified: " << globalState << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the difference between a global variable and a static local variable?',
          answer: 'Both exist for the entire lifetime of the program, but a global variable can be accessed by any function, whereas a static local variable can only be accessed from within the function where it is defined.'
        },
        {
          question: 'What value is an uninitialized static variable given by default?',
          answer: 'Static variables (and global variables) are automatically initialized to zero by the compiler if no explicit initialization is provided. Local automatic variables, however, contain unpredictable garbage values.'
        },
        {
          question: 'Why are global variables generally discouraged in modern programming?',
          answer: 'They break the principle of encapsulation. Since any function can modify a global variable, it becomes very difficult to track down bugs or understand the state of the program in large applications.'
        }
      ]
    }
  ]
};

export default chapter5;
