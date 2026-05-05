const chapter3 = {
  id: 3,
  title: 'Loops and Decisions',
  description: 'Learn how to give your programs a brain. Master relational operators to make choices, and repetitive loops to automate tasks.',
  topics: [
    {
      id: "if-statement",
      title: "Making Decisions — The if Statement",
      description: "Learn how to make your code choose between different paths based on conditions.",
      explanation: `Until now, our programs have run in a straight line from top to bottom. But real life requires choices. Imagine you are a robot guard at a movie theater. Your instructions are: "If the person has a ticket, let them in. Otherwise, tell them to buy one."

This is exactly how **if** and **else** work. They allow your program to choose between different paths depending on whether something is true or false.

### The \`if\` Statement (The Fork in the Road)
The \`if\` statement is how we tell the computer to make a choice.
* If the condition inside the parentheses is **True**, the computer enters the curly braces \`{}\` and runs the code inside.
* If it is **False**, it ignores the braces entirely and skips to the next section.

### The \`if...else\` Statement (Plan A and Plan B)
Sometimes you want to say: *"If it's raining, take an umbrella. Otherwise, wear sunglasses."*
* The \`if\` block is Plan A.
* The \`else\` block is Plan B. Only one of them will ever execute — never both.

An \`if\` statement can exist perfectly fine on its own. The \`else\` is only needed if you want a specific backup plan when the condition is false.`,
      examples: [
        {
          title: 'The Basic if Statement',
          code: `#include <iostream>
using namespace std;

int main() {
    int speed = 80;
    
    // The question: Is speed greater than 65?
    if (speed > 65) {
        // This only runs if the answer is True
        cout << "You are speeding!" << endl;
    }
    
    cout << "Drive safely." << endl;
    return 0;
}`,
          explanation: "A simple check. If the condition is false, the if-block is skipped entirely."
        },
        {
          title: 'The if...else Statement',
          code: `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    
    if (age >= 18) {
        cout << "You are allowed to vote." << endl;
    } else {
        cout << "You are too young to vote." << endl;
    }
    return 0;
}`,
          explanation: "Providing a guaranteed Plan A or Plan B outcome."
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
        }
      ]
    },
    {
      id: "relational-operators",
      title: "Comparing Things — Relational Operators",
      description: "Understand the symbols used to compare values: equal to, greater than, and more.",
      explanation: `To make decisions, we need to compare things. Is 10 bigger than 5? Does 'A' equal 'B'? In C++, we use special symbols called **Relational Operators** to ask these questions. The answer is always either **true** or **false**.

Here are all the relational operators:

* \`==\` (Equal to) — Note the **double** equals! A single \`=\` assigns a value; \`==\` compares values.
* \`!=\` (Not equal to)
* \`>\` (Greater than)
* \`<\` (Less than)
* \`>=\` (Greater than or equal to)
* \`<=\` (Less than or equal to)

These operators return a value of type \`bool\` — either \`true\` (1) or \`false\` (0). This boolean result is what the \`if\` statement uses to decide which path to take.

One important caution: when comparing floating-point numbers (\`float\` or \`double\`), avoid using \`==\` directly. Due to how decimals are stored in binary, \`0.1 + 0.2\` might not equal exactly \`0.3\`. Instead, check if the difference between the two numbers is very small (less than a tiny epsilon value like 0.0001).`,
      examples: [
        {
          title: 'All Relational Operators',
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 5;
    
    cout << (a == b) << endl;  // 0 (false)
    cout << (a != b) << endl;  // 1 (true)
    cout << (a > b) << endl;   // 1 (true)
    cout << (a < b) << endl;   // 0 (false)
    cout << (a >= 10) << endl; // 1 (true)
    cout << (a <= 9) << endl;  // 0 (false)
    
    return 0;
}`,
          explanation: "Each comparison produces a true (1) or false (0) result."
        }
      ],
      questions: [
        {
          question: "What is the difference between '=' and '=='?",
          answer: "'=' is used to assign a value to a variable; '==' is used to compare two values and check if they are equal."
        },
        {
          question: "What type of value do relational operators return?",
          answer: "A bool value — either true (1) or false (0)."
        }
      ]
    },
    {
      id: "else-if-switch",
      title: "Multiple Conditions — else if and switch",
      description: "Handle scenarios with many possible outcomes using ladders and switches.",
      explanation: `What if there are more than two choices? Like a traffic light: Green, Yellow, Red. You need more than just Plan A and Plan B — you need Plans C, D, and E.

### The \`else if\` Ladder
You can chain multiple conditions together. The computer checks them one by one from top to bottom. As soon as it finds a True condition, it runs that block and **skips the entire rest of the ladder**.

### The \`switch\` Statement
If you are checking one single variable against a list of exact matches (like "did the user pick option 1, 2, 3, or 4?"), the \`switch\` statement is a cleaner tool than a long if-else chain.

* A \`switch\` looks at a variable and jumps directly to the matching **\`case\`**.
* You must write **\`break;\`** at the end of each case. This tells the computer to stop and exit the switch. If you forget \`break;\`, the computer will "fall through" and run the code for the next cases too.
* The **\`default\`** case acts as a catch-all "Plan B" if nothing else matches.

One important limitation: \`switch\` statements only work with **integral types** (whole numbers, characters, and enums). They cannot compare strings or floating-point numbers. For those, use if-else.

Compilers can often optimize \`switch\` statements using a **jump table**, making them faster than equivalent if-else ladders for many cases.`,
      examples: [
        {
          title: 'The else if Ladder',
          code: `#include <iostream>
using namespace std;

int main() {
    int score = 85;
    
    // The computer checks from top to bottom.
    // Once it finds a True statement, it skips the rest completely.
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    return 0;
}`,
          explanation: "Checking multiple conditions in a row until one is true."
        },
        {
          title: 'The switch Statement',
          code: `#include <iostream>
using namespace std;

int main() {
    char direction = 'n';
    
    switch (direction) {
        case 'n': 
            cout << "Going North." << endl; 
            break; // EXTREMELY IMPORTANT
        case 's': 
            cout << "Going South." << endl; 
            break;
        default:  // If nothing else matches
            cout << "Invalid direction." << endl;
    }
    return 0;
}`,
          explanation: "A clean way to handle many specific options."
        }
      ],
      questions: [
        {
          question: 'When multiple conditions are linked with `else if`, can more than one block execute?',
          answer: 'No. Only one block will ever execute. As soon as the first true condition is found, its block runs, and the program skips past the entire rest of the ladder.'
        },
        {
          question: 'Can you use a `switch` statement to check if a string is equal to "Hello"?',
          answer: 'No. In C++, `switch` statements only work with integral types (whole numbers, characters, and enums). They cannot evaluate strings or decimals.'
        },
        {
          question: 'What is the purpose of the `default` case in a switch statement?',
          answer: 'It acts as the catch-all "Plan B". If the variable doesn\'t match any of the provided case values, the code inside the default block executes.'
        }
      ]
    },
    {
      id: "logical-operators",
      title: "Combining Conditions — Logical Operators",
      description: "Use AND, OR, and NOT to create complex decisions.",
      explanation: `Sometimes decisions are complex. You don't just want to know if someone is 18. You want to know if they are 18 **AND** they have a driver's license.

Logical operators let you combine multiple True/False questions into one big question:

* **\`&&\` (AND):** The whole thing is true ONLY if **both** the left side and right side are true. Like a door with two locks — both must be unlocked to open it.

* **\`||\` (OR):** The whole thing is true if **at least one** side is true. Like a door with two keys — either key can open it.

* **\`!\` (NOT):** Reverses the answer. If it was true, it becomes false. If it was false, it becomes true.

### Short-Circuit Evaluation
C++ is clever about efficiency. When using \`&&\`, if the first condition is already false, C++ knows the whole thing must be false, so it **completely skips checking the second condition**. The same happens with \`||\` if the first condition is already true.

This is not just a performance trick — it can prevent crashes. For example:
\`if (ptr != nullptr && ptr->value > 10)\`
If \`ptr\` is null, the second check is never reached, preventing a crash.`,
      examples: [
        {
          title: 'Logical AND (&&) / OR (||)',
          code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    bool hasLicense = true;
    bool hasMoney = false;
    
    // Both must be true
    if (age >= 18 && hasLicense == true) {
        cout << "You are allowed to rent a car." << endl;
    }
    
    // Only one needs to be true
    if (hasMoney == true || hasLicense == true) {
        cout << "You can get to work today." << endl;
    }
    return 0;
}`,
          explanation: "Combining conditions to make smart choices."
        }
      ],
      questions: [
        {
          question: 'What is "short-circuit evaluation"?',
          answer: 'When using `&&`, if the first condition is false, C++ knows the whole thing must be false, so it completely skips checking the second condition to save time. The same happens with `||` if the first condition is true.'
        },
        {
          question: 'What does the `!` (NOT) operator do?',
          answer: 'It reverses a boolean value. `!true` becomes `false`, and `!false` becomes `true`.'
        }
      ]
    },
    {
      id: "loops-intro",
      title: "Introduction to Loops — Repeating Things",
      description: "Let the computer handle boring repetition using the power of loops.",
      explanation: `If you had to write "I will not talk in class" 100 times, your hand would hurt. A computer can do it in a microsecond. **Loops** allow you to run the same block of code over and over again until a specific goal is reached.

All loops have three main ingredients:
1. **Initialization** — Where do we start? (e.g., counter = 1)
2. **Condition** — Should we keep going? (e.g., counter <= 100)
3. **Update** — How do we move forward? (e.g., counter++)

If you forget the update step, the condition will never become false, and your loop will run **forever**. This is called an **infinite loop**, and it will freeze your program until you force-close it.

C++ offers three types of loops, each suited for different situations:
* **\`while\`** — Best when you don't know how many times you'll loop.
* **\`for\`** — Best when you know exactly how many times to loop.
* **\`do-while\`** — Like while, but guarantees at least one execution.

At a deeper level, iteration is a fundamental concept in algorithm design. Loops can be controlled by counters (deterministic — you know how many times) or by events (non-deterministic — you loop until something happens, like the user typing "quit"). Efficient looping is key to performance, and techniques like "loop unrolling" are used by compilers to speed up execution.`,
      examples: [
        {
          title: 'The Idea of a Loop',
          code: `// Instead of this:
cout << "Hi" << endl;
cout << "Hi" << endl;
cout << "Hi" << endl;

// We write this:
for (int i = 0; i < 3; i++) {
    cout << "Hi" << endl;
}`,
          explanation: "Loops turn multiple lines of repetitive code into one single instruction that repeats."
        }
      ],
      questions: [
        {
          question: "What is the main purpose of a loop?",
          answer: "To repeat a block of code multiple times without writing it out each time."
        },
        {
          question: "What is an 'infinite loop' and how does it happen?",
          answer: "An infinite loop is a loop that never stops because its condition never becomes false. It usually happens when the programmer forgets the update step (like forgetting to write i++)."
        }
      ]
    },
    {
      id: "while-loop",
      title: "The while Loop",
      description: "Master the most flexible loop that repeats as long as a condition is true.",
      explanation: `The **while** loop is like a "Repeat while..." instruction. "While you are hungry, keep eating." It checks the condition *first*, at the top. If the condition is false immediately, the loop body never runs even once. This is why it is called a **pre-test loop**.

The syntax is simple:
\`while (condition) { code }\`

The while loop is ideal when the number of iterations is not known beforehand. For example:
* Reading lines from a file until you reach the end
* Waiting for a user to type the correct password
* Running a game loop until the player quits

**The most critical rule:** You must make sure the condition will eventually become false. If you have a counter, you must remember to increment it inside the loop. Otherwise, the condition is always true and you get an infinite loop.`,
      examples: [
        {
          title: 'Counting to 5',
          code: `#include <iostream>
using namespace std;

int main() {
    int count = 1;
    
    while (count <= 5) {
        cout << count << " ";
        count = count + 1; // CRITICAL: Move to the next number
    }
    
    cout << endl << "Done!" << endl;
    return 0;
}`,
          explanation: "The loop checks if count is 5 or less. It prints the number and adds 1, repeating until count becomes 6."
        }
      ],
      questions: [
        {
          question: "When does a while loop check its condition — at the top or bottom?",
          answer: "At the top, before running any code inside."
        },
        {
          question: "What happens if the condition of a while loop is false before the first run?",
          answer: "The code inside the loop is skipped entirely and never runs."
        }
      ]
    },
    {
      id: "for-loop",
      title: "The for Loop — Counting Made Easy",
      description: "The most common loop used for counting and iterating over ranges.",
      explanation: `The **for** loop is the favorite of many programmers. It is perfect for when you know exactly how many times you want to repeat (like "count from 1 to 10"). It packs the start, the stop rule, and the step into one neat line.

The syntax: \`for (init; condition; update) { code }\`

* **Init:** Happens once at the very start (e.g., \`int i = 0\`).
* **Condition:** Checked before every iteration. If false, the loop stops.
* **Update:** Happens after every iteration (e.g., \`i++\`).

A \`for\` loop is functionally equivalent to a \`while\` loop, but by putting initialization and update logic in one line, it is much harder to accidentally create an infinite loop. The counter variable \`i\` is also scoped to the loop — it does not exist outside the loop's curly braces.

In modern C++ (C++11 and later), there is also a "range-based for loop" for iterating over collections like arrays and vectors:
\`for (int x : myArray) { cout << x; }\`
This reads as "for each x in myArray" and is both cleaner and safer than manually managing index variables.`,
      examples: [
        {
          title: 'Counting with For',
          code: `#include <iostream>
using namespace std;

int main() {
    // (Start at 1; Keep going while <= 5; Add 1 each time)
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    
    cout << endl << "Finished!" << endl;
    return 0;
}`,
          explanation: "This does the exact same thing as the while loop example, but it's much shorter and harder to mess up."
        }
      ],
      questions: [
        {
          question: "How many parts are inside a for loop's parentheses?",
          answer: "Three: initialization, condition, and update — separated by semicolons."
        },
        {
          question: "When should you choose a `for` loop over a `while` loop?",
          answer: "Use a for loop when you know exactly how many iterations you need (like counting from 1 to 100). Use a while loop when the number of iterations is unknown and depends on a dynamic event."
        }
      ]
    },
    {
      id: "do-while-loop",
      title: "The do...while Loop",
      description: "A loop that always runs at least once before checking the condition.",
      explanation: `The \`do...while\` loop is just like a \`while\` loop, but it asks the question at the **bottom** instead of the top. Because it checks at the bottom, the code inside is guaranteed to run **at least one time**, no matter what.

The syntax:
\`\`\`
do {
    code
} while (condition);
\`\`\`

Notice the semicolon after the \`while(condition)\` — this is required because the \`while\` here acts as the closing statement of the \`do\` block.

This loop is perfect for scenarios where you always need to do something at least once:
* **Menu systems:** You want to show a menu first, then ask if the user wants to continue.
* **Input validation:** You want to ask the user for a number first, then check if it's valid. If not, ask again.
* **Game rounds:** You always play at least one round before asking "Play again?"

The do-while loop is less common than for or while, but when you need "do first, ask later" behavior, it is the cleanest solution.`,
      examples: [
        {
          title: 'A Menu System',
          code: `#include <iostream>
using namespace std;

int main() {
    int choice;
    do {
        cout << "\\n1. Play Game\\n2. Exit\\nEnter choice: ";
        cin >> choice;
        
        if (choice != 1 && choice != 2) {
            cout << "Invalid choice." << endl;
        }
    } while (choice != 2); // Checks condition at the bottom
    
    cout << "Goodbye!" << endl;
    return 0;
}`,
          explanation: "Perfect for menus — the menu is always shown at least once before checking if the user wants to exit."
        }
      ],
      questions: [
        {
          question: "How is a do-while loop different from a while loop?",
          answer: "A do-while loop checks its condition at the bottom, guaranteeing the code runs at least once. A while loop checks at the top and might never run."
        },
        {
          question: "Why does a `do...while` loop end with a semicolon while a standard `while` loop does not?",
          answer: "Because the `while(condition)` acts as the closing statement for the `do` block, making it a complete syntactic instruction that must end with a semicolon."
        }
      ]
    },
    {
      id: "break-continue",
      title: "break and continue — Loop Control",
      description: "Learn how to exit a loop early or skip specific iterations.",
      explanation: `Sometimes you need more control over your loops. Maybe you want to stop early because you found what you were looking for, or skip over a specific case without stopping the whole loop.

### \`break\` — Emergency Exit
The \`break\` statement immediately terminates the loop and jumps to the code after it. It is like pulling the emergency brake.

Common use: You are searching through a list for a specific item. Once you find it, there is no reason to keep searching — \`break\` out immediately.

### \`continue\` — Skip This One
The \`continue\` statement skips the rest of the current iteration and jumps back to the top of the loop for the next iteration. It is like saying "never mind this one, move on."

Common use: You are processing a list of numbers but want to skip negative ones. When you encounter a negative number, use \`continue\` to skip it and move to the next number.

Both \`break\` and \`continue\` work with all three loop types (while, for, and do-while). They are powerful tools, but overusing them can make code harder to follow. A well-designed loop condition is usually cleaner than littering the loop body with breaks and continues.`,
      examples: [
        {
          title: 'break and continue in Action',
          code: `#include <iostream>
using namespace std;

int main() {
    // break: Stop at the first even number
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            cout << "Found even: " << i << endl;
            break; // Exit the loop immediately
        }
    }
    
    // continue: Print only odd numbers
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue; // Skip even numbers
        }
        cout << i << " ";
    }
    
    return 0;
}`,
          explanation: "'break' stops the loop entirely. 'continue' skips the rest of the current round and moves to the next."
        }
      ],
      questions: [
        {
          question: "What does 'break' do inside a loop?",
          answer: "It immediately terminates the loop and jumps to the first line of code after the loop."
        },
        {
          question: "What does 'continue' do inside a loop?",
          answer: "It skips the rest of the current iteration and jumps back to the top of the loop to start the next iteration."
        }
      ]
    }
  ]
};

export default chapter3;
