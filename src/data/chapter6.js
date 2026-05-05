const chapter6 = {
  id: 6,
  title: 'Object-Oriented Programming',
  description: 'Master OOP concepts: classes, objects, constructors, inheritance, polymorphism, and encapsulation.',
  icon: 'Boxes',
  color: 'from-indigo-500 to-violet-600',
  topics: [
    {
      id: '6.1',
      title: 'Classes and Objects',
      explanation: `A class is a blueprint that defines properties (data members) and behaviors (member functions). An object is an instance of a class. Members can be public (accessible everywhere), private (accessible only within the class), or protected (accessible in derived classes). Use the dot operator to access object members.`,
      examples: [
        {
          title: 'Basic Class',
          code: `#include <iostream>
using namespace std;

class Student {
public:
    string name;
    int age;
    
    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Student s1;
    s1.name = "Alice";
    s1.age = 20;
    s1.display();
    
    Student s2;
    s2.name = "Bob";
    s2.age = 22;
    s2.display();
    return 0;
}`,
          output: `Name: Alice, Age: 20
Name: Bob, Age: 22`
        },
        {
          title: 'Private Members with Getters/Setters',
          code: `#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;
    
public:
    void setBalance(double b) {
        if (b >= 0) balance = b;
        else cout << "Invalid amount!" << endl;
    }
    double getBalance() { return balance; }
    
    void deposit(double amt) {
        if (amt > 0) balance += amt;
    }
};

int main() {
    BankAccount acc;
    acc.setBalance(1000);
    acc.deposit(500);
    cout << "Balance: $" << acc.getBalance() << endl;
    return 0;
}`,
          output: 'Balance: $1500'
        },
        {
          title: 'Class with Method Definition Outside',
          code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    double length, width;
public:
    void setDimensions(double l, double w);
    double area();
    double perimeter();
};

void Rectangle::setDimensions(double l, double w) {
    length = l; width = w;
}
double Rectangle::area() { return length * width; }
double Rectangle::perimeter() { return 2 * (length + width); }

int main() {
    Rectangle r;
    r.setDimensions(5.0, 3.0);
    cout << "Area: " << r.area() << endl;
    cout << "Perimeter: " << r.perimeter() << endl;
    return 0;
}`,
          output: `Area: 15
Perimeter: 16`
        }
      ]
    },
    {
      id: '6.2',
      title: 'Constructors and Destructors',
      explanation: `A constructor initializes an object when it's created. It has the same name as the class and no return type. The default constructor takes no parameters. Parameterized constructors accept arguments. A destructor (~ClassName) is called when an object is destroyed, used to free resources. Copy constructors create objects from existing ones.`,
      examples: [
        {
          title: 'Constructor Types',
          code: `#include <iostream>
using namespace std;

class Point {
    int x, y;
public:
    Point() : x(0), y(0) {          // Default constructor
        cout << "Default: (" << x << "," << y << ")" << endl;
    }
    Point(int a, int b) : x(a), y(b) {  // Parameterized
        cout << "Param: (" << x << "," << y << ")" << endl;
    }
    Point(const Point &p) : x(p.x), y(p.y) {  // Copy
        cout << "Copy: (" << x << "," << y << ")" << endl;
    }
};

int main() {
    Point p1;          // Default
    Point p2(3, 4);    // Parameterized
    Point p3 = p2;     // Copy
    return 0;
}`,
          output: `Default: (0,0)
Param: (3,4)
Copy: (3,4)`
        },
        {
          title: 'Destructor',
          code: `#include <iostream>
using namespace std;

class Logger {
    string name;
public:
    Logger(string n) : name(n) {
        cout << name << " created" << endl;
    }
    ~Logger() {
        cout << name << " destroyed" << endl;
    }
};

int main() {
    Logger a("Object-A");
    Logger b("Object-B");
    cout << "--- Inside main ---" << endl;
    return 0;
}`,
          output: `Object-A created
Object-B created
--- Inside main ---
Object-B destroyed
Object-A destroyed`
        },
        {
          title: 'Constructor with Initializer List',
          code: `#include <iostream>
using namespace std;

class Circle {
    const double PI;
    double radius;
public:
    Circle(double r) : PI(3.14159), radius(r) {}
    
    double area() const { return PI * radius * radius; }
    double circumference() const { return 2 * PI * radius; }
};

int main() {
    Circle c(7.0);
    cout << "Area: " << c.area() << endl;
    cout << "Circumference: " << c.circumference() << endl;
    return 0;
}`,
          output: `Area: 153.938
Circumference: 43.9823`
        }
      ]
    },
    {
      id: '6.3',
      title: 'Inheritance',
      explanation: `Inheritance allows a derived class to inherit members from a base class, promoting code reuse. Public inheritance keeps the access levels. Protected inheritance makes public members protected. Private inheritance makes everything private. C++ supports single, multilevel, multiple, and hierarchical inheritance.`,
      examples: [
        {
          title: 'Single Inheritance',
          code: `#include <iostream>
using namespace std;

class Animal {
public:
    string name;
    void eat() { cout << name << " is eating" << endl; }
};

class Dog : public Animal {
public:
    void bark() { cout << name << " says: Woof!" << endl; }
};

int main() {
    Dog d;
    d.name = "Buddy";
    d.eat();   // Inherited
    d.bark();  // Own method
    return 0;
}`,
          output: `Buddy is eating
Buddy says: Woof!`
        },
        {
          title: 'Multilevel Inheritance',
          code: `#include <iostream>
using namespace std;

class Vehicle {
public:
    void start() { cout << "Vehicle started" << endl; }
};

class Car : public Vehicle {
public:
    void drive() { cout << "Car driving" << endl; }
};

class SportsCar : public Car {
public:
    void turbo() { cout << "Turbo activated!" << endl; }
};

int main() {
    SportsCar sc;
    sc.start();  // From Vehicle
    sc.drive();  // From Car
    sc.turbo();  // Own
    return 0;
}`,
          output: `Vehicle started
Car driving
Turbo activated!`
        },
        {
          title: 'Constructor in Inheritance',
          code: `#include <iostream>
using namespace std;

class Shape {
protected:
    string color;
public:
    Shape(string c) : color(c) {
        cout << "Shape created (" << color << ")" << endl;
    }
};

class Square : public Shape {
    int side;
public:
    Square(string c, int s) : Shape(c), side(s) {
        cout << "Square: side=" << side << endl;
    }
    int area() { return side * side; }
};

int main() {
    Square sq("Red", 5);
    cout << "Area: " << sq.area() << endl;
    return 0;
}`,
          output: `Shape created (Red)
Square: side=5
Area: 25`
        }
      ]
    },
    {
      id: '6.4',
      title: 'Polymorphism',
      explanation: `Polymorphism means "many forms." Compile-time polymorphism uses function/operator overloading. Runtime polymorphism uses virtual functions and base class pointers. When a base class pointer points to a derived object, virtual functions ensure the derived class version is called. Use 'override' keyword for clarity.`,
      examples: [
        {
          title: 'Virtual Functions',
          code: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() { return 0; }
    virtual void display() {
        cout << "Shape, Area: " << area() << endl;
    }
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override { return 3.14159 * radius * radius; }
};

class Rect : public Shape {
    double l, w;
public:
    Rect(double l, double w) : l(l), w(w) {}
    double area() override { return l * w; }
};

int main() {
    Shape* shapes[2];
    shapes[0] = new Circle(5);
    shapes[1] = new Rect(4, 6);
    
    for (int i = 0; i < 2; i++) {
        shapes[i]->display();
        delete shapes[i];
    }
    return 0;
}`,
          output: `Shape, Area: 78.5398
Shape, Area: 24`
        },
        {
          title: 'Abstract Class (Pure Virtual)',
          code: `#include <iostream>
using namespace std;

class Printable {
public:
    virtual void print() = 0;  // Pure virtual
    virtual ~Printable() {}
};

class Document : public Printable {
    string title;
public:
    Document(string t) : title(t) {}
    void print() override {
        cout << "Printing document: " << title << endl;
    }
};

class Photo : public Printable {
    string filename;
public:
    Photo(string f) : filename(f) {}
    void print() override {
        cout << "Printing photo: " << filename << endl;
    }
};

int main() {
    Printable* items[2];
    items[0] = new Document("Report.pdf");
    items[1] = new Photo("sunset.jpg");
    
    for (int i = 0; i < 2; i++) {
        items[i]->print();
        delete items[i];
    }
    return 0;
}`,
          output: `Printing document: Report.pdf
Printing photo: sunset.jpg`
        },
        {
          title: 'Operator Overloading',
          code: `#include <iostream>
using namespace std;

class Vector2D {
public:
    double x, y;
    Vector2D(double x = 0, double y = 0) : x(x), y(y) {}
    
    Vector2D operator+(const Vector2D& v) {
        return Vector2D(x + v.x, y + v.y);
    }
    
    friend ostream& operator<<(ostream& os, const Vector2D& v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};

int main() {
    Vector2D a(3, 4), b(1, 2);
    Vector2D c = a + b;
    cout << a << " + " << b << " = " << c << endl;
    return 0;
}`,
          output: '(3, 4) + (1, 2) = (4, 6)'
        }
      ]
    }
  ]
};

export default chapter6;
