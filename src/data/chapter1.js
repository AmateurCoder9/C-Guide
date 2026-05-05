const chapter1 = {
  id: 1,
  title: 'The Big Picture',
  description: 'Start from absolute zero — what is a computer, what is programming, and why was C++ invented.',
  topics: [
    {
      id: "what-is-programming",
      title: "What is Programming?",
      description: "Understand the concept of giving instructions to a machine using real-world analogies.",
      explanation: `Imagine you are teaching a robot how to make a peanut butter sandwich. You can't just say "make it." You have to be incredibly specific: "Pick up the knife," "Open the jar," "Spread the butter."

**Programming** is exactly that. It is the art of writing a sequence of step-by-step instructions that tell a computer exactly what to do. Computers are fast, but they aren't "smart" — they only do precisely what you tell them to do.

A **computer program** is a set of instructions stored in a file that a computer's processor (CPU) can execute. We write these instructions in a **programming language** because human languages like English are too vague for machines.

Programming involves two main things:
* **Logic** — deciding what steps to take and when
* **Syntax** — the specific grammar rules of the language you are writing in

C++ is what we call a **high-level language**, meaning it uses English-like words that are readable for humans. But underneath, the computer translates those words into electrical signals (binary: 1s and 0s) that the hardware understands. This translation process is what makes programming powerful — you think in English, the machine thinks in electricity, and the programming language bridges the gap.

At the deepest level, programming is the process of designing and building an executable program to accomplish a specific computing result. Modern programming supports multiple paradigms including **Procedural** (step-by-step), **Object-Oriented** (data-driven), and **Functional**. C++ is unique because it supports all of these, giving developers both low-level control over memory and high-level abstractions for organizing complex code.`,
      examples: [
        {
          title: "The Logic of a Program",
          code: `// Think of this like a recipe
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
}`,
          explanation: "This code shows how a program makes a simple decision based on data, just like a human would."
        },
        {
          title: "How Code Becomes Instructions",
          code: `// C++ Source Code (What you write)
// int x = 5 + 10;

// Machine Code (What the computer sees)
// 10110000 00001111 00000101`,
          explanation: "C++ acts as a bridge. You write the top part, and a compiler translates it into the bottom part (binary)."
        }
      ],
      questions: [
        {
          question: "What is the simplest definition of a computer program?",
          answer: "A list of step-by-step instructions that tell a computer what to do."
        },
        {
          question: "Why do we use programming languages instead of just speaking to computers in English?",
          answer: "Human languages are too vague and ambiguous; programming languages have strict rules that machines can follow perfectly."
        },
        {
          question: "What are the two main things a programmer must handle when writing code?",
          answer: "Logic (the plan/steps) and Syntax (the grammar/rules of the language)."
        },
        {
          question: "Is a computer 'smart' enough to guess what you mean if you make a mistake in your code?",
          answer: "No. A computer will either fail to run the code or do exactly what you accidentally told it to do, even if it's wrong."
        },
        {
          question: "Explain the difference between a high-level language like C++ and machine code.",
          answer: "High-level languages use English-like words and are easy for humans to read. Machine code is made of binary (1s and 0s) and is the only language hardware understands directly."
        }
      ]
    },
    {
      id: "what-is-cpp",
      title: "What is C++ and Why Learn It?",
      description: "Discover the history, power, and massive real-world impact of the C++ language.",
      explanation: `Imagine you have a choice between a bicycle, a family car, and a Formula 1 racing car. Python is like the family car — easy to drive and very practical. But **C++** is the Formula 1 car. It is incredibly fast, gives the driver total control, but requires more skill to handle.

C++ is a "superpower" language used to build things that need to be extremely fast, like video games (Unreal Engine), operating systems (Windows), web browsers (Chrome), and even rocket software.

It was created by **Bjarne Stroustrup** in 1985 as an extension of the 'C' language. He added **Object-Oriented Programming (OOP)**, which allows programmers to organize code into 'objects' — like building blocks that each carry their own data and behavior.

C++ is a **compiled** language, meaning the computer translates the entire program into machine code before running it. This makes it much faster than "interpreted" languages like Python or JavaScript, where the code is translated line by line as it runs.

At a technical level, C++ is a statically typed, free-form, multi-paradigm, compiled, general-purpose programming language. It is often called a "middle-level" language because it gives you both high-level abstractions (like classes and templates) and low-level hardware access (like memory pointers).

Key strengths that make C++ irreplaceable:
- **Determinism:** You know exactly when memory is allocated and freed.
- **Portability:** Code can run on almost any hardware architecture.
- **Performance:** Direct hardware access and minimal runtime overhead make it the fastest mainstream language available.`,
      examples: [
        {
          title: "The Speed of C++",
          code: `// C++ can do millions of calculations in a blink of an eye.
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
}`,
          explanation: "This simple code demonstrates that C++ is built for high-performance tasks that involve heavy lifting."
        }
      ],
      questions: [
        {
          question: "Who created the C++ language?",
          answer: "Bjarne Stroustrup."
        },
        {
          question: "Name one thing C++ is commonly used for.",
          answer: "Video games, operating systems, or high-performance apps."
        },
        {
          question: "What does the '++' in C++ represent?",
          answer: "It is a joke based on the C operator '++', which means 'increment by one'. C++ is 'one better than C'."
        },
        {
          question: "Is C++ a compiled or interpreted language?",
          answer: "It is a compiled language."
        },
        {
          question: "Why is C++ preferred for building AAA video games over languages like Python?",
          answer: "C++ provides direct control over hardware and memory, allowing for much higher performance and less lag (latency) which is critical for gaming."
        }
      ]
    },
    {
      id: "setting-up-environment",
      title: "Setting Up Your Environment",
      description: "Prepare your computer to write, compile, and run C++ code.",
      explanation: `To write C++, you need two simple tools:
1. **A Text Editor:** Where you type your code (like a digital notebook).
2. **A Compiler:** A "translator" that turns your typed code into a program the computer can run.

Think of it like writing a letter in French: you need a pen to write it (Editor) and a translator to read it to someone who only speaks English (Compiler).

Most modern programmers use an **IDE (Integrated Development Environment)** instead of setting up these tools separately. An IDE is one software package that includes both the editor and the compiler, plus tools to help find bugs.

Common choices for C++ development:
- **VS Code:** Lightweight, free, and very popular with extensions for C++.
- **Code::Blocks:** Great for beginners, comes with a compiler built in.
- **Visual Studio:** The industry standard for professional Windows developers.

Under the hood, your C++ environment uses a **toolchain**. The most common toolchains are **GCC (GNU Compiler Collection)** on Linux, **Clang** on Mac, and **MSVC** on Windows.

You can also interact with the compiler directly from the command line using commands like \`g++ main.cpp -o myapp\`, where the \`-o\` flag specifies the output filename. Advanced setups use build systems like **CMake** to manage large projects with hundreds of files across multiple platforms.`,
      examples: [
        {
          title: "Checking your Compiler",
          code: `// Open your terminal/command prompt and type:
// g++ --version

// If you see a version number, your 'translator' is ready!`,
          explanation: "This isn't code you write in a file, but a command you use to talk to your computer's tools."
        }
      ],
      questions: [
        {
          question: "What are the two main tools you need to write C++?",
          answer: "A text editor and a compiler."
        },
        {
          question: "What does IDE stand for?",
          answer: "Integrated Development Environment."
        },
        {
          question: "What is the job of the compiler in your setup?",
          answer: "To translate your human-readable source code into machine-readable instructions (an executable file)."
        },
        {
          question: "Name one popular IDE used for C++ development.",
          answer: "VS Code, Code::Blocks, or Visual Studio."
        },
        {
          question: "If you have a file named 'hello.cpp', what command would you typically use to compile it into a program named 'hello'?",
          answer: "g++ hello.cpp -o hello"
        }
      ]
    },
    {
      id: "what-is-a-computer",
      title: 'What is a Computer?',
      description: "A deep dive into the hardware that executes your code.",
      explanation: `Before writing a single line of code, you must understand the machine you are talking to.

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
At the most basic level, a CPU only understands electrical signals: **ON (1)** and **OFF (0)**. Every instruction, every number, every letter stored in a computer is ultimately represented as a sequence of these 1s and 0s. This system is called **binary**.`,
      examples: [
        {
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
          question: 'What does a CPU do?',
          answer: 'The CPU (Central Processing Unit) is the brain of the computer. It reads and executes instructions one at a time, billions of times per second.'
        },
        {
          question: 'What is the difference between RAM and a hard drive?',
          answer: 'RAM (Random Access Memory) is temporary storage used while a program is running — it gets wiped when the computer turns off. The hard drive stores files permanently.'
        },
        {
          question: 'What is binary?',
          answer: 'Binary is a number system that uses only two digits: 0 and 1. It represents the two electrical states a transistor in a CPU can have: OFF (0) and ON (1). All computer data is ultimately stored in binary.'
        }
      ]
    },
    {
      id: "how-code-becomes-action",
      title: 'How Code Becomes Action',
      description: "The transition from source code to machine-executable binary.",
      explanation: `Now that you know what a computer is, you need to understand how humans tell computers what to do.

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
3. You (or the user) run the .exe.`,
      examples: [
        {
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
          question: 'What is a compiler?',
          answer: 'A compiler is a program that reads your human-written source code and translates it completely into machine code (binary) that the computer\'s CPU can directly execute.'
        },
        {
          question: 'What is source code?',
          answer: 'Source code is the human-readable text you write using a programming language. It is stored in files (like .cpp files) and must be compiled before it can be run.'
        },
        {
          question: 'Can a computer run C++ source code directly?',
          answer: 'No. The CPU only understands machine code (binary). The C++ source code must first be compiled by a compiler into an executable file before the computer can run it.'
        }
      ]
    },
    {
      id: "history-of-cpp",
      title: 'A Brief History of C++',
      description: "Tracing the origins of C++ from Bell Labs to the modern day.",
      explanation: `Understanding where C++ came from helps you understand WHY it is designed the way it is.

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
* Space exploration software`,
      examples: [
        {
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
          question: 'Who created C++?',
          answer: 'Bjarne Stroustrup at Bell Labs in the early 1980s (first released in 1985).'
        },
        {
          question: 'Why was C++ created if C already existed?',
          answer: 'As software projects grew larger, C\'s procedural approach (separating data and functions) became difficult to manage. C++ added Object-Oriented Programming features to handle this complexity while keeping C\'s performance.'
        },
        {
          question: 'Name 3 real-world systems written in C++.',
          answer: 'Many valid answers: the Chrome browser engine, Unreal Engine (game engine), Windows OS components, the Linux kernel (parts), financial trading systems, NASA space software.'
        }
      ]
    },
    {
      id: "why-oop",
      title: 'Why Do We Need Object-Oriented Programming?',
      description: "The philosophy of bundling data and behavior together.",
      explanation: `You now know C++ was created to bring OOP to C. But what IS Object-Oriented Programming, and why does it matter?

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
4. **Abstraction:** Hiding complex implementation details behind a simple interface.`,
      examples: [
        {
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
          question: 'What are the four pillars of Object-Oriented Programming?',
          answer: 'Encapsulation (hiding data), Inheritance (reusing code from parent classes), Polymorphism (same name, different behavior), and Abstraction (hiding complex details behind a simple interface).'
        },
        {
          question: 'What is "data hiding" in OOP?',
          answer: 'Data hiding means making an object\'s internal data private so that no external code can directly read or modify it. All access must go through the object\'s own public functions, which can enforce validation rules.'
        },
        {
          question: 'In a large procedural program with 500 functions sharing global data, how would you trace a bug that corrupts a variable?',
          answer: 'You would have to check all 500 functions — any one of them could have caused the corruption. This is exactly why OOP and data hiding exist: to limit which code can change which data.'
        }
      ]
    },
    {
      id: "core-characteristics-of-oop",
      title: 'Core Characteristics of OOP Languages',
      description: "An overview of Classes, Objects, and the fundamental pillars of OOP.",
      explanation: `Now let's build a clear picture of the four OOP pillars with real examples.

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
* The complexity is hidden behind a simple interface.`,
      examples: [
        {
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
          question: 'What is the difference between a class and an object?',
          answer: 'A class is the blueprint (the definition). An object is a specific instance (a real thing) created from that blueprint. You can create many independent objects from a single class.'
        },
        {
          question: 'How does inheritance save time?',
          answer: 'Instead of rewriting the same functions in every new class, you write them once in a base class. All derived classes automatically inherit those functions and only need to add their specific new features.'
        },
        {
          question: 'Give a real-world analogy for abstraction.',
          answer: 'A TV remote. You press "Volume Up" without knowing anything about the electronics inside the TV or the remote. The complexity is hidden; you only interact with a simple interface.'
        }
      ]
    }
  ]
};

export default chapter1;
