const chapter6 = {
  id: 6,
  title: 'Objects and Classes',
  description: 'The fundamental building blocks of OOP. Define classes, create objects, and understand constructors and destructors.',
  topics: [
    {
      title: 'Classes and Objects',
      explanation: `A **class** is the core feature of C++ that supports object-oriented programming. It is a user-defined data type that binds data and functions together into a single unit.

### Defining a Class
A class definition starts with the keyword \`class\` followed by the class name. The body is enclosed in braces and terminated by a semicolon. Inside the body, you define data members and member functions.

### Access Specifiers
* \`private\`: Members declared here can **only** be accessed by member functions of the class. By default, all members of a class are private. This implements data hiding (encapsulation).
* \`public\`: Members declared here can be accessed from outside the class anywhere the object is visible.

### Creating Objects
Once a class is defined, it acts as a blueprint. You create an object of that class exactly like you create a variable of a basic type (e.g., \`Car myCar;\`).

### Accessing Members
You use the dot operator (\`.\`) to call public member functions or access public data members of an object.`,
      examples: [
        {
          title: 'A Simple Class Definition',
          description: 'Defining a class and creating an object to use its methods.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int width;\n    int height;\npublic:\n    void setDimensions(int w, int h) {\n        width = w;\n        height = h;\n    }\n    int getArea() {\n        return width * height;\n    }\n};\n\nint main() {\n    Rectangle rect; // Create an object\n    rect.setDimensions(5, 10); // Access public method\n    // rect.width = 5; // ERROR: width is private\n    cout << "Area: " << rect.getArea() << endl;\n    return 0;\n}`
        },
        {
          title: 'Multiple Objects',
          description: 'Creating multiple instances of the same class. Each maintains its own internal state.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int count;\npublic:\n    void init() { count = 0; }\n    void inc() { count++; }\n    int getCount() { return count; }\n};\n\nint main() {\n    Counter c1, c2;\n    c1.init();\n    c2.init();\n    \n    c1.inc();\n    c1.inc();\n    c2.inc();\n    \n    cout << "c1: " << c1.getCount() << endl; // Outputs 2\n    cout << "c2: " << c2.getCount() << endl; // Outputs 1\n    return 0;\n}`
        },
        {
          title: 'Classes with Internal Logic',
          description: 'A class protecting its data through internal validation.',
          code: `#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\npublic:\n    void init(double initial) {\n        if(initial >= 0) balance = initial;\n        else balance = 0;\n    }\n    void withdraw(double amount) {\n        if(amount <= balance) balance -= amount;\n        else cout << "Insufficient funds!" << endl;\n    }\n    double getBalance() { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.init(100.0);\n    acc.withdraw(150.0); // Fails safely\n    cout << "$" << acc.getBalance() << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the default access specifier for members of a `class`?',
          answer: 'Private. If you do not specify an access specifier, all data and functions defined in a class are private by default.'
        },
        {
          question: 'How does a class differ from a C-style struct?',
          answer: 'In C++, they are almost identical, but with one key difference: members of a `struct` are public by default, whereas members of a `class` are private by default.'
        },
        {
          question: 'Can member functions access `private` variables of the class?',
          answer: 'Yes, that is the core mechanism of encapsulation. Public member functions act as the "gateway" to the private data.'
        }
      ]
    },
    {
      title: 'Constructors and Destructors',
      explanation: `### Constructors
When you create an object, you usually want to initialize its member variables immediately. C++ provides a special member function called a **constructor** that executes automatically when an object is created. 
* It has the EXACT same name as the class.
* It has NO return type (not even void).

### Overloaded Constructors
You can define multiple constructors with different parameter lists, allowing objects to be initialized in different ways. If you provide no constructor, the compiler generates a default no-argument constructor.

### Destructors
A **destructor** is called automatically when an object is destroyed (when it goes out of scope or is explicitly deleted). It is used to free up resources (like memory or file handles) that the object acquired during its lifetime.
* It has the same name as the class, preceded by a tilde (\`~\`).
* It takes NO arguments and has NO return type.
* There can only be ONE destructor per class.`,
      examples: [
        {
          title: 'Basic Constructor',
          description: 'Automatically initializing data upon object creation.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int count;\npublic:\n    // Constructor\n    Counter() {\n        count = 0;\n        cout << "Counter initialized!" << endl;\n    }\n    int getCount() { return count; }\n};\n\nint main() {\n    Counter c1; // Constructor runs immediately here\n    cout << "Value: " << c1.getCount() << endl;\n    return 0;\n}`
        },
        {
          title: 'Overloaded Constructors',
          description: 'Providing multiple ways to construct an object.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\nprivate:\n    int feet;\n    float inches;\npublic:\n    Distance() { // No-arg constructor\n        feet = 0; \n        inches = 0.0;\n    }\n    Distance(int ft, float in) { // Two-arg constructor\n        feet = ft;\n        inches = in;\n    }\n    void show() { cout << feet << "\\'-" << inches << "\\"" << endl; }\n};\n\nint main() {\n    Distance d1;          // Calls no-arg constructor\n    Distance d2(11, 6.0); // Calls two-arg constructor\n    d1.show();\n    d2.show();\n    return 0;\n}`
        },
        {
          title: 'Destructor Example',
          description: 'Showing when a destructor executes.',
          code: `#include <iostream>\nusing namespace std;\n\nclass FileHandler {\npublic:\n    FileHandler() { cout << "File opened." << endl; }\n    ~FileHandler() { cout << "File closed." << endl; } // Destructor\n};\n\nint main() {\n    cout << "Starting program." << endl;\n    {\n        FileHandler fh; // fh created, constructor runs\n        cout << "Doing work." << endl;\n    } // fh goes out of scope, destructor runs\n    cout << "Ending program." << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Can a constructor return a value?',
          answer: 'No, constructors do not have a return type, not even `void`.'
        },
        {
          question: 'How many destructors can a class have?',
          answer: 'Exactly one. Destructors cannot take arguments, so they cannot be overloaded.'
        },
        {
          question: 'What is a constructor initializer list?',
          answer: 'It is a more efficient way to initialize class members before the constructor body executes. Example: `Distance() : feet(0), inches(0.0) {}`.'
        }
      ]
    },
    {
      title: 'Objects as Function Arguments and Returning Objects',
      explanation: `Objects can be passed to functions and returned from functions just like standard variables.

### Passing Objects
You can pass objects by value (a copy is made) or by reference (no copy is made, and the function can modify the original object). Passing by reference (specifically \`const\` reference) is heavily preferred for objects to avoid the performance penalty of copying large amounts of data.

### The Default Copy Constructor
When an object is passed by value, returned by value, or initialized with another object of the same class (e.g., \`Class obj2 = obj1;\`), C++ automatically uses the **copy constructor**. 
* By default, the compiler provides a copy constructor that performs a shallow, member-wise copy of the data. 
* If your class uses dynamic memory (pointers), you must write a custom copy constructor to perform a deep copy.

### Returning Objects
A function can create a local object and return it. However, returning large objects by value can be slow, though modern C++ compilers heavily optimize this using Return Value Optimization (RVO).`,
      examples: [
        {
          title: 'Passing Objects to Functions',
          description: 'Adding two Distance objects together.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\npublic:\n    int feet;\n    float inches;\n    Distance() : feet(0), inches(0.0) {}\n    Distance(int f, float i) : feet(f), inches(i) {}\n    \n    // Method that takes an object as an argument\n    void addDistance(Distance d2, Distance d3) {\n        inches = d2.inches + d3.inches;\n        feet = 0;\n        if(inches >= 12.0) {\n            inches -= 12.0;\n            feet++;\n        }\n        feet += d2.feet + d3.feet;\n    }\n};\n\nint main() {\n    Distance dist1(5, 6.0);\n    Distance dist2(4, 7.5);\n    Distance dist3;\n    \n    dist3.addDistance(dist1, dist2); // Pass objects\n    cout << dist3.feet << "\\'-" << dist3.inches << "\\"" << endl;\n    return 0;\n}`
        },
        {
          title: 'Returning Objects from Functions',
          description: 'A method that returns a new Distance object.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\npublic:\n    int feet;\n    float inches;\n    Distance(int f=0, float i=0.0) : feet(f), inches(i) {}\n    \n    // Returns a Distance object\n    Distance addDistance(Distance d2) {\n        Distance temp;\n        temp.inches = inches + d2.inches;\n        if(temp.inches >= 12.0) {\n            temp.inches -= 12.0;\n            temp.feet = 1;\n        }\n        temp.feet += feet + d2.feet;\n        return temp;\n    }\n};\n\nint main() {\n    Distance d1(5, 6.0), d2(4, 7.5);\n    Distance d3 = d1.addDistance(d2); // Returns object\n    cout << d3.feet << "\\'-" << d3.inches << "\\"" << endl;\n    return 0;\n}`
        },
        {
          title: 'The Default Copy Constructor',
          description: 'Initializing an object with another object.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\npublic:\n    int feet;\n    float inches;\n    Distance(int f, float i) : feet(f), inches(i) {}\n};\n\nint main() {\n    Distance dist1(11, 6.0);\n    // Uses the default copy constructor!\n    Distance dist2 = dist1; \n    \n    cout << dist2.feet << "\\'-" << dist2.inches << "\\"" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the most efficient way to pass a large object into a function if the function only needs to read its data?',
          answer: 'Pass it by `const` reference (e.g., `void func(const BigObject& obj)`). This avoids the overhead of copying the object, while `const` ensures the function cannot accidentally modify it.'
        },
        {
          question: 'When is the default copy constructor called?',
          answer: 'It is called when a new object is created and initialized with an existing object of the same class (e.g., `Class obj2 = obj1;` or `Class obj2(obj1);`), or when passing/returning objects by value.'
        },
        {
          question: 'What is the difference between shallow copy and deep copy?',
          answer: 'A shallow copy copies the exact memory bits of variables, meaning pointers will point to the same memory address in both objects. A deep copy allocates new memory for pointers and copies the actual underlying data.'
        }
      ]
    }
  ]
};

export default chapter6;
