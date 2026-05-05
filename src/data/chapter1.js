const chapter1 = {
  id: 1,
  title: 'The Big Picture',
  description: 'Transitioning from procedural to object-oriented programming. Learn the fundamental problems with structured programming and the shift to the OOP approach.',
  topics: [
    {
      title: 'Why Do We Need Object-Oriented Programming?',
      explanation: `Historically, programming was dominated by the procedural paradigm (like C, Pascal). In procedural programming, the focus is on functions—processing data rather than the data itself. A program is divided into functions, and data is often made global so multiple functions can access it.

### The Problem with Structured Programming:
* **Unrestricted Access:** When data is global, any function can modify it accidentally, leading to bugs that are incredibly difficult to trace in large programs.
* **Poor Modeling of the Real World:** Procedural languages separate data and the functions that operate on them. In the real world, entities (like a car or an employee) consist of both attributes (data) and behaviors (functions) bundled together.
* **Scalability:** As programs grow larger, procedural code becomes a tangled web (often called "spaghetti code") making it hard to maintain or extend.

### The OOP Solution: Encapsulation
Object-Oriented Programming (OOP) solves this by bundling data and functions into a single unit called an **object**. 
* The data is hidden within the object.
* It can only be accessed by the object's own functions.
* This concept is known as **encapsulation** or **data hiding**.`,
      examples: [
        {
          title: 'Procedural vs OOP Mental Model',
          description: 'A conceptual look at how data and functions are separated in procedural vs combined in OOP.',
          code: `// Procedural Approach (C-style)\nint employeeSalary = 50000;\nvoid applyRaise() {\n    employeeSalary += 5000; // Anyone can call this or modify the global variable\n}\n\n// OOP Approach (C++ style)\nclass Employee {\nprivate:\n    int salary = 50000; // Data is hidden\npublic:\n    void applyRaise() { // Behavior is bundled with data\n        salary += 5000;\n    }\n};`
        },
        {
          title: 'Data Hiding in Action',
          description: 'Showing how OOP prevents accidental external modification.',
          code: `#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance = 100.0; // Protected from the outside world\npublic:\n    void deposit(double amount) {\n        if(amount > 0) balance += amount;\n    }\n    double getBalance() { return balance; }\n};\n\nint main() {\n    BankAccount myAccount;\n    myAccount.deposit(50);\n    // myAccount.balance = 1000000; // ERROR: Cannot access private data\n    cout << "Balance: $" << myAccount.getBalance() << endl;\n    return 0;\n}`
        },
        {
          title: 'Advanced Encapsulation',
          description: 'Validating data before changing internal state.',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nclass User {\nprivate:\n    string password;\npublic:\n    bool setPassword(string newPassword) {\n        if(newPassword.length() < 8) {\n            cout << "Password too short!" << endl;\n            return false;\n        }\n        password = newPassword;\n        return true;\n    }\n};\n\nint main() {\n    User u;\n    u.setPassword("123"); // Fails validation safely\n    u.setPassword("securePass123!"); // Succeeds\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the primary flaw of structured/procedural programming in large applications?',
          answer: 'Unrestricted access to global data, making the program hard to debug and maintain, and a poor conceptual mapping to real-world entities.'
        },
        {
          question: 'What does "Encapsulation" mean in OOP?',
          answer: 'Encapsulation is the bundling of data and the functions that operate on that data into a single unit (an object), while hiding the internal state from the outside world.'
        },
        {
          question: 'How does data hiding prevent bugs?',
          answer: 'By preventing external parts of the program from directly altering internal data states. All modifications must pass through authorized public functions (getters/setters), which can enforce validation rules.'
        }
      ]
    },
    {
      title: 'Characteristics of Object-Oriented Languages',
      explanation: `According to Robert Lafore, the transition to OOP brings several powerful new paradigms:

### 1. Objects and Classes
* **Objects:** The basic run-time entities in an object-oriented system. They may represent a person, a place, a bank account, or any item that the program must handle.
* **Classes:** A class is a blueprint or prototype from which objects are created. It defines the data and behaviors that the objects instantiated from it will possess. If a class is "Car", an object is "My specific blue Honda Civic".

### 2. Inheritance
Inheritance is the process by which one class acquires the properties and behaviors of another. 
* This supports the concept of **hierarchical classification**.
* It heavily promotes **reusability**. For instance, a \`Manager\` class can inherit from a general \`Employee\` class without rewriting standard employee data.

### 3. Polymorphism
From Greek meaning "many forms". It allows operators or functions to behave differently depending on the context.
* **Function Overloading:** Two functions with the same name doing different tasks.
* **Operator Overloading:** Using the \`+\` operator to add numbers, or add strings together.`,
      examples: [
        {
          title: 'Classes and Objects',
          description: 'Defining a blueprint (class) and creating instances (objects).',
          code: `#include <iostream>\nusing namespace std;\n\nclass Dog {\npublic:\n    string name;\n    void bark() {\n        cout << name << " says Woof!" << endl;\n    }\n};\n\nint main() {\n    Dog dog1;       // Creating an object\n    dog1.name = "Rex";\n    dog1.bark();    // Rex says Woof!\n    return 0;\n}`
        },
        {
          title: 'Basic Inheritance Concept',
          description: 'A derived class inheriting from a base class.',
          code: `#include <iostream>\nusing namespace std;\n\n// Base Class\nclass Vehicle {\npublic:\n    void startEngine() { cout << "Engine started." << endl; }\n};\n\n// Derived Class\nclass Car : public Vehicle {\npublic:\n    void honkHorn() { cout << "Beep beep!" << endl; }\n};\n\nint main() {\n    Car myCar;\n    myCar.startEngine(); // Inherited behavior\n    myCar.honkHorn();    // Specific behavior\n    return 0;\n}`
        },
        {
          title: 'Function Polymorphism (Overloading)',
          description: 'Functions with the same name acting on different data types.',
          code: `#include <iostream>\nusing namespace std;\n\nclass MathUtility {\npublic:\n    int add(int a, int b) {\n        return a + b;\n    }\n    double add(double a, double b) {\n        return a + b;\n    }\n};\n\nint main() {\n    MathUtility math;\n    cout << math.add(5, 10) << endl;       // Uses int version\n    cout << math.add(5.5, 2.2) << endl;    // Uses double version\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the relationship between a class and an object?',
          answer: 'A class is the blueprint or definition (the concept), while an object is a concrete, usable instance of that class existing in memory.'
        },
        {
          question: 'How does inheritance promote reusability?',
          answer: 'It allows programmers to take an existing, tested class and extend its functionality by creating a new derived class, without rewriting or breaking the original code.'
        },
        {
          question: 'What is Polymorphism?',
          answer: 'The ability of a single function, operator, or object to take on multiple forms and behave differently depending on the data type or context it is operating on.'
        },
        {
          question: 'Can you have an object without a class?',
          answer: 'No. In C++, every object must be instantiated from a predefined class blueprint.'
        }
      ]
    }
  ]
};

export default chapter1;
