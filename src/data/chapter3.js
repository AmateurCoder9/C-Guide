const chapter3 = {
  id: 3,
  title: 'Control Flow Statements',
  description: 'Master decision-making with if-else, switch-case, and iteration with for, while, and do-while loops.',
  icon: 'GitBranch',
  color: 'from-emerald-500 to-green-600',
  topics: [
    {
      id: '3.1',
      title: 'if, if-else, and Nested if',
      explanation: `The 'if' statement executes code when a condition is true. 'if-else' provides an alternative path. 'else if' chains multiple conditions. Nested if places one if inside another. The ternary operator (condition ? expr1 : expr2) is a shorthand for simple if-else.`,
      examples: [
        {
          title: 'if-else Statement',
          code: `#include <iostream>
using namespace std;

int main() {
    int num = -5;
    
    if (num > 0) {
        cout << num << " is positive" << endl;
    } else if (num < 0) {
        cout << num << " is negative" << endl;
    } else {
        cout << num << " is zero" << endl;
    }
    return 0;
}`,
          output: '-5 is negative'
        },
        {
          title: 'Nested if for Grade Calculation',
          code: `#include <iostream>
using namespace std;

int main() {
    int marks = 78;
    char grade;
    
    if (marks >= 90) grade = 'A';
    else if (marks >= 80) grade = 'B';
    else if (marks >= 70) grade = 'C';
    else if (marks >= 60) grade = 'D';
    else grade = 'F';
    
    cout << "Marks: " << marks << endl;
    cout << "Grade: " << grade << endl;
    return 0;
}`,
          output: `Marks: 78
Grade: C`
        },
        {
          title: 'Ternary Operator',
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 27;
    int max = (a > b) ? a : b;
    string result = (a % 2 == 0) ? "even" : "odd";
    
    cout << "Max of " << a << " and " << b << " = " << max << endl;
    cout << a << " is " << result << endl;
    return 0;
}`,
          output: `Max of 15 and 27 = 27
15 is odd`
        }
      ]
    },
    {
      id: '3.2',
      title: 'switch-case Statement',
      explanation: `The switch statement selects one of many code blocks to execute based on the value of an expression. Each case compares against a constant value. The 'break' keyword prevents fall-through to the next case. The 'default' case handles unmatched values. switch works with int, char, and enum types.`,
      examples: [
        {
          title: 'Day of the Week',
          code: `#include <iostream>
using namespace std;

int main() {
    int day = 3;
    
    switch (day) {
        case 1: cout << "Monday" << endl; break;
        case 2: cout << "Tuesday" << endl; break;
        case 3: cout << "Wednesday" << endl; break;
        case 4: cout << "Thursday" << endl; break;
        case 5: cout << "Friday" << endl; break;
        case 6: cout << "Saturday" << endl; break;
        case 7: cout << "Sunday" << endl; break;
        default: cout << "Invalid day" << endl;
    }
    return 0;
}`,
          output: 'Wednesday'
        },
        {
          title: 'Simple Calculator',
          code: `#include <iostream>
using namespace std;

int main() {
    double a = 12, b = 4;
    char op = '*';
    
    switch (op) {
        case '+': cout << a + b << endl; break;
        case '-': cout << a - b << endl; break;
        case '*': cout << a * b << endl; break;
        case '/':
            if (b != 0) cout << a / b << endl;
            else cout << "Division by zero!" << endl;
            break;
        default: cout << "Invalid operator" << endl;
    }
    return 0;
}`,
          output: '48'
        },
        {
          title: 'Grouping Cases (Fall-through)',
          code: `#include <iostream>
using namespace std;

int main() {
    char ch = 'B';
    
    switch (ch) {
        case 'A': case 'E': case 'I':
        case 'O': case 'U':
        case 'a': case 'e': case 'i':
        case 'o': case 'u':
            cout << ch << " is a vowel" << endl;
            break;
        default:
            cout << ch << " is a consonant" << endl;
    }
    return 0;
}`,
          output: 'B is a consonant'
        }
      ]
    },
    {
      id: '3.3',
      title: 'for Loop',
      explanation: `The for loop repeats code a known number of times. Syntax: for(init; condition; update). The initialization runs once, the condition is checked before each iteration, and the update runs after each iteration. Range-based for (C++11) iterates over containers directly.`,
      examples: [
        {
          title: 'Multiplication Table',
          code: `#include <iostream>
using namespace std;

int main() {
    int n = 5;
    cout << "Multiplication table of " << n << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << n * i << endl;
    }
    return 0;
}`,
          output: `Multiplication table of 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`
        },
        {
          title: 'Sum of First N Natural Numbers',
          code: `#include <iostream>
using namespace std;

int main() {
    int n = 10, sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    cout << "Sum of 1 to " << n << " = " << sum << endl;
    return 0;
}`,
          output: 'Sum of 1 to 10 = 55'
        },
        {
          title: 'Nested for Loop (Pattern)',
          code: `#include <iostream>
using namespace std;

int main() {
    int rows = 5;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`,
          output: `* 
* * 
* * * 
* * * * 
* * * * *`
        }
      ]
    },
    {
      id: '3.4',
      title: 'while and do-while Loops',
      explanation: `The while loop repeats as long as a condition is true — it checks the condition before each iteration, so it may execute zero times. The do-while loop checks the condition after each iteration, guaranteeing at least one execution. Use while when the number of iterations is unknown.`,
      examples: [
        {
          title: 'while Loop — Digit Counter',
          code: `#include <iostream>
using namespace std;

int main() {
    int num = 98765, digits = 0;
    int temp = num;
    
    while (temp > 0) {
        digits++;
        temp /= 10;
    }
    cout << num << " has " << digits << " digits" << endl;
    return 0;
}`,
          output: '98765 has 5 digits'
        },
        {
          title: 'do-while Loop — Menu',
          code: `#include <iostream>
using namespace std;

int main() {
    int choice;
    do {
        cout << "1. Greet  2. Info  3. Exit" << endl;
        cout << "Choice: ";
        choice = 3;  // Simulated input
        cout << choice << endl;
        
        switch (choice) {
            case 1: cout << "Hello!" << endl; break;
            case 2: cout << "C++ Academy" << endl; break;
            case 3: cout << "Goodbye!" << endl; break;
        }
    } while (choice != 3);
    return 0;
}`,
          output: `1. Greet  2. Info  3. Exit
Choice: 3
Goodbye!`
        },
        {
          title: 'Reverse a Number',
          code: `#include <iostream>
using namespace std;

int main() {
    int num = 1234, reversed = 0;
    
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num /= 10;
    }
    cout << "Reversed: " << reversed << endl;
    return 0;
}`,
          output: 'Reversed: 4321'
        }
      ]
    },
    {
      id: '3.5',
      title: 'break and continue',
      explanation: `'break' immediately exits the innermost loop or switch. 'continue' skips the rest of the current iteration and jumps to the next one. Both are useful for controlling loop flow based on conditions. Avoid overusing them as they can make logic harder to follow.`,
      examples: [
        {
          title: 'break — Find First Multiple',
          code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 100; i++) {
        if (i % 7 == 0 && i % 5 == 0) {
            cout << "First number divisible by 7 and 5: " << i << endl;
            break;
        }
    }
    return 0;
}`,
          output: 'First number divisible by 7 and 5: 35'
        },
        {
          title: 'continue — Skip Odd Numbers',
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "Even numbers from 1 to 10: ";
    for (int i = 1; i <= 10; i++) {
        if (i % 2 != 0) continue;
        cout << i << " ";
    }
    cout << endl;
    return 0;
}`,
          output: 'Even numbers from 1 to 10: 2 4 6 8 10'
        },
        {
          title: 'break in Nested Loops',
          code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            if (j > i) break;  // Only breaks inner loop
            cout << j << " ";
        }
        cout << endl;
    }
    return 0;
}`,
          output: `1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5`
        }
      ]
    }
  ]
};

export default chapter3;
