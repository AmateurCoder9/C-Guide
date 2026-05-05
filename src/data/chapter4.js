const chapter4 = {
  id: 4,
  title: 'Structures',
  description: 'Learn how to group different types of variables together to create your own custom data types that represent real-world items.',
  topics: [
    {
      id: "what-is-struct-intro",
      title: "What is a Structure? Grouping Related Data",
      description: "Learn how to bundle different types of information into a single custom unit.",
      explanation: {
        beginner: `
          Imagine you're building a video game. You need to keep track of a player's **Name** (text), **Score** (number), and **Health** (decimal). 
          Instead of having three separate variables floating around, you can bundle them into one "folder" called a **Structure**.
          
          A structure (or \`struct\`) is like a custom-made data type that lets you keep related information together.
        `,
        intermediate: `
          A **struct** is a user-defined data type that allows you to combine data items of different kinds. Each piece of data inside a structure is called a **member**.
          Unlike an array, which holds many items of the *same* type, a struct holds items of *different* types.
        `,
        advanced: `
          Structures in C++ are a way of creating a composite data type. When a structure is defined, the compiler allocates a contiguous block of memory large enough to hold all its members. By default, members of a C++ struct have **public** access, which distinguishes them from classes in terms of default visibility.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Player Folder",
          code: `
struct Player {
    string name;
    int score;
    float health;
};
          `,
          explanation: "This defines what a 'Player' looks like. It doesn't create a player yet, it just makes the blueprint."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the main benefit of using a structure?",
          answer: "It allows you to group related variables of different types together."
        },
        {
          difficulty: "medium",
          question: "How is a structure different from an array?",
          answer: "An array holds multiple items of the same type, while a structure can hold items of many different types."
        }
      ]
    },
    {
      id: "declaring-using-struct",
      title: "Declaring and Using a struct",
      description: "Master the syntax for creating blueprints and using the dot operator to access data.",
      explanation: {
        beginner: `
          Once you have your "blueprint" (the struct definition), you can create actual variables from it. 
          To look inside the variable and change or read a piece of data, we use the **dot operator (\`.\`)**. 
          It's like saying: "Go to the player variable, and look at its score."
        `,
        intermediate: `
          To declare a struct variable: \`MyStruct myVar;\`. 
          To access members: \`myVar.memberName = value;\`. 
          You can also initialize a struct all at once using curly braces: \`MyStruct myVar = {val1, val2};\`.
        `,
        advanced: `
          Memory for struct instances is allocated on the stack if declared locally, or on the heap if using \`new\`. The dot operator calculates the memory offset of the member relative to the starting address of the struct instance.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Building a Student",
          code: `
#include <iostream>
using namespace std;

struct Student {
    int id;
    char grade;
};

int main() {
    Student s1;       // Create one student
    s1.id = 1234;     // Access ID using '.'
    s1.grade = 'B';   // Access Grade using '.'
    
    cout << "Student " << s1.id << " got a " << s1.grade;
    return 0;
}
          `,
          explanation: "Notice how we use the variable name 's1' followed by a dot to reach the items inside."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What symbol do you use to access a member inside a struct variable?",
          answer: "The dot operator (.)"
        },
        {
          difficulty: "medium",
          question: "Can you assign one struct variable directly to another? (e.g., s1 = s2;)",
          answer: "Yes, C++ allows you to copy all values from one struct instance to another using the assignment operator."
        }
      ]
    },
    {
      id: "struct-with-functions",
      title: "Structures with Functions",
      description: "Learn how to pass entire bundles of data to functions and return them as results.",
      explanation: {
        beginner: `
          Functions can handle structures just like they handle simple numbers. 
          You can send a whole "Player folder" to a function that prints it, or have a function calculate something and hand you back a finished "Result folder".
        `,
        intermediate: `
          Structures can be passed to functions **by value** (a copy is made) or **by reference** (the function works on the original). References are usually preferred for large structures to save memory and time.
        `,
        advanced: `
          When passing a struct by value, the entire memory block is copied onto the stack, which can be inefficient for large objects. Passing by **const reference** (\`const MyStruct& s\`) provides the speed of a reference with the safety of a value pass (preventing modification).
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Printing a Point",
          code: `
struct Point {
    int x, y;
};

void displayPoint(Point p) {
    cout << "(" << p.x << ", " << p.y << ")";
}
          `,
          explanation: "The function 'displayPoint' receives the entire Point bundle at once."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Can a function return an entire struct?",
          answer: "Yes, functions can return any user-defined struct type."
        },
        {
          difficulty: "hard",
          question: "Why is it usually better to pass a large struct by reference instead of by value?",
          answer: "Passing by value creates a complete copy of all data in the struct, which consumes memory and slows down the program. Passing by reference just passes the memory address."
        }
      ]
    },
    {
      id: "nested-structs-intro",
      title: "Nested Structures",
      description: "Organize complex data by putting one structure inside another.",
      explanation: {
        beginner: `
          Sometimes, a piece of information is itself a bundle. 
          Imagine a \`Car\` structure. It needs an \`Engine\`. The engine has its own details (horsepower, cylinders). 
          You can put the \`Engine\` struct *inside* the \`Car\` struct. It's like having a folder inside another folder.
        `,
        intermediate: `
          Accessing nested members involves chaining dot operators. 
          Ex: \`myCar.engine.horsepower = 300;\`. 
          The inner struct must usually be defined before the outer struct uses it.
        `,
        advanced: `
          Nesting structures allows for **Composition**, a core design principle where complex objects are built from simpler ones. Memory is still contiguous; the inner struct's members follow the outer struct's preceding members in RAM.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A House with a Room",
          code: `
struct Dimensions {
    int width, height;
};

struct Room {
    string name;
    Dimensions size; // Structure inside a structure
};
          `,
          explanation: "To reach the width, you would use: myRoom.size.width"
        }
      ],
      questions: [
        {
          difficulty: "medium",
          question: "How do you access a member inside a nested structure?",
          answer: "By chaining the dot operator (e.g., outerVar.innerVar.member)."
        }
      ]
    },
    {
      id: "arrays-of-structs-intro",
      title: "Arrays of Structures",
      description: "Create lists of custom data, effectively building a simple database.",
      explanation: {
        beginner: `
          If a \`struct\` is one folder, an **Array of Structures** is a whole filing cabinet. 
          You can create a list that holds 50 students, where each student has their own ID, name, and grades.
        `,
        intermediate: `
          Syntax: \`Player team[10];\`. 
          This creates an array named 'team' that has 10 slots, and every single slot contains a full \`Player\` structure.
        `,
        advanced: `
          An array of structures is stored as a contiguous block of memory. If a struct is 20 bytes and the array has 10 elements, the total block is 200 bytes. This "AoS" (Array of Structures) layout is common, though sometimes performance-critical applications use "SoA" (Structure of Arrays) for better cache utilization.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A Team of Players",
          code: `
struct Player {
    int id;
    int score;
};

int main() {
    Player team[3]; // A list of 3 players
    
    team[0].score = 50;
    team[1].score = 75;
    team[2].score = 100;
}
          `,
          explanation: "We combine array indexing [0] with the dot operator . to reach the data we want."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What does 'team[5].score' refer to?",
          answer: "The 'score' member of the 6th element (index 5) in the 'team' array."
        }
      ]
    },
    {
      id: "struct-advanced",
      title: 'What is a Structure? (Advanced)',
      description: "Detailed look at blueprints, memory allocation, and the dot operator.",
      explanation: {
        beginner: "This section revisits structures as blueprints for custom data folders.",
        intermediate: "Understanding that struct definitions do not allocate memory, but declarations do.",
        advanced: `So far, you know how to make single boxes for data (like \`int age\`). But what if you want to store information about a whole person? A person has a name (text), an age (whole number), and a height (decimal). 

Creating separate variables like \`person1Name\`, \`person1Age\`, \`person2Name\` gets messy fast.

### The Solution: Structures
A structure (or \`struct\`) lets you bundle different types of variables together under one roof. Think of it like a filing cabinet folder. You create a custom folder labeled "Employee", and inside it, you put a name, an ID number, and a salary.

### Defining a Structure (The Blueprint)
The \`struct\` keyword is used to define this bundle. 
* This definition acts as a **blueprint**. 
* It **does not allocate memory** or create an actual employee. It just tells the computer: *"Hey, if I ever ask you to make an Employee, here are the things it needs to have inside."*

### Creating and Accessing
Once the blueprint exists, you can create actual variables of that new type. 
* To look inside the folder and grab a specific piece of data, we use the **dot operator (\`.\`)**.
* Example: \`worker.salary\` means "look at the worker variable, and grab the salary inside it."`
      },
      examples: [
        {
          level: "advanced",
          title: 'Structure Initialization & Copying',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Distance {\n    int feet;\n    float inches;\n};\n\nint main() {\n    // Initialize immediately using curly braces\n    Distance myThrow = { 15, 6.25 }; \n    Distance yourThrow;\n    \n    // You can copy an entire folder into another instantly!\n    yourThrow = myThrow; \n    \n    cout << "You threw it " << yourThrow.feet << " feet." << endl;\n    return 0;\n}`,
          explanation: "Fast initialization and member-wise copying of structures."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'Does the definition of a `struct` take up memory in the computer?',
          answer: 'No. Defining a struct only creates a concept or a blueprint. Memory is only used when you actually declare a variable of that struct type.'
        }
      ]
    },
    {
      id: "nesting-arrays-advanced",
      title: 'Nesting and Arrays of Structures (Advanced)',
      description: "Complex data layouts, memory contiguousness, and database-like storage.",
      explanation: {
        beginner: "Real-world data is often nested. Learn how to represent complex hierarchies in code.",
        intermediate: "Mastering the logic of arrays of structures for record-keeping applications.",
        advanced: `Now that you know how to put variables inside a structure, what if you put a structure... inside another structure?

### Nested Structures (Folders within Folders)
This is called **nesting**. Real-world data is often nested. 
* For example, a \`House\` structure might need to store the dimensions of the living room. 
* Instead of creating basic variables, you can place a \`Room\` structure *inside* the \`House\` structure.
* To access it, you just keep chaining the dot operator (e.g., \`myHouse.livingRoom.width\`).

### Arrays of Structures (A Filing Cabinet)
Earlier we learned about Arrays (a list of identical variables). You can create an array of your custom structures!
* This is exactly how a simple database works.
* You could create an array that holds 100 \`Employee\` structures.
* To get the salary of the 5th employee, you look at the 5th slot in the array, then use the dot operator: \`company[4].salary\`.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Array of Nested Structures',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Date {\n    int month, day, year;\n};\n\nstruct Student {\n    string name;\n    Date birthdate;\n};\n\nint main() {\n    Student classList[2] = {\n        {"Alice", {5, 12, 2000}},\n        {"Bob", {11, 24, 1999}}\n    };\n    \n    for(int i=0; i<2; i++) {\n        cout << classList[i].name << " born in " << classList[i].birthdate.year << endl;\n    }\n    return 0;\n}`,
          explanation: "A complex data layout combining arrays and nested structures."
        }
      ],
      questions: [
        {
          difficulty: "medium",
          question: 'How do you access the `inches` member of the `width` member of a `Room` structure named `myRoom`?',
          answer: 'By chaining the dot operator: `myRoom.width.inches`.'
        }
      ]
    },
    {
      id: "enums-advanced",
      title: 'Enumerations (Advanced)',
      description: "Using the enum keyword to create human-readable integral constants.",
      explanation: {
        beginner: "Stop using 'magic numbers'. Use words that mean something in your code.",
        intermediate: "Enums are secretly integers. Learn how to control their values and use them in switches.",
        advanced: `Sometimes, you have a variable that should only ever hold a few specific options. For example, a \`DayOfWeek\` variable should only be Monday, Tuesday, etc.

If you used an integer for this (\`0\` for Sunday, \`1\` for Monday), a week later you might forget what \`4\` means. This is called a "magic number" and it makes code hard to read.

### The \`enum\` Keyword
An enumeration (or enum) lets you invent your own data type where the options are English words.
* It assigns a hidden integer to each word automatically (starting at 0).
* It prevents you from assigning random, invalid numbers.
* It makes your code incredibly easy for other humans to read.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Custom Enum Values',
          code: `#include <iostream>\nusing namespace std;\n\nenum Status { Pending = 1, Approved = 2, Rejected = 99 };\n\nint main() {\n    Status currentStatus = Approved;\n    cout << "Status code: " << currentStatus << endl; // Prints 2\n    return 0;\n}`,
          explanation: "Forcing hidden numbers to be specific values for external compatibility."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: 'Why use enums instead of just using integers?',
          answer: 'Readability and safety. It makes the code self-documenting and prevents assigning invalid arbitrary values.'
        }
      ]
    }
  ]
};

export default chapter4;
