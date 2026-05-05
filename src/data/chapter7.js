const chapter7 = {
  id: 7,
  title: 'Arrays and Strings',
  description: 'Learn how to manage collections of data using arrays — the building block of all data storage — and how C++ handles text.',
  topics: [
    {
      title: 'Arrays: Lists of Data',
      explanation: `Imagine you need to store the test scores of 30 students. You could create 30 separate variables: \`score1\`, \`score2\`, \`score3\`... all the way to \`score30\`. That is 30 lines just for declarations — and finding the average of all of them would be a nightmare.

**Arrays solve this.** An array is like a row of numbered mailboxes. All the boxes are the same type, they are all in a row, and each box has its own number (index) starting from **zero**.

### Defining an Array
\`int scores[30];\` creates a row of 30 integer mailboxes, numbered 0 through 29.

### Accessing Elements
You use the bracket operator \`[]\` with the index number to open a specific mailbox:
* \`scores[0]\` — the very first box
* \`scores[29]\` — the very last box
* \`scores[30]\` — **DANGER ZONE!** This goes out of bounds. The computer will read or write to random memory, potentially crashing your program. C++ does NOT warn you about this.

### Initializing at Declaration
You can fill all the boxes at the moment of creation using curly braces: \`int scores[5] = {90, 85, 72, 88, 95};\`.

### Looping Through Arrays
The real power of arrays is that you can process all elements with a loop. The index variable acts like a pointer moving from box to box.`,
      examples: [
        {
          title: 'Your First Array',
          description: 'Creating, filling, and reading a simple array.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Create 5 integer mailboxes (indexed 0 to 4)\n    int scores[5];\n    \n    scores[0] = 90;\n    scores[1] = 85;\n    scores[2] = 72;\n    scores[3] = 88;\n    scores[4] = 95;\n    \n    cout << "Score 1: " << scores[0] << endl;\n    cout << "Score 3: " << scores[2] << endl; // Third box is index 2!\n    return 0;\n}`
        },
        {
          title: 'Arrays and Loops (The Real Power)',
          description: 'Calculating the average of all scores automatically.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int scores[5] = {90, 85, 72, 88, 95}; // Initialize all at once\n    int total = 0;\n    \n    for (int i = 0; i < 5; i++) { // i goes from 0 to 4\n        total += scores[i];\n    }\n    \n    float average = (float)total / 5;\n    cout << "Average score: " << average << endl;\n    return 0;\n}`
        },
        {
          title: 'Passing an Array to a Function (Intermediate)',
          description: 'Arrays are always passed by reference implicitly.',
          code: `#include <iostream>\nusing namespace std;\n\n// Arrays in function parameters decay into pointers.\n// You MUST pass the size separately!\nfloat getAverage(int arr[], int size) {\n    int total = 0;\n    for (int i = 0; i < size; i++) {\n        total += arr[i];\n    }\n    return (float)total / size;\n}\n\nint main() {\n    int scores[] = {90, 85, 72, 88, 95};\n    cout << "Average: " << getAverage(scores, 5) << endl;\n    return 0;\n}`
        },
        {
          title: 'Two-Dimensional Arrays (Hard)',
          description: 'An array of arrays — perfect for tables, grids, or matrices.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // A table with 3 rows and 4 columns\n    int matrix[3][4] = {\n        {1,  2,  3,  4},   // Row 0\n        {5,  6,  7,  8},   // Row 1\n        {9, 10, 11, 12}    // Row 2\n    };\n    \n    // Access: [row][column]\n    cout << "Row 1, Col 2: " << matrix[1][2] << endl; // 7\n    \n    // Print the whole table\n    for(int r=0; r<3; r++) {\n        for(int c=0; c<4; c++) {\n            cout << matrix[r][c] << "\\t";\n        }\n        cout << endl;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'If you declare `int data[10];`, what is the valid range of index values?',
          answer: '0 through 9. The first element is always at index 0, and the last is at index (size - 1), which is 9.'
        },
        {
          question: 'What happens if you access `data[10]` in an array of size 10?',
          answer: 'Undefined behavior. C++ does not check array bounds. You are reading the memory that comes right after your array, which could be anything. It might print garbage, crash your program, or corrupt another variable\'s data.'
        },
        {
          question: 'When you pass an array to a function, can the function modify the original array?',
          answer: 'Yes. Unlike normal variables, arrays are passed by reference implicitly. The function receives a pointer to the first element of the original array, so any modifications directly change the original data.'
        },
        {
          question: 'How do you find the number of elements in a local array without tracking it manually?',
          answer: 'You can use `sizeof(array) / sizeof(array[0])`. `sizeof(array)` gives the total bytes, and `sizeof(array[0])` gives the bytes for one element. Dividing gives the count. Note: this ONLY works for local arrays, not pointer-based arrays passed to functions.'
        }
      ]
    },
    {
      title: 'Arrays of Objects',
      explanation: `In Chapter 6 you learned to make objects. In the last topic you learned to make arrays. Now we combine them.

### Arrays of Objects: A Real Database
You can create an array where every single slot holds a complete object with all its data and methods. This is how real programs store collections of records — employee databases, student rosters, game character lists.

\`Employee staff[100];\` creates 100 Employee objects.

### The Constructor Requirement
Here is a key rule: **when you create an array of objects, C++ immediately creates ALL the objects in it.** That means it needs to call a constructor for each one.
* If your class has only a parameterized constructor, C++ has no idea how to auto-initialize the 100 slots.
* **Your class MUST have a no-argument (default) constructor** for an array of objects to work.

### Accessing Members
Access is simple: combine the array index operator with the dot operator.
\`staff[0].getSalary()\` means "look at the first Employee in the staff array, and call their getSalary function."`,
      examples: [
        {
          title: 'Basic Array of Objects',
          description: 'Creating a small roster of student objects.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    float gpa;\npublic:\n    Student() { name = "Unknown"; gpa = 0.0; } // Needed for array!\n    void setData(string n, float g) { name = n; gpa = g; }\n    void display() { cout << name << " | GPA: " << gpa << endl; }\n};\n\nint main() {\n    Student roster[3]; // Constructor fires 3 times automatically\n    \n    roster[0].setData("Alice", 3.9);\n    roster[1].setData("Bob", 3.2);\n    roster[2].setData("Carol", 3.7);\n    \n    for (int i = 0; i < 3; i++) {\n        roster[i].display();\n    }\n    return 0;\n}`
        },
        {
          title: 'Initializer List for Object Arrays (Intermediate)',
          description: 'Skipping the no-arg constructor by providing all values at declaration.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Point {\npublic:\n    int x, y;\n    Point(int xv, int yv) : x(xv), y(yv) {}\n    void show() { cout << "(" << x << "," << y << ")" << endl; }\n};\n\nint main() {\n    // Providing arguments for each constructor, no default needed\n    Point path[3] = { Point(1,1), Point(5,3), Point(9,7) };\n    \n    for (int i = 0; i < 3; i++) {\n        path[i].show();\n    }\n    return 0;\n}`
        },
        {
          title: 'Searching Through an Object Array (Hard)',
          description: 'A real-world pattern: searching an array for a matching record.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Product {\npublic:\n    int id;\n    float price;\n    Product() : id(0), price(0.0) {}\n    Product(int i, float p) : id(i), price(p) {}\n    void show() { cout << "Product #" << id << " - $" << price << endl; }\n};\n\nProduct* findProduct(Product catalog[], int size, int searchId) {\n    for(int i=0; i<size; i++) {\n        if(catalog[i].id == searchId)\n            return &catalog[i]; // Return a pointer to the found object\n    }\n    return nullptr; // Not found\n}\n\nint main() {\n    Product catalog[3] = { Product(101, 9.99), Product(202, 24.50), Product(303, 5.00) };\n    \n    Product* found = findProduct(catalog, 3, 202);\n    if(found) found->show();\n    else cout << "Not found." << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Why does creating an array of objects require a default (no-argument) constructor?',
          answer: 'When you declare `MyClass arr[10];`, C++ immediately creates all 10 objects. It needs to call a constructor for each one at that moment. If only a parameterized constructor exists, C++ doesn\'t know what arguments to pass, so it fails with a compilation error.'
        },
        {
          question: 'How do you call the `display()` function on the third element of an object array named `items`?',
          answer: '`items[2].display();` (Remember, the third item is at index 2, since indexing starts at 0.)'
        },
        {
          question: 'Are the objects in an array of objects stored contiguously in memory?',
          answer: 'Yes. Arrays always guarantee their elements are in a single, consecutive block of memory. Object[1] sits immediately after Object[0] ends in memory.'
        }
      ]
    },
    {
      title: 'Strings: Text in C++',
      explanation: `Now let's talk about handling text. Text in programming is called a **string** — a string of characters.

C++ has two ways to handle strings, and understanding both is very important.

### Way 1: C-Style Strings (The Old Way)
Before the C++ string class existed, text was just an array of \`char\` values.
* "Hello" is stored as 5 chars + a special invisible terminator character \`\\0\` (the null character) that marks the end.
* This is dangerous because the array size is fixed. If you try to copy a longer text into a short array, you overflow into random memory.
* You need special library functions from \`<cstring>\` to manipulate them (e.g., \`strlen()\`, \`strcpy()\`, \`strcat()\`).

### Way 2: The C++ \`string\` Class (The Modern Way — Use This)
The \`string\` class from the \`<string>\` header is the smart, safe, and modern solution.
* It automatically manages its own memory. It grows or shrinks as needed.
* You can use natural operators: \`=\` to copy, \`+\` to concatenate (join), \`==\` to compare.
* It has useful built-in functions: \`.length()\`, \`.find()\`, \`.substr()\`.

**You should use \`std::string\` in all modern C++ code unless you have a specific reason not to.**`,
      examples: [
        {
          title: 'C-Style Strings (Know it, avoid it)',
          description: 'Showing the old way and its limitations.',
          code: `#include <iostream>\n#include <cstring> // Required for strcpy, strcat, strlen\nusing namespace std;\n\nint main() {\n    char first[20] = "Hello"; // Array must be large enough!\n    char second[] = " World";\n    \n    // Cannot use + or =. Must use special functions.\n    strcat(first, second); // Stick second onto the end of first\n    \n    cout << first << endl;               // Hello World\n    cout << strlen(first) << endl;       // 11\n    return 0;\n}`
        },
        {
          title: 'C++ String Class (The Right Way)',
          description: 'Clean, intuitive text handling.',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string first = "Hello";\n    string second = " World";\n    \n    // Works like you would expect\n    string combined = first + second; // Simple concatenation with +\n    \n    cout << combined << endl;             // Hello World\n    cout << combined.length() << endl;   // 11\n    \n    // Comparison with ==\n    if (first == "Hello") {\n        cout << "Strings match!" << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'Useful String Methods (Intermediate)',
          description: 'Common operations you will use frequently.',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string sentence = "I love C++ programming.";\n    \n    // Find the position of a substring (-1 if not found)\n    int pos = sentence.find("C++");\n    cout << "C++ starts at index: " << pos << endl;\n    \n    // Extract a portion: substr(startIndex, length)\n    string sub = sentence.substr(2, 4);\n    cout << "Extracted: " << sub << endl; // "love"\n    \n    // Check if empty\n    string blank = "";\n    cout << "Is blank empty? " << (blank.empty() ? "Yes" : "No") << endl;\n    return 0;\n}`
        },
        {
          title: 'Reading Whole Lines (Hard)',
          description: 'Why `cin >>` is not enough for full names or sentences.',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    string address;\n    \n    cout << "Enter full name: ";\n    getline(cin, name); // getline reads the WHOLE line including spaces\n    \n    cout << "Enter address: ";\n    getline(cin, address); // cin >> would only read one word!\n    \n    cout << "\\nName: " << name << endl;\n    cout << "Address: " << address << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the purpose of the null character `\\0` at the end of a C-style string?',
          answer: 'It marks the end of the string. Since C-style strings are just raw arrays with no built-in length, functions like `cout` and `strlen` read character by character until they find `\\0`, which tells them to stop.'
        },
        {
          question: 'Why can\'t you compare two C-style char arrays using `==`?',
          answer: 'Because `==` on arrays compares their memory addresses, not their contents. Even if two arrays contain the same text, they live in different memory locations, so `==` returns false. You must use `strcmp()`. However, `std::string` overloads `==` to do content comparison correctly.'
        },
        {
          question: 'Why does `cin >> name` fail to capture "John Doe" correctly?',
          answer: '`cin >>` treats spaces as delimiters and stops reading when it hits one. So it would only capture "John". You must use `getline(cin, name)` to read a whole line including spaces.'
        },
        {
          question: 'What is the return value of `string.find()` if the substring is NOT found?',
          answer: 'It returns `string::npos`, which is a special constant representing "not a valid position" (it\'s actually the maximum value of `size_t`, a very large number).'
        }
      ]
    }
  ]
};

export default chapter7;
