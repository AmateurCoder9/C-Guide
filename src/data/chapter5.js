const chapter5 = {
  id: 5,
  title: 'Arrays & Strings',
  description: 'Work with one-dimensional and multi-dimensional arrays, C-strings, and the powerful std::string class.',
  icon: 'LayoutGrid',
  color: 'from-rose-500 to-pink-600',
  topics: [
    {
      id: '5.1',
      title: 'One-Dimensional Arrays',
      explanation: `An array stores multiple values of the same type in contiguous memory. Declare with type name[size]. Elements are accessed by index starting from 0. Arrays have a fixed size determined at compile time. You can initialize arrays at declaration using curly braces.`,
      examples: [
        {
          title: 'Array Declaration and Access',
          code: `#include <iostream>
using namespace std;

int main() {
    int marks[5] = {85, 92, 78, 95, 88};
    
    cout << "All marks: ";
    for (int i = 0; i < 5; i++) {
        cout << marks[i] << " ";
    }
    cout << endl;
    cout << "First: " << marks[0] << ", Last: " << marks[4] << endl;
    return 0;
}`,
          output: `All marks: 85 92 78 95 88 
First: 85, Last: 88`
        },
        {
          title: 'Array — Find Average',
          code: `#include <iostream>
using namespace std;

int main() {
    double temps[] = {36.5, 37.1, 36.8, 37.3, 36.9};
    int n = sizeof(temps) / sizeof(temps[0]);
    double sum = 0;
    
    for (int i = 0; i < n; i++) sum += temps[i];
    
    cout << "Average temperature: " << sum / n << endl;
    return 0;
}`,
          output: 'Average temperature: 36.92'
        },
        {
          title: 'Linear Search',
          code: `#include <iostream>
using namespace std;

int search(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}

int main() {
    int arr[] = {4, 2, 7, 1, 9, 3};
    int idx = search(arr, 6, 7);
    
    if (idx != -1)
        cout << "Found 7 at index " << idx << endl;
    else
        cout << "Not found" << endl;
    return 0;
}`,
          output: 'Found 7 at index 2'
        }
      ]
    },
    {
      id: '5.2',
      title: 'Multi-Dimensional Arrays',
      explanation: `A 2D array is an array of arrays, forming a grid of rows and columns. Declare as type name[rows][cols]. Access elements with two indices: arr[row][col]. Useful for matrices, tables, and grid-based problems. Nested loops are typically used to traverse 2D arrays.`,
      examples: [
        {
          title: '2D Array — Matrix Display',
          code: `#include <iostream>
using namespace std;

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    cout << "Matrix:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}`,
          output: `Matrix:
1 2 3 
4 5 6 
7 8 9`
        },
        {
          title: 'Matrix Addition',
          code: `#include <iostream>
using namespace std;

int main() {
    int A[2][2] = {{1, 2}, {3, 4}};
    int B[2][2] = {{5, 6}, {7, 8}};
    int C[2][2];
    
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            C[i][j] = A[i][j] + B[i][j];
    
    cout << "Sum matrix:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++)
            cout << C[i][j] << " ";
        cout << endl;
    }
    return 0;
}`,
          output: `Sum matrix:
6 8 
10 12`
        },
        {
          title: 'Transpose of a Matrix',
          code: `#include <iostream>
using namespace std;

int main() {
    int mat[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int trans[3][2];
    
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 3; j++)
            trans[j][i] = mat[i][j];
    
    cout << "Transpose:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++)
            cout << trans[i][j] << " ";
        cout << endl;
    }
    return 0;
}`,
          output: `Transpose:
1 4 
2 5 
3 6`
        }
      ]
    },
    {
      id: '5.3',
      title: 'C-Style Strings',
      explanation: `C-style strings are character arrays terminated by a null character ('\\0'). Functions from <cstring> operate on them: strlen (length), strcpy (copy), strcat (concatenate), strcmp (compare). They require careful buffer management to avoid overflow.`,
      examples: [
        {
          title: 'C-String Basics',
          code: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char name[20] = "Hello";
    cout << "String: " << name << endl;
    cout << "Length: " << strlen(name) << endl;
    
    char copy[20];
    strcpy(copy, name);
    cout << "Copy: " << copy << endl;
    
    strcat(name, " World");
    cout << "Concatenated: " << name << endl;
    return 0;
}`,
          output: `String: Hello
Length: 5
Copy: Hello
Concatenated: Hello World`
        },
        {
          title: 'String Comparison',
          code: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char s1[] = "apple";
    char s2[] = "banana";
    
    int result = strcmp(s1, s2);
    if (result < 0) cout << s1 << " comes before " << s2 << endl;
    else if (result > 0) cout << s1 << " comes after " << s2 << endl;
    else cout << "Both are equal" << endl;
    return 0;
}`,
          output: 'apple comes before banana'
        },
        {
          title: 'Character Analysis',
          code: `#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char str[] = "Hello World 123!";
    int upper = 0, lower = 0, digits = 0, spaces = 0;
    
    for (int i = 0; str[i] != '\\0'; i++) {
        if (isupper(str[i])) upper++;
        else if (islower(str[i])) lower++;
        else if (isdigit(str[i])) digits++;
        else if (str[i] == ' ') spaces++;
    }
    
    cout << "Upper: " << upper << ", Lower: " << lower << endl;
    cout << "Digits: " << digits << ", Spaces: " << spaces << endl;
    return 0;
}`,
          output: `Upper: 2, Lower: 8
Digits: 3, Spaces: 2`
        }
      ]
    },
    {
      id: '5.4',
      title: 'std::string Class',
      explanation: `The C++ string class from <string> provides safe, dynamic string handling. It supports concatenation with +, comparison with ==, substring with substr(), find(), length()/size(), and many more methods. Unlike C-strings, std::string manages memory automatically and resizes as needed.`,
      examples: [
        {
          title: 'String Operations',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Hello";
    string s2 = " World";
    string s3 = s1 + s2;       // Concatenation
    
    cout << "Combined: " << s3 << endl;
    cout << "Length: " << s3.length() << endl;
    cout << "Char at 0: " << s3[0] << endl;
    cout << "Substring: " << s3.substr(0, 5) << endl;
    cout << "Find 'World': " << s3.find("World") << endl;
    return 0;
}`,
          output: `Combined: Hello World
Length: 11
Char at 0: H
Substring: Hello
Find 'World': 6`
        },
        {
          title: 'String Methods',
          code: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s = "C++ Programming";
    
    cout << "Original: " << s << endl;
    cout << "Empty? " << (s.empty() ? "Yes" : "No") << endl;
    
    s.insert(3, " is");
    cout << "After insert: " << s << endl;
    
    s.erase(3, 3);
    cout << "After erase: " << s << endl;
    
    s.replace(4, 11, "Language");
    cout << "After replace: " << s << endl;
    return 0;
}`,
          output: `Original: C++ Programming
Empty? No
After insert: C++ is Programming
After erase: C++ Programming
After replace: C++ Language`
        },
        {
          title: 'String Comparison and Iteration',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string a = "hello", b = "hello", c = "world";
    
    cout << (a == b ? "a == b" : "a != b") << endl;
    cout << (a == c ? "a == c" : "a != c") << endl;
    
    // Range-based for loop
    string word = "C++";
    cout << "Characters: ";
    for (char ch : word) {
        cout << ch << " ";
    }
    cout << endl;
    return 0;
}`,
          output: `a == b
a != c
Characters: C + +`
        }
      ]
    }
  ]
};

export default chapter5;
