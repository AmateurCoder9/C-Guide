const chapter4 = {
  id: 4,
  title: 'Structures',
  description: 'Grouping related data items together. Define structures, access members, and understand nested structures and enumerations.',
  topics: [
    {
      title: 'Defining and Accessing Structures',
      explanation: `A structure is a collection of simple variables. The variables in a structure can be of different types: some can be ints, some can be floats, and so on. The data items in a structure are called the **members** of the structure.

### Defining a Structure
The \`struct\` keyword is used to define a structure. 
* This definition acts as a blueprint. 
* It **does not allocate memory** on its own; it merely creates a new data type that you can use to create variables.

### Creating Structure Variables
Once defined, you can declare variables of this new type. Each variable will have its own independent set of the data members defined in the blueprint.

### Accessing Structure Members
Once a structure variable is defined, its members are accessed using the dot operator (\`.\`), also known as the member access operator. 
* Example: If you have a \`part\` structure named \`part1\`, you access its \`partNumber\` via \`part1.partNumber\`.`,
      examples: [
        {
          title: 'Defining and Using a Structure',
          description: 'A simple program defining a part structure and accessing its members.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct part {\n    int modelnumber;\n    int partnumber;\n    float cost;\n};\n\nint main() {\n    part part1; // define a structure variable\n\n    part1.modelnumber = 6244;\n    part1.partnumber = 373;\n    part1.cost = 217.55f;\n\n    cout << "Model: " << part1.modelnumber << endl;\n    cout << "Part: " << part1.partnumber << endl;\n    cout << "Cost: $" << part1.cost << endl;\n    return 0;\n}`
        },
        {
          title: 'Structure Initialization',
          description: 'Initializing a structure variable when it is defined.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Distance {\n    int feet;\n    float inches;\n};\n\nint main() {\n    Distance d1 = { 15, 6.25 }; // Initialize during definition\n    Distance d2;\n    \n    d2 = d1; // Structure variables can be assigned to one another\n    \n    cout << d2.feet << "\\'-" << d2.inches << "\\"" << endl;\n    return 0;\n}`
        },
        {
          title: 'Functions Returning Structures',
          description: 'A structure acting as a return type to return multiple values at once.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Point {\n    int x;\n    int y;\n};\n\nPoint getOrigin() {\n    Point p = {0, 0};\n    return p;\n}\n\nint main() {\n    Point origin = getOrigin();\n    cout << "Origin is at (" << origin.x << ", " << origin.y << ")" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Does the definition of a `struct` allocate memory?',
          answer: 'No, defining a struct only creates a blueprint (a new data type). Memory is only allocated when a variable of that struct type is actually declared in the program.'
        },
        {
          question: 'What operator is used to access individual members of a structure variable?',
          answer: 'The dot operator (.), also known as the member access operator.'
        },
        {
          question: 'What happens when you assign one structure variable to another (e.g., `s1 = s2;`)?',
          answer: 'C++ performs a member-wise copy. Every member of `s2` is copied into the corresponding member of `s1`. However, if the struct contains pointers, this shallow copy can lead to issues.'
        }
      ]
    },
    {
      title: 'Nested Structures and Arrays of Structures',
      explanation: `Structures can contain other structures as members. This is called **nesting**. It allows for the creation of complex data models that accurately reflect real-world relationships.

### Nested Structures
For example, a \`Room\` structure might contain two \`Distance\` structures representing its length and width. 
* To access nested members, you chain the dot operators together.
* Example: \`dining.length.feet\` accesses the \`feet\` property of the \`length\` property of the \`dining\` variable.

### Arrays of Structures
Just as you can have an array of integers, you can have an array of structures. This is highly useful for storing databases of records. 
* You access a specific structure in the array using an index.
* Then, you access its members using the dot operator.
* Example: \`employees[0].salary\` accesses the salary of the first employee in the array.`,
      examples: [
        {
          title: 'Nested Structures',
          description: 'A structure within another structure.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Distance {\n    int feet;\n    float inches;\n};\n\nstruct Room {\n    Distance length;\n    Distance width;\n};\n\nint main() {\n    Room dining;\n    dining.length.feet = 13;\n    dining.length.inches = 6.5;\n    dining.width.feet = 10;\n    dining.width.inches = 0.0;\n\n    float l = dining.length.feet + dining.length.inches / 12.0;\n    float w = dining.width.feet + dining.width.inches / 12.0;\n    cout << "Area: " << l * w << " sq ft" << endl;\n    return 0;\n}`
        },
        {
          title: 'Arrays of Structures',
          description: 'Managing multiple records in an array.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Employee {\n    int id;\n    float salary;\n};\n\nint main() {\n    Employee roster[2];\n    \n    roster[0].id = 101;\n    roster[0].salary = 45000.0;\n    \n    roster[1].id = 102;\n    roster[1].salary = 52000.0;\n    \n    cout << "Emp 1 ID: " << roster[0].id << endl;\n    cout << "Emp 2 Salary: " << roster[1].salary << endl;\n    return 0;\n}`
        },
        {
          title: 'Array of Nested Structures (Hard)',
          description: 'A complex data layout combining arrays and nested structures.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Date {\n    int month, day, year;\n};\n\nstruct Student {\n    string name;\n    Date birthdate;\n};\n\nint main() {\n    Student classList[2] = {\n        {"Alice", {5, 12, 2000}},\n        {"Bob", {11, 24, 1999}}\n    };\n    \n    for(int i=0; i<2; i++) {\n        cout << classList[i].name << " born in " << classList[i].birthdate.year << endl;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'How do you access the `inches` member of the `width` member of a `Room` structure named `myRoom`?',
          answer: 'By chaining the dot operator: `myRoom.width.inches`.'
        },
        {
          question: 'Is it possible to assign the values of one nested structure to another directly?',
          answer: 'Yes, just like normal structures, you can assign one structure variable to another of the same type, and it will perform a member-wise copy of all data, including nested structures.'
        },
        {
          question: 'How does memory allocation work for an array of structures?',
          answer: 'The memory is allocated as one contiguous block. If the struct is 12 bytes and you make an array of 10 structs, 120 contiguous bytes of memory are allocated.'
        }
      ]
    },
    {
      title: 'Enumerations',
      explanation: `An enumeration is a user-defined type consisting of a set of named integral constants known as **enumerators**. It provides a way to define and group related constant values in a safe, readable format.

### The \`enum\` Keyword
To define an enumeration, you use the \`enum\` keyword. 
* By default, the first enumerator has the value \`0\`, the second has \`1\`, and so on. 
* You can explicitly assign integer values to them if needed (e.g., \`enum State { OFF = 0, ON = 1 };\`).

### Why use enums?
Enums are heavily used in C++ to represent states, days of the week, colors, or menu options. 
* They make code much more readable than using raw "magic numbers" (like using \`0\` for Sunday and \`1\` for Monday).
* They provide type safety, preventing you from assigning a random integer to a variable meant to hold a specific state.`,
      examples: [
        {
          title: 'Basic Enumeration',
          description: 'Defining and using an enum for days of the week.',
          code: `#include <iostream>\nusing namespace std;\n\nenum days_of_week { sun, mon, tue, wed, thu, fri, sat };\n\nint main() {\n    days_of_week day1, day2;\n    day1 = mon;\n    day2 = thu;\n    \n    int diff = day2 - day1;\n    cout << "Days between: " << diff << endl; // Outputs 3\n    \n    if(day1 < day2) {\n        cout << "day1 comes before day2" << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'Assigning Specific Values',
          description: 'Customizing the underlying integer values.',
          code: `#include <iostream>\nusing namespace std;\n\nenum Status { Pending = 1, Approved = 2, Rejected = 99 };\n\nint main() {\n    Status currentStatus = Approved;\n    cout << "Status code: " << currentStatus << endl;\n    return 0;\n}`
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
          answer: 'The underlying data type is implicitly an integer. By default, it starts at 0 and increments by 1 for each subsequent enumerator.'
        },
        {
          question: 'Can you input an enum directly using `cin >>`?',
          answer: 'No, `cin` does not know how to read textual representations of enumerators. You must read an integer and cast it, or read a string and convert it via logic.'
        },
        {
          question: 'What is the difference between `enum` and `enum class` in modern C++?',
          answer: '`enum class` is strongly scoped and strongly typed. You cannot implicitly convert it to an integer, and you must access values using the scope operator (e.g., `Color::RED`), which prevents naming collisions.'
        }
      ]
    }
  ]
};

export default chapter4;
