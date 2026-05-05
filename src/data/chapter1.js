const chapter1 = {
  id: 1,
  title: 'The Big Picture',
  description: 'Start from absolute zero. Learn what programming is, why C++ exists, and how the Object-Oriented approach changed the world of software.',
  topics: [
    {
      title: 'What is Programming?',
      explanation: `If you have absolutely **zero prior knowledge**, start here.

### The Language Barrier
Computers are essentially extremely fast calculators. At their core, they only understand two states: **ON (1)** and **OFF (0)**. This is called binary or machine code.
If humans had to type millions of 1s and 0s to tell a computer what to do, it would take a lifetime to write a simple calculator app.

### Programming Languages to the Rescue
To bridge this gap, humans invented **Programming Languages**. 
* A programming language is like a translator. It allows you to write instructions using English-like words (like \`if\`, \`while\`, \`print\`).
* A special program called a **Compiler** then takes your English-like code and translates it completely into the 1s and 0s the computer's processor needs to actually run the program.

### Where does C++ fit in?
C++ is one of the most famous and powerful programming languages in the world. 
* It is extremely fast because it lets you control the computer's memory directly.
* Because of this speed, C++ is used to build operating systems (like Windows), high-end 3D video games, and software for space shuttles!`,
      examples: [
        {
          title: 'Human vs Machine',
          description: 'A conceptual look at what code does.',
          code: `// 1. What you write in C++:\nint speed = 100;\nif (speed > 50) print("Too fast!");\n\n// 2. The Compiler translates it.\n\n// 3. What the computer actually sees:\n// 01010111 01101000 01100001 01110100\n// 01100101 01110110 01100101 01110010`
        }
      ],
      questions: [
        {
          question: 'What is the fundamental language that a computer processor understands?',
          answer: 'Machine code (binary), which consists entirely of 1s and 0s.'
        },
        {
          question: 'What is the role of a compiler?',
          answer: 'A compiler acts as a translator. It takes the human-readable programming code you write and converts it into the machine code that the computer can execute.'
        }
      ]
    },
    {
      title: 'Why Do We Need Object-Oriented Programming?',
      explanation: `Now that you know what programming is, you need to understand how we organize code.

### The Old Way: Procedural Programming
Historically, programs were written as a long list of instructions (procedures or functions). The data (like an employee's salary) was kept completely separate from the functions that changed the data (like a function to give a raise).
* **The Problem:** As programs got bigger, any function could accidentally change any piece of data. It was like having a bank where every teller had full access to the main vault. It led to bugs that were impossible to find.

### The New Way: Object-Oriented Programming (OOP)
OOP solved this by changing how we think about code. Instead of separating data and functions, we bundle them together into a single, secure unit called an **object**. 
* Think of a real-world object, like a \`Car\`.
* It has data (color, speed, gas level).
* It has behaviors (accelerate, brake).
* In OOP, the \`Car\` object holds its own data securely, and only its own behaviors are allowed to change that data. This is called **Encapsulation** (or Data Hiding).`,
      examples: [
        {
          title: 'Procedural vs OOP Mental Model',
          description: 'A conceptual look at how data and functions are separated in procedural vs combined in OOP.',
          code: `// Procedural Approach (The Old Way)\nint employeeSalary = 50000;\nvoid applyRaise() {\n    employeeSalary += 5000; // Anyone can call this or modify the global variable\n}\n\n// OOP Approach (The Modern C++ Way)\nclass Employee {\nprivate:\n    int salary = 50000; // Data is securely hidden\npublic:\n    void applyRaise() { // Behavior is bundled with data\n        salary += 5000;\n    }\n};`
        },
        {
          title: 'Data Hiding in Action',
          description: 'Showing how OOP prevents accidental external modification.',
          code: `#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance = 100.0; // Protected from the outside world\npublic:\n    void deposit(double amount) {\n        if(amount > 0) balance += amount;\n    }\n    double getBalance() { return balance; }\n};\n\nint main() {\n    BankAccount myAccount;\n    myAccount.deposit(50);\n    // myAccount.balance = 1000000; // ERROR: Cannot access private data\n    cout << "Balance: $" << myAccount.getBalance() << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What was the primary flaw of the old structured/procedural programming style?',
          answer: 'Unrestricted access to global data. Because data wasn\'t protected, any part of the program could accidentally change it, causing massive bugs.'
        },
        {
          question: 'What does "Encapsulation" mean in OOP?',
          answer: 'Encapsulation is the bundling of data and the functions that operate on that data into a single, secure unit (an object), hiding the internal state from the outside world.'
        }
      ]
    },
    {
      title: 'Core Characteristics of OOP',
      explanation: `The transition to Object-Oriented Programming (OOP) relies on several powerful paradigms. Here is the foundation you need to understand:

### 1. Classes and Objects
* **Class:** A class is a blueprint. Think of it like an architect's blueprint for a house. It defines what data and behaviors exist, but it isn't an actual house.
* **Object:** An object is the actual house built from that blueprint. If the class is "Dog", an object is "My specific golden retriever named Buddy".

### 2. Inheritance
Inheritance is the process where a new class automatically gets all the properties of an existing class. 
* This saves a massive amount of time (called **reusability**). 
* For example, instead of writing all the code for a \`Manager\` from scratch, you can tell the computer: "A \`Manager\` is exactly like an \`Employee\`, but with these three extra features."

### 3. Polymorphism
Polymorphism comes from Greek meaning "many forms". It allows the exact same word or symbol to do different things depending on the situation.
* For example, the \`+\` symbol adds numbers together (\`5 + 5 = 10\`), but through polymorphism, it can also stick text together (\`"Hello " + "World" = "Hello World"\`).`,
      examples: [
        {
          title: 'Classes and Objects',
          description: 'Defining a blueprint (class) and creating instances (objects).',
          code: `#include <iostream>\nusing namespace std;\n\nclass Dog {\npublic:\n    string name;\n    void bark() {\n        cout << name << " says Woof!" << endl;\n    }\n};\n\nint main() {\n    Dog dog1;       // Creating an actual object from the blueprint\n    dog1.name = "Rex";\n    dog1.bark();    // Rex says Woof!\n    return 0;\n}`
        },
        {
          title: 'Basic Inheritance Concept',
          description: 'A derived class inheriting from a base class to save time.',
          code: `#include <iostream>\nusing namespace std;\n\n// Base Class\nclass Vehicle {\npublic:\n    void startEngine() { cout << "Engine started." << endl; }\n};\n\n// Derived Class gets everything Vehicle has automatically\nclass Car : public Vehicle {\npublic:\n    void honkHorn() { cout << "Beep beep!" << endl; }\n};\n\nint main() {\n    Car myCar;\n    myCar.startEngine(); // Inherited behavior from Vehicle\n    myCar.honkHorn();    // Specific behavior of Car\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the relationship between a class and an object?',
          answer: 'A class is the blueprint or definition (the concept), while an object is a concrete, usable instance of that class existing in the computer\'s memory.'
        },
        {
          question: 'How does inheritance promote reusability?',
          answer: 'It allows programmers to take an existing, tested class and extend its functionality by creating a new derived class, without having to copy, paste, or rewrite the original code.'
        },
        {
          question: 'Can you have an object without a class?',
          answer: 'No. In C++, every object must be created from a predefined class blueprint.'
        }
      ]
    }
  ]
};

export default chapter1;
