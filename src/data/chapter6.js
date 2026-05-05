const chapter6 = {
  id: 6,
  title: 'Objects and Classes',
  description: 'The heart of C++. Learn how to build your own custom data types with bundled data and behavior — the foundation of Object-Oriented Programming.',
  topics: [
    {
      title: 'Your First Class',
      explanation: `In Chapter 4, we learned about \`struct\` — a way to group different variables together. A **class** is like a turbocharged struct. 

The key difference: a class can also bundle in **functions** alongside the data.
And it can **hide** that data from the outside world for safety.

### Defining a Class
A class definition starts with the keyword \`class\`. Inside the body (inside \`{}\`), you define the class's data members and function members.

### The Two Access Specifiers
This is the critical concept that separates classes from structs:
* **\`private:\`** (default for classes) — Data declared here is like a locked vault. **No code outside the class can touch it.** Only the class's own functions can read or modify it.
* **\`public:\`** — Functions (and data) declared here are visible to the entire world. These are the "buttons on the outside of a vending machine" — a controlled interface.

### Creating Objects
Once you define a class blueprint, you create objects of it exactly like declaring any variable. Each object gets its own private copy of all the data members.

### The Dot Operator
Just like structs, you access the public members of an object using the dot operator (\`.\`).`,
      examples: [
        {
          title: 'A Simple Class',
          description: 'The classic example — a box with a number inside that only the box can change.',
          code: `#include <iostream>\nusing namespace std;\n\nclass SafeBox {\nprivate:\n    int secretNumber; // LOCKED. No one outside can touch this.\npublic:\n    void setNumber(int n) {   // A PUBLIC function to PUT data in\n        secretNumber = n;\n    }\n    int getNumber() {          // A PUBLIC function to GET data out\n        return secretNumber;\n    }\n};\n\nint main() {\n    SafeBox box;\n    box.setNumber(42);\n    // box.secretNumber = 99;  // ERROR: Cannot access private member\n    cout << box.getNumber() << endl;\n    return 0;\n}`
        },
        {
          title: 'Multiple Objects from One Blueprint',
          description: 'Each object is its own independent copy of the blueprint.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int count;\npublic:\n    void init()  { count = 0; }\n    void inc()   { count++;   }\n    int  get()   { return count; }\n};\n\nint main() {\n    Counter c1, c2; // Two separate counters\n    c1.init(); c2.init();\n    \n    c1.inc(); c1.inc(); // c1 incremented twice\n    c2.inc();           // c2 incremented once\n    \n    // They are completely independent!\n    cout << "c1 = " << c1.get() << endl; // 2\n    cout << "c2 = " << c2.get() << endl; // 1\n    return 0;\n}`
        },
        {
          title: 'A Class with Validation Logic',
          description: 'Using the private gate to enforce rules on data.',
          code: `#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\npublic:\n    void init(double startingBalance) {\n        // Reject negative starting balances\n        balance = (startingBalance >= 0) ? startingBalance : 0;\n    }\n    void withdraw(double amount) {\n        if(amount <= balance && amount > 0) {\n            balance -= amount;\n        } else {\n            cout << "Transaction denied." << endl;\n        }\n    }\n    double getBalance() { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.init(100.0);\n    acc.withdraw(150.0); // Denied\n    cout << "$" << acc.getBalance() << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the default access specifier for members of a `class`?',
          answer: 'Private. If you don\'t specify either `private:` or `public:`, all members are private by default.'
        },
        {
          question: 'How does a `class` in C++ differ from a `struct`?',
          answer: 'They are almost identical in capability, but the default access specifier is different: `struct` members are public by default, while `class` members are private by default. The convention is to use `class` for true OOP data types and `struct` for simple data containers.'
        },
        {
          question: 'Why would you make data private and provide `get` and `set` functions instead of just making the data public?',
          answer: 'Control. A public function can include validation logic (e.g., "don\'t accept negative balances"). If data is public, anyone can set it to any value, including illegal ones, bypassing all your safety checks.'
        }
      ]
    },
    {
      title: 'Constructors: Automatic Setup',
      explanation: `Every time you create a new object, you usually need to give its variables a sensible starting value. Without this, a variable might hold garbage data which causes very hard-to-find bugs.

### The Problem
Look at this code:
\`\`\`
BankAccount acc;
acc.withdraw(50); // What is the balance? Garbage!
\`\`\`
Before calling \`init()\`, the balance is undefined garbage data. Forgetting to call \`init()\` is a very easy mistake to make.

### The Constructor: Automatic Initialization
A **constructor** is a special function that the computer calls **automatically and immediately** the moment an object is created. You can never forget to call it because the language calls it for you.

### Rules of Constructors
1. It must have the **exact same name** as the class.
2. It has **no return type** — not even \`void\`.
3. It can have parameters, allowing different initialization options.

### Overloaded Constructors
Just like regular functions, constructors can be overloaded. You can provide a no-argument constructor and a constructor that takes initial values.`,
      examples: [
        {
          title: 'Your First Constructor',
          description: 'The bank account is now always safe because its balance is set to zero automatically.',
          code: `#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\npublic:\n    // Constructor: same name as class, no return type\n    BankAccount() {\n        balance = 0.0;\n        cout << "Account created with $0." << endl;\n    }\n    void deposit(double amount) { balance += amount; }\n    double get() { return balance; }\n};\n\nint main() {\n    BankAccount acc;     // Constructor fires automatically here!\n    acc.deposit(100.0);\n    cout << "Balance: $" << acc.get() << endl;\n    return 0;\n}`
        },
        {
          title: 'Constructor with Parameters',
          description: 'Allowing initial values to be provided at creation time.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Player {\nprivate:\n    string name;\n    int health;\npublic:\n    // Parameterized constructor\n    Player(string playerName, int startHealth) {\n        name = playerName;\n        health = startHealth;\n    }\n    void showStats() {\n        cout << name << " | HP: " << health << endl;\n    }\n};\n\nint main() {\n    Player hero("Aragorn", 100);\n    Player villain("Sauron", 9999);\n    hero.showStats();\n    villain.showStats();\n    return 0;\n}`
        },
        {
          title: 'Overloaded Constructors',
          description: 'Providing multiple ways to create an object.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\nprivate:\n    int feet;\n    float inches;\npublic:\n    Distance() {               // No-arg: starts at zero\n        feet = 0;\n        inches = 0.0;\n    }\n    Distance(int f, float i) { // Two-arg: starts at given values\n        feet = f;\n        inches = i;\n    }\n    void show() { cout << feet << "' " << inches << "\"" << endl; }\n};\n\nint main() {\n    Distance d1;            // Calls no-arg constructor: 0' 0\"\n    Distance d2(11, 6.5);  // Calls two-arg constructor\n    d1.show();\n    d2.show();\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Do you ever need to call a constructor manually?',
          answer: 'No. Constructors are called automatically by the language when an object is created. You simply pass the arguments in the parentheses where you declare the object (e.g., `Player hero("Aragorn", 100);`).'
        },
        {
          question: 'What happens if you define a class with no constructor at all?',
          answer: 'The compiler automatically generates a default no-argument constructor for you. It does nothing except allocate the memory.'
        },
        {
          question: 'What happens to the compiler\'s auto-generated default constructor if you write your OWN constructor?',
          answer: 'The compiler stops generating the auto-default. If you write a parameterized constructor but want to also be able to create objects with no arguments, you MUST explicitly define a no-argument constructor yourself too.'
        }
      ]
    },
    {
      title: 'Destructors and Object Lifetime',
      explanation: `Just as objects are born (via constructors), they also die. When an object is destroyed, C++ automatically calls a special cleanup function called a **destructor**.

### When is an Object Destroyed?
* When a local object's function ends and it goes out of scope.
* When an object created with \`new\` is explicitly deleted.

### What is a Destructor?
A destructor is the counterpart to a constructor. It runs automatically right before the object disappears from memory.
* Same name as the class, but preceded by a tilde symbol **\`~\`**.
* No return type, no parameters, and only ONE per class (cannot be overloaded).

### Why Do We Need Them?
For simple objects with basic integer/float data, destructors are often empty and the compiler handles cleanup automatically.
But if your object opened a file, allocated extra memory with \`new\`, or locked a network port, the destructor is your one guaranteed chance to release those resources before the object disappears.`,
      examples: [
        {
          title: 'Constructor and Destructor in Action',
          description: 'Watching the lifecycle of an object.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Lifecycle {\npublic:\n    Lifecycle() {\n        cout << "Object Born: Constructor called." << endl;\n    }\n    ~Lifecycle() { // The destructor\n        cout << "Object Dying: Destructor called." << endl;\n    }\n};\n\nint main() {\n    cout << "--- Entering block ---" << endl;\n    {\n        Lifecycle obj; // Born here\n        cout << "--- Inside block ---" << endl;\n    } // Destroyed here when block ends\n    cout << "--- Exited block ---" << endl;\n    return 0;\n}`
        },
        {
          title: 'Destructor for Resource Cleanup',
          description: 'The destructor as a reliable safety net for cleanup tasks.',
          code: `#include <iostream>\nusing namespace std;\n\nclass NetworkSocket {\nprivate:\n    bool connected;\npublic:\n    NetworkSocket(string server) {\n        connected = true;\n        cout << "Connected to " << server << endl;\n    }\n    ~NetworkSocket() {\n        // Guaranteed to run no matter how the program exits the scope\n        if(connected) {\n            connected = false;\n            cout << "Connection closed safely." << endl;\n        }\n    }\n};\n\nint main() {\n    NetworkSocket sock("google.com"); // Opens connection\n    cout << "Doing work..." << endl;\n    // When main ends, the destructor fires and closes the connection\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'How many destructors can a class have?',
          answer: 'Exactly one. Unlike constructors and regular functions, destructors cannot be overloaded because they take no arguments.'
        },
        {
          question: 'In what order are destructors called for local objects defined in the same scope?',
          answer: 'In the reverse order of construction. The last object created is the first one destroyed. This is the Last-In-First-Out (LIFO) principle.'
        },
        {
          question: 'What is the most critical use case for a destructor?',
          answer: 'Releasing dynamically allocated memory (preventing memory leaks). If a constructor used `new` to allocate heap memory, the destructor must use `delete` to free it, otherwise that memory is leaked and never returned to the system.'
        }
      ]
    },
    {
      title: 'Objects as Function Arguments',
      explanation: `Now that you understand classes and objects, let's combine them with what we learned about functions.

### Passing Objects to Functions
Objects can be passed to functions exactly like any other data type — by value or by reference.
* **By value:** A full copy of the object is made. Slow for large objects, and changes don't affect the original.
* **By reference:** The function works on the original object directly. Fast, and changes persist.
* **By \`const\` reference:** Best practice for read-only access. Fast (no copy) and safe (cannot modify).

### Returning Objects from Functions
A function can also create and return a new object. This is very useful for creating functions like "add two distances" that return the result as a new Distance object rather than modifying an existing one.

### The Copy Constructor
When you pass an object by value, or initialize one object from another (e.g., \`Car car2 = car1;\`), a special constructor called the **Copy Constructor** runs automatically to make the copy. By default, C++ provides one that copies every data member.`,
      examples: [
        {
          title: 'Passing Objects to a Function',
          description: 'A function that reads two Distance objects to calculate a total.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\npublic:\n    int feet; float inches;\n    Distance(int f, float i) : feet(f), inches(i) {}\n    void show() { cout << feet << "' " << inches << "\"" << endl; }\n};\n\n// Receiving two objects by CONST reference (safe and fast)\nvoid displaySum(const Distance& d1, const Distance& d2) {\n    float totalInches = (d1.feet * 12 + d1.inches) \n                      + (d2.feet * 12 + d2.inches);\n    int totalFeet = (int)(totalInches / 12);\n    float remaining = totalInches - totalFeet * 12;\n    cout << "Sum: " << totalFeet << "' " << remaining << "\"" << endl;\n}\n\nint main() {\n    Distance d1(5, 6.5), d2(3, 8.0);\n    displaySum(d1, d2);\n    return 0;\n}`
        },
        {
          title: 'Returning an Object from a Function',
          description: 'A method that returns a new object as its result.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Rectangle {\npublic:\n    int width, height;\n    Rectangle(int w, int h) : width(w), height(h) {}\n    \n    // This method returns a new Rectangle that is scaled up\n    Rectangle scale(int factor) {\n        Rectangle result(width * factor, height * factor);\n        return result;\n    }\n};\n\nint main() {\n    Rectangle small(10, 5);\n    Rectangle large = small.scale(3);\n    cout << large.width << " x " << large.height << endl; // 30 x 15\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the most efficient way to pass a large object to a function if the function only needs to read its data?',
          answer: 'By `const` reference: `void func(const MyClass& obj)`. This avoids the slowness of making a full copy (pass by value) while the `const` keyword guarantees the function cannot modify the original.'
        },
        {
          question: 'When is the copy constructor called?',
          answer: 'It is called in three situations: (1) When a new object is initialized from an existing object (`Car car2 = car1`). (2) When an object is passed by value to a function. (3) When a function returns an object by value.'
        },
        {
          question: 'What is the difference between a shallow copy and a deep copy?',
          answer: 'A shallow copy (what the default copy constructor does) copies the exact values of all members, including pointers. If a pointer is copied, both objects now point to the SAME memory. A deep copy allocates new memory for the pointer and copies the data itself, so both objects are truly independent.'
        }
      ]
    }
  ]
};

export default chapter6;
