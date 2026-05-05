const chapter2 = {
  id: 2,
  title: 'Control Structures',
  description: 'Learn how to control the flow of execution in your programs using conditional statements, loops, and jump instructions.',
  topics: [
    {
      title: 'Conditional Statements (if, else, switch)',
      explanation: 'Conditional statements allow a program to make decisions and execute different blocks of code based on certain conditions.\n\n1. if Statement: The most basic control flow statement. It evaluates a boolean condition; if true, the block of code inside the curly braces is executed.\n\n2. if-else Statement: Provides an alternative path. If the `if` condition is false, the `else` block executes.\n\n3. else if Ladder: Used to test multiple conditions sequentially. Once a true condition is found, its block executes and the rest of the ladder is skipped.\n\n4. switch Statement: An alternative to a long `else if` ladder when comparing a single integral or character variable against constant values. It evaluates the expression and jumps to the matching `case`. A `break` statement is required at the end of each case to prevent "fall-through" (where execution continues into the next case). The `default` case acts like a final `else`, executing if no cases match.\n\n5. Ternary Operator (?:): A shorthand, inline `if-else` statement. Syntax: `condition ? expression_if_true : expression_if_false`.',
      examples: [
        {
          title: 'Basic if-else',
          description: 'Checking if a number is positive, negative, or zero.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = -5;\n    if (num > 0) {\n        cout << "Positive" << endl;\n    } else if (num < 0) {\n        cout << "Negative" << endl;\n    } else {\n        cout << "Zero" << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'The switch Statement',
          description: 'Using switch for menu selections or exact matches.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'B';\n    switch(grade) {\n        case 'A':\n            cout << "Excellent!" << endl;\n            break;\n        case 'B':\n            cout << "Good job!" << endl;\n            break;\n        case 'C':\n            cout << "Average." << endl;\n            break;\n        default:\n            cout << "Invalid grade." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'Ternary Operator',
          description: 'A compact way to write simple if-else logic.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    int max = (a > b) ? a : b;\n    cout << "Maximum is " << max << endl;\n    return 0;\n}`
        },
        {
          title: 'Switch Fall-through',
          description: 'Intentionally omitting break statements.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int day = 2;\n    switch(day) {\n        case 1:\n        case 2:\n        case 3:\n        case 4:\n        case 5:\n            cout << "Weekday" << endl;\n            break;\n        case 6:\n        case 7:\n            cout << "Weekend" << endl;\n            break;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What happens if you forget a `break` statement in a `switch` case?',
          answer: 'Execution will "fall through" to the next case, executing its code regardless of whether that case condition matched or not, until a break is encountered or the switch block ends.'
        },
        {
          question: 'Can you use a string in a switch statement in C++?',
          answer: 'No, standard C++ switch statements only accept integral types (like int, char, enum). You must use if-else for string comparisons.'
        },
        {
          question: 'What is the ternary operator equivalent to?',
          answer: 'It is functionally equivalent to a simple if-else statement that assigns or returns a value.'
        },
        {
          question: 'What is a nested if statement?',
          answer: 'An if statement placed completely inside another if or else statement block, allowing for multi-layered conditional logic.'
        }
      ]
    },
    {
      title: 'Looping Constructs (for, while, do-while)',
      explanation: 'Loops execute a block of code repeatedly as long as a specified condition remains true.\n\n1. for Loop: Best used when the number of iterations is known beforehand. It consolidates initialization, condition checking, and iteration into a single line. Syntax: `for(initialization; condition; update) { ... }`.\n\n2. while Loop: Best used when the number of iterations is not known and depends on a dynamic condition. The condition is checked *before* the body executes, meaning the loop might never run if the condition is initially false.\n\n3. do-while Loop: Similar to a while loop, but the condition is checked *after* the body executes. This guarantees that the loop body will execute at least once, making it ideal for menu-driven programs or taking user input.\n\n4. Range-based for loop (C++11): A modern syntax used to iterate over elements in a container (like an array or vector) without needing explicit indices or iterators. Syntax: `for (type var : container) { ... }`.',
      examples: [
        {
          title: 'Standard for Loop',
          description: 'Printing numbers from 1 to 5.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}`
        },
        {
          title: 'while Loop',
          description: 'Looping until a condition is met.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 5;\n    while (count > 0) {\n        cout << count << " ";\n        count--;\n    }\n    cout << "Ignition!" << endl;\n    return 0;\n}`
        },
        {
          title: 'do-while Loop',
          description: 'Ensuring at least one execution.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int input;\n    do {\n        cout << "Enter 0 to exit: ";\n        cin >> input;\n    } while (input != 0);\n    cout << "Exited." << endl;\n    return 0;\n}`
        },
        {
          title: 'Range-based for Loop',
          description: 'Iterating over an array easily.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    for (int val : arr) {\n        cout << val << " ";\n    }\n    cout << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the main difference between a `while` loop and a `do-while` loop?',
          answer: 'A `while` loop evaluates the condition before executing the block, so it might run zero times. A `do-while` loop evaluates the condition after executing the block, guaranteeing at least one execution.'
        },
        {
          question: 'When should you choose a `for` loop over a `while` loop?',
          answer: 'A `for` loop is ideal when the exact number of iterations is known in advance, whereas a `while` loop is better when looping until an unpredictable event or dynamic condition changes.'
        },
        {
          question: 'What happens if you omit the condition in a `for` loop (e.g., `for(;;)`)?',
          answer: 'It creates an infinite loop, equivalent to `while(true)`.'
        },
        {
          question: 'What is an infinite loop?',
          answer: 'A loop whose terminating condition is never met, causing the program to execute the loop block endlessly until forced to stop by the OS.'
        }
      ]
    },
    {
      title: 'Jump Statements (break, continue, goto)',
      explanation: 'Jump statements forcefully alter the normal flow of control in a program.\n\n1. break: Immediately terminates the innermost enclosing loop or switch statement. Control jumps to the statement immediately following the terminated structure. It is commonly used to exit an infinite loop when a certain condition is met.\n\n2. continue: Skips the remaining code inside the current loop iteration and immediately jumps to the next iteration. In a `for` loop, it jumps to the update expression; in a `while` loop, it jumps to the condition check.\n\n3. return: Exits from the current function and returns control to where the function was called. It can optionally pass back a value.\n\n4. goto: Performs an unconditional jump to a labeled statement within the same function. Its use is heavily discouraged in modern programming because it creates "spaghetti code" that is difficult to read and maintain, but it exists in C++ for backward compatibility with C.',
      examples: [
        {
          title: 'Using break in a loop',
          description: 'Exiting a loop prematurely.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i == 5) {\n            cout << "Breaking loop at 5" << endl;\n            break;\n        }\n        cout << i << " ";\n    }\n    return 0;\n}`
        },
        {
          title: 'Using continue',
          description: 'Skipping even numbers.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) {\n            continue; // Skip the rest of the loop body for even numbers\n        }\n        cout << i << " ";\n    }\n    return 0;\n}`
        },
        {
          title: 'Nested loops and break',
          description: 'Showing that break only exits the innermost loop.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 3; j++) {\n            if (i == 2 && j == 2) break; \n            cout << i << "," << j << " ";\n        }\n        cout << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'The dreaded goto',
          description: 'An example of how goto works (use sparingly!).',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 0;\n    \n    start_loop:\n    cout << num << " ";\n    num++;\n    if (num < 5) {\n        goto start_loop;\n    }\n    \n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'If `break` is used inside a nested loop, does it stop all loops?',
          answer: 'No, `break` only terminates the innermost loop that directly encloses it.'
        },
        {
          question: 'How does `continue` behave differently in a `while` loop vs a `for` loop?',
          answer: 'In a `for` loop, `continue` jumps directly to the update expression (e.g., i++). In a `while` loop, it jumps straight to the condition evaluation. (If the update in a while loop is skipped by continue, it can cause an infinite loop!).'
        },
        {
          question: 'Why is `goto` considered bad practice?',
          answer: 'Because it allows jumping arbitrarily around the codebase, bypassing logical structures and making the execution flow incredibly difficult to trace, debug, and maintain.'
        },
        {
          question: 'What is the purpose of the `return` statement in `int main()`?',
          answer: 'It terminates the execution of the program and passes an exit code back to the operating system (0 usually indicates successful execution).'
        }
      ]
    }
  ]
};

export default chapter2;
