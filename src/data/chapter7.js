const chapter7 = {
  id: 7,
  title: 'Arrays and Strings',
  description: 'Learn how to manage collections of data using arrays — the building block of all data storage — and how C++ handles text.',
  topics: [
    {
      id: "arrays-basics",
      title: "Arrays: Lists of Data",
      description: "Store multiple items of the same type in one organized sequence.",
      explanation: `Imagine you need to store the test scores of 30 students. You could create 30 separate variables: \`score1\`, \`score2\`, \`score3\`... all the way to \`score30\`. That is 30 lines just for declarations — and finding the average of all of them would be a nightmare.

**Arrays solve this.** An array is like a row of numbered mailboxes. All the boxes are the same type, they are all in a row, and each box has its own number (index) starting from **zero**.

### Defining an Array
\`int scores[30];\` creates a row of 30 integer mailboxes, numbered 0 through 29.

### Accessing Elements
You use the bracket operator \`[]\` with the index number to open a specific mailbox:
* \`scores[0]\` — the very first box
* \`scores[29]\` — the very last box
* \`scores[30]\` — **DANGER ZONE!** This goes out of bounds. The computer will read or write to random memory, potentially crashing your program. C++ does NOT check bounds for you — this is one of its most dangerous features.

### Initializing at Declaration
You can fill all the boxes at the moment of creation using curly braces: \`int scores[5] = {90, 85, 72, 88, 95};\`.

### Looping Through Arrays
The real power of arrays is that you can process all elements with a loop. The index variable acts like a pointer moving from box to box. This makes operations like "find the average", "find the maximum", or "sort the list" possible with just a few lines of code.

At a hardware level, arrays are stored as contiguous blocks of memory. The name of an array acts as a constant pointer to its first element. Element access is O(1) because the computer calculates the exact memory address using: \`address = base + (index × size_of_element)\`.`,
      examples: [
        {
          title: 'Arrays and Loops (The Real Power)',
          code: `#include <iostream>
using namespace std;

int main() {
    int scores[5] = {90, 85, 72, 88, 95}; // Initialize all at once
    int total = 0;
    
    for (int i = 0; i < 5; i++) { // i goes from 0 to 4
        total += scores[i];
    }
    
    float average = (float)total / 5;
    cout << "Average score: " << average << endl;
    return 0;
}`,
          explanation: "Calculating the average of all scores automatically."
        },
        {
          title: 'Two-Dimensional Arrays',
          code: `#include <iostream>
using namespace std;

int main() {
    // A table with 3 rows and 4 columns
    int matrix[3][4] = {
        {1,  2,  3,  4},   // Row 0
        {5,  6,  7,  8},   // Row 1
        {9, 10, 11, 12}    // Row 2
    };
    
    // Access: [row][column]
    cout << "Row 1, Col 2: " << matrix[1][2] << endl; // 7
    
    // Print the whole table
    for(int r=0; r<3; r++) {
        for(int c=0; c<4; c++) {
            cout << matrix[r][c] << "\\t";
        }
        cout << endl;
    }
    return 0;
}`,
          explanation: "An array of arrays — perfect for tables, grids, or matrices."
        }
      ],
      questions: [
        {
          question: 'If you declare `int data[10];`, what is the valid range of index values?',
          answer: '0 through 9. The first element is always at index 0, and the last is at index (size - 1), which is 9.'
        },
        {
          question: 'What happens if you access `data[10]` in an array of size 10?',
          answer: 'Undefined behavior. C++ does not check array bounds. You are reading memory outside your array, which could print garbage, crash your program, or corrupt another variable.'
        },
        {
          question: 'When you pass an array to a function, can the function modify the original array?',
          answer: 'Yes. Unlike normal variables, arrays are passed by reference implicitly. The function receives a pointer to the first element, so any modifications directly change the original data.'
        },
        {
          question: 'How do you find the number of elements in a local array?',
          answer: 'Use `sizeof(array) / sizeof(array[0])`. Note: this ONLY works for local arrays, not arrays passed to functions (which decay into pointers).'
        }
      ]
    },
    {
      id: "arrays-of-objects",
      title: "Arrays of Objects",
      description: "Combine the power of arrays with the structure of classes to build real databases.",
      explanation: `In Chapter 6 you learned to make objects. In the last topic you learned to make arrays. Now we combine them.

### Arrays of Objects: A Real Database
You can create an array where every single slot holds a complete object with all its data and methods. This is how real programs store collections of records — employee databases, student rosters, game character lists.

\`Employee staff[100];\` creates 100 Employee objects.

### The Constructor Requirement
Here is a key rule: **when you create an array of objects, C++ immediately creates ALL the objects in it.** That means it needs to call a constructor for each one.
* If your class has only a parameterized constructor, C++ has no idea how to auto-initialize the 100 slots.
* **Your class MUST have a no-argument (default) constructor** for an array of objects to work without explicit initialization.
* Alternatively, you can use an initializer list to provide arguments for each element at declaration time.

### Accessing Members
Access is simple: combine the array index operator with the dot operator.
\`staff[0].getSalary()\` means "look at the first Employee in the staff array, and call their getSalary function."

The objects in an array are stored contiguously in memory — the second object sits immediately after the first one ends. This makes iterating through them very cache-friendly and fast.`,
      examples: [
        {
          title: 'Basic Array of Objects',
          code: `#include <iostream>
using namespace std;

class Student {
private:
    string name;
    float gpa;
public:
    Student() { name = "Unknown"; gpa = 0.0; } // Needed for array!
    void setData(string n, float g) { name = n; gpa = g; }
    void display() { cout << name << " | GPA: " << gpa << endl; }
};

int main() {
    Student roster[3]; // Constructor fires 3 times automatically
    
    roster[0].setData("Alice", 3.9);
    roster[1].setData("Bob", 3.2);
    roster[2].setData("Carol", 3.7);
    
    for (int i = 0; i < 3; i++) {
        roster[i].display();
    }
    return 0;
}`,
          explanation: "Creating a small roster of student objects."
        },
        {
          title: 'Searching Through an Object Array',
          code: `#include <iostream>
using namespace std;

class Product {
public:
    int id;
    float price;
    Product() : id(0), price(0.0) {}
    Product(int i, float p) : id(i), price(p) {}
    void show() { cout << "Product #" << id << " - $" << price << endl; }
};

Product* findProduct(Product catalog[], int size, int searchId) {
    for(int i=0; i<size; i++) {
        if(catalog[i].id == searchId)
            return &catalog[i]; // Return a pointer to the found object
    }
    return nullptr; // Not found
}

int main() {
    Product catalog[3] = { Product(101, 9.99), Product(202, 24.50), Product(303, 5.00) };
    
    Product* found = findProduct(catalog, 3, 202);
    if(found) found->show();
    else cout << "Not found." << endl;
    return 0;
}`,
          explanation: "A real-world pattern: searching an array for a matching record."
        }
      ],
      questions: [
        {
          question: 'Why does creating an array of objects require a default (no-argument) constructor?',
          answer: 'When you declare `MyClass arr[10];`, C++ immediately creates all 10 objects. It needs to call a constructor for each one, and if only a parameterized constructor exists, C++ doesn\'t know what arguments to pass.'
        },
        {
          question: 'How do you call the `display()` function on the third element of an object array named `items`?',
          answer: '`items[2].display();` (Remember, the third item is at index 2, since indexing starts at 0.)'
        },
        {
          question: 'Are the objects in an array of objects stored contiguously in memory?',
          answer: 'Yes. Arrays always guarantee their elements are in a single, consecutive block of memory.'
        }
      ]
    },
    {
      id: "strings",
      title: "Strings: Text in C++",
      description: "Master the two ways C++ handles text — the old dangerous way and the modern safe way.",
      explanation: `Now let's talk about handling text. Text in programming is called a **string** — a string of characters.

C++ has two ways to handle strings, and understanding both is very important.

### Way 1: C-Style Strings (The Old Way)
Before the C++ string class existed, text was just an array of \`char\` values.
* "Hello" is stored as 5 chars + a special invisible terminator character \`\\0\` (the null character) that marks the end.
* This is dangerous because the array size is fixed. If you try to copy a longer text into a short array, you overflow into random memory.
* You need special library functions from \`<cstring>\` to manipulate them (e.g., \`strlen()\`, \`strcpy()\`, \`strcat()\`).
* You cannot compare two char arrays with \`==\` — that compares their memory addresses, not their contents. You must use \`strcmp()\`.

### Way 2: The C++ \`string\` Class (The Modern Way — Use This)
The \`string\` class from the \`<string>\` header is the smart, safe, and modern solution.
* It automatically manages its own memory. It grows or shrinks as needed.
* You can use natural operators: \`=\` to copy, \`+\` to concatenate (join), \`==\` to compare.
* It has useful built-in functions: \`.length()\`, \`.find()\`, \`.substr()\`.

**You should use \`std::string\` in all modern C++ code unless you have a specific reason not to.**

### Reading Text from the User
\`cin >>\` stops reading at the first space. If someone types "John Doe", only "John" gets stored. To read an entire line including spaces, use \`getline(cin, variable);\`.

At a technical level, the \`std::string\` class is a specialization of the \`std::basic_string\` template. It manages dynamic memory internally, automatically handling allocation and deallocation as the string grows or shrinks. The \`.find()\` method returns \`string::npos\` (a special constant meaning "not found") when the substring doesn't exist.`,
      examples: [
        {
          title: 'C++ String Class (The Right Way)',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string first = "Hello";
    string second = " World";
    
    // Works like you would expect
    string combined = first + second; // Simple concatenation with +
    
    cout << combined << endl;             // Hello World
    cout << combined.length() << endl;   // 11
    
    // Comparison with ==
    if (first == "Hello") {
        cout << "Strings match!" << endl;
    }
    return 0;
}`,
          explanation: "Clean, intuitive text handling with the string class."
        },
        {
          title: 'Useful String Methods',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string sentence = "I love C++ programming.";
    
    // Find the position of a substring
    int pos = sentence.find("C++");
    cout << "C++ starts at index: " << pos << endl;
    
    // Extract a portion: substr(startIndex, length)
    string sub = sentence.substr(2, 4);
    cout << "Extracted: " << sub << endl; // "love"
    
    // Check if empty
    string blank = "";
    cout << "Is blank empty? " << (blank.empty() ? "Yes" : "No") << endl;
    return 0;
}`,
          explanation: "Common operations you will use frequently."
        },
        {
          title: 'Reading Whole Lines',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    string address;
    
    cout << "Enter full name: ";
    getline(cin, name); // getline reads the WHOLE line including spaces
    
    cout << "Enter address: ";
    getline(cin, address); // cin >> would only read one word!
    
    cout << "\\nName: " << name << endl;
    cout << "Address: " << address << endl;
    return 0;
}`,
          explanation: "Why cin >> is not enough for full names or sentences."
        }
      ],
      questions: [
        {
          question: 'What is the purpose of the null character `\\0` at the end of a C-style string?',
          answer: 'It marks the end of the string. Since C-style strings are just raw arrays with no built-in length, functions like cout and strlen read character by character until they find `\\0`, which tells them to stop.'
        },
        {
          question: 'Why can\'t you compare two C-style char arrays using `==`?',
          answer: 'Because `==` on arrays compares their memory addresses, not their contents. Even if two arrays contain the same text, they live in different memory locations. You must use `strcmp()`. However, `std::string` overloads `==` to do content comparison correctly.'
        },
        {
          question: 'Why does `cin >> name` fail to capture "John Doe" correctly?',
          answer: '`cin >>` treats spaces as delimiters and stops reading at the first one. It would only capture "John". You must use `getline(cin, name)` to read a whole line including spaces.'
        },
        {
          question: 'What is the return value of `string.find()` if the substring is NOT found?',
          answer: 'It returns `string::npos`, which is a special constant representing "not a valid position".'
        }
      ]
    }
  ]
};

export default chapter7;
