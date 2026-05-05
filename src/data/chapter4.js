const chapter4 = {
  id: 4,
  title: 'Structures',
  description: 'Learn how to group different types of variables together to create your own custom data types that represent real-world items.',
  topics: [
    {
      title: 'What is a Structure?',
      explanation: `So far, you know how to make single boxes for data (like \`int age\`). But what if you want to store information about a whole person? A person has a name (text), an age (whole number), and a height (decimal). 

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
* Example: \`worker.salary\` means "look at the worker variable, and grab the salary inside it."`,
      examples: [
        {
          title: 'Defining and Using a Structure',
          description: 'A simple program creating a blueprint and then building an object from it.',
          code: `#include <iostream>\nusing namespace std;\n\n// 1. The Blueprint (Usually goes above main)\nstruct Employee {\n    int idNumber;\n    float salary;\n};\n\nint main() {\n    // 2. Creating an actual variable using our custom blueprint\n    Employee worker1;\n\n    // 3. Opening the folder using the dot (.) operator\n    worker1.idNumber = 405;\n    worker1.salary = 65000.50;\n\n    cout << "Employee #" << worker1.idNumber << " makes $" << worker1.salary << endl;\n    return 0;\n}`
        },
        {
          title: 'Structure Initialization',
          description: 'A faster way to put data into the folder all at once.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Distance {\n    int feet;\n    float inches;\n};\n\nint main() {\n    // Initialize immediately using curly braces\n    Distance myThrow = { 15, 6.25 }; \n    Distance yourThrow;\n    \n    // You can copy an entire folder into another instantly!\n    yourThrow = myThrow; \n    \n    cout << "You threw it " << yourThrow.feet << " feet." << endl;\n    return 0;\n}`
        },
        {
          title: 'Structures and Functions (Intermediate)',
          description: 'Returning a whole bundled folder from a function.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Point {\n    int x;\n    int y;\n};\n\n// A function that returns a Point structure\nPoint getCenter() {\n    Point p = {50, 50};\n    return p;\n}\n\nint main() {\n    Point center = getCenter();\n    cout << "Center is at (" << center.x << ", " << center.y << ")" << endl;\n    return 0;\n}`
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
      title: 'Nesting and Arrays of Structures',
      explanation: `Now that you know how to put variables inside a structure, what if you put a structure... inside another structure?

### Nested Structures (Folders within Folders)
This is called **nesting**. Real-world data is often nested. 
* For example, a \`House\` structure might need to store the dimensions of the living room. 
* Instead of creating basic variables, you can place a \`Room\` structure *inside* the \`House\` structure.
* To access it, you just keep chaining the dot operator (e.g., \`myHouse.livingRoom.width\`).

### Arrays of Structures (A Filing Cabinet)
Earlier we learned about Arrays (a list of identical variables). You can create an array of your custom structures!
* This is exactly how a simple database works.
* You could create an array that holds 100 \`Employee\` structures.
* To get the salary of the 5th employee, you look at the 5th slot in the array, then use the dot operator: \`company[4].salary\`.`,
      examples: [
        {
          title: 'Nested Structures',
          description: 'A structure residing inside another structure.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Distance {\n    int feet;\n    float inches;\n};\n\nstruct Room {\n    Distance length;\n    Distance width;\n};\n\nint main() {\n    Room dining;\n    \n    // Chaining dots to go deep into the folders\n    dining.length.feet = 13;\n    dining.length.inches = 6.5;\n    dining.width.feet = 10;\n    \n    cout << "Length is " << dining.length.feet << " feet." << endl;\n    return 0;\n}`
        },
        {
          title: 'Arrays of Structures',
          description: 'Creating a mini database of records.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Employee {\n    int id;\n    float salary;\n};\n\nint main() {\n    // Create a list that can hold 2 employees\n    Employee roster[2];\n    \n    roster[0].id = 101;\n    roster[0].salary = 45000.0;\n    \n    roster[1].id = 102;\n    roster[1].salary = 52000.0;\n    \n    cout << "Employee 1 ID: " << roster[0].id << endl;\n    cout << "Employee 2 Salary: " << roster[1].salary << endl;\n    return 0;\n}`
        },
        {
          title: 'Array of Nested Structures (Hard)',
          description: 'A complex data layout combining arrays and nested structures.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Date {\n    int month, day, year;\n};\n\nstruct Student {\n    string name;\n    Date birthdate;\n};\n\nint main() {\n    // Creating an array and initializing it instantly\n    Student classList[2] = {\n        {"Alice", {5, 12, 2000}},\n        {"Bob", {11, 24, 1999}}\n    };\n    \n    for(int i=0; i<2; i++) {\n        cout << classList[i].name << " born in " << classList[i].birthdate.year << endl;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'How do you access the `inches` member of the `width` member of a `Room` structure named `myRoom`?',
          answer: 'By chaining the dot operator: `myRoom.width.inches`.'
        },
        {
          question: 'If you create an array of structures, are they stored together in memory?',
          answer: 'Yes. An array guarantees that all elements are stored in a single contiguous block of memory. The second structure sits immediately after the first one ends.'
        }
      ]
    },
    {
      title: 'Enumerations (Making Code Human-Readable)',
      explanation: `Sometimes, you have a variable that should only ever hold a few specific options. For example, a \`DayOfWeek\` variable should only be Monday, Tuesday, etc.

If you used an integer for this (\`0\` for Sunday, \`1\` for Monday), a week later you might forget what \`4\` means. This is called a "magic number" and it makes code hard to read.

### The \`enum\` Keyword
An enumeration (or enum) lets you invent your own data type where the options are English words.
* It assigns a hidden integer to each word automatically (starting at 0).
* It prevents you from assigning random, invalid numbers.
* It makes your code incredibly easy for other humans to read.`,
      examples: [
        {
          title: 'Basic Enumeration',
          description: 'Defining and using an enum for days of the week.',
          code: `#include <iostream>\nusing namespace std;\n\n// We created a new type called 'days_of_week'\nenum days_of_week { sun, mon, tue, wed, thu, fri, sat };\n\nint main() {\n    days_of_week day1, day2;\n    day1 = mon; // The computer secretly stores this as '1'\n    day2 = thu; // The computer secretly stores this as '4'\n    \n    int diff = day2 - day1;\n    cout << "Days between: " << diff << endl; // Outputs 3\n    return 0;\n}`
        },
        {
          title: 'Assigning Specific Values',
          description: 'You can force the hidden numbers to be whatever you want.',
          code: `#include <iostream>\nusing namespace std;\n\n// Setting custom background integer values\nenum Status { Pending = 1, Approved = 2, Rejected = 99 };\n\nint main() {\n    Status currentStatus = Approved;\n    cout << "Status code: " << currentStatus << endl; // Prints 2\n    return 0;\n}`
        },
        {
          title: 'Enums in switch Statements',
          description: 'Using enums makes switch statements highly readable.',
          code: `#include <iostream>\nusing namespace std;\n\nenum Color { RED, GREEN, BLUE };\n\nint main() {\n    Color myColor = GREEN;\n    \n    switch(myColor) {\n        case RED: cout << "Stop"; break;\n        case GREEN: cout << "Go"; break;\n        case BLUE: cout << "Water"; break;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the underlying data type of a standard C++ `enum`?',
          answer: 'The underlying data type is implicitly an integer. By default, the first option is 0, the second is 1, and so on.'
        },
        {
          question: 'Why use enums instead of just using integers?',
          answer: 'Readability and safety. `if(color == RED)` is much easier to understand than `if(color == 0)`. It also prevents you from accidentally assigning `color = 89` if there are only 3 colors.'
        },
        {
          question: 'Can you use `cin >>` to directly input the word "mon" into a `days_of_week` enum variable?',
          answer: 'No. `cin` does not know how to automatically translate the text "mon" into the enum value. You have to read a string and write logic to convert it, or read an integer and cast it.'
        }
      ]
    }
  ]
};

export default chapter4;
