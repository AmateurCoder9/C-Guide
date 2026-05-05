const chapter6 = {
  id: 6,
  title: 'Objects and Classes',
  description: 'The heart of C++. Learn how to build your own custom data types with bundled data and behavior — the foundation of Object-Oriented Programming.',
  topics: [
    {
      id: "oop-analogy",
      title: "What is OOP? Real World Analogy",
      description: "Understand the philosophy behind Object-Oriented Programming using familiar real-life examples.",
      explanation: {
        beginner: `
          Imagine you're designing a town. Instead of thinking about "moving dirt" or "laying bricks" (actions), you think about **Objects**: Houses, Cars, Trees, and People.
          
          Each **House** has properties (Color, Number of Doors) and can do things (Open Door, Turn on Lights). 
          **Object-Oriented Programming (OOP)** is just writing code that mimics how we see the real world: as a collection of objects that interact with each other.
        `,
        intermediate: `
          OOP is a programming paradigm based on the concept of "objects", which can contain data (attributes/properties) and code (methods/functions). 
          The four main pillars of OOP are **Encapsulation**, **Inheritance**, **Polymorphism**, and **Abstraction**.
        `,
        advanced: `
          Object-Oriented Programming (OOP) aims to implement real-world entities like inheritance, hiding, and polymorphism in programming. The main goal is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function. It is a "bottom-up" approach to software design.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Thinking in Objects",
          code: `
// Object: Dog
// Properties (Data):
//   - breed: "Golden Retriever"
//   - age: 3
// Actions (Functions):
//   - bark()
//   - eat()
          `,
          explanation: "In OOP, we define what an object 'is' (data) and what it 'does' (actions) in one place."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What does OOP stand for?",
          answer: "Object-Oriented Programming."
        },
        {
          difficulty: "medium",
          question: "What are the two main things an object contains?",
          answer: "Data (properties) and Actions (methods/functions)."
        }
      ]
    },
    {
      id: "classes-vs-structs",
      title: "Classes vs Structures",
      description: "Learn the subtle but important differences between a simple struct and a powerful class.",
      explanation: {
        beginner: `
          In C++, a **Class** and a **Structure** are very similar—they both group data together. 
          The main difference is the "Default Privacy." 
          - In a **Struct**, everything is open to the public by default. 
          - In a **Class**, everything is locked in a private vault by default.
        `,
        intermediate: `
          Members of a \`struct\` are **public** by default, while members of a \`class\` are **private** by default. 
          Technically, they have the same power in C++, but developers use \`struct\` for simple data bundles and \`class\` for complex logic and data hiding.
        `,
        advanced: `
          While \`struct\` and \`class\` are almost syntactically interchangeable in C++, the semantic difference is significant. Inheritance also defaults to public for structs (\`struct D : B\`) and private for classes (\`class D : B\`). In professional C++, POD (Plain Old Data) is typically handled by structs, while domain logic is handled by classes.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Public vs Private",
          code: `
struct MyStruct {
    int x; // Public by default
};

class MyClass {
    int x; // Private by default (Locked!)
};
          `,
          explanation: "Structs are 'open' by default, while classes are 'closed' to protect your data."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the default access level for a class member?",
          answer: "Private."
        },
        {
          difficulty: "medium",
          question: "Why do we use classes more often than structs for complex objects?",
          answer: "Because classes encourage 'data hiding' (privacy) which makes code safer and more organized."
        }
      ]
    },
    {
      id: "creating-objects",
      title: "Creating Objects from a Class",
      description: "Learn how to use a class as a blueprint to build actual objects in memory.",
      explanation: {
        beginner: `
          A **Class** is like a blueprint for a house. You can't live in a blueprint! 
          To actually get a house, you have to build it. 
          Building a house from a blueprint is called **Instantiating** an **Object**. You can build 100 different houses (objects) from just one blueprint (class).
        `,
        intermediate: `
          Defining a class creates a new type. Declaring a variable of that type creates an **Object** (or instance). 
          Each object has its own separate memory for its data members.
        `,
        advanced: `
          Instantiating an object on the stack involves allocating memory based on the class's size and then calling the constructor. The size of an object is at least 1 byte (to ensure unique addresses) plus the sum of its non-static data members, potentially adjusted for memory alignment.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Making Two Dogs",
          code: `
class Dog {
public:
    string name;
};

int main() {
    Dog dog1; // Object 1
    dog1.name = "Rex";
    
    Dog dog2; // Object 2
    dog2.name = "Buddy";
    
    return 0;
}
          `,
          explanation: "Each dog is a separate object with its own name, even though they both came from the same 'Dog' blueprint."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "If a Class is a blueprint, what is an Object?",
          answer: "An instance built from that blueprint."
        },
        {
          difficulty: "medium",
          question: "Do two objects of the same class share the same data?",
          answer: "No, each object has its own separate copy of the data members defined in the class."
        }
      ]
    },
    {
      id: "constructors-intro",
      title: "Constructors — Setting Up an Object",
      description: "Learn how to automatically initialize your objects the moment they are created.",
      explanation: {
        beginner: `
          When you buy a new phone, it comes with some "factory settings" (like the default language and wallpaper). 
          A **Constructor** is a special function that sets those "factory settings" for your objects. 
          It runs automatically the second the object is born.
        `,
        intermediate: `
          A **Constructor** has the exact same name as the class and no return type. 
          It is primarily used to initialize the object's data members. If you don't write one, C++ provides a "Default Constructor" for you.
        `,
        advanced: `
          Constructors follow specific initialization sequences: base classes first, then member objects in order of declaration, then the constructor body. Use **Member Initializer Lists** (\`MyClass() : member(val) {}\`) for better performance and to initialize \`const\` or reference members.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Birth of an Object",
          code: `
class Player {
public:
    int health;
    // Constructor
    Player() {
        health = 100; // Default factory setting
        cout << "Player joined the game!";
    }
};

int main() {
    Player p1; // Constructor runs NOW!
    return 0;
}
          `,
          explanation: "The code inside the Player() function runs immediately when 'p1' is created."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the return type of a constructor?",
          answer: "It has no return type (not even void)."
        },
        {
          difficulty: "medium",
          question: "When is a constructor called?",
          answer: "Automatically, as soon as an object of that class is created."
        }
      ]
    },
    {
      id: "access-modifiers-intro",
      title: "Access Modifiers — Public and Private",
      description: "Protect your data using access modifiers to control who can see what.",
      explanation: {
        beginner: `
          Inside a class, you can label things as **Public** or **Private**. 
          - **Public**: Anyone can see and use it (like the buttons on a microwave).
          - **Private**: Hidden from the outside (like the wires inside the microwave). 
          
          You keep things private so users don't accidentally break the internal logic.
        `,
        intermediate: `
          Access modifiers define the visibility of class members. 
          - \`public\`: Accessible from outside the class.
          - \`private\`: Accessible only by member functions of the same class.
          - \`protected\`: Accessible by the class and its children (Inheritance).
        `,
        advanced: `
          Access control is a compile-time feature. It doesn't physically prevent memory access (pointers can still reach private data), but it enforces the API contract and architectural integrity. Data Hiding is the fundamental mechanism for **Encapsulation**.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Locked Vault",
          code: `
class BankAccount {
private:
    double balance; // No one can touch this directly
public:
    void deposit(double amount) {
        if (amount > 0) balance += amount; // Only we can change it
    }
};
          `,
          explanation: "By making 'balance' private, we prevent anyone from setting their balance to a billion dollars without actually depositing money."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which keyword makes a member invisible to the outside world?",
          answer: "private"
        },
        {
          difficulty: "medium",
          question: "Why should data members (variables) usually be private?",
          answer: "To prevent external code from putting invalid data into the object and to keep the internal implementation hidden (Data Hiding)."
        }
      ]
    },
    {
      id: "member-functions",
      title: "Member Functions — What Objects Can Do",
      description: "Learn how to add actions and logic to your custom objects.",
      explanation: {
        beginner: `
          Objects aren't just bundles of data; they can also perform actions. 
          A \`Dog\` object can \`bark()\`. A \`Player\` object can \`jump()\`. 
          These actions are called **Member Functions** (or methods). They are functions that live inside a class.
        `,
        intermediate: `
          Member functions have full access to the private data of their class. 
          They can be defined inside the class body or outside using the scope resolution operator (\`::\`).
        `,
        advanced: `
          Member functions receive an implicit first argument: the \`this\` pointer. This allows the function to know which specific instance it is operating on. **Const member functions** (\`void func() const\`) are guaranteed not to modify the object's state.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "An Action-Packed Object",
          code: `
class Robot {
public:
    void greet() {
        cout << "Beep Boop! Hello!";
    }
};

int main() {
    Robot r1;
    r1.greet(); // Call the member function
    return 0;
}
          `,
          explanation: "The robot object 'r1' has the ability to greet. We call it using the dot operator."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is a function called when it belongs to a class?",
          answer: "A Member Function (or Method)."
        },
        {
          difficulty: "medium",
          question: "Can a member function access private variables in the same class?",
          answer: "Yes, member functions have full access to all members of their own class, public or private."
        }
      ]
    },
    {
      id: "this-pointer-intro",
      title: "this Pointer Explained Simply",
      description: "Understand the hidden 'identity' every object has in C++.",
      explanation: {
        beginner: `
          Imagine a class is like a script for an actor. When the script says "Put on your hat," how does the actor know it means *their* hat and not the person next to them? 
          
          In C++, **this** is a hidden pointer that always points to "myself." It helps an object identify its own variables.
        `,
        intermediate: `
          The **this** pointer is a constant pointer that holds the memory address of the current object instance. It is automatically passed to every non-static member function.
        `,
        advanced: `
          The \`this\` pointer is an rvalue. It is primarily used for:
          1. Resolving name ambiguity between parameters and members.
          2. Returning the current object from a function (\`return *this\`) to allow **Method Chaining**.
          3. Checking if an object is being assigned to itself (\`if (this == &other)\`).
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Clearing up Confusion",
          code: `
class Person {
    string name;
public:
    void setName(string name) {
        // this->name means "the variable in the class"
        // name means " the parameter we just passed in"
        this->name = name; 
    }
};
          `,
          explanation: "When the parameter and the class variable have the same name, 'this->' tells C++ exactly which one you mean."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: "What does 'this' point to inside a member function?",
          answer: "It points to the memory address of the specific object instance that called the function."
        }
      ]
    },
    {
      id: "class-advanced",
      title: 'Your First Class (Advanced)',
      description: "Deep dive into access specifiers, encapsulation, and object creation.",
      explanation: {
        beginner: "Classes are blueprints with 'vaults' for your data. This section looks at how to build and lock those vaults.",
        intermediate: "Mastering the private and public keywords and the logic of getter/setter functions.",
        advanced: `In Chapter 4, we learned about \`struct\` — a way to group different variables together. A **class** is like a turbocharged struct. 

The key difference: a class can also bundle in **functions** alongside the data and **hide** that data from the outside world.

### Defining a Class
A class definition starts with the keyword \`class\`. Inside the body (inside \`{}\`), you define the class's data members and function members.

### The Two Access Specifiers
This is the critical concept that separates classes from structs:
* **\`private:\`** (default for classes) — Data declared here is like a locked vault. **No code outside the class can touch it.**
* **\`public:\`** — Functions declared here are visible to the world. These are the controlled interface.

### The Dot Operator
Just like structs, you access the public members of an object using the dot operator (\`.\`).`
      },
      examples: [
        {
          level: "advanced",
          title: 'Class with Validation Logic',
          code: `#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\npublic:\n    void init(double startingBalance) {\n        balance = (startingBalance >= 0) ? startingBalance : 0;\n    }\n    void withdraw(double amount) {\n        if(amount <= balance && amount > 0) {\n            balance -= amount;\n        } else {\n            cout << "Transaction denied." << endl;\n        }\n    }\n    double getBalance() { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.init(100.0);\n    acc.withdraw(150.0); \n    cout << "$" << acc.getBalance() << endl;\n    return 0;\n}`,
          explanation: "Using private members and public methods to enforce business rules on data."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'Why would you make data private and provide get/set functions?',
          answer: 'To ensure data integrity. Public methods can validate data before changing the internal state, whereas public variables can be changed to anything by any part of the program.'
        }
      ]
    },
    {
      id: "constructors-advanced",
      title: 'Constructors: Automatic Setup (Advanced)',
      description: "Exploring default, parameterized, and overloaded constructors.",
      explanation: {
        beginner: "Constructors are factory settings for objects. Learn how to create multiple types of settings.",
        intermediate: "Understanding constructor overloading and the danger of garbage data in uninitialized objects.",
        advanced: `Every time you create a new object, you usually need to give its variables a sensible starting value. Without this, a variable might hold garbage data.

### The Constructor: Automatic Initialization
A **constructor** is a special function that the computer calls **automatically and immediately** the moment an object is created.

### Rules of Constructors
1. It must have the **exact same name** as the class.
2. It has **no return type** — not even \`void\`.
3. It can have parameters, allowing different initialization options.

### Overloaded Constructors
Just like regular functions, constructors can be overloaded. You can provide a no-argument constructor and a constructor that takes initial values.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Overloaded Constructors',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\nprivate:\n    int feet; float inches;\npublic:\n    Distance() { feet = 0; inches = 0.0; }\n    Distance(int f, float i) { feet = f; inches = i; }\n    void show() { cout << feet << "' " << inches << "\"" << endl; }\n};\n\nint main() {\n    Distance d1;      \n    Distance d2(11, 6.5); \n    d1.show(); d2.show();\n    return 0;\n}`,
          explanation: "Providing multiple construction paths for different use cases."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What happens to the compiler\'s auto-generated constructor if you write your OWN constructor?',
          answer: 'The compiler stops generating the default constructor. If you want a no-arg constructor, you must now define it explicitly.'
        }
      ]
    },
    {
      id: "destructors-advanced",
      title: 'Destructors and Object Lifetime (Advanced)',
      description: "Managing object cleanup, reverse destruction order, and resource release.",
      explanation: {
        beginner: "Objects don't just get created; they also get 'cleaned up' when no longer needed.",
        intermediate: "Learning the ~ syntax and the guaranteed execution of destructors for resource management.",
        advanced: `Just as objects are born (via constructors), they also die. When an object is destroyed, C++ automatically calls a special cleanup function called a **destructor**.

### When is an Object Destroyed?
* When a local object goes out of scope.
* When an object created with \`new\` is explicitly deleted.

### What is a Destructor?
A destructor is the counterpart to a constructor.
* Same name as the class, but preceded by a tilde symbol **\`~\`**.
* No return type, no parameters, and only ONE per class.

### Why Do We Need Them?
If your object opened a file, allocated extra memory with \`new\`, or locked a network port, the destructor is your guarantee to release those resources.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Destructor for Resource Cleanup',
          code: `#include <iostream>\nusing namespace std;\n\nclass NetworkSocket {\nprivate: bool connected;\npublic:\n    NetworkSocket(string server) { connected = true; }\n    ~NetworkSocket() {\n        if(connected) {\n            connected = false;\n            cout << "Connection closed safely.";\n        }\n    }\n};`,
          explanation: "The RAII pattern: using object lifetime to manage system resources automatically."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'In what order are destructors called for multiple objects in the same scope?',
          answer: 'In the exact reverse order of their construction (LIFO - Last In, First Out).'
        }
      ]
    },
    {
      id: "objects-as-args-advanced",
      title: 'Objects as Function Arguments (Advanced)',
      description: "Passing objects efficiently using references and the copy constructor.",
      explanation: {
        beginner: "How to send entire objects to functions as if they were simple numbers.",
        intermediate: "Comparing pass-by-value vs pass-by-reference for objects and the use of 'const'.",
        advanced: `Now that you understand classes and objects, let's combine them with functions.

### Passing Objects to Functions
Objects can be passed exactly like any other data type.
* **By value:** A full copy is made (Copy Constructor runs).
* **By reference:** Fast, changes affect the original.
* **By \`const\` reference:** Best practice: Fast and Safe.

### The Copy Constructor
When you pass an object by value, a special constructor called the **Copy Constructor** runs automatically to make the copy. By default, it performs a member-wise copy.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Const Reference Passing',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\npublic:\n    int feet; float inches;\n    Distance(int f, float i) : feet(f), inches(i) {}\n};\n\nvoid displaySum(const Distance& d1, const Distance& d2) {\n    // Fast: no copies made. Safe: d1/d2 cannot be changed.\n    cout << "Reading objects...";\n}`,
          explanation: "The industry standard way to pass objects into functions for inspection."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What is the difference between a shallow copy and a deep copy?',
          answer: 'Shallow copy copies pointers exactly (pointing to same memory). Deep copy allocates new memory and copies the actual data.'
        }
      ]
    }
  ]
};

export default chapter6;
