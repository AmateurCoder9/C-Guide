const chapter7 = {
  id: 7,
  title: 'Arrays and Strings',
  description: 'Learn how to manage collections of data using arrays — the building block of all data storage — and how C++ handles text.',
  topics: [
    {
      id: "array-intro",
      title: "What is an Array? A Row of Boxes",
      description: "Understand the concept of storing multiple items of the same type in one sequence.",
      explanation: {
        beginner: `
          If you have 10 apples, you wouldn't hold them all in your hands. You'd put them in a crate. 
          An **Array** is a crate for your data. It's a row of "boxes" in memory where every box holds the same kind of thing (like all integers or all characters).
          
          Instead of having 10 different variables, you have one Array with 10 slots.
        `,
        intermediate: `
          An **Array** is a collection of elements of the same type stored in contiguous memory locations. 
          This means the second element is physically right next to the first one in the computer's RAM.
        `,
        advanced: `
          Arrays in C++ are fixed-size sequences. The name of an array acts as a constant pointer to its first element. Because elements are contiguous, access time is O(1) via pointer arithmetic: \`address = base + (index * size_of_element)\`.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Crate of Numbers",
          code: `
// A crate that holds 5 whole numbers
int numbers[5]; 
          `,
          explanation: "The [5] tells C++ to reserve space for exactly 5 integers in a row."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Can an array hold an 'int' and a 'string' at the same time?",
          answer: "No, all elements in an array must be of the same data type."
        },
        {
          difficulty: "medium",
          question: "What does 'contiguous memory' mean in relation to arrays?",
          answer: "It means the items are stored right next to each other in the computer's memory with no gaps."
        }
      ]
    },
    {
      id: "array-usage",
      title: "Declaring and Accessing Arrays",
      description: "Learn how to create arrays and reach the items inside using index numbers.",
      explanation: {
        beginner: `
          To get an item out of our "crate," we use an **Index**. 
          **CRITICAL RULE:** In programming, we always start counting from **0**. 
          So, the first item is at position 0, the second is at 1, and so on.
        `,
        intermediate: `
          Declaration: \`type name[size];\`. 
          Initialization: \`int arr[3] = {10, 20, 30};\`. 
          Access: \`arr[index]\`. 
          If you have 5 items, the last valid index is 4.
        `,
        advanced: `
          C++ does not perform **bounds checking**. Accessing an index outside the declared range (e.g., \`arr[10]\` for a size-10 array) results in **Undefined Behavior**, potentially accessing memory belonging to other variables or the OS.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Zero-Based Counting",
          code: `
int scores[3] = {95, 88, 70};

cout << scores[0]; // Prints 95 (First)
cout << scores[1]; // Prints 88 (Second)
cout << scores[2]; // Prints 70 (Third)
          `,
          explanation: "Remember: [0] is the start! If you try to access scores[3], the program might crash."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the index number of the very first item in an array?",
          answer: "0"
        },
        {
          difficulty: "medium",
          question: "If an array has a size of 10, what is the index of the last item?",
          answer: "9"
        }
      ]
    },
    {
      id: "looping-arrays",
      title: "Looping Through an Array",
      description: "Use loops to process every item in an array automatically.",
      explanation: {
        beginner: `
          The best thing about arrays is how well they work with loops. 
          Instead of printing every slot manually, you can tell a \`for\` loop to count from 0 to the end of the array and do something to every "box" along the way.
        `,
        intermediate: `
          We usually use the loop counter (\`i\`) as the index: \`cout << myArr[i];\`. 
          This allows you to search, sum, or modify entire collections of data in just a few lines of code.
        `,
        advanced: `
          Iteration over arrays is highly cache-friendly because of the contiguous memory layout. This makes sequential processing significantly faster than following pointers in a linked list. In modern C++, range-based for loops (\`for(int x : arr)\`) provide a safer, cleaner syntax.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Automatic Printer",
          code: `
int ages[4] = {12, 15, 18, 21};

for (int i = 0; i < 4; i++) {
    cout << "Person " << i << " is " << ages[i] << endl;
}
          `,
          explanation: "The loop runs 4 times, with 'i' changing from 0 to 1 to 2 to 3, perfectly matching the array indexes."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which loop is most commonly used with arrays?",
          answer: "The 'for' loop."
        },
        {
          difficulty: "hard",
          question: "Write a loop that adds up all numbers in an array called 'nums' of size 5.",
          answer: "int sum = 0; for(int i=0; i<5; i++) { sum += nums[i]; }"
        }
      ]
    },
    {
      id: "multi-dim-arrays",
      title: "Multi-Dimensional Arrays",
      description: "Learn how to create grids and tables using arrays within arrays.",
      explanation: {
        beginner: `
          A normal array is a single row. A **2D Array** is a grid, like a chessboard or an Excel sheet. 
          It has **Rows** and **Columns**. To find a specific box, you need two numbers: the row index and the column index.
        `,
        intermediate: `
          Syntax: \`int matrix[rows][cols];\`. 
          Think of it as an "array of arrays." To loop through a 2D array, you need **Nested Loops** (a loop inside a loop).
        `,
        advanced: `
          Multi-dimensional arrays are stored in **row-major order** in C++. This means \`matrix[0][0]\`, \`matrix[0][1]\`, etc., are contiguous in memory. When writing nested loops, always iterate over the last index in the inner loop to maintain cache locality and performance.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A 2x3 Grid",
          code: `
// 2 rows, 3 columns
int grid[2][3] = {
    {1, 2, 3}, // Row 0
    {4, 5, 6}  // Row 1
};

cout << grid[1][0]; // Prints 4 (Row 1, Col 0)
          `,
          explanation: "The first [ ] is for the row, the second [ ] is for the column."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "How many indexes do you need to access an item in a 2D array?",
          answer: "Two (one for the row, one for the column)."
        },
        {
          difficulty: "medium",
          question: "How do you loop through every item in a 2D array?",
          answer: "Using nested for-loops (one loop for rows, and another inside it for columns)."
        }
      ]
    },
    {
      id: "string-intro",
      title: "What is a String?",
      description: "Learn how C++ handles text as a sequence of characters.",
      explanation: {
        beginner: `
          In programming, a piece of text is called a **String**. 
          You can think of it as a "string of beads," where every bead is one character (\`char\`). 
          Strings are always wrapped in **double quotes** "like this".
        `,
        intermediate: `
          C++ has two types of strings: 
          1. **C-Style Strings**: An array of characters ending in a null terminator \`\\0\`.
          2. **std::string**: A modern class that is much easier and safer to use.
        `,
        advanced: `
          The \`std::string\` class is a specialization of the \`std::basic_string\` template. It manages dynamic memory internally, handling allocation and deallocation as the string grows or shrinks. C-style strings are literal arrays of type \`const char*\`.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Creating a String",
          code: `
#include <string>

string name = "Antigravity";
cout << name;
          `,
          explanation: "Don't forget to #include <string> at the top of your file to use this power!"
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the data type for text in C++?",
          answer: "string"
        },
        {
          difficulty: "medium",
          question: "What header file must you include to use 'string' variables?",
          answer: "#include <string>"
        }
      ]
    },
    {
      id: "string-ops",
      title: "String Operations and Functions",
      description: "Master tools for joining, comparing, and measuring text.",
      explanation: {
        beginner: `
          The \`string\` type in C++ is very smart. 
          - You can use **+** to join two strings together (Concatenation).
          - You can use \`.length()\` to see how many letters are in it.
          - You can use **==** to check if two strings are identical.
        `,
        intermediate: `
          Common functions:
          - \`s.append(s2)\`: Add text to the end.
          - \`s.substr(start, len)\`: Get a portion of the text.
          - \`s.find("word")\`: Search for a specific word inside.
        `,
        advanced: `
          The \`+\` operator for strings is overloaded to perform concatenation, creating a new temporary string object. For frequent additions, using \`append()\` or the \`+=\` operator can be slightly more efficient as they may avoid temporary object creation.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Joining Names",
          code: `
string first = "John";
string last = "Doe";
string full = first + " " + last;

cout << full; // John Doe
cout << full.length(); // 8
          `,
          explanation: "The '+' symbol 'glues' strings together in the order you list them."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What symbol is used to join two strings together?",
          answer: "+"
        },
        {
          difficulty: "medium",
          question: "Which function tells you the number of characters in a string?",
          answer: ".length() (or .size())"
        }
      ]
    },
    {
      id: "arrays-advanced",
      title: 'Arrays: Lists of Data (Advanced)',
      description: "In-depth look at array definitions, initialization, and bounds safety.",
      explanation: {
        beginner: "This section revisits arrays as numbered mailboxes for your data.",
        intermediate: "Understanding indices, the bracket operator [], and the danger of going out-of-bounds.",
        advanced: `Imagine you need to store the test scores of 30 students. You could create 30 separate variables, but arrays solve this more efficiently.

An array is like a row of numbered mailboxes. All the boxes are the same type, they are all in a row, and each box has its own number (index) starting from **zero**.

### Defining an Array
\`int scores[30];\` creates a row of 30 integer mailboxes, numbered 0 through 29.

### Accessing Elements
You use the bracket operator \`[]\` with the index number:
* \`scores[0]\` — the very first box
* \`scores[29]\` — the very last box
* \`scores[30]\` — **DANGER ZONE!** Accessing this is undefined behavior.

### Looping Through Arrays
The real power of arrays is that you can process all elements with a loop. The index variable acts like a pointer moving from box to box.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Arrays and Loops',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int scores[5] = {90, 85, 72, 88, 95}; \n    int total = 0;\n    \n    for (int i = 0; i < 5; i++) {\n        total += scores[i];\n    }\n    \n    float average = (float)total / 5;\n    cout << "Average: " << average << endl;\n    return 0;\n}`,
          explanation: "Processing an entire data collection using a loop."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What happens if you access `data[10]` in an array of size 10?',
          answer: 'Undefined behavior. C++ does not check array bounds, so you will read/write to memory outside the array, potentially causing crashes or data corruption.'
        }
      ]
    },
    {
      id: "arrays-of-objects-advanced",
      title: 'Arrays of Objects (Advanced)',
      description: "Managing object collections and the default constructor requirement.",
      explanation: {
        beginner: "If one object is a folder, an array of objects is a whole filing cabinet of records.",
        intermediate: "Learning how to combine classes with arrays to build simple databases.",
        advanced: `You can create an array where every slot holds a complete object with its own data and methods.

### The Constructor Requirement
**When you create an array of objects, C++ immediately creates ALL the objects in it.** 
* **Your class MUST have a no-argument (default) constructor** for an array of objects to work.
* Without it, C++ doesn't know how to initialize the slots.

### Accessing Members
Access is simple: combine the array index operator with the dot operator.
\`staff[0].getSalary()\` means "look at the first Employee in the staff array, and call their getSalary function."`
      },
      examples: [
        {
          level: "advanced",
          title: 'Basic Array of Objects',
          code: `#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name; float gpa;\npublic:\n    Student() { name = "Unknown"; gpa = 0.0; }\n    void setData(string n, float g) { name = n; gpa = g; }\n    void display() { cout << name << " | GPA: " << gpa << endl; }\n};\n\nint main() {\n    Student roster[3]; \n    roster[0].setData("Alice", 3.9);\n    for (int i = 0; i < 3; i++) roster[i].display();\n    return 0;\n}`,
          explanation: "Creating and processing a collection of student records."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'Why does creating an array of objects require a default constructor?',
          answer: 'Because C++ instantiates every object in the array at declaration time and must call a constructor for each. If no arguments are provided, it requires the no-arg constructor.'
        }
      ]
    },
    {
      id: "strings-advanced",
      title: 'Strings: Text in C++ (Advanced)',
      description: "Comparing C-style strings with the modern std::string class.",
      explanation: {
        beginner: "Learn how to handle words and sentences. C++ has an old way and a modern 'smart' way.",
        intermediate: "Understanding the difference between char arrays and the string class.",
        advanced: `C++ has two ways to handle strings.

### Way 1: C-Style Strings (The Old Way)
Text is just an array of \`char\` values ending in \`\\0\`.
* Dangerous because the array size is fixed.
* Requires \`<cstring>\` functions (\`strlen\`, \`strcpy\`).

### Way 2: The C++ \`string\` Class (Modern)
The \`string\` class from the \`<string>\` header.
* Automatically manages memory.
* Uses natural operators: \`+\`, \`=\`, \`==\`.
* Has useful methods: \`.length()\`, \`.find()\`, \`.substr()\`.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Reading Whole Lines',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string fullLine;\n    cout << "Enter text: ";\n    getline(cin, fullLine); // Reads spaces!\n    cout << "You said: " << fullLine;\n    return 0;\n}`,
          explanation: "Using getline() to read text containing spaces, which cin >> would skip."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'Why can\'t you compare two C-style char arrays using `==`?',
          answer: '`==` on arrays compares memory addresses, not content. You must use `strcmp()` for C-strings, though `std::string` supports `==` correctly.'
        }
      ]
    }
  ]
};

export default chapter7;
