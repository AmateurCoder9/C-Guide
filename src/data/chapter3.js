const chapter3 = {
  id: 3,
  title: 'Loops and Decisions',
  description: 'Learn how to give your programs a brain. Master relational operators to make choices, and repetitive loops to automate tasks.',
  topics: [
    {
      title: 'Decisions: The if Statement',
      explanation: `Until now, our programs have run in a straight line from top to bottom. But real life requires choices. A program needs to act like a brain, taking different paths based on the situation.

### Relational Operators (Asking Questions)
To make a choice, the computer must ask a True/False question. It does this by comparing values using relational operators:
* \`==\` (Is exactly equal to? Note the double equals!)
* \`!=\` (Is NOT equal to?)
* \`>\` (Greater than?), \`<\` (Less than?)
* \`>=\` (Greater than or equal?), \`<=\` (Less than or equal?)

### The \`if\` Statement (The Fork in the Road)
The \`if\` statement is how we tell the computer to make a choice. 
* If the question inside the parentheses is **True**, the computer will enter the curly braces \`{}\` and run the code inside.
* If it is **False**, it ignores the braces entirely and skips to the next section.

### The \`if...else\` Statement (Plan A and Plan B)
Sometimes you want to say: *"If it's raining, take an umbrella. Otherwise, wear sunglasses."* 
* The \`if\` block is Plan A.
* The \`else\` block is Plan B. Only one of them will ever execute.`,
      examples: [
        {
          title: 'The Basic if Statement',
          description: 'A simple check. If false, nothing happens.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int speed = 80;\n    \n    // The question: Is speed greater than 65?\n    if (speed > 65) {\n        // This only runs if the answer is True\n        cout << "You are speeding!" << endl;\n    }\n    \n    cout << "Drive safely." << endl;\n    return 0;\n}`
        },
        {
          title: 'The if...else Statement',
          description: 'Providing a guaranteed Plan A or Plan B outcome.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age;\n    cout << "Enter your age: ";\n    cin >> age;\n    \n    if (age >= 18) {\n        cout << "You are allowed to vote." << endl;\n    } else {\n        cout << "You are too young to vote." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'The else if Ladder (Intermediate)',
          description: 'Checking multiple conditions in a row until one is true.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    // The computer checks from top to bottom.\n    // Once it finds a True statement, it skips the rest completely.\n    if (score >= 90) {\n        cout << "Grade: A" << endl;\n    } else if (score >= 80) {\n        cout << "Grade: B" << endl;\n    } else if (score >= 70) {\n        cout << "Grade: C" << endl;\n    } else {\n        cout << "Grade: F" << endl;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is the danger of using a single equal sign `=` inside an `if` statement? (e.g. `if(age = 18)`)',
          answer: 'A single `=` assigns the value 18 to the variable `age`, instead of checking if it equals 18. This evaluates to true, causing a silent bug that forces the `if` block to always run.'
        },
        {
          question: 'Do you always need an `else` block after an `if` block?',
          answer: 'No. An `if` statement can exist perfectly fine on its own. `else` is only needed if you want a specific "Plan B" to occur when the `if` is false.'
        },
        {
          question: 'When multiple conditions are linked with `else if`, can more than one block execute?',
          answer: 'No. Only one block will ever execute. As soon as the first true condition is found, its block runs, and the program skips past the entire rest of the ladder.'
        }
      ]
    },
    {
      title: 'Looping: Automating the Boring Stuff',
      explanation: `Computers are incredibly fast and never get bored. If you want to print "Hello" a thousand times, you shouldn't write \`cout\` a thousand times. You use a **loop**.

### The \`while\` Loop (Loop until told to stop)
A \`while\` loop is like saying: *"As long as this condition is true, keep doing this over and over."*
* It checks the condition at the **top**.
* If it's false immediately, the loop never runs even once.
* Warning: You must remember to change the condition inside the loop, otherwise it will run forever (an **infinite loop**).

### The \`for\` Loop (Loop a specific number of times)
When you know exactly how many times you want to loop (e.g., exactly 10 times), the \`for\` loop is the best tool. It packs three rules into one neat line:
1. **Start:** Create a counter variable (e.g., \`int i = 0\`).
2. **Stop:** The rule to keep going (e.g., \`i < 10\`).
3. **Step:** How to count (e.g., \`i++\` means add 1 each time).

### The \`do...while\` Loop (Shoot first, ask later)
This is just like a \`while\` loop, but it asks the question at the **bottom**. 
* Because it checks at the bottom, the code inside is guaranteed to run **at least one time**, no matter what.`,
      examples: [
        {
          title: 'The while Loop',
          description: 'Using a counter to loop 3 times.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int laps = 1;\n    \n    // "As long as laps is less than or equal to 3..."\n    while (laps <= 3) {\n        cout << "Running lap " << laps << endl;\n        laps++; // CRITICAL: Add 1 to laps, or the loop runs forever!\n    }\n    \n    cout << "Finished the race!" << endl;\n    return 0;\n}`
        },
        {
          title: 'The for Loop',
          description: 'A cleaner way to do the exact same thing as above.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // (Start ; Stop rule ; Step)\n    for (int laps = 1; laps <= 3; laps++) {\n        cout << "Running lap " << laps << endl;\n    }\n    \n    cout << "Finished the race!" << endl;\n    return 0;\n}`
        },
        {
          title: 'The do...while Menu (Intermediate)',
          description: 'Perfect for video game menus because you always want to show the menu at least once.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int choice;\n    do {\n        cout << "\\n1. Play Game\\n2. Exit\\nEnter choice: ";\n        cin >> choice;\n        \n        if (choice != 1 && choice != 2) {\n            cout << "Invalid choice." << endl;\n        }\n    } while (choice != 2); // Checks condition at the bottom\n    \n    cout << "Goodbye!" << endl;\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is an infinite loop and how does it happen?',
          answer: 'An infinite loop is a loop that never terminates, freezing your program. It happens when the loop\'s condition never becomes false (e.g., forgetting to write `laps++` inside a while loop).'
        },
        {
          question: 'When should you choose a `for` loop over a `while` loop?',
          answer: 'Use a `for` loop when you know exactly how many iterations you need (like counting from 1 to 100). Use a `while` loop when the number of iterations is unknown and depends on a dynamic event (like waiting for a user to type the correct password).'
        },
        {
          question: 'Why does a `do...while` loop end with a semicolon while a standard `while` loop does not?',
          answer: 'Because the `while(condition)` acts as the closing statement for the `do` block, making it a complete syntactic instruction that must end with a semicolon.'
        }
      ]
    },
    {
      title: 'Logical Operators and Switches',
      explanation: `Sometimes decisions are complex. You don't just want to know if someone is 18. You want to know if they are 18 **AND** they have a driver's license.

### Logical Operators (Combining Questions)
Logical operators let you combine multiple True/False questions into one big question:
* **\`&&\` (AND):** The whole thing is true ONLY if both the left side and right side are true.
* **\`||\` (OR):** The whole thing is true if at least *one* side is true.
* **\`!\` (NOT):** Reverses the answer. If it was true, it becomes false.

### The \`switch\` Statement
If you are checking one single variable against a huge list of possible exact matches (like checking which letter grade A, B, C, D, or F someone got), writing 5 \`else if\` statements gets messy.
* A \`switch\` statement looks at a variable and immediately jumps to the matching **\`case\`**.
* You must write **\`break;\`** at the end of a case. This tells the computer to stop and exit the switch. If you forget \`break;\`, the computer will "fall through" and run the code for the next cases too!`,
      examples: [
        {
          title: 'Logical AND (&&) / OR (||)',
          description: 'Combining conditions to make smart choices.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    bool hasLicense = true;\n    bool hasMoney = false;\n    \n    // Both must be true\n    if (age >= 18 && hasLicense == true) {\n        cout << "You are allowed to rent a car." << endl;\n    }\n    \n    // Only one needs to be true\n    if (hasMoney == true || hasLicense == true) {\n        cout << "You can get to work today." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'The switch Statement',
          description: 'A clean way to handle many specific options.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    char direction = 'n';\n    \n    switch (direction) {\n        case 'n': \n            cout << "Going North." << endl; \n            break; // EXTREMELY IMPORTANT\n        case 's': \n            cout << "Going South." << endl; \n            break;\n        default:  // If nothing else matches\n            cout << "Invalid direction." << endl;\n    }\n    return 0;\n}`
        },
        {
          title: 'Intentional Fall-Through (Advanced)',
          description: 'Sometimes we purposefully forget the break statement to group cases together.',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'a';\n    \n    switch(grade) {\n        case 'A': // Notice no break here\n        case 'a': // This acts as an OR statement (A or a)\n            cout << "Excellent work!" << endl;\n            break;\n        case 'F':\n        case 'f':\n            cout << "You failed." << endl;\n            break;\n        default:\n            cout << "Average grade." << endl;\n    }\n    return 0;\n}`
        }
      ],
      questions: [
        {
          question: 'What is "short-circuit evaluation"?',
          answer: 'When using `&&`, if the first condition is false, C++ knows the whole thing must be false, so it completely skips checking the second condition to save time. The same happens with `||` if the first condition is true.'
        },
        {
          question: 'Can you use a `switch` statement to check if a string is equal to "Hello"?',
          answer: 'No. In C++, `switch` statements only work with integral types (whole numbers, characters like \'A\', and enums). They cannot evaluate text strings or decimals (floats).'
        },
        {
          question: 'What is the purpose of the `default` case in a switch statement?',
          answer: 'It acts as the catch-all "Plan B". If the variable doesn\'t match any of the provided `case` values, the code inside the `default` block executes.'
        }
      ]
    }
  ]
};

export default chapter3;
