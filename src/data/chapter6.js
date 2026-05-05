const chapter6 = {
  id: 6,
  title: 'Objects and Classes',
  description: 'The heart of C++. Learn how to build your own custom data types with bundled data and behavior — the foundation of Object-Oriented Programming.',
  topics: [
    {
      id: "your-first-class",
      title: "Your First Class",
      description: "Learn how to define a class with private data and public functions.",
      explanation: `In Chapter 4, we learned about \`struct\` — a way to group different variables together. A **class** is like a turbocharged struct.

The key difference: a class can also bundle in **functions** alongside the data. And it can **hide** that data from the outside world for safety.

### Defining a Class
A class definition starts with the keyword \`class\`. Inside the body (inside \`{}\`), you define the class's data members and function members.

### The Two Access Specifiers
This is the critical concept that separates classes from structs:
* **\`private:\`** (default for classes) — Data declared here is like a locked vault. **No code outside the class can touch it.** Only the class's own functions can read or modify it.
* **\`public:\`** — Functions (and data) declared here are visible to the entire world. These are the "buttons on the outside of a vending machine" — a controlled interface.

The key philosophy: keep data **private** and provide **public** functions to interact with it. This way, the functions can validate the data before accepting it (e.g., "don't accept negative balances"). If data is public, anyone can set it to any value, including illegal ones, bypassing all your safety checks.

### Creating Objects
Once you define a class blueprint, you create objects of it exactly like declaring any variable. Each object gets its own private copy of all the data members.

### Classes vs Structs
They are almost identical in C++, but the default access specifier is different: \`struct\` members are public by default, while \`class\` members are private by default. The convention is to use \`class\` for true OOP data types and \`struct\` for simple data containers.`,
      examples: [
        {
          title: 'A Simple Class',
          code: `#include <iostream>
using namespace std;

class SafeBox {
private:
    int secretNumber; // LOCKED. No one outside can touch this.
public:
    void setNumber(int n) {   // A PUBLIC function to PUT data in
        secretNumber = n;
    }
    int getNumber() {          // A PUBLIC function to GET data out
        return secretNumber;
    }
};

int main() {
    SafeBox box;
    box.setNumber(42);
    // box.secretNumber = 99;  // ERROR: Cannot access private member
    cout << box.getNumber() << endl;
    return 0;
}`,
          explanation: "The classic example — a box with a number inside that only the box's own functions can change."
        },
        {
          title: 'A Class with Validation Logic',
          code: `#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;
public:
    void init(double startingBalance) {
        // Reject negative starting balances
        balance = (startingBalance >= 0) ? startingBalance : 0;
    }
    void withdraw(double amount) {
        if(amount <= balance && amount > 0) {
            balance -= amount;
        } else {
            cout << "Transaction denied." << endl;
        }
    }
    double getBalance() { return balance; }
};

int main() {
    BankAccount acc;
    acc.init(100.0);
    acc.withdraw(150.0); // Denied
    cout << "$" << acc.getBalance() << endl;
    return 0;
}`,
          explanation: "Using the private gate to enforce rules on data."
        }
      ],
      questions: [
        {
          question: 'What is the default access specifier for members of a `class`?',
          answer: 'Private. If you don\'t specify either `private:` or `public:`, all members are private by default.'
        },
        {
          question: 'How does a `class` in C++ differ from a `struct`?',
          answer: 'They are almost identical, but the default access specifier is different: `struct` members are public by default, while `class` members are private by default.'
        },
        {
          question: 'Why would you make data private and provide `get` and `set` functions instead of just making the data public?',
          answer: 'Control. A public function can include validation logic. If data is public, anyone can set it to any value, including illegal ones, bypassing all safety checks.'
        }
      ]
    },
    {
      id: "constructors",
      title: "Constructors: Automatic Setup",
      description: "Learn how to automatically initialize your objects the moment they are created.",
      explanation: `Every time you create a new object, you usually need to give its variables a sensible starting value. Without this, a variable might hold garbage data which causes very hard-to-find bugs.

### The Problem
Look at this code:
\`BankAccount acc; acc.withdraw(50);\`
Before calling \`init()\`, the balance is undefined garbage data. Forgetting to call \`init()\` is a very easy mistake to make.

### The Constructor: Automatic Initialization
A **constructor** is a special function that the computer calls **automatically and immediately** the moment an object is created. You can never forget to call it because the language calls it for you.

### Rules of Constructors
1. It must have the **exact same name** as the class.
2. It has **no return type** — not even \`void\`.
3. It can have parameters, allowing different initialization options.

### Overloaded Constructors
Just like regular functions, constructors can be overloaded. You can provide a no-argument constructor (for default values) and a parameterized constructor (for custom starting values).

If you define NO constructor at all, the compiler automatically generates a default no-argument constructor for you. But if you write ANY constructor of your own, the compiler stops generating the default. So if you write a parameterized constructor but also want to create objects with no arguments, you must explicitly define a no-argument constructor too.

At a deeper level, constructors follow specific initialization sequences: base classes first, then member objects in the order they are declared, then the constructor body. For better performance, use **Member Initializer Lists** like \`MyClass() : member(val) {}\` instead of assigning values inside the constructor body.`,
      examples: [
        {
          title: 'Your First Constructor',
          code: `#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;
public:
    // Constructor: same name as class, no return type
    BankAccount() {
        balance = 0.0;
        cout << "Account created with $0." << endl;
    }
    void deposit(double amount) { balance += amount; }
    double get() { return balance; }
};

int main() {
    BankAccount acc;     // Constructor fires automatically here!
    acc.deposit(100.0);
    cout << "Balance: $" << acc.get() << endl;
    return 0;
}`,
          explanation: "The bank account is now always safe because its balance is set to zero automatically."
        },
        {
          title: 'Overloaded Constructors',
          code: `#include <iostream>
using namespace std;

class Distance {
private:
    int feet;
    float inches;
public:
    Distance() {               // No-arg: starts at zero
        feet = 0;
        inches = 0.0;
    }
    Distance(int f, float i) { // Two-arg: starts at given values
        feet = f;
        inches = i;
    }
    void show() { cout << feet << "' " << inches << "\"" << endl; }
};

int main() {
    Distance d1;            // Calls no-arg constructor: 0' 0"
    Distance d2(11, 6.5);  // Calls two-arg constructor
    d1.show();
    d2.show();
    return 0;
}`,
          explanation: "Providing multiple ways to create an object."
        }
      ],
      questions: [
        {
          question: 'Do you ever need to call a constructor manually?',
          answer: 'No. Constructors are called automatically when an object is created. You simply pass the arguments in the parentheses where you declare the object.'
        },
        {
          question: 'What happens if you define a class with no constructor at all?',
          answer: 'The compiler automatically generates a default no-argument constructor for you. It does nothing except allocate the memory.'
        },
        {
          question: 'What happens to the compiler\'s auto-generated default constructor if you write your OWN constructor?',
          answer: 'The compiler stops generating the default. If you want a no-arg constructor AND a parameterized one, you must define both explicitly.'
        }
      ]
    },
    {
      id: "destructors",
      title: "Destructors and Object Lifetime",
      description: "Managing object cleanup, resource release, and the RAII pattern.",
      explanation: `Just as objects are born (via constructors), they also die. When an object is destroyed, C++ automatically calls a special cleanup function called a **destructor**.

### When is an Object Destroyed?
* When a local object's function ends and it goes out of scope (exits the \`{}\` block).
* When an object created with \`new\` is explicitly deleted with \`delete\`.

### What is a Destructor?
A destructor is the counterpart to a constructor. It runs automatically right before the object disappears from memory.
* Same name as the class, but preceded by a tilde symbol **\`~\`**.
* No return type, no parameters, and only ONE per class (cannot be overloaded).

### Why Do We Need Them?
For simple objects with basic integer/float data, destructors are often empty and the compiler handles cleanup automatically. But if your object opened a file, allocated extra memory with \`new\`, or locked a network port, the destructor is your one guaranteed chance to release those resources before the object disappears.

This pattern — acquiring resources in the constructor and releasing them in the destructor — is called **RAII (Resource Acquisition Is Initialization)** and is a cornerstone of safe, professional C++ programming.

### Destruction Order
When multiple objects are created in the same scope, destructors are called in the **reverse order of construction**. The last object created is the first one destroyed. This is the Last-In-First-Out (LIFO) principle.`,
      examples: [
        {
          title: 'Constructor and Destructor in Action',
          code: `#include <iostream>
using namespace std;

class Lifecycle {
public:
    Lifecycle() {
        cout << "Object Born: Constructor called." << endl;
    }
    ~Lifecycle() { // The destructor
        cout << "Object Dying: Destructor called." << endl;
    }
};

int main() {
    cout << "--- Entering block ---" << endl;
    {
        Lifecycle obj; // Born here
        cout << "--- Inside block ---" << endl;
    } // Destroyed here when block ends
    cout << "--- Exited block ---" << endl;
    return 0;
}`,
          explanation: "Watching the lifecycle of an object."
        }
      ],
      questions: [
        {
          question: 'How many destructors can a class have?',
          answer: 'Exactly one. Unlike constructors and regular functions, destructors cannot be overloaded because they take no arguments.'
        },
        {
          question: 'In what order are destructors called for local objects defined in the same scope?',
          answer: 'In the reverse order of construction. The last object created is the first one destroyed (LIFO).'
        },
        {
          question: 'What is the most critical use case for a destructor?',
          answer: 'Releasing dynamically allocated memory. If a constructor used `new` to allocate heap memory, the destructor must use `delete` to free it, otherwise that memory is leaked.'
        }
      ]
    },
    {
      id: "objects-as-arguments",
      title: "Objects as Function Arguments",
      description: "Passing objects to functions efficiently and understanding the copy constructor.",
      explanation: `Now that you understand classes and objects, let's combine them with what we learned about functions.

### Passing Objects to Functions
Objects can be passed to functions exactly like any other data type — by value or by reference.
* **By value:** A full copy of the object is made. Slow for large objects, and changes don't affect the original.
* **By reference:** The function works on the original object directly. Fast, and changes persist.
* **By \`const\` reference:** Best practice for read-only access. Fast (no copy) and safe (cannot modify). This is the industry standard way to pass objects to functions.

### Returning Objects from Functions
A function can also create and return a new object. This is very useful for creating functions like "add two distances" that return the result as a new Distance object rather than modifying an existing one.

### The Copy Constructor
When you pass an object by value, or initialize one object from another (e.g., \`Car car2 = car1;\`), a special constructor called the **Copy Constructor** runs automatically to make the copy. By default, C++ provides one that copies every data member — this is called a **shallow copy**.

A shallow copy works fine for basic types, but if your class contains pointers to dynamically allocated memory, the shallow copy just copies the pointer value. This means both objects now point to the **same** memory — and when one object's destructor frees that memory, the other object's pointer becomes invalid. This is why classes with pointers need a custom **deep copy** constructor that allocates new memory.`,
      examples: [
        {
          title: 'Passing Objects to a Function',
          code: `#include <iostream>
using namespace std;

class Distance {
public:
    int feet; float inches;
    Distance(int f, float i) : feet(f), inches(i) {}
    void show() { cout << feet << "' " << inches << "\"" << endl; }
};

// Receiving two objects by CONST reference (safe and fast)
void displaySum(const Distance& d1, const Distance& d2) {
    float totalInches = (d1.feet * 12 + d1.inches) 
                      + (d2.feet * 12 + d2.inches);
    int totalFeet = (int)(totalInches / 12);
    float remaining = totalInches - totalFeet * 12;
    cout << "Sum: " << totalFeet << "' " << remaining << "\"" << endl;
}

int main() {
    Distance d1(5, 6.5), d2(3, 8.0);
    displaySum(d1, d2);
    return 0;
}`,
          explanation: "A function that reads two Distance objects to calculate a total."
        }
      ],
      questions: [
        {
          question: 'What is the most efficient way to pass a large object to a function if the function only needs to read its data?',
          answer: 'By `const` reference: `void func(const MyClass& obj)`. This avoids the slowness of making a full copy while the `const` keyword guarantees the function cannot modify the original.'
        },
        {
          question: 'When is the copy constructor called?',
          answer: 'In three situations: (1) When a new object is initialized from an existing one. (2) When an object is passed by value to a function. (3) When a function returns an object by value.'
        },
        {
          question: 'What is the difference between a shallow copy and a deep copy?',
          answer: 'A shallow copy copies the exact values of all members, including pointers. If a pointer is copied, both objects point to the SAME memory. A deep copy allocates new memory for the pointer and copies the data itself, so both objects are truly independent.'
        }
      ]
    }
  ]
};

export default chapter6;
