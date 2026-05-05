const chapter1 = {
  id: 1,
  title: 'Introduction to C++',
  description: 'Learn the fundamentals: program structure, I/O operations, comments, and the compilation process.',
  icon: 'BookOpen',
  color: 'from-blue-500 to-cyan-500',
  topics: [
    {
      id: '1.1',
      title: 'History and Features of C++',
      explanation: `C++ was developed by Bjarne Stroustrup at Bell Labs in 1979 as an extension of C. It adds object-oriented features, strong type checking, and generic programming support. C++ is widely used in system software, game engines, embedded systems, and high-performance applications.

Key features: compiled language, supports OOP, low-level memory manipulation, rich standard library, platform independent source code, and backward compatible with C.`,
      examples: [
        {
          title: 'Minimal C++ Program',
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++ World!" << endl;
    return 0;
}`,
          output: 'Hello, C++ World!'
        },
        {
          title: 'Printing Multiple Lines',
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "C++ was created in 1979" << endl;
    cout << "Creator: Bjarne Stroustrup" << endl;
    cout << "Originally called: C with Classes" << endl;
    return 0;
}`,
          output: `C++ was created in 1979
Creator: Bjarne Stroustrup
Originally called: C with Classes`
        },
        {
          title: 'Using Escape Characters',
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "Features of C++:\\n";
    cout << "\\t1. Object-Oriented\\n";
    cout << "\\t2. Compiled Language\\n";
    cout << "\\t3. Platform Independent\\n";
    return 0;
}`,
          output: `Features of C++:
\t1. Object-Oriented
\t2. Compiled Language
\t3. Platform Independent`
        }
      ]
    },
    {
      id: '1.2',
      title: 'Structure of a C++ Program',
      explanation: `Every C++ program follows a basic structure: preprocessor directives (#include), namespace declaration, the main() function, and statements within curly braces. The main() function is the entry point where execution begins. The return 0 statement indicates successful execution to the operating system.`,
      examples: [
        {
          title: 'Basic Program Structure',
          code: `// Preprocessor directive
#include <iostream>

// Namespace declaration
using namespace std;

// Main function - entry point
int main() {
    // Program statements
    cout << "Program structure demo" << endl;
    
    // Return success
    return 0;
}`,
          output: 'Program structure demo'
        },
        {
          title: 'Without using namespace',
          code: `#include <iostream>

int main() {
    // Using std:: prefix instead
    std::cout << "Using std:: prefix" << std::endl;
    std::cout << "More explicit approach" << std::endl;
    return 0;
}`,
          output: `Using std:: prefix
More explicit approach`
        },
        {
          title: 'Multiple Statements',
          code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int y = 20;
    int sum = x + y;
    cout << "Sum of " << x << " and " << y << " is " << sum << endl;
    return 0;
}`,
          output: 'Sum of 10 and 20 is 30'
        }
      ]
    },
    {
      id: '1.3',
      title: 'Input and Output (cin / cout)',
      explanation: `C++ uses the iostream library for I/O operations. 'cout' (console output) with the insertion operator (<<) displays output. 'cin' (console input) with the extraction operator (>>) reads user input. Both belong to the std namespace. You can chain multiple << or >> operators in a single statement.`,
      examples: [
        {
          title: 'Reading Integer Input',
          code: `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "You are " << age << " years old." << endl;
    return 0;
}`,
          output: `Enter your age: 20
You are 20 years old.`
        },
        {
          title: 'Reading Multiple Values',
          code: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    cout << "First: " << a << ", Second: " << b << endl;
    cout << "Sum: " << a + b << endl;
    return 0;
}`,
          output: `Enter two numbers: 5 3
First: 5, Second: 3
Sum: 8`
        },
        {
          title: 'Reading a String',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    cout << "Enter your name: ";
    getline(cin, name);
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`,
          output: `Enter your name: John Doe
Hello, John Doe!`
        }
      ]
    },
    {
      id: '1.4',
      title: 'Comments and Preprocessor Directives',
      explanation: `Comments are non-executable text for documentation. Single-line comments use //, multi-line comments use /* */. Preprocessor directives start with # and are processed before compilation. #include adds header files, #define creates macros, and #ifndef/#endif prevent double inclusion.`,
      examples: [
        {
          title: 'Types of Comments',
          code: `#include <iostream>
using namespace std;

int main() {
    // This is a single-line comment
    
    /* This is a
       multi-line comment
       spanning multiple lines */
    
    cout << "Comments are ignored by compiler" << endl;
    
    int x = 5; // Inline comment after code
    cout << "x = " << x << endl;
    return 0;
}`,
          output: `Comments are ignored by compiler
x = 5`
        },
        {
          title: 'Using #define Macro',
          code: `#include <iostream>
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
using namespace std;

int main() {
    double radius = 5.0;
    double area = PI * SQUARE(radius);
    cout << "Radius: " << radius << endl;
    cout << "Area: " << area << endl;
    return 0;
}`,
          output: `Radius: 5
Area: 78.5398`
        },
        {
          title: 'Conditional Compilation',
          code: `#include <iostream>
#define DEBUG
using namespace std;

int main() {
    int result = 42;
    
    #ifdef DEBUG
    cout << "[DEBUG] result = " << result << endl;
    #endif
    
    cout << "Final answer: " << result << endl;
    return 0;
}`,
          output: `[DEBUG] result = 42
Final answer: 42`
        }
      ]
    }
  ]
};

export default chapter1;
