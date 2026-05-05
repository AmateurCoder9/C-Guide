const chapter4 = {
  id: 4,
  title: 'Structures',
  description: 'Learn how to group different types of variables together to create your own custom data types that represent real-world items.',
  topics: [
    {
      id: "what-is-struct",
      title: "What is a Structure?",
      description: "Learn how to bundle different types of information into a single custom unit.",
      explanation: `So far, you know how to make single boxes for data (like \`int age\`). But what if you want to store information about a whole person? A person has a name (text), an age (whole number), and a height (decimal).

Creating separate variables like \`person1Name\`, \`person1Age\`, \`person2Name\` gets messy fast. What you really want is a single "folder" that contains all the related pieces of information together.

### The Solution: Structures
A structure (or \`struct\`) lets you bundle different types of variables together under one roof. Think of it like a filing cabinet folder. You create a custom folder labeled "Employee", and inside it, you put a name, an ID number, and a salary.

### Defining a Structure (The Blueprint)
The \`struct\` keyword is used to define this bundle:
\`\`\`
struct Employee {
    int idNumber;
    float salary;
};
\`\`\`

This definition acts as a **blueprint**. It **does not allocate memory** or create an actual employee. It just tells the computer: *"Hey, if I ever ask you to make an Employee, here are the things it needs to have inside."*

Unlike an array, which holds many items of the *same* type, a struct holds items of *different* types. This makes it the perfect tool for modeling real-world entities.

When a structure variable is created, the compiler allocates a contiguous block of memory large enough to hold all its members. By default in C++, members of a struct have **public** access, meaning any code can read or modify them directly.`,
      examples: [
        {
          title: 'Defining and Using a Structure',
          code: `#include <iostream>
using namespace std;

// 1. The Blueprint (Usually goes above main)
struct Employee {
    int idNumber;
    float salary;
};

int main() {
    // 2. Creating an actual variable using our custom blueprint
    Employee worker1;

    // 3. Opening the folder using the dot (.) operator
    worker1.idNumber = 405;
    worker1.salary = 65000.50;

    cout << "Employee #" << worker1.idNumber << " makes $" << worker1.salary << endl;
    return 0;
}`,
          explanation: "A simple program creating a blueprint and then building an object from it."
        },
        {
          title: 'Structure Initialization',
          code: `#include <iostream>
using namespace std;

struct Distance {
    int feet;
    float inches;
};

int main() {
    // Initialize immediately using curly braces
    Distance myThrow = { 15, 6.25 }; 
    Distance yourThrow;
    
    // You can copy an entire folder into another instantly!
    yourThrow = myThrow; 
    
    cout << "You threw it " << yourThrow.feet << " feet." << endl;
    return 0;
}`,
          explanation: "A faster way to put data into the folder all at once."
        }
      ],
      questions: [
        {
          question: 'Does the definition of a `struct` take up memory in the computer?',
          answer: 'No. Defining a struct only creates a concept or a blueprint. Memory is only used when you actually declare a variable of that struct type inside your program.'
        },
        {
          question: 'What symbol is used to access the variables inside a structure?',
          answer: 'The dot operator (.), which connects the name of the structure variable to the name of its internal member.'
        },
        {
          question: 'What happens when you write `struct1 = struct2;`?',
          answer: 'The computer performs a member-wise copy. Every single piece of data inside `struct2` is copied over and overwrites the data inside `struct1`.'
        }
      ]
    },
    {
      id: "struct-with-functions",
      title: "Structures with Functions",
      description: "Learn how to pass entire bundles of data to functions and return them as results.",
      explanation: `Functions can handle structures just like they handle simple numbers. You can send a whole "Employee folder" to a function that prints it, or have a function calculate something and hand you back a finished "Result folder."

### Passing by Value
When you pass a struct to a function normally, a **complete copy** is made. The function works on the copy, and the original is unaffected. This is safe but can be slow for large structures.

### Passing by Reference
If you put an ampersand \`&\` after the type, the function receives direct access to the original. Changes inside the function affect the original data. This is faster because no copy is made.

### Passing by Const Reference
The best of both worlds: \`const MyStruct& s\`. This passes the original (fast, no copy) but prevents the function from modifying it (safe). This is the standard approach for read-only access in professional C++ code.

### Returning Structures
A function can also create a new struct and return it. This is useful for functions like "calculate the midpoint between two points" that produce a brand new result rather than modifying something existing.`,
      examples: [
        {
          title: 'Structures and Functions',
          code: `#include <iostream>
using namespace std;

struct Point {
    int x;
    int y;
};

// A function that returns a Point structure
Point getCenter() {
    Point p = {50, 50};
    return p;
}

int main() {
    Point center = getCenter();
    cout << "Center is at (" << center.x << ", " << center.y << ")" << endl;
    return 0;
}`,
          explanation: "Returning a whole bundled folder from a function."
        }
      ],
      questions: [
        {
          question: "Can a function return an entire struct?",
          answer: "Yes, functions can return any user-defined struct type."
        },
        {
          question: "Why is it usually better to pass a large struct by reference instead of by value?",
          answer: "Passing by value creates a complete copy of all data in the struct, which consumes memory and slows down the program. Passing by reference just passes the memory address."
        }
      ]
    },
    {
      id: "nested-structs",
      title: "Nested Structures",
      description: "Organize complex data by putting one structure inside another.",
      explanation: `Now that you know how to put variables inside a structure, what if you put a structure... inside another structure? This is called **nesting**, and real-world data is often nested.

For example, a \`House\` structure might need to store the dimensions of each room. Instead of creating basic width and height variables directly, you can place a \`Dimensions\` structure *inside* the \`House\` structure. It is like having a folder inside another folder.

To access the deeply nested data, you just keep chaining the dot operator:
\`myHouse.livingRoom.width\`

This reads as: "Go to myHouse, look inside its livingRoom, and grab the width."

The inner struct must be defined **before** the outer struct that uses it, because C++ reads from top to bottom. If the compiler hasn't seen the definition of \`Dimensions\` yet, it won't know what to do when it encounters it inside \`House\`.

Nesting structures allows for **Composition** — a core design principle where complex objects are built from simpler ones. The memory is still stored in a single contiguous block; the inner struct's members simply follow the outer struct's preceding members in RAM.`,
      examples: [
        {
          title: 'Nested Structures',
          code: `#include <iostream>
using namespace std;

struct Distance {
    int feet;
    float inches;
};

struct Room {
    Distance length;
    Distance width;
};

int main() {
    Room dining;
    
    // Chaining dots to go deep into the folders
    dining.length.feet = 13;
    dining.length.inches = 6.5;
    dining.width.feet = 10;
    
    cout << "Length is " << dining.length.feet << " feet." << endl;
    return 0;
}`,
          explanation: "A structure residing inside another structure."
        }
      ],
      questions: [
        {
          question: 'How do you access the `inches` member of the `width` member of a `Room` structure named `myRoom`?',
          answer: 'By chaining the dot operator: `myRoom.width.inches`.'
        },
        {
          question: 'Must the inner struct be defined before the outer struct?',
          answer: 'Yes, because C++ reads from top to bottom. The compiler needs to know the size and layout of the inner struct before it can include it in the outer struct.'
        }
      ]
    },
    {
      id: "arrays-of-structs",
      title: "Arrays of Structures",
      description: "Create lists of custom data, effectively building a simple database.",
      explanation: `If a structure is one folder, an **Array of Structures** is a whole filing cabinet. You can create a list that holds 100 students, where each student has their own ID, name, and grades.

\`Employee roster[100];\` creates an array named 'roster' that has 100 slots, and every single slot contains a full \`Employee\` structure.

### Accessing Members
Access is simple: combine the array index operator with the dot operator.
\`roster[0].salary\` means "look at the first Employee in the roster array, and grab their salary."

### Why This Matters
This is exactly how a simple database works. Before you learn SQL or MongoDB, understand that at the most basic level, a database is just an array of structures — each structure represents one record (row), and each member represents one field (column).

An array of structures is stored as a contiguous block of memory. If a struct is 20 bytes and the array has 10 elements, the total block is 200 bytes. This "Array of Structures" (AoS) layout is the most common approach, though sometimes performance-critical applications use "Structure of Arrays" (SoA) for better CPU cache utilization.`,
      examples: [
        {
          title: 'Arrays of Structures',
          code: `#include <iostream>
using namespace std;

struct Employee {
    int id;
    float salary;
};

int main() {
    // Create a list that can hold 2 employees
    Employee roster[2];
    
    roster[0].id = 101;
    roster[0].salary = 45000.0;
    
    roster[1].id = 102;
    roster[1].salary = 52000.0;
    
    cout << "Employee 1 ID: " << roster[0].id << endl;
    cout << "Employee 2 Salary: " << roster[1].salary << endl;
    return 0;
}`,
          explanation: "Creating a mini database of records."
        },
        {
          title: 'Array of Nested Structures',
          code: `#include <iostream>
using namespace std;

struct Date {
    int month, day, year;
};

struct Student {
    string name;
    Date birthdate;
};

int main() {
    // Creating an array and initializing it instantly
    Student classList[2] = {
        {"Alice", {5, 12, 2000}},
        {"Bob", {11, 24, 1999}}
    };
    
    for(int i=0; i<2; i++) {
        cout << classList[i].name << " born in " << classList[i].birthdate.year << endl;
    }
    return 0;
}`,
          explanation: "A complex data layout combining arrays and nested structures."
        }
      ],
      questions: [
        {
          question: 'If you create an array of structures, are they stored together in memory?',
          answer: 'Yes. An array guarantees that all elements are stored in a single contiguous block of memory. The second structure sits immediately after the first one ends.'
        },
        {
          question: 'How do you access the salary of the 5th employee in an array called company?',
          answer: 'company[4].salary — remember, arrays are zero-indexed, so the 5th element is at index 4.'
        }
      ]
    },
    {
      id: "enumerations",
      title: "Enumerations — Making Code Human-Readable",
      description: "Using the enum keyword to create meaningful named constants.",
      explanation: `Sometimes, you have a variable that should only ever hold a few specific options. For example, a \`DayOfWeek\` variable should only be Monday, Tuesday, etc.

If you used an integer for this (\`0\` for Sunday, \`1\` for Monday), a week later you might forget what \`4\` means. This is called a "magic number" and it makes code very hard to read.

### The \`enum\` Keyword
An enumeration (or enum) lets you invent your own data type where the options are English words.
* It assigns a hidden integer to each word automatically (starting at 0).
* It prevents you from assigning random, invalid numbers.
* It makes your code incredibly easy for other humans to read.

For example, \`if(color == RED)\` is much easier to understand than \`if(color == 0)\`.

You can also force the hidden numbers to be whatever you want:
\`enum Status { Pending = 1, Approved = 2, Rejected = 99 };\`

Enums work beautifully with \`switch\` statements because each enum value is secretly an integer. The underlying data type of a standard C++ enum is implicitly an integer.

One limitation: you cannot use \`cin >>\` to directly input the word "mon" into an enum variable. \`cin\` does not know how to translate text into enum values. You would have to read a string and write logic to convert it, or read an integer and cast it.`,
      examples: [
        {
          title: 'Basic Enumeration',
          code: `#include <iostream>
using namespace std;

// We created a new type called 'days_of_week'
enum days_of_week { sun, mon, tue, wed, thu, fri, sat };

int main() {
    days_of_week day1, day2;
    day1 = mon; // The computer secretly stores this as '1'
    day2 = thu; // The computer secretly stores this as '4'
    
    int diff = day2 - day1;
    cout << "Days between: " << diff << endl; // Outputs 3
    return 0;
}`,
          explanation: "Defining and using an enum for days of the week."
        },
        {
          title: 'Enums in switch Statements',
          code: `#include <iostream>
using namespace std;

enum Color { RED, GREEN, BLUE };

int main() {
    Color myColor = GREEN;
    
    switch(myColor) {
        case RED: cout << "Stop"; break;
        case GREEN: cout << "Go"; break;
        case BLUE: cout << "Water"; break;
    }
    return 0;
}`,
          explanation: "Using enums makes switch statements highly readable."
        }
      ],
      questions: [
        {
          question: 'What is the underlying data type of a standard C++ `enum`?',
          answer: 'The underlying data type is implicitly an integer. By default, the first option is 0, the second is 1, and so on.'
        },
        {
          question: 'Why use enums instead of just using integers?',
          answer: 'Readability and safety. `if(color == RED)` is much easier to understand than `if(color == 0)`. It also prevents accidentally assigning invalid values.'
        }
      ]
    }
  ]
};

export default chapter4;
