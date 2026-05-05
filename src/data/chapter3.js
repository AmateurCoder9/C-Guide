const chapter3 = {
  id: 3,
  title: 'Loops and Decisions',
  description: 'Learn how to give your programs a brain. Master relational operators to make choices, and repetitive loops to automate tasks.',
  topics: [
    {
      id: "decision-making-intro",
      title: "Making Decisions — if and else",
      description: "Learn how to make your code branch in different directions based on conditions.",
      explanation: {
        beginner: `
          Imagine you are a robot guard at a movie theater. Your instructions are: "If the person has a ticket, let them in. Else, tell them to buy one."
          
          This is exactly how **if** and **else** work. They allow your program to choose between different paths depending on whether something is true or false.
        `,
        intermediate: `
          The **if** statement evaluates a boolean expression. If it is true, the block of code inside the curly braces \`{ }\` is executed. 
          The **else** keyword provides an alternative block that runs only if the **if** condition is false.
        `,
        advanced: `
          Branching in C++ is implemented using conditional jump instructions at the machine code level. The \`if-else\` construct is the fundamental control flow mechanism for selective execution. Performance can sometimes be affected by "branch misprediction" in modern CPUs, leading to optimizations like ternary operators or data-driven designs in tight loops.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "A Simple Decision",
          code: `
#include <iostream>
using namespace std;

int main() {
    int money = 10;
    
    if (money >= 5) {
        cout << "You can buy a snack!";
    } else {
        cout << "Not enough money.";
    }
    
    return 0;
}
          `,
          explanation: "The program checks if 'money' is 5 or more. If yes, it prints the first message; otherwise, it prints the second."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "Which keyword is used for the 'Plan B' path in a decision?",
          answer: "else"
        },
        {
          difficulty: "medium",
          question: "What happens if an 'if' condition is false and there is no 'else' block?",
          answer: "The program simply skips over the 'if' block and continues with the code below it."
        }
      ]
    },
    {
      id: "relational-operators",
      title: "Comparing Things — Relational Operators",
      description: "Understand the symbols used to compare values: equal to, greater than, and more.",
      explanation: {
        beginner: `
          To make decisions, we need to compare things. Is 10 bigger than 5? Does 'A' equal 'B'? 
          In C++, we use special symbols called **Relational Operators** to ask these questions. 
          The answer is always either **True** or **False**.
        `,
        intermediate: `
          Common operators include:
          - \`==\` (Equal to): Note the double equals!
          - \`!=\` (Not equal to)
          - \`>\` (Greater than)
          - \`<\` (Less than)
          - \`>=\` (Greater than or equal)
          - \`<=\` (Less than or equal)
        `,
        advanced: `
          Relational operators return a value of type \`bool\`. When comparing floating-point numbers (\`float\` or \`double\`), avoid using \`==\` due to precision issues; instead, check if the difference between numbers is less than a small epsilon value.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Equality Test",
          code: `
int age = 18;
bool isAdult = (age >= 18); // true
bool isChild = (age < 18);  // false

if (age == 18) {
    // Note: use == to compare, not = 
}
          `,
          explanation: "The symbols help us turn comparisons into True/False values that the 'if' statement can use."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What symbol means 'Equal to' in C++?",
          answer: "=="
        },
        {
          difficulty: "easy",
          question: "What symbol means 'Not equal to'?",
          answer: "!="
        },
        {
          difficulty: "medium",
          question: "What is the difference between '=' and '=='?",
          answer: "'=' is used to assign a value to a variable; '==' is used to compare two values."
        }
      ]
    },
    {
      id: "multiple-conditions",
      title: "Multiple Conditions — else if and switch",
      description: "Handle scenarios with many possible outcomes using ladders and switches.",
      explanation: {
        beginner: `
          What if there are more than two choices? Like a traffic light: Green, Yellow, Red. 
          You can use **else if** to add more branches to your decision tree.
          If you have *many* exact options (like choosing a level 1, 2, 3, or 4), a **switch** is a cleaner way to write it.
        `,
        intermediate: `
          The **else if** ladder checks conditions one by one until it finds a true one. 
          The **switch** statement evaluates an expression and jumps directly to a matching **case**. Remember to use \`break\` to stop the execution from 'falling through' to the next case.
        `,
        advanced: `
          A \`switch\` statement is often more efficient than an \`else if\` ladder because compilers can implement it using a **jump table**. However, \`switch\` only works with integral types (int, char, enum), whereas \`if-else if\` can handle any boolean expression.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Traffic Light",
          code: `
string color = "yellow";

if (color == "red") {
    cout << "Stop";
} else if (color == "yellow") {
    cout << "Slow down";
} else {
    cout << "Go";
}
          `,
          explanation: "The program checks 'red', then 'yellow', and finally defaults to the last option."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "In a switch statement, which keyword handles cases that don't match any others?",
          answer: "default"
        },
        {
          difficulty: "medium",
          question: "Why is the 'break' keyword important in a switch statement?",
          answer: "It stops the program from running the code in the next case automatically (falling through)."
        }
      ]
    },
    {
      id: "loops-intro",
      title: "Repeating Things — Introduction to Loops",
      description: "Let the computer handle boring repetition using the power of loops.",
      explanation: {
        beginner: `
          If you had to write "I will not talk in class" 100 times, your hand would hurt. 
          A computer can do it in a microsecond. 
          **Loops** allow you to run the same block of code over and over again until a specific goal is reached.
        `,
        intermediate: `
          All loops have three main parts: 
          1. **Initialization** (starting point)
          2. **Condition** (keep going?)
          3. **Update** (move toward the end)
          C++ offers three types of loops: \`while\`, \`for\`, and \`do-while\`.
        `,
        advanced: `
          Iteration is a fundamental concept in algorithm design. Loops can be controlled by counters (deterministic) or by events (non-deterministic). Efficient looping is key to performance, and techniques like "loop unrolling" are used by compilers to speed up execution.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "The Idea of a Loop",
          code: `
// Instead of this:
cout << "Hi";
cout << "Hi";
cout << "Hi";

// We do this:
// (Loop 3 times)
//    cout << "Hi";
          `,
          explanation: "Loops turn multiple lines of repetitive code into one single instruction that repeats."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "What is the main purpose of a loop?",
          answer: "To repeat a block of code multiple times."
        },
        {
          difficulty: "medium",
          question: "What is an 'infinite loop'?",
          answer: "A loop that never stops because its 'keep going' condition is always true."
        }
      ]
    },
    {
      id: "while-loop",
      title: "The while Loop",
      description: "Master the most flexible loop that repeats as long as a condition is true.",
      explanation: {
        beginner: `
          The **while** loop is like a "Repeat while..." instruction. 
          "While you are hungry, keep eating." 
          It checks the condition *first*. If you aren't hungry, you never start eating!
        `,
        intermediate: `
          Syntax: \`while (condition) { code }\`. 
          If the condition is false at the very beginning, the loop body is never executed. This is known as a **pre-test loop**.
        `,
        advanced: `
          The \`while\` loop is ideal when the number of iterations is not known beforehand, such as reading lines from a file until EOF (End Of File) or waiting for a specific user flag. It is the most primitive form of iteration in C++.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Counting to 5",
          code: `
#include <iostream>
using namespace std;

int main() {
    int count = 1;
    
    while (count <= 5) {
        cout << count << " ";
        count = count + 1; // Move to the next number
    }
    
    return 0;
}
          `,
          explanation: "The loop checks if count is 5 or less. It prints the number and adds 1, repeating until count becomes 6."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "When does a while loop check its condition (top or bottom)?",
          answer: "At the top, before running any code inside."
        },
        {
          difficulty: "hard",
          question: "What happens if the condition of a while loop is false before the first run?",
          answer: "The code inside the loop is skipped entirely and never runs."
        }
      ]
    },
    {
      id: "for-loop",
      title: "The for Loop — Counting Made Easy",
      description: "The most common loop used for counting and iterating over ranges.",
      explanation: {
        beginner: `
          The **for** loop is the favorite of many programmers. 
          It's perfect for when you know exactly how many times you want to repeat (like "count from 1 to 10"). 
          It packs the start, the stop rule, and the step into one neat line.
        `,
        intermediate: `
          Syntax: \`for (init; condition; update) { code }\`. 
          - **Init**: Happens once at the start.
          - **Condition**: Checked before every run.
          - **Update**: Happens after every run.
        `,
        advanced: `
          The \`for\` loop is functionally equivalent to a \`while\` loop but localized initialization and update logic improve readability. In modern C++ (C++11 and later), we also have the "Range-based for loop" for iterating over collections like arrays and vectors.
        `
      },
      examples: [
        {
          level: "beginner",
          title: "Counting with For",
          code: `
#include <iostream>
using namespace std;

int main() {
    // (Start at 1; Stop at 5; Add 1 each time)
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    return 0;
}
          `,
          explanation: "This does the exact same thing as our while loop example, but it's much shorter and harder to mess up."
        }
      ],
      questions: [
        {
          difficulty: "easy",
          question: "How many parts are inside a for loop's parentheses?",
          answer: "Three (initialization, condition, and update)."
        },
        {
          difficulty: "medium",
          question: "In a for loop, what does 'i++' usually do?",
          answer: "It increments the counter variable 'i' by one after each iteration."
        }
      ]
    },
    {
      id: "if-statement-advanced",
      title: 'Decisions: The if Statement (Advanced)',
      description: "Technical overview of branching, if-else, and conditional logic.",
      explanation: {
        beginner: "This section explores how programs branch using 'if' and 'else' to make intelligent choices.",
        intermediate: "Mastering the syntax of nested 'if' statements and the 'else if' ladder for complex logic.",
        advanced: `Until now, our programs have run in a straight line from top to bottom. But real life requires choices. A program needs to act like a brain, taking different paths based on the situation.

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
* The \`else\` block is Plan B. Only one of them will ever execute.`
      },
      examples: [
        {
          level: "advanced",
          title: 'The else if Ladder',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        cout << "Grade: A" << endl;\n    } else if (score >= 80) {\n        cout << "Grade: B" << endl;\n    } else if (score >= 70) {\n        cout << "Grade: C" << endl;\n    } else {\n        cout << "Grade: F" << endl;\n    }\n    return 0;\n}`,
          explanation: "Using an else-if ladder to check multiple conditions sequentially."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What is the danger of using a single equal sign `=` inside an `if` statement? (e.g. `if(age = 18)`)',
          answer: 'A single `=` assigns the value 18 to the variable `age`, instead of checking if it equals 18. This evaluates to true, causing a silent bug that forces the `if` block to always run.'
        }
      ]
    },
    {
      id: "looping-advanced",
      title: 'Looping: Automating the Boring Stuff (Advanced)',
      description: "Deep dive into while, for, and do-while loops with practical scenarios.",
      explanation: {
        beginner: "Computers never get tired. This section shows how to use loops to repeat tasks millions of times instantly.",
        intermediate: "Understanding the difference between entry-controlled (while) and exit-controlled (do-while) loops.",
        advanced: `Computers are incredibly fast and never get bored. If you want to print "Hello" a thousand times, you shouldn't write \`cout\` a thousand times. You use a **loop**.

### The \`while\` Loop (Loop until told to stop)
A \`while\` loop is like saying: *"As long as this condition is true, keep doing this over and over."*
* It checks the condition at the **top**.
* If it's false immediately, the loop never runs even once.

### The \`for\` Loop (Loop a specific number of times)
When you know exactly how many times you want to loop (e.g., exactly 10 times), the \`for\` loop is the best tool. It packs three rules into one neat line:
1. **Start:** Create a counter variable (e.g., \`int i = 0\`).
2. **Stop:** The rule to keep going (e.g., \`i < 10\`).
3. **Step:** How to count (e.g., \`i++\` means add 1 each time).

### The \`do...while\` Loop (Shoot first, ask later)
This is just like a \`while\` loop, but it asks the question at the **bottom**. 
* Because it checks at the bottom, the code inside is guaranteed to run **at least one time**, no matter what.`
      },
      examples: [
        {
          level: "advanced",
          title: 'The do...while Menu',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int choice;\n    do {\n        cout << "\\n1. Play Game\\n2. Exit\\nEnter choice: ";\n        cin >> choice;\n    } while (choice != 2); \n    \n    cout << "Goodbye!" << endl;\n    return 0;\n}`,
          explanation: "A do-while loop ensures the menu is displayed at least once before checking the exit condition."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'When should you choose a `for` loop over a `while` loop?',
          answer: 'Use a `for` loop when you know exactly how many iterations you need (like counting from 1 to 100). Use a \`while\` loop when the number of iterations is unknown and depends on a dynamic event.'
        }
      ]
    },
    {
      id: "logical-operators-advanced",
      title: 'Logical Operators and Switches (Advanced)',
      description: "Combining conditions and handling multiple fixed-value cases efficiently.",
      explanation: {
        beginner: "Sometimes one condition isn't enough. Learn how to say 'if this AND that' or 'if this OR that'.",
        intermediate: "Using the switch-case structure to replace long if-else ladders for efficiency.",
        advanced: `Sometimes decisions are complex. You don't just want to know if someone is 18. You want to know if they are 18 **AND** they have a driver's license.

### Logical Operators (Combining Questions)
Logical operators let you combine multiple True/False questions into one big question:
* **\`&&\` (AND):** The whole thing is true ONLY if both the left side and right side are true.
* **\`||\` (OR):** The whole thing is true if at least *one* side is true.
* **\`!\` (NOT):** Reverses the answer. If it was true, it becomes false.

### The \`switch\` Statement
If you are checking one single variable against a huge list of possible exact matches, writing 5 \`else if\` statements gets messy.
* A \`switch\` statement looks at a variable and immediately jumps to the matching **\`case\`**.
* You must write **\`break;\`** at the end of a case. This tells the computer to stop and exit the switch.`
      },
      examples: [
        {
          level: "advanced",
          title: 'Intentional Fall-Through',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'a';\n    \n    switch(grade) {\n        case 'A':\n        case 'a': \n            cout << "Excellent work!" << endl;\n            break;\n        default:\n            cout << "Keep trying." << endl;\n    }\n    return 0;\n}`,
          explanation: "Omitting 'break' to allow multiple cases to share the same code block."
        }
      ],
      questions: [
        {
          difficulty: "hard",
          question: 'What is "short-circuit evaluation"?',
          answer: 'When using `&&`, if the first condition is false, C++ knows the whole thing must be false, so it skips checking the second condition. The same happens with `||` if the first is true.'
        }
      ]
    }
  ]
};

export default chapter3;
