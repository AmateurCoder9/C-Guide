const chapter3 = {
  id: 3,
  title: 'Loops and Decisions',
  description: 'Control flow and logical operations. Master relational operators, decision making structures, and repetitive loops.',
  topics: [
    {
      title: 'Relational Operators and Decisions',
      explanation: 'Decisions in a program allow it to choose different paths based on runtime conditions. This is primarily achieved using the `if` statement combined with relational operators.\n\nRelational Operators:\nThese operators compare two values and evaluate to a boolean result (true or false). \n- `==` (Equal to)\n- `!=` (Not equal to)\n- `>` (Greater than), `<` (Less than)\n- `>=` (Greater than or equal to), `<=` (Less than or equal to)\n\nThe if Statement:\nThe simplest decision structure. If the test expression inside the parentheses is true, the statement (or block of statements) following it is executed. If false, it is bypassed.\n\nThe if...else Statement:\nProvides a two-way branch. If the test condition is true, the `if` block executes. If it is false, the `else` block executes.\n\nNested if...else:\nYou can place an `if` statement inside another `if` statement to check complex, multi-layered conditions.',
      examples: [
        {
          title: 'Basic if...else',
          description: 'Using relational operators to determine output.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int limit = 55;\n    int speed;\n    cout << "Enter your speed: ";\n    cin >> speed;\n    \n    if (speed > limit) {\n        cout << "You are speeding! Ticket issued." << endl;\n    } else {\n        cout << "Speed is within legal limits." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'else if Ladder',
          description: 'Checking multiple mutually exclusive conditions.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        cout << "Grade: A" << endl;\n    } else if (score >= 80) {\n        cout << "Grade: B" << endl;\n    } else if (score >= 70) {\n        cout << "Grade: C" << endl;\n    } else {\n        cout << "Grade: F" << endl;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the danger of using a single equal sign `=` inside an `if` statement condition?',
          answer: 'A single `=` is the assignment operator, not the equality operator (`==`). It assigns the value to the variable and evaluates to the assigned value. If it is non-zero, the condition is evaluated as true, resulting in logical bugs.'
        },
        {
          question: 'When multiple `if` conditions are linked with `else if`, how many blocks can execute?',
          answer: 'Only one. The first condition that evaluates to true will execute its block, and the rest of the ladder is completely skipped.'
        }
      ]
    },
    {
      title: 'Looping Structures (for, while, do...while)',
      explanation: 'Loops cause a section of your program to be repeated a certain number of times or until a specific condition is met.\n\nThe for Loop:\nIdeal when you know exactly how many times you want the loop to run. It has three parts inside the parentheses, separated by semicolons: initialization, test expression, and increment/update. Example: `for(int i=0; i<10; i++)`.\n\nThe while Loop:\nIdeal when the number of iterations is unknown and depends on a dynamic condition. The test expression is evaluated at the top of the loop. If it is false initially, the loop body never executes.\n\nThe do...while Loop:\nSimilar to the `while` loop, but the test expression is evaluated at the bottom of the loop. This guarantees that the loop body will execute at least once, making it very useful for displaying menus and receiving user input.',
      examples: [
        {
          title: 'The for Loop',
          description: 'A loop counting from 1 to 5.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int factorial = 1;\n    // Calculate 5!\n    for (int i = 1; i <= 5; i++) {\n        factorial *= i;\n    }\n    cout << "5 factorial is: " << factorial << endl;\n    return 0;\n}`
        },
        {
          title: 'The while Loop',
          description: 'Looping based on user input.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 1;\n    while (count <= 3) {\n        cout << "Loop iteration: " << count << endl;\n        count++;\n    }\n    return 0;\n}`
        },
        {
          title: 'The do...while Loop',
          description: 'A menu loop that always runs at least once.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int choice;\n    do {\n        cout << "1. Play Game\\n2. Exit\\nEnter choice: ";\n        cin >> choice;\n    } while (choice != 2);\n    cout << "Goodbye!" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What happens if the initialization part of a `for` loop declares a variable (e.g., `for(int i=0; ...)`?',
          answer: 'The variable `i` is scoped only to that `for` loop. It ceases to exist outside the loop block.'
        },
        {
          question: 'Why does a `do...while` loop end with a semicolon while a standard `while` loop does not?',
          answer: 'The `do...while` loop structure specifies that the `while(condition)` acts as the terminating statement of the `do` block, thus requiring a semicolon to complete the syntactic statement.'
        }
      ]
    },
    {
      title: 'Logical Operators and the switch Statement',
      explanation: 'Logical Operators:\nOften you need to check multiple relational conditions at the same time. Logical operators make this possible:\n- `&&` (Logical AND): True only if both operands are true.\n- `||` (Logical OR): True if at least one operand is true.\n- `!` (Logical NOT): Inverts the boolean value.\n\nThe switch Statement:\nWhen you have a large `else if` tree comparing a single integer or character variable to multiple specific constant values, a `switch` statement is cleaner. The variable is tested against a list of `case` values. When a match is found, execution jumps to that case. \n\nCrucially, a `break` statement is needed at the end of each `case` block to exit the `switch`. Without it, the program will execute the matched case and then "fall through" to execute all subsequent cases regardless of their values. The `default` case handles any value that didn\'t match a specific `case`.',
      examples: [
        {
          title: 'Logical Operators',
          description: 'Combining conditions.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    bool hasDegree = true;\n    \n    if (age > 18 && hasDegree) {\n        cout << "Eligible for job interview." << endl;\n    }\n    \n    if (age < 18 || !hasDegree) {\n        cout << "Require more training." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'The switch Statement',
          description: 'Handling character input cleanly.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    char dir = 'n';\n    switch (dir) {\n        case 'n': cout << "Going North." << endl; break;\n        case 's': cout << "Going South." << endl; break;\n        case 'e': cout << "Going East." << endl; break;\n        case 'w': cout << "Going West." << endl; break;\n        default:  cout << "Invalid direction." << endl;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is short-circuit evaluation in logical operators?',
          answer: 'In an `&&` operation, if the left operand is false, the entire expression must be false, so C++ skips evaluating the right operand. Similarly, in an `||` operation, if the left operand is true, the right side is skipped.'
        },
        {
          question: 'Can you use a `switch` statement to check if a string is equal to "Apple" or "Banana"?',
          answer: 'No, C++ `switch` statements only support integral types, meaning you can only evaluate integers, characters, and enumerations.'
        }
      ]
    }
  ]
};

export default chapter3;
