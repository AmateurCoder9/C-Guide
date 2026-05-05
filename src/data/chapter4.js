const chapter4 = {
  id: 4,
  title: 'Functions',
  description: 'Learn to write reusable code with function definitions, parameters, overloading, recursion, and inline functions.',
  icon: 'Code2',
  color: 'from-amber-500 to-orange-600',
  topics: [
    {
      id: '4.1',
      title: 'Function Declaration and Definition',
      explanation: `A function is a reusable block of code that performs a specific task. Declaration (prototype) tells the compiler the function's name, return type, and parameters. Definition contains the actual body. Functions promote code reuse and modularity. The return type specifies what the function gives back; void means nothing is returned.`,
      examples: [
        {
          title: 'Basic Function',
          code: `#include <iostream>
using namespace std;

// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(10, 25);
    cout << "10 + 25 = " << result << endl;
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
          output: '10 + 25 = 35'
        },
        {
          title: 'void Function',
          code: `#include <iostream>
using namespace std;

void printLine(int length) {
    for (int i = 0; i < length; i++) {
        cout << "-";
    }
    cout << endl;
}

int main() {
    printLine(20);
    cout << "  C++ Functions" << endl;
    printLine(20);
    return 0;
}`,
          output: `--------------------
  C++ Functions
--------------------`
        },
        {
          title: 'Function with Multiple Returns',
          code: `#include <iostream>
using namespace std;

string classify(int n) {
    if (n > 0) return "positive";
    if (n < 0) return "negative";
    return "zero";
}

int main() {
    cout << "15 is " << classify(15) << endl;
    cout << "-7 is " << classify(-7) << endl;
    cout << "0 is " << classify(0) << endl;
    return 0;
}`,
          output: `15 is positive
-7 is negative
0 is zero`
        }
      ]
    },
    {
      id: '4.2',
      title: 'Pass by Value and Reference',
      explanation: `Pass by value creates a copy of the argument — changes inside the function don't affect the original. Pass by reference (using &) passes the actual variable — changes inside the function modify the original. Use references to avoid copying large objects or when the function needs to modify the caller's data.`,
      examples: [
        {
          title: 'Pass by Value vs Reference',
          code: `#include <iostream>
using namespace std;

void byValue(int x) { x = 100; }
void byReference(int &x) { x = 100; }

int main() {
    int a = 5, b = 5;
    
    byValue(a);
    cout << "After byValue: a = " << a << endl;
    
    byReference(b);
    cout << "After byReference: b = " << b << endl;
    return 0;
}`,
          output: `After byValue: a = 5
After byReference: b = 100`
        },
        {
          title: 'Swap Using References',
          code: `#include <iostream>
using namespace std;

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    cout << "Before: x=" << x << " y=" << y << endl;
    swap(x, y);
    cout << "After:  x=" << x << " y=" << y << endl;
    return 0;
}`,
          output: `Before: x=10 y=20
After:  x=20 y=10`
        },
        {
          title: 'Returning Multiple Values via Reference',
          code: `#include <iostream>
using namespace std;

void minMax(int arr[], int n, int &mn, int &mx) {
    mn = mx = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < mn) mn = arr[i];
        if (arr[i] > mx) mx = arr[i];
    }
}

int main() {
    int arr[] = {3, 7, 1, 9, 4};
    int mn, mx;
    minMax(arr, 5, mn, mx);
    cout << "Min: " << mn << ", Max: " << mx << endl;
    return 0;
}`,
          output: 'Min: 1, Max: 9'
        }
      ]
    },
    {
      id: '4.3',
      title: 'Default Arguments and Overloading',
      explanation: `Default arguments provide fallback values for parameters when no argument is supplied. They must be specified from right to left. Function overloading allows multiple functions with the same name but different parameter lists (number or type). The compiler selects the correct version based on the arguments used.`,
      examples: [
        {
          title: 'Default Arguments',
          code: `#include <iostream>
using namespace std;

void greet(string name, string greeting = "Hello") {
    cout << greeting << ", " << name << "!" << endl;
}

int main() {
    greet("Alice");              // Uses default
    greet("Bob", "Good morning"); // Overrides default
    greet("Charlie", "Hey");
    return 0;
}`,
          output: `Hello, Alice!
Good morning, Bob!
Hey, Charlie!`
        },
        {
          title: 'Function Overloading',
          code: `#include <iostream>
using namespace std;

int area(int side) {
    return side * side;       // Square
}
double area(double r) {
    return 3.14159 * r * r;   // Circle
}
int area(int l, int w) {
    return l * w;             // Rectangle
}

int main() {
    cout << "Square(5): " << area(5) << endl;
    cout << "Circle(3.0): " << area(3.0) << endl;
    cout << "Rectangle(4,6): " << area(4, 6) << endl;
    return 0;
}`,
          output: `Square(5): 25
Circle(3.0): 28.2743
Rectangle(4,6): 24`
        },
        {
          title: 'Power with Default Exponent',
          code: `#include <iostream>
using namespace std;

double power(double base, int exp = 2) {
    double result = 1;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}

int main() {
    cout << "3^2 = " << power(3) << endl;
    cout << "2^8 = " << power(2, 8) << endl;
    cout << "5^3 = " << power(5, 3) << endl;
    return 0;
}`,
          output: `3^2 = 9
2^8 = 256
5^3 = 125`
        }
      ]
    },
    {
      id: '4.4',
      title: 'Recursion',
      explanation: `Recursion is when a function calls itself. Every recursive function needs a base case (stopping condition) and a recursive case. The call stack stores each function call until the base case is reached, then results are returned back up. Recursion is elegant for problems like factorial, Fibonacci, and tree traversal.`,
      examples: [
        {
          title: 'Factorial',
          code: `#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;        // Base case
    return n * factorial(n - 1); // Recursive case
}

int main() {
    for (int i = 0; i <= 6; i++) {
        cout << i << "! = " << factorial(i) << endl;
    }
    return 0;
}`,
          output: `0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720`
        },
        {
          title: 'Fibonacci Sequence',
          code: `#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Fibonacci sequence: ";
    for (int i = 0; i < 10; i++) {
        cout << fibonacci(i) << " ";
    }
    cout << endl;
    return 0;
}`,
          output: 'Fibonacci sequence: 0 1 1 2 3 5 8 13 21 34'
        },
        {
          title: 'Sum of Digits',
          code: `#include <iostream>
using namespace std;

int digitSum(int n) {
    if (n == 0) return 0;
    return (n % 10) + digitSum(n / 10);
}

int main() {
    cout << "Sum of digits of 12345: " << digitSum(12345) << endl;
    cout << "Sum of digits of 9876: " << digitSum(9876) << endl;
    return 0;
}`,
          output: `Sum of digits of 12345: 15
Sum of digits of 9876: 30`
        }
      ]
    }
  ]
};

export default chapter4;
