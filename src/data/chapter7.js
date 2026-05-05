const chapter7 = {
  id: 7,
  title: 'Arrays and Strings',
  description: 'Managing collections of data. Understand one-dimensional and multidimensional arrays, arrays of objects, and C-style strings versus modern C++ strings.',
  topics: [
    {
      title: 'Array Fundamentals',
      explanation: 'An array is a data structure that can store a fixed-size sequential collection of elements of the same type. Arrays are used to store collections of data, making it easier to manage hundreds of variables of the same type.\n\nDefining Arrays:\nYou define an array by specifying the type of its elements and the number of elements required. Example: `int age[10];` reserves memory for 10 integers. The elements are stored in contiguous (adjacent) memory locations.\n\nAccessing Array Elements:\nArray elements are accessed using the index operator `[]`. The index of the first element is always 0. For an array of size N, the last element is accessed via index N-1.\n\nMultidimensional Arrays:\nArrays can have more than one dimension. The most common is the two-dimensional array, which can be thought of as a table with rows and columns. Example: `float table[4][5];` represents a table with 4 rows and 5 columns.\n\nPassing Arrays to Functions:\nWhen you pass an array to a function, you are actually passing the memory address (pointer) of the first element. Therefore, arrays are implicitly passed by reference. Any changes made to the array inside the function affect the original array.',
      examples: [
        {
          title: 'Initializing and Accessing an Array',
          description: 'Basic 1D array operations.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Initialize with values\n    int days[12] = {31,28,31,30,31,30,31,31,30,31,30,31};\n    \n    for(int i = 0; i < 12; i++) {\n        cout << "Month " << (i+1) << " has " << days[i] << " days." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'Two-Dimensional Array',
          description: 'Creating a matrix.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // 3 rows, 4 columns\n    int matrix[3][4] = { {1,2,3,4}, {5,6,7,8}, {9,10,11,12} };\n    \n    for(int row = 0; row < 3; row++) {\n        for(int col = 0; col < 4; col++) {\n            cout << matrix[row][col] << "\\t";\n        }\n        cout << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'Passing Arrays to Functions',
          description: 'Modifying an array via a function.',
          code: `#include <iostream>\nusing namespace std;\n\n// Notice we must pass the size, because arrays decay to pointers\nvoid doubleValues(int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        arr[i] *= 2;\n    }\n}\n\nint main() {\n    int nums[3] = {10, 20, 30};\n    doubleValues(nums, 3);\n    cout << nums[0] << ", " << nums[1] << ", " << nums[2] << endl; // 20, 40, 60\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'If you declare `int data[50];`, what is the valid range of index values you can use?',
          answer: 'From 0 to 49. In C++, array indexing always begins at 0.'
        },
        {
          question: 'What happens if you try to access an array out of bounds (e.g., `data[100]`)?',
          answer: 'C++ does not perform bounds checking. The program will simply read or write to whatever memory is located at that offset, which can corrupt data, cause erratic behavior, or result in a segmentation fault (crash).'
        }
      ]
    },
    {
      title: 'Arrays of Structures and Objects',
      explanation: 'Just as you can create arrays of basic types like `int` or `float`, you can create arrays of user-defined types like `structs` or `classes`.\n\nArrays of Structures:\nThis is useful for creating simple databases. You can iterate through the array, and access members of each structure using the dot operator combined with the array index operator (e.g., `employees[i].salary`).\n\nArrays of Objects:\nWhen you declare an array of objects (e.g., `Car fleet[100];`), the default (no-argument) constructor of the class is called for each object in the array automatically upon creation. If your class does not have a default constructor, the compiler will throw an error when trying to create an array of that object type without explicit initialization.',
      examples: [
        {
          title: 'Array of Structures',
          description: 'Managing a list of records.',
          code: `#include <iostream>\nusing namespace std;\n\nstruct Part {\n    int modelNumber;\n    float cost;\n};\n\nint main() {\n    Part inventory[3]; // Array of 3 parts\n    \n    inventory[0].modelNumber = 101;\n    inventory[0].cost = 45.50;\n    \n    inventory[1].modelNumber = 202;\n    inventory[1].cost = 19.99;\n    \n    cout << "Part 2 cost: $" << inventory[1].cost << endl;\n    return 0;\n}`
        },
        {
          title: 'Array of Objects',
          description: 'Creating an array of class instances.',
          code: `#include <iostream>\nusing namespace std;\n\nclass Distance {\nprivate:\n    int feet;\n    float inches;\npublic:\n    Distance() { feet = 0; inches = 0.0; } // Required for array creation\n    void getDist() {\n        cout << "Enter feet: "; cin >> feet;\n        cout << "Enter inches: "; cin >> inches;\n    }\n    void showDist() { cout << feet << "\\'-" << inches << "\\"" << endl; }\n};\n\nint main() {\n    Distance measurements[2]; // Default constructor runs twice\n    \n    for(int i = 0; i < 2; i++) {\n        cout << "Measurement " << (i+1) << ":\\n";\n        measurements[i].getDist();\n    }\n    \n    cout << "\\nYou entered:\\n";\n    for(int i = 0; i < 2; i++) {\n        measurements[i].showDist();\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'Why is a default (no-argument) constructor essential when creating an array of objects?',
          answer: 'When an array of objects is declared (like `Class array[10];`), C++ immediately instantiates 10 objects in memory. It must call a constructor for each one. If no default constructor exists, the compiler doesn\'t know how to initialize them, resulting in a compilation error.'
        },
        {
          question: 'How do you call a member function `display()` on the 5th element of an object array named `items`?',
          answer: '`items[4].display();` (Remember, index 4 is the 5th element).'
        }
      ]
    },
    {
      title: 'Strings: C-Style vs C++ String Class',
      explanation: 'In C++, there are two primary ways to handle text (strings of characters).\n\nC-Style Strings:\nInherited from C, these are simply arrays of type `char` that are terminated by a special null character `\\0`. For example, the string "Hello" requires an array of 6 characters (5 letters + 1 null terminator). They are fast but dangerous, as they do not track their own length and rely heavily on library functions like `strcpy()` and `strlen()` defined in `<cstring>`.\n\nThe Standard C++ String Class:\nIntroduced to fix the headaches of C-style strings. Defined in the `<string>` header. It is an object-oriented approach to text. `std::string` objects automatically manage their own memory, know their own length, and can be manipulated using standard operators like `=` for assignment and `+` for concatenation. It is highly recommended to use `std::string` in modern C++ instead of C-style character arrays.',
      examples: [
        {
          title: 'C-Style Strings',
          description: 'Working with raw character arrays.',
          code: `#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char str1[20] = "Hello";\n    char str2[] = " World";\n    \n    // Cannot do str1 = str2 or str1 + str2\n    strcat(str1, str2); // Concatenates str2 onto str1\n    \n    cout << str1 << endl; // "Hello World"\n    cout << "Length: " << strlen(str1) << endl; // 11\n    return 0;\n}`
        },
        {
          title: 'The C++ String Class',
          description: 'The modern, safe way to handle text.',
          code: `#include <iostream>\n#include <string> // Required for string class\nusing namespace std;\n\nint main() {\n    string s1 = "Hello";\n    string s2 = " World";\n    \n    // Much easier manipulation\n    string s3 = s1 + s2;\n    \n    cout << s3 << endl; // "Hello World"\n    cout << "Length: " << s3.length() << endl; // 11\n    return 0;\n}`
        },
        {
          title: 'Reading Full Lines into String Class',
          description: 'Using getline with std::string.',
          code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string fullName;\n    cout << "Enter your full name: ";\n    getline(cin, fullName);\n    cout << "Welcome, " << fullName << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the purpose of the null character `\\0` in a C-style string?',
          answer: 'It marks the end of the string. Since C-style strings are just arrays without built-in length tracking, functions like `cout` or `strlen` read the memory character by character until they hit the `\\0`, which tells them to stop.'
        },
        {
          question: 'Why is `std::string` considered safer than a C-style char array?',
          answer: '`std::string` automatically manages its own memory buffer, resizing dynamically as needed. C-style arrays have fixed sizes, and if you try to copy a string into an array that is too small, it will overwrite adjacent memory, leading to buffer overflows.'
        }
      ]
    }
  ]
};

export default chapter7;
