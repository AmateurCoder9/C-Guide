const chapter7 = {
  id: 7,
  title: 'Advanced C++ Concepts',
  description: 'Explore pointers, dynamic memory, file handling, exception handling, templates, and the Standard Template Library.',
  icon: 'Rocket',
  color: 'from-cyan-500 to-teal-600',
  topics: [
    {
      id: '7.1',
      title: 'Pointers and Dynamic Memory',
      explanation: `A pointer stores the memory address of a variable. Declare with type* name. Use & to get address, * to dereference. 'new' allocates heap memory, 'delete' frees it. 'new[]' and 'delete[]' handle arrays. Always delete allocated memory to prevent leaks.`,
      examples: [
        {
          title: 'Pointer Basics',
          code: `#include <iostream>
using namespace std;

int main() {
    int x = 42;
    int* ptr = &x;  // ptr holds address of x
    
    cout << "Value: " << x << endl;
    cout << "Address: " << ptr << endl;
    cout << "Dereferenced: " << *ptr << endl;
    
    *ptr = 100;  // Modify via pointer
    cout << "x after *ptr = 100: " << x << endl;
    return 0;
}`,
          output: `Value: 42
Address: 0x7ffd...
Dereferenced: 42
x after *ptr = 100: 100`
        },
        {
          title: 'Dynamic Memory Allocation',
          code: `#include <iostream>
using namespace std;

int main() {
    // Single variable
    int* p = new int(25);
    cout << "Dynamic int: " << *p << endl;
    delete p;
    
    // Dynamic array
    int n = 5;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) arr[i] = (i + 1) * 10;
    
    cout << "Dynamic array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    
    delete[] arr;
    return 0;
}`,
          output: `Dynamic int: 25
Dynamic array: 10 20 30 40 50`
        },
        {
          title: 'Pointer to Object',
          code: `#include <iostream>
using namespace std;

class Box {
public:
    double length;
    Box(double l) : length(l) {}
    double volume() { return length * length * length; }
};

int main() {
    Box* b = new Box(3.0);
    
    cout << "Length: " << b->length << endl;
    cout << "Volume: " << b->volume() << endl;
    
    delete b;
    return 0;
}`,
          output: `Length: 3
Volume: 27`
        }
      ]
    },
    {
      id: '7.2',
      title: 'File Handling',
      explanation: `C++ handles files via <fstream>: ofstream for writing, ifstream for reading, fstream for both. Open files with open() or via constructor. Check is_open() before operations. Use getline() for line-by-line reading. Always close files when done. File modes include ios::in, ios::out, ios::app, and ios::binary.`,
      examples: [
        {
          title: 'Writing to a File',
          code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("data.txt");
    
    if (outFile.is_open()) {
        outFile << "Line 1: Hello, File!" << endl;
        outFile << "Line 2: C++ File I/O" << endl;
        outFile << "Line 3: Writing complete." << endl;
        outFile.close();
        cout << "File written successfully." << endl;
    } else {
        cout << "Error opening file." << endl;
    }
    return 0;
}`,
          output: 'File written successfully.'
        },
        {
          title: 'Reading from a File',
          code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ofstream out("sample.txt");
    out << "Alice 90\\nBob 85\\nCharlie 92" << endl;
    out.close();
    
    ifstream inFile("sample.txt");
    string line;
    
    if (inFile.is_open()) {
        cout << "File contents:" << endl;
        while (getline(inFile, line)) {
            cout << "  " << line << endl;
        }
        inFile.close();
    }
    return 0;
}`,
          output: `File contents:
  Alice 90
  Bob 85
  Charlie 92`
        },
        {
          title: 'Append Mode',
          code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Create file
    ofstream create("log.txt");
    create << "Entry 1" << endl;
    create.close();
    
    // Append to file
    ofstream append("log.txt", ios::app);
    append << "Entry 2" << endl;
    append << "Entry 3" << endl;
    append.close();
    
    // Read all
    ifstream read("log.txt");
    string line;
    while (getline(read, line))
        cout << line << endl;
    read.close();
    return 0;
}`,
          output: `Entry 1
Entry 2
Entry 3`
        }
      ]
    },
    {
      id: '7.3',
      title: 'Exception Handling',
      explanation: `Exception handling manages runtime errors gracefully using try-catch-throw. Code that may fail goes in 'try'. 'throw' raises an exception. 'catch' handles it. Multiple catch blocks can handle different types. catch(...) catches all exceptions. Standard exceptions inherit from std::exception.`,
      examples: [
        {
          title: 'Basic try-catch',
          code: `#include <iostream>
using namespace std;

double divide(double a, double b) {
    if (b == 0) throw "Division by zero!";
    return a / b;
}

int main() {
    try {
        cout << "10 / 3 = " << divide(10, 3) << endl;
        cout << "10 / 0 = " << divide(10, 0) << endl;
    } catch (const char* msg) {
        cout << "Error: " << msg << endl;
    }
    cout << "Program continues..." << endl;
    return 0;
}`,
          output: `10 / 3 = 3.33333
Error: Division by zero!
Program continues...`
        },
        {
          title: 'Multiple Catch Blocks',
          code: `#include <iostream>
#include <stdexcept>
using namespace std;

void checkAge(int age) {
    if (age < 0) throw invalid_argument("Negative age");
    if (age > 150) throw out_of_range("Age too large");
    cout << "Age " << age << " is valid" << endl;
}

int main() {
    try { checkAge(25); } 
    catch (exception& e) { cout << "Error: " << e.what() << endl; }
    
    try { checkAge(-5); }
    catch (exception& e) { cout << "Error: " << e.what() << endl; }
    
    try { checkAge(200); }
    catch (exception& e) { cout << "Error: " << e.what() << endl; }
    return 0;
}`,
          output: `Age 25 is valid
Error: Negative age
Error: Age too large`
        },
        {
          title: 'Custom Exception Class',
          code: `#include <iostream>
#include <exception>
using namespace std;

class InsufficientFunds : public exception {
    double amount;
public:
    InsufficientFunds(double a) : amount(a) {}
    const char* what() const noexcept override {
        return "Insufficient funds for withdrawal";
    }
    double getAmount() const { return amount; }
};

int main() {
    double balance = 100;
    double withdrawal = 150;
    
    try {
        if (withdrawal > balance)
            throw InsufficientFunds(withdrawal - balance);
        balance -= withdrawal;
    } catch (InsufficientFunds& e) {
        cout << e.what() << endl;
        cout << "Short by: $" << e.getAmount() << endl;
    }
    return 0;
}`,
          output: `Insufficient funds for withdrawal
Short by: $50`
        }
      ]
    },
    {
      id: '7.4',
      title: 'Templates',
      explanation: `Templates enable generic programming — writing code that works with any data type. Function templates use 'template<typename T>' before the function. Class templates create generic classes. The compiler generates specific versions when you use them with concrete types. Templates are the foundation of the STL.`,
      examples: [
        {
          title: 'Function Template',
          code: `#include <iostream>
using namespace std;

template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Max int: " << maximum(10, 20) << endl;
    cout << "Max double: " << maximum(3.14, 2.72) << endl;
    cout << "Max char: " << maximum('a', 'z') << endl;
    return 0;
}`,
          output: `Max int: 20
Max double: 3.14
Max char: z`
        },
        {
          title: 'Class Template',
          code: `#include <iostream>
using namespace std;

template<typename T>
class Pair {
    T first, second;
public:
    Pair(T a, T b) : first(a), second(b) {}
    T getMax() { return (first > second) ? first : second; }
    void display() {
        cout << "(" << first << ", " << second << ")" << endl;
    }
};

int main() {
    Pair<int> p1(10, 20);
    p1.display();
    cout << "Max: " << p1.getMax() << endl;
    
    Pair<string> p2("hello", "world");
    p2.display();
    cout << "Max: " << p2.getMax() << endl;
    return 0;
}`,
          output: `(10, 20)
Max: 20
(hello, world)
Max: world`
        },
        {
          title: 'Template with Multiple Types',
          code: `#include <iostream>
using namespace std;

template<typename T1, typename T2>
class Entry {
public:
    T1 key;
    T2 value;
    Entry(T1 k, T2 v) : key(k), value(v) {}
    void show() {
        cout << key << " => " << value << endl;
    }
};

int main() {
    Entry<string, int> e1("age", 20);
    Entry<int, string> e2(1, "Alice");
    Entry<string, double> e3("pi", 3.14159);
    
    e1.show();
    e2.show();
    e3.show();
    return 0;
}`,
          output: `age => 20
1 => Alice
pi => 3.14159`
        }
      ]
    },
    {
      id: '7.5',
      title: 'Standard Template Library (STL)',
      explanation: `The STL provides generic containers (vector, map, set, stack, queue), algorithms (sort, find, count), and iterators. Vectors are dynamic arrays that resize automatically. Maps store key-value pairs. Algorithms work with iterators to operate on containers.`,
      examples: [
        {
          title: 'Vector Operations',
          code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9, 3};
    
    v.push_back(7);
    sort(v.begin(), v.end());
    
    cout << "Sorted: ";
    for (int x : v) cout << x << " ";
    cout << endl;
    cout << "Size: " << v.size() << endl;
    cout << "Front: " << v.front() << ", Back: " << v.back() << endl;
    return 0;
}`,
          output: `Sorted: 1 2 3 5 7 8 9 
Size: 7
Front: 1, Back: 9`
        },
        {
          title: 'Map (Key-Value Store)',
          code: `#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"] = 87;
    scores["Charlie"] = 92;
    
    cout << "Scores:" << endl;
    for (auto& [name, score] : scores) {
        cout << "  " << name << ": " << score << endl;
    }
    
    cout << "Bob's score: " << scores["Bob"] << endl;
    cout << "Total students: " << scores.size() << endl;
    return 0;
}`,
          output: `Scores:
  Alice: 95
  Bob: 87
  Charlie: 92
Bob's score: 87
Total students: 3`
        },
        {
          title: 'Stack and Queue',
          code: `#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main() {
    // Stack (LIFO)
    stack<int> s;
    s.push(10); s.push(20); s.push(30);
    cout << "Stack top: " << s.top() << endl;
    s.pop();
    cout << "After pop: " << s.top() << endl;
    
    // Queue (FIFO)
    queue<string> q;
    q.push("First"); q.push("Second"); q.push("Third");
    cout << "Queue front: " << q.front() << endl;
    q.pop();
    cout << "After pop: " << q.front() << endl;
    return 0;
}`,
          output: `Stack top: 30
After pop: 20
Queue front: First
After pop: Second`
        }
      ]
    }
  ]
};

export default chapter7;
