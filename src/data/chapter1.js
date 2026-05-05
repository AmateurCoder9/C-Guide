const chapter1 = {
  id: 1,
  title: 'The Big Picture',
  description: 'Start from absolute zero — what is a computer, what is programming, and why was C++ invented.',
  topics: [
    {
      id: "what-is-programming",
      title: "What is Programming?",
      description: "Understand the concept of giving instructions to a machine using real-world analogies.",
      explanation: {
        beginner: `
          Imagine you are teaching a robot how to make a peanut butter sandwich. You can't just say "make it." You have to be incredibly specific: "Pick up the knife," "Open the jar," "Spread the butter." 
          
          **Programming** is exactly that. It is the art of writing a sequence of step-by-step instructions that tell a computer exactly what to do. Computers are fast, but they aren't "smart"—they only do precisely what you tell them to do.
        `,
        intermediate: `
          A **computer program** is a set of instructions stored in a file that a computer's processor (CPU) can execute. We write these instructions in a **programming language** because human languages like English are too vague for machines.
          
          Programming involves **Logic** (deciding what happens when) and **Syntax** (the specific rules of the language). C++ is a high-level language, meaning it's readable for humans but can be translated into instructions for hardware.
        `,
        advanced: `
          Programming is the process of designing and building an executable computer program to accomplish a specific computing result. At the hardware level, this involves the CPU fetching instructions from memory, decoding them, and executing them (the **Instruction Cycle**).
          
          Modern programming paradigms include **Procedural** (step-by-step), **Object-Oriented** (data-driven), and **Functional**. C++ is unique because it supports multiple paradigms, giving developers low-level control over memory while maintaining high-level abstractions.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Logic of a Program",
          code: `
// Think of this like a recipe
// 1. Get the temperature
// 2. If it's hot, turn on the fan
// 3. Otherwise, turn off the fan

#include <iostream>
using namespace std;

int main() {
    int temperature = 30; // The 'data' we are using
    
    if (temperature > 25) {
        cout << "Turn on the fan!" << endl; // An 'instruction'
    }
    
    return 0;
}
          `,
          explanation: "This code shows how a program makes a simple decision based on data, just like a human would."
        },
        {
          level: "intermediate",
          title: "How Code Becomes Instructions",
          code: `
// C++ Source Code (What you write)
// int x = 5 + 10;

// Machine Code (What the computer sees)
// 10110000 00001111 00000101 
          `,
          explanation: "C++ acts as a bridge. You write the top part, and a compiler translates it into the bottom part (binary)."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the simplest definition of a computer program?",
          answer: "A list of step-by-step instructions that tell a computer what to do."
        },
        {
          difficulty: "easy",
          question: "Why do we use programming languages instead of just speaking to computers in English?",
          answer: "Human languages are too vague and ambiguous; programming languages have strict rules that machines can follow perfectly."
        },
        {
          difficulty: "medium",
          question: "What are the two main things a programmer must handle when writing code?",
          answer: "Logic (the plan/steps) and Syntax (the grammar/rules of the language)."
        },
        {
          difficulty: "medium",
          question: "Is a computer 'smart' enough to guess what you mean if you make a mistake in your code?",
          answer: "No. A computer will either fail to run the code or do exactly what you accidentally told it to do, even if it's wrong."
        },
        {
          difficulty: "hard",
          question: "Explain the difference between a high-level language like C++ and machine code.",
          answer: "High-level languages use English-like words and are easy for humans to read. Machine code is made of binary (1s and 0s) and is the only language hardware understands directly."
        }
      ]
    },
    {
      id: "what-is-cpp",
      title: "What is C++ and Why Learn It?",
      description: "Discover the history, power, and massive real-world impact of the C++ language.",
      explanation: {
        beginner: `
          Imagine you have a choice between a bicycle, a family car, and a Formula 1 racing car. Python is like the family car (easy to drive), but **C++** is the Formula 1 car. It is incredibly fast, gives the driver total control, but requires more skill to handle.
          
          C++ is a "superpower" language used to build things that need to be extremely fast, like video games and rocket software.
        `,
        intermediate: `
          Created by **Bjarne Stroustrup** in 1985, C++ was designed as an extension of the 'C' language. It added **Object-Oriented Programming (OOP)**, which allows programmers to organize code into 'objects' (like building blocks).
          
          It is a **compiled** language, meaning the computer translates the whole program into machine code before running it, making it much faster than 'interpreted' languages like Python or JavaScript.
        `,
        advanced: `
          C++ is a statically typed, free-form, multi-paradigm, compiled, general-purpose programming language. It is often called a "middle-level" language because it encompasses both high-level and low-level language features.
          
          Key strengths:
          - **Determinism:** You know exactly when memory is allocated and freed.
          - **Portability:** Code can run on almost any hardware architecture.
          - **Performance:** Direct hardware access and minimal runtime overhead.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Speed of C++",
          code: `
// C++ can do millions of calculations in a blink of an eye.
#include <iostream>
using namespace std;

int main() {
    cout << "C++ is starting..." << endl;
    
    // A loop that runs 1 million times
    for(int i = 0; i < 1000000; i++) {
        // Doing math
    }
    
    cout << "Finished 1,000,000 tasks instantly!" << endl;
    return 0;
}
          `,
          explanation: "This simple code demonstrates that C++ is built for high-performance tasks that involve heavy lifting."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Who created the C++ language?",
          answer: "Bjarne Stroustrup."
        },
        {
          difficulty: "easy",
          question: "Name one thing C++ is commonly used for.",
          answer: "Video games, operating systems, or high-performance apps."
        },
        {
          difficulty: "medium",
          question: "What does the '++' in C++ represent?",
          answer: "It is a joke based on the C operator '++', which means 'increment by one'. C++ is 'one better than C'."
        },
        {
          difficulty: "medium",
          question: "Is C++ a compiled or interpreted language?",
          answer: "It is a compiled language."
        },
        {
          difficulty: "hard",
          question: "Why is C++ preferred for building AAA video games over languages like Python?",
          answer: "C++ provides direct control over hardware and memory, allowing for much higher performance and less lag (latency) which is critical for gaming."
        }
      ]
    },
    {
      id: "setting-up-environment",
      title: "Setting Up Your Environment",
      description: "Prepare your computer to write, compile, and run C++ code.",
      explanation: {
        beginner: `
          To write C++, you need two simple tools:
          1. **A Text Editor:** Where you type your code (like a digital notebook).
          2. **A Compiler:** A "translator" that turns your typed code into a program the computer can run.
          
          Think of it like writing a letter in French: you need a pen to write it (Editor) and a translator to read it to someone who only speaks English (Compiler).
        `,
        intermediate: `
          Most modern programmers use an **IDE (Integrated Development Environment)**. An IDE is one software package that includes both the editor and the compiler, plus tools to help find bugs.
          
          Common choices:
          - **VS Code:** Lightweight and very popular.
          - **Code::Blocks:** Great for beginners.
          - **Visual Studio:** The industry standard for Windows developers.
        `,
        advanced: `
          A C++ environment consists of a toolchain. The most common toolchains are **GCC (GNU Compiler Collection)** on Linux, **Clang** on Mac, and **MSVC** on Windows.
          
          You will often interact with the compiler via the command line using commands like \`g++ main.cpp -o myapp\`. The \`-o\` flag specifies the output filename. Advanced setups use build systems like **CMake** to manage large projects with hundreds of files.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Checking your Compiler",
          code: `
// Open your terminal/command prompt and type:
// g++ --version

// If you see a version number, your 'translator' is ready!
          `,
          explanation: "This isn't code you write in a file, but a command you use to talk to your computer's tools."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What are the two main tools you need to write C++?",
          answer: "A text editor and a compiler."
        },
        {
          difficulty: "easy",
          question: "What does an IDE stand for?",
          answer: "Integrated Development Environment."
        },
        {
          difficulty: "medium",
          question: "What is the job of the compiler in your setup?",
          answer: "To translate your human-readable source code into machine-readable instructions (an executable file)."
        },
        {
          difficulty: "medium",
          question: "Name one popular IDE used for C++ development.",
          answer: "VS Code, Code::Blocks, or Visual Studio."
        },
        {
          difficulty: "hard",
          question: "If you have a file named 'hello.cpp', what command would you typically use to compile it into a program named 'hello'?",
          answer: "g++ hello.cpp -o hello"
        }
      ]
    },
    {
      id: "what-is-a-computer",
      title: 'What is a Computer?',
      description: "A deep dive into the hardware that executes your code.",
      explanation: {
        beginner: "A computer is a machine that follows instructions perfectly. It has a 'brain' called the CPU and 'short-term memory' called RAM.",
        intermediate: "A computer consists of hardware components like the CPU, RAM, and Storage. The CPU executes instructions in binary (1s and 0s).",
        advanced: `Before writing a single line of code, you must understand the machine you are talking to.

### A Computer is a Machine That Follows Instructions
A computer is not smart. It is extremely fast, but it can only do exactly what you tell it. It cannot guess, assume, or improvise. Every action a computer takes is a direct result of a specific instruction given to it.

### Two Key Parts of Every Computer
* **CPU (Central Processing Unit):** The "brain". It reads instructions one by one and executes them. Modern CPUs can execute billions of instructions per second.
* **Memory (RAM):** The "short-term memory". When a program is running, all its data (variables, calculations) lives here temporarily. When you turn off the computer, RAM is wiped clean.

### Hard Drive vs RAM
Think of it this way:
* **Hard Drive (SSD/HDD):** The filing cabinet. Stores files permanently.
* **RAM:** The desk. Only holds what you are currently working on.
* When you open a program, the computer lifts it from the filing cabinet onto the desk.

### Binary: The Only Language a CPU Understands
At the most basic level, a CPU only understands electrical signals: **ON (1)** and **OFF (0)**. Every instruction, every number, every letter stored in a computer is ultimately represented as a sequence of these 1s and 0s. This system is called **binary**.`
      },
      examples: [
        {
          level: "advanced",
          title: 'How Text is Stored in Binary',
          code: `// Humans see:  "Hello"
// Computer stores (ASCII codes):
//  H = 72  = 01001000
//  e = 101 = 01100101
//  l = 108 = 01101100
//  l = 108 = 01101100
//  o = 111 = 01101111

// Every character, number, image, and song
// is ultimately stored as binary (1s and 0s).`,
          explanation: "How human-readable text is represented as binary data in memory."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'What does a CPU do?',
          answer: 'The CPU (Central Processing Unit) is the brain of the computer. It reads and executes instructions one at a time, billions of times per second.'
        },
        {
          difficulty: "medium",
          question: 'What is the difference between RAM and a hard drive?',
          answer: 'RAM (Random Access Memory) is temporary storage used while a program is running — it gets wiped when the computer turns off. The hard drive stores files permanently.'
        },
        {
          difficulty: "hard",
          question: 'What is binary?',
          answer: 'Binary is a number system that uses only two digits: 0 and 1. It represents the two electrical states a transistor in a CPU can have: OFF (0) and ON (1). All computer data is ultimately stored in binary.'
        }
      ]
    },
    {
      id: "how-code-becomes-action",
      title: 'How Code Becomes Action',
      description: "The transition from source code to machine-executable binary.",
      explanation: {
        beginner: "A compiler is a translator. It takes the code you write in C++ and translates it into the 1s and 0s that the computer understands.",
        intermediate: "The compilation process involves pre-processing, compilation, assembly, and linking to create an executable file.",
        advanced: `Now that you know what a computer is, you need to understand how humans tell computers what to do.

### The Language Barrier
Computers only understand machine code (binary instructions). Humans cannot realistically write millions of 1s and 0s to create an application. Programming languages bridge this gap.

### What is a Programming Language?
A programming language is a formal language with strict rules that humans can write and that can be automatically translated into machine code.
* You write code in English-like words (like \`if\`, \`while\`, \`print\`).
* A special program called a **Compiler** reads your code and translates it entirely into machine code that the CPU can run.
* The resulting machine code file is your app (.exe on Windows, etc.)

### Types of Languages
* **High-level languages:** Closer to English. Easier to write. (Python, Java, C++)
* **Low-level languages:** Closer to machine code. Much harder to write. (Assembly)
* **Machine code:** Pure 1s and 0s. Only the CPU speaks this natively.

### The Compilation Process
1. You write human-readable **source code** (.cpp file).
2. The **compiler** translates it into machine code (.exe file).
3. You (or the user) run the .exe.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Source Code vs Machine Code',
          code: `// What YOU write (C++ source code):
if (temperature > 100) {
    boilWater();
}

// What the COMPILER produces (machine code snippet):
// 10110000 01100100 00111100 01000100
// 01001011 01001111 01000101 00111010
// (Nobody writes this by hand!)`,
          explanation: "Comparing human-readable C++ with machine-executable binary."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'What is a compiler?',
          answer: 'A compiler is a program that reads your human-written source code and translates it completely into machine code (binary) that the computer\'s CPU can directly execute.'
        },
        {
          difficulty: "medium",
          question: 'What is source code?',
          answer: 'Source code is the human-readable text you write using a programming language. It is stored in files (like .cpp files) and must be compiled before it can be run.'
        },
        {
          difficulty: "hard",
          question: 'Can a computer run C++ source code directly?',
          answer: 'No. The CPU only understands machine code (binary). The C++ source code must first be compiled by a compiler into an executable file before the computer can run it.'
        }
      ]
    },
    {
      id: "history-of-cpp",
      title: 'A Brief History of C++',
      description: "Tracing the origins of C++ from Bell Labs to the modern day.",
      explanation: {
        beginner: "C++ was created by Bjarne Stroustrup in the 1980s. He wanted to add better organization to the C language.",
        intermediate: "C++ evolved from 'C with Classes' and became a standardized language used in high-performance systems.",
        advanced: `Understanding where C++ came from helps you understand WHY it is designed the way it is.

### The C Language (1972)
C was created by **Dennis Ritchie** at Bell Labs. It was designed to write operating system code (in fact, Unix was rewritten in C). 
* C was revolutionary: it was high-level enough for humans to write but compiled to highly efficient, fast machine code.
* It gave programmers direct control over memory, making programs very fast.

### The Problem with C: Getting Bigger
As programs grew from thousands to millions of lines of code, C's procedural (function-based) style struggled. Functions and data were separate, and managing large codebases became chaotic.

### C++ is Born (1985)
**Bjarne Stroustrup** (also at Bell Labs) set out to solve this problem. He took C and added **Object-Oriented Programming (OOP)** concepts on top of it.
* The name "C++" is itself a joke — in C, \`x++\` means "one better than x", so C++ means "one better than C".
* It kept all of C's speed and power.
* It added classes, objects, inheritance, and other OOP tools to manage complexity.

### C++ Today
C++ is used in situations where both **performance and complexity** matter:
* Operating systems (Windows, Linux kernel components)
* Video game engines (Unreal Engine)
* Web browsers (Chrome, Firefox internals)
* Financial trading systems
* Space exploration software`
      },
      examples: [
        {
          level: "advanced",
          title: 'The Increment Operator — The Name Joke',
          code: `// In C (and C++), this operator adds 1 to a variable:
int c = 10;
c++;  // c is now 11

// The language name "C++" is a programmer's joke:
// C++ = "one better than C"
// (even though it started as "C with Classes")`,
          explanation: "Why the language is called C++."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'Who created C++?',
          answer: 'Bjarne Stroustrup at Bell Labs in the early 1980s (first released in 1985).'
        },
        {
          difficulty: "medium",
          question: 'Why was C++ created if C already existed?',
          answer: 'As software projects grew larger, C\'s procedural approach (separating data and functions) became difficult to manage. C++ added Object-Oriented Programming features to handle this complexity while keeping C\'s performance.'
        },
        {
          difficulty: "hard",
          question: 'Name 3 real-world systems written in C++.',
          answer: 'Many valid answers: the Chrome browser engine, Unreal Engine (game engine), Windows OS components, the Linux kernel (parts), financial trading systems, NASA space software.'
        }
      ]
    },
    {
      id: "why-oop",
      title: 'Why Do We Need Object-Oriented Programming?',
      description: "The philosophy of bundling data and behavior together.",
      explanation: {
        beginner: "OOP is like building with LEGO blocks. Each block has its own properties and you combine them to make something big and organized.",
        intermediate: "OOP solves the problem of data being unprotected in large procedural programs by using encapsulation.",
        advanced: `You now know C++ was created to bring OOP to C. But what IS Object-Oriented Programming, and why does it matter?

### The Old Way: Procedural Programming
In procedural code, the program is a long sequence of function calls. **Data** and **functions** are completely separate. 
* Any function can access and change any piece of data.
* In a small program this is fine. In a 1-million-line program, this is a nightmare.

### The Core Problem: Unprotected Data
Imagine a bank vault with 100 tellers, and the vault door is unlocked. Any teller can walk in and change any account balance — accidentally or maliciously. Finding who made a mistake is impossible.

### OOP's Solution: Bundle Data with Its Functions
OOP bundles related **data** and the **functions** that operate on it into a single unit: an **object**.
* The data is locked inside and hidden.
* External code can only interact through a controlled, public interface (like a bank teller window).
* This is called **encapsulation** or **data hiding**.

### The Four Pillars of OOP
1. **Encapsulation:** Hiding data inside objects.
2. **Inheritance:** New classes can inherit the properties of existing ones.
3. **Polymorphism:** The same function name can behave differently depending on context.
4. **Abstraction:** Hiding complex implementation details behind a simple interface.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Procedural vs OOP Style',
          code: `// ====== PROCEDURAL (Dangerous) ======
float balance = 1000.0;

void deposit(float amount) { balance += amount; }
void badHacker()           { balance = 999999; } // Nothing stops this!

// ====== OOP (Safe) ======
class BankAccount {
private:
    float balance = 1000.0; // LOCKED. Hidden from outside.
public:
    void deposit(float amount) {
        if(amount > 0) balance += amount; // Validation!
    }
    float getBalance() { return balance; }
    // balance = 999999; would fail to compile from outside`,
          explanation: "Comparing dangerous global data with safe encapsulated data."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'What are the four pillars of Object-Oriented Programming?',
          answer: 'Encapsulation (hiding data), Inheritance (reusing code from parent classes), Polymorphism (same name, different behavior), and Abstraction (hiding complex details behind a simple interface).'
        },
        {
          difficulty: "medium",
          question: 'What is "data hiding" in OOP?',
          answer: 'Data hiding means making an object\'s internal data private so that no external code can directly read or modify it. All access must go through the object\'s own public functions, which can enforce validation rules.'
        },
        {
          difficulty: "hard",
          question: 'In a large procedural program with 500 functions sharing global data, how would you trace a bug that corrupts a variable?',
          answer: 'You would have to check all 500 functions — any one of them could have caused the corruption. This is exactly why OOP and data hiding exist: to limit which code can change which data.'
        }
      ]
    },
    {
      id: "core-characteristics-of-oop",
      title: 'Core Characteristics of OOP Languages',
      description: "An overview of Classes, Objects, and the fundamental pillars of OOP.",
      explanation: {
        beginner: "A class is like a blueprint for a house. An object is the actual house you build using that blueprint.",
        intermediate: "OOP languages are defined by their support for classes, inheritance, and the ability to manage complex data structures through objects.",
        advanced: `Now let's build a clear picture of the four OOP pillars with real examples.

### 1. Classes and Objects
A **class** is a blueprint. An **object** is something built from that blueprint.
* Class: \`Dog\` (defines what all dogs have: name, breed, and can bark)
* Object: \`myDog\` (my specific dog named Rex)

Multiple objects can be created from the same class, and each has its own independent data.

### 2. Inheritance (Reusability)
A new class can **inherit** all the properties and behaviors of an existing class, and then add its own extras.
* \`Animal\` has: name, eat(), sleep()
* \`Dog\` inherits everything from \`Animal\` and adds: bark()
* \`Cat\` inherits everything from \`Animal\` and adds: meow()
* You wrote \`eat()\` and \`sleep()\` exactly ONCE, and both Dog and Cat have it automatically.

### 3. Polymorphism (Many Forms)
The same function name can produce different behavior based on context.
* Calling \`makeSound()\` on a Dog produces "Woof".
* Calling \`makeSound()\` on a Cat produces "Meow".
* The same function name, but each class implements it in its own way.

### 4. Abstraction (Simplicity from Complexity)
You use a car without understanding how its engine works internally. That is abstraction.
* You call \`car.drive()\` without knowing the internal combustion details.
* The complexity is hidden behind a simple interface.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Classes and Objects',
          code: `#include <iostream>
using namespace std;

class Dog {
public:
    string name;
    string breed;
    void bark() {
        cout << name << " says: Woof!" << endl;
    }
};

int main() {
    Dog dog1;           // First object
    dog1.name = "Rex";
    dog1.breed = "German Shepherd";

    Dog dog2;           // Second object — completely independent
    dog2.name = "Buddy";
    dog2.breed = "Golden Retriever";

    dog1.bark(); // Rex says: Woof!
    dog2.bark(); // Buddy says: Woof!
    return 0;
}`,
          explanation: "Defining a class and creating multiple independent objects."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'What is the difference between a class and an object?',
          answer: 'A class is the blueprint (the definition). An object is a specific instance (a real thing) created from that blueprint. You can create many independent objects from a single class.'
        },
        {
          difficulty: "medium",
          question: 'How does inheritance save time?',
          answer: 'Instead of rewriting the same functions in every new class, you write them once in a base class. All derived classes automatically inherit those functions and only need to add their specific new features.'
        },
        {
          difficulty: "hard",
          question: 'Give a real-world analogy for abstraction.',
          answer: 'A TV remote. You press "Volume Up" without knowing anything about the electronics inside the TV or the remote. The complexity is hidden; you only interact with a simple interface.'
        }
      ]
    }
  ]
};

export default chapter1;
