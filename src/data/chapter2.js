const chapter2 = {
  id: 2,
  title: 'Data Types, Variables & Operators',
  description: 'Understand fundamental data types, variable declarations, constants, and all categories of operators in C++.',
  icon: 'Database',
  color: 'from-violet-500 to-purple-600',
  topics: [
    {
      id: '2.1',
      title: 'Fundamental Data Types',
      explanation: `C++ provides several built-in data types: int (integers), float/double (decimals), char (single character), bool (true/false), and void. Each type has a specific size in memory and range of values. Use sizeof() to check the byte size of any type on your system.`,
      examples: [
        {
          title: 'Basic Data Types',
          code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    float height = 5.9f;
    double pi = 3.14159265358979;
    char grade = 'A';
    bool passed = true;

    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Pi: " << pi << endl;
    cout << "Grade: " << grade << endl;
    cout << "Passed: " << passed << endl;
    return 0;
}`,
          output: `Age: 20
Height: 5.9
Pi: 3.14159
Grade: A
Passed: 1`
        },
        {
          title: 'sizeof Operator',
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "float: " << sizeof(float) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    cout << "char: " << sizeof(char) << " byte" << endl;
    cout << "bool: " << sizeof(bool) << " byte" << endl;
    cout << "long long: " << sizeof(long long) << " bytes" << endl;
    return 0;
}`,
          output: `int: 4 bytes
float: 4 bytes
double: 8 bytes
char: 1 byte
bool: 1 byte
long long: 8 bytes`
        },
        {
          title: 'Type Modifiers',
          code: `#include <iostream>
using namespace std;

int main() {
    short s = 32767;
    unsigned int u = 4294967295;
    long long ll = 9223372036854775807;

    cout << "short: " << s << endl;
    cout << "unsigned int: " << u << endl;
    cout << "long long: " << ll << endl;
    return 0;
}`,
          output: `short: 32767
unsigned int: 4294967295
long long: 9223372036854775807`
        }
      ]
    },
    {
      id: '2.2',
      title: 'Variables and Constants',
      explanation: `A variable is a named storage location in memory. It must be declared with a type before use. Constants are variables whose values cannot change after initialization. Use 'const' keyword or '#define' to create constants. Variable names must start with a letter or underscore, and are case-sensitive.`,
      examples: [
        {
          title: 'Variable Declaration and Initialization',
          code: `#include <iostream>
using namespace std;

int main() {
    int x;          // Declaration
    x = 10;         // Assignment
    int y = 20;     // Declaration + Initialization
    int a = 5, b = 10, c = 15; // Multiple variables

    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "a = " << a << ", b = " << b << ", c = " << c << endl;
    return 0;
}`,
          output: `x = 10
y = 20
a = 5, b = 10, c = 15`
        },
        {
          title: 'Constants with const',
          code: `#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    const int MAX_SIZE = 100;
    const string GREETING = "Hello";

    cout << "PI = " << PI << endl;
    cout << "MAX_SIZE = " << MAX_SIZE << endl;
    cout << GREETING << ", World!" << endl;
    // PI = 3.14; // Error! Cannot modify const
    return 0;
}`,
          output: `PI = 3.14159
MAX_SIZE = 100
Hello, World!`
        },
        {
          title: 'auto Keyword (C++11)',
          code: `#include <iostream>
using namespace std;

int main() {
    auto x = 42;        // int
    auto y = 3.14;      // double
    auto c = 'A';       // char
    auto flag = true;   // bool

    cout << "x (int): " << x << endl;
    cout << "y (double): " << y << endl;
    cout << "c (char): " << c << endl;
    cout << "flag (bool): " << flag << endl;
    return 0;
}`,
          output: `x (int): 42
y (double): 3.14
c (char): A
flag (bool): 1`
        }
      ]
    },
    {
      id: '2.3',
      title: 'Arithmetic and Assignment Operators',
      explanation: `Arithmetic operators: + (add), - (subtract), * (multiply), / (divide), % (modulus). Integer division truncates decimals. Assignment operators combine arithmetic with assignment: +=, -=, *=, /=, %=. Increment (++) and decrement (--) operators increase/decrease by 1 and can be prefix or postfix.`,
      examples: [
        {
          title: 'Arithmetic Operations',
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 17, b = 5;
    cout << "a + b = " << a + b << endl;
    cout << "a - b = " << a - b << endl;
    cout << "a * b = " << a * b << endl;
    cout << "a / b = " << a / b << endl;  // Integer division
    cout << "a % b = " << a % b << endl;  // Remainder
    
    double x = 17.0, y = 5.0;
    cout << "x / y = " << x / y << endl;  // Float division
    return 0;
}`,
          output: `a + b = 22
a - b = 12
a * b = 85
a / b = 3
a % b = 2
x / y = 3.4`
        },
        {
          title: 'Compound Assignment Operators',
          code: `#include <iostream>
using namespace std;

int main() {
    int n = 10;
    cout << "Initial: " << n << endl;
    
    n += 5;  cout << "n += 5: " << n << endl;
    n -= 3;  cout << "n -= 3: " << n << endl;
    n *= 2;  cout << "n *= 2: " << n << endl;
    n /= 4;  cout << "n /= 4: " << n << endl;
    n %= 3;  cout << "n %= 3: " << n << endl;
    return 0;
}`,
          output: `Initial: 10
n += 5: 15
n -= 3: 12
n *= 2: 24
n /= 4: 6
n %= 3: 0`
        },
        {
          title: 'Increment and Decrement',
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 5;
    cout << "a = " << a << endl;
    cout << "a++ = " << a++ << endl;  // Post: use then increment
    cout << "a now = " << a << endl;
    cout << "++a = " << ++a << endl;  // Pre: increment then use
    cout << "--a = " << --a << endl;
    return 0;
}`,
          output: `a = 5
a++ = 5
a now = 6
++a = 7
--a = 6`
        }
      ]
    },
    {
      id: '2.4',
      title: 'Relational and Logical Operators',
      explanation: `Relational operators compare values and return bool: == (equal), != (not equal), < (less), > (greater), <= (less or equal), >= (greater or equal). Logical operators combine conditions: && (AND), || (OR), ! (NOT). Short-circuit evaluation: && stops if first is false, || stops if first is true.`,
      examples: [
        {
          title: 'Relational Operators',
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    cout << boolalpha;  // Print true/false instead of 1/0
    cout << "a == b: " << (a == b) << endl;
    cout << "a != b: " << (a != b) << endl;
    cout << "a < b: "  << (a < b) << endl;
    cout << "a > b: "  << (a > b) << endl;
    cout << "a <= b: " << (a <= b) << endl;
    cout << "a >= b: " << (a >= b) << endl;
    return 0;
}`,
          output: `a == b: false
a != b: true
a < b: true
a > b: false
a <= b: true
a >= b: false`
        },
        {
          title: 'Logical Operators',
          code: `#include <iostream>
using namespace std;

int main() {
    bool x = true, y = false;
    cout << boolalpha;
    cout << "x && y: " << (x && y) << endl;
    cout << "x || y: " << (x || y) << endl;
    cout << "!x: "     << (!x) << endl;
    cout << "!y: "     << (!y) << endl;
    
    int age = 20;
    bool isAdult = (age >= 18) && (age < 65);
    cout << "Is adult: " << isAdult << endl;
    return 0;
}`,
          output: `x && y: false
x || y: true
!x: false
!y: true
Is adult: true`
        },
        {
          title: 'Type Casting',
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 7, b = 2;
    
    // Implicit casting
    double result1 = a / b;  // Still 3.0 (int division first)
    double result2 = (double)a / b;  // C-style cast: 3.5
    double result3 = static_cast<double>(a) / b;  // C++ cast
    
    cout << "int/int assigned to double: " << result1 << endl;
    cout << "C-style cast: " << result2 << endl;
    cout << "static_cast: " << result3 << endl;
    return 0;
}`,
          output: `int/int assigned to double: 3
C-style cast: 3.5
static_cast: 3.5`
        }
      ]
    }
  ]
};

export default chapter2;
