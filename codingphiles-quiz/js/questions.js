export const questionBank = {
  Java: {
    Beginner: [
      {
        question: "What is JVM?",
        options: [
          "Java Virtual Machine",
          "Java Variable Method",
          "Just Virtual Memory",
          "Joint Version Manager"
        ],
        answer: 0,
        explanation: "JVM stands for Java Virtual Machine. It executes Java bytecode and provides platform independence."
      },
      {
        question: "Which keyword is used to create an object in Java?",
        options: ["class", "new", "this", "static"],
        answer: 1,
        explanation: "The `new` keyword is used to create an instance (object) of a class."
      },
      {
        question: "Which of these is NOT a Java primitive data type?",
        options: ["int", "float", "String", "boolean"],
        answer: 2,
        explanation: "String is a non-primitive (reference) type in Java."
      },
      {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "0"],
        answer: 1,
        explanation: "The default value of boolean is false."
      },
      {
        question: "Which keyword is used to define a constant in Java?",
        options: ["const", "final", "static", "constant"],
        answer: 1,
        explanation: "The `final` keyword is used to declare constants in Java."
      },
      {
        question: "What is the size of int in Java?",
        options: ["16-bit", "32-bit", "64-bit", "Depends on platform"],
        answer: 1,
        explanation: "int in Java is always 32-bit regardless of platform."
      },
      {
        question: "Which method is the entry point of a Java program?",
        options: ["main()", "start()", "init()", "run()"],
        answer: 0,
        explanation: "The main() method is the entry point for Java applications."
      },
      {
        question: "What does OOP stand for?",
        options: [
          "Object-Oriented Programming",
          "Object-Oriented Protocol",
          "Objective Oriented Programming",
          "Object-Oriented Process"
        ],
        answer: 0,
        explanation: "OOP stands for Object-Oriented Programming."
      },
      {
        question: "Which of these is used to handle exceptions in Java?",
        options: ["try-catch", "error-handler", "exception", "fault"],
        answer: 0,
        explanation: "try-catch blocks are used for exception handling."
      },
      {
        question: "What is the parent class of all Java classes?",
        options: ["Object", "Class", "Root", "Super"],
        answer: 0,
        explanation: "Object class is the root of Java class hierarchy."
      },
      {
        question: "Which keyword is used to inherit a class?",
        options: ["extends", "implements", "inherits", "super"],
        answer: 0,
        explanation: "The `extends` keyword is used for class inheritance."
      },
      {
        question: "Which collection maintains insertion order?",
        options: ["HashSet", "TreeSet", "LinkedList", "HashMap"],
        answer: 2,
        explanation: "LinkedList maintains insertion order."
      },
      {
        question: "What is autoboxing in Java?",
        options: [
          "Automatic conversion of primitive to wrapper",
          "Automatic packaging of classes",
          "Automatic memory management",
          "Automatic exception handling"
        ],
        answer: 0,
        explanation: "Autoboxing converts primitive to wrapper objects automatically."
      },
      {
        question: "Which interface does ArrayList implement?",
        options: ["Set", "Map", "List", "Queue"],
        answer: 2,
        explanation: "ArrayList implements the List interface."
      },
      {
        question: "What is method overloading?",
        options: [
          "Same method name, different parameters",
          "Same method name in parent and child",
          "Multiple methods with same implementation",
          "Method that loads classes"
        ],
        answer: 0,
        explanation: "Method overloading means same method name with different parameters."
      },
      {
        question: "Which keyword is used to prevent inheritance?",
        options: ["private", "final", "static", "sealed"],
        answer: 1,
        explanation: "The `final` keyword prevents a class from being inherited."
      },
      {
        question: "What is a constructor?",
        options: [
          "A special method to initialize objects",
          "A method that constructs strings",
          "A class that builds other classes",
          "A way to construct arrays"
        ],
        answer: 0,
        explanation: "Constructor initializes objects when they're created."
      },
      {
        question: "What is the default access modifier in Java?",
        options: ["public", "private", "protected", "package-private"],
        answer: 3,
        explanation: "Default (no modifier) means package-private access."
      },
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "enhanced for"],
        answer: 2,
        explanation: "do-while executes once before checking condition."
      },
      {
        question: "What is polymorphism?",
        options: [
          "Many forms of same method",
          "Multiple inheritance",
          "Method hiding",
          "Data abstraction"
        ],
        answer: 0,
        explanation: "Polymorphism means same method behaves differently based on object."
      },
      {
        question: "Which keyword refers to current object?",
        options: ["this", "super", "self", "current"],
        answer: 0,
        explanation: "`this` refers to the current object instance."
      },
      {
        question: "What is an interface?",
        options: [
          "A class with only abstract methods",
          "A type of constructor",
          "A method signature",
          "A GUI component"
        ],
        answer: 0,
        explanation: "Interface contains only abstract method declarations."
      },
      {
        question: "What is a package in Java?",
        options: [
          "A namespace for organizing classes",
          "A compressed file format",
          "A type of variable",
          "A collection framework"
        ],
        answer: 0,
        explanation: "Package is a namespace that groups related classes."
      },
      {
        question: "Which is used to read input from console?",
        options: ["Scanner", "Reader", "Input", "ConsoleReader"],
        answer: 0,
        explanation: "Scanner class is commonly used for console input."
      },
      {
        question: "What is garbage collection?",
        options: [
          "Automatic memory management",
          "Deleting files",
          "Removing unused imports",
          "Clearing console"
        ],
        answer: 0,
        explanation: "Garbage collection automatically frees unused memory."
      },
      {
        question: "Which method compares string contents?",
        options: ["==", "equals()", "compare()", "="],
        answer: 1,
        explanation: "equals() compares string values, == compares references."
      },
      {
        question: "What is a static variable?",
        options: [
          "Variable shared by all instances",
          "Variable that cannot change",
          "Local variable",
          "Thread-safe variable"
        ],
        answer: 0,
        explanation: "Static variables are class-level, shared by all instances."
      },
      {
        question: "What is encapsulation?",
        options: [
          "Binding data with methods",
          "Hiding implementation details",
          "Wrapping code in packages",
          "Compressing data"
        ],
        answer: 0,
        explanation: "Encapsulation binds data and methods together."
      },
      {
        question: "Which keyword creates an abstract class?",
        options: ["abstract", "interface", "virtual", "base"],
        answer: 0,
        explanation: "`abstract` keyword creates abstract classes."
      },
      {
        question: "What is a thread?",
        options: [
          "Lightweight sub-process",
          "Type of exception",
          "Data structure",
          "File handling method"
        ],
        answer: 0,
        explanation: "Thread is a lightweight unit of execution."
      },
      {
        question: "Which class is used for file reading?",
        options: ["FileReader", "FileWriter", "Scanner", "FileInputStream"],
        answer: 0,
        explanation: "FileReader is used for character-based file reading."
      },
      {
        question: "What is the superclass of Exception?",
        options: ["Error", "Throwable", "RuntimeException", "Object"],
        answer: 1,
        explanation: "Throwable is the parent of Exception and Error."
      },
      {
        question: "Which collection doesn't allow duplicates?",
        options: ["List", "Set", "Map", "Queue"],
        answer: 1,
        explanation: "Set doesn't allow duplicate elements."
      },
      {
        question: "What is method overriding?",
        options: [
          "Same method in child class",
          "Multiple methods with same name",
          "Changing method signature",
          "Hiding parent method"
        ],
        answer: 0,
        explanation: "Overriding provides specific implementation in child class."
      },
      {
        question: "Which operator checks object type?",
        options: ["typeof", "instanceof", "is", "type"],
        answer: 1,
        explanation: "instanceof checks if object is of specific type."
      },
      {
        question: "What is an array?",
        options: [
          "Collection of similar elements",
          "Collection of different types",
          "Single variable",
          "Data type"
        ],
        answer: 0,
        explanation: "Array stores fixed-size collection of same type elements."
      },
      {
        question: "Which keyword prevents method overriding?",
        options: ["static", "private", "final", "sealed"],
        answer: 2,
        explanation: "final methods cannot be overridden."
      },
      {
        question: "What is a lambda expression?",
        options: [
          "Anonymous function",
          "Named function",
          "Class method",
          "Static method"
        ],
        answer: 0,
        explanation: "Lambda expressions provide anonymous functions."
      },
      {
        question: "Which package contains Scanner?",
        options: ["java.lang", "java.util", "java.io", "java.net"],
        answer: 1,
        explanation: "Scanner is in java.util package."
      },
      {
        question: "What is the default constructor?",
        options: [
          "No-argument constructor",
          "Constructor with parameters",
          "Private constructor",
          "Static constructor"
        ],
        answer: 0,
        explanation: "Default constructor has no parameters."
      },
      {
        question: "Which is faster: String or StringBuilder?",
        options: ["String", "StringBuilder", "Same", "Depends"],
        answer: 1,
        explanation: "StringBuilder is faster for string manipulation."
      },
      {
        question: "What is an enum?",
        options: [
          "Set of named constants",
          "Special class",
          "Interface type",
          "Primitive type"
        ],
        answer: 0,
        explanation: "enum defines a collection of named constants."
      },
      {
        question: "Which keyword is used with interfaces?",
        options: ["extends", "implements", "inherits", "uses"],
        answer: 1,
        explanation: "`implements` keyword is used with interfaces."
      },
      {
        question: "What is serialization?",
        options: [
          "Converting object to byte stream",
          "Sorting objects",
          "Compressing data",
          "Encrypting data"
        ],
        answer: 0,
        explanation: "Serialization converts objects to byte streams."
      },
      {
        question: "Which is not a Java feature?",
        options: ["Platform dependent", "Object-oriented", "Multithreaded", "Secure"],
        answer: 0,
        explanation: "Java is platform independent, not dependent."
      },
      {
        question: "What is a marker interface?",
        options: [
          "Empty interface",
          "Interface with one method",
          "Interface with constants",
          "Deprecated interface"
        ],
        answer: 0,
        explanation: "Marker interface has no methods (e.g., Serializable)."
      },
      {
        question: "Which collection is synchronized?",
        options: ["ArrayList", "Vector", "LinkedList", "HashSet"],
        answer: 1,
        explanation: "Vector is synchronized (thread-safe)."
      },
      {
        question: "What is the diamond operator?",
        options: ["<>", "[]", "()", "{}"],
        answer: 0,
        explanation: "<> is diamond operator for type inference in generics."
      },
      {
        question: "Which method must be implemented from Runnable?",
        options: ["start()", "run()", "execute()", "begin()"],
        answer: 1,
        explanation: "Runnable interface requires run() method."
      },
      {
        question: "What is varargs?",
        options: [
          "Variable arguments",
          "Variable array",
          "Variadic string",
          "Various arguments"
        ],
        answer: 0,
        explanation: "varargs allows variable number of arguments."
      },
      {
        question: "Which is immutable: String or StringBuffer?",
        options: ["String", "StringBuffer", "Both", "Neither"],
        answer: 0,
        explanation: "String is immutable, StringBuffer is mutable."
      },
      {
        question: "What is the Java compiler?",
        options: ["javac", "java", "jar", "javap"],
        answer: 0,
        explanation: "javac is the Java compiler."
      },
      {
        question: "Which keyword is used for synchronization?",
        options: ["sync", "synchronized", "lock", "threadsafe"],
        answer: 1,
        explanation: "synchronized keyword provides thread synchronization."
      },
      {
        question: "What is a deadlock?",
        options: [
          "Threads waiting for each other",
          "Memory leak",
          "Stack overflow",
          "Null pointer"
        ],
        answer: 0,
        explanation: "Deadlock occurs when threads wait for each other indefinitely."
      },
      {
        question: "Which is not a valid identifier?",
        options: ["_variable", "2variable", "variable2", "$variable"],
        answer: 1,
        explanation: "Identifiers cannot start with numbers."
      },
      {
        question: "What is @Override annotation?",
        options: [
          "Indicates method overriding",
          "Marks deprecated code",
          "Suppresses warnings",
          "Documentation"
        ],
        answer: 0,
        explanation: "@Override indicates method overriding."
      },
      {
        question: "Which class loads other classes?",
        options: ["ClassLoader", "Object", "System", "Runtime"],
        answer: 0,
        explanation: "ClassLoader loads classes into JVM."
      },
      {
        question: "What is a stream in Java?",
        options: [
          "Sequence of data",
          "Type of collection",
          "Input method",
          "Output method"
        ],
        answer: 0,
        explanation: "Stream represents sequence of data."
      },
      {
        question: "Which is superclass of all errors?",
        options: ["Exception", "Throwable", "Error", "RuntimeException"],
        answer: 2,
        explanation: "Error class is for serious issues."
      },
      {
        question: "What is a wrapper class?",
        options: [
          "Wraps primitive types",
          "Wraps methods",
          "Wraps exceptions",
          "Wraps threads"
        ],
        answer: 0,
        explanation: "Wrapper classes wrap primitive types into objects."
      },
      {
        question: "Which keyword creates a new thread?",
        options: ["new", "thread", "start", "run"],
        answer: 0,
        explanation: "new Thread() creates thread object."
      },
      {
        question: "What is the ternary operator?",
        options: ["?:", "??", "::", "->"],
        answer: 0,
        explanation: "?: is ternary conditional operator."
      },
      {
        question: "Which method converts String to int?",
        options: ["parseInt()", "toInt()", "valueOf()", "convert()"],
        answer: 0,
        explanation: "Integer.parseInt() converts String to int."
      },
      {
        question: "What is a break statement?",
        options: [
          "Exits loop/switch",
          "Skips iteration",
          "Stops program",
          "Pauses execution"
        ],
        answer: 0,
        explanation: "break exits loops or switch statements."
      },
      {
        question: "Which is not a primitive type?",
        options: ["byte", "short", "Integer", "double"],
        answer: 2,
        explanation: "Integer is wrapper class, not primitive."
      },
      {
        question: "What is a local variable?",
        options: [
          "Variable inside method",
          "Class variable",
          "Static variable",
          "Global variable"
        ],
        answer: 0,
        explanation: "Local variables are declared inside methods."
      },
      {
        question: "Which interface represents key-value pairs?",
        options: ["List", "Set", "Map", "Queue"],
        answer: 2,
        explanation: "Map stores key-value pairs."
      },
      {
        question: "What is the enhanced for loop?",
        options: ["for-each", "for-in", "while", "do-while"],
        answer: 0,
        explanation: "for-each is enhanced for loop."
      },
      {
        question: "Which class is used for random numbers?",
        options: ["Random", "Math", "Number", "System"],
        answer: 0,
        explanation: "Random class generates random numbers."
      },
      {
        question: "What is a private constructor?",
        options: [
          "Prevents instantiation",
          "Only private access",
          "Singleton pattern",
          "Internal use only"
        ],
        answer: 0,
        explanation: "Private constructor prevents external instantiation."
      },
      {
        question: "Which method starts thread execution?",
        options: ["run()", "start()", "execute()", "begin()"],
        answer: 1,
        explanation: "start() begins thread execution."
      },
      {
        question: "What is method signature?",
        options: [
          "Method name + parameters",
          "Return type",
          "Access modifier",
          "Exception list"
        ],
        answer: 0,
        explanation: "Method signature includes name and parameters."
      },
      {
        question: "Which is not a valid comment?",
        options: ["//", "/* */", "/** */", "#"],
        answer: 3,
        explanation: "# is not a Java comment syntax."
      },
      {
        question: "What is a static block?",
        options: [
          "Runs when class loads",
          "Static method",
          "Static variable",
          "Static class"
        ],
        answer: 0,
        explanation: "Static block executes when class loads."
      },
      {
        question: "Which keyword calls parent constructor?",
        options: ["this", "super", "parent", "base"],
        answer: 1,
        explanation: "super() calls parent constructor."
      },
      {
        question: "What is type casting?",
        options: [
          "Converting one type to another",
          "Creating new type",
          "Type checking",
          "Type declaration"
        ],
        answer: 0,
        explanation: "Type casting converts one type to another."
      },
      {
        question: "Which exception is checked?",
        options: ["IOException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
        answer: 0,
        explanation: "IOException must be declared or caught."
      },
      {
        question: "What is a transient variable?",
        options: [
          "Not serialized",
          "Temporary variable",
          "Thread-local",
          "Volatile"
        ],
        answer: 0,
        explanation: "transient variables are not serialized."
      },
      {
        question: "Which method compares objects?",
        options: ["equals()", "==", "compareTo()", "hashCode()"],
        answer: 0,
        explanation: "equals() compares object equality."
      },
      {
        question: "What is a volatile variable?",
        options: [
          "Thread visibility guaranteed",
          "Changes frequently",
          "Cannot be cached",
          "Shared variable"
        ],
        answer: 0,
        explanation: "volatile ensures visibility across threads."
      },
      {
        question: "Which operator checks null?",
        options: ["== null", "is null", "null?", "??"],
        answer: 0,
        explanation: "== null checks for null reference."
      },
      {
        question: "What is a daemon thread?",
        options: [
          "Background thread",
          "Main thread",
          "System thread",
          "User thread"
        ],
        answer: 0,
        explanation: "Daemon threads run in background."
      },
      {
        question: "Which method deep copies array?",
        options: ["clone()", "copy()", "System.arraycopy()", "Arrays.copyOf()"],
        answer: 0,
        explanation: "clone() creates deep copy for primitive arrays."
      },
      {
        question: "What is a singleton class?",
        options: [
          "Only one instance",
          "Single method class",
          "Single variable class",
          "Simple class"
        ],
        answer: 0,
        explanation: "Singleton ensures only one instance exists."
      },
      {
        question: "Which is a functional interface?",
        options: ["Runnable", "Comparable", "Serializable", "Cloneable"],
        answer: 0,
        explanation: "Runnable has single abstract method."
      },
      {
        question: "What is the Java Runtime Environment?",
        options: ["JRE", "JDK", "JVM", "JIT"],
        answer: 0,
        explanation: "JRE provides runtime environment."
      },
      {
        question: "Which class is immutable?",
        options: ["String", "StringBuilder", "StringBuffer", "All"],
        answer: 0,
        explanation: "Only String is immutable among these."
      },
      {
        question: "What is a checked exception?",
        options: [
          "Compile-time checked",
          "Runtime exception",
          "Error",
          "Unchecked"
        ],
        answer: 0,
        explanation: "Checked exceptions must be handled."
      },
      {
        question: "Which keyword creates anonymous class?",
        options: ["new", "class", "abstract", "interface"],
        answer: 0,
        explanation: "new with interface/class creates anonymous class."
      },
      {
        question: "What is a finally block?",
        options: [
          "Always executes",
          "Executes on success",
          "Executes on error",
          "Optional block"
        ],
        answer: 0,
        explanation: "finally always executes after try-catch."
      },
      {
        question: "Which collection is LIFO?",
        options: ["Queue", "Stack", "List", "Set"],
        answer: 1,
        explanation: "Stack is Last-In-First-Out."
      },
      {
        question: "What is a static import?",
        options: [
          "Import static members",
          "Import all classes",
          "Import packages",
          "Import interfaces"
        ],
        answer: 0,
        explanation: "static import imports static members."
      },
      {
        question: "Which method sorts array?",
        options: ["Arrays.sort()", "Array.sort()", "Collection.sort()", "List.sort()"],
        answer: 0,
        explanation: "Arrays.sort() sorts arrays."
      },
      {
        question: "What is a generic type?",
        options: [
          "Type parameter",
          "General type",
          "Object type",
          "Specific type"
        ],
        answer: 0,
        explanation: "Generics provide type parameters."
      },
      {
        question: "Which interface allows natural ordering?",
        options: ["Comparable", "Comparator", "Serializable", "Cloneable"],
        answer: 0,
        explanation: "Comparable provides natural ordering."
      },
      {
        question: "What is a static method?",
        options: [
          "Class-level method",
          "Instance method",
          "Private method",
          "Abstract method"
        ],
        answer: 0,
        explanation: "Static methods belong to class, not instance."
      },
      {
        question: "Which is not a Java version?",
        options: ["Java 7", "Java 8", "Java 9", "Java 10", "Java XP"],
        answer: 4,
        explanation: "Java XP is not a valid version."
      },
      {
        question: "What is a switch statement?",
        options: [
          "Multi-way branch",
          "Conditional statement",
          "Loop control",
          "Exception handler"
        ],
        answer: 0,
        explanation: "switch selects among multiple cases."
      },
      {
        question: "Which keyword prevents instantiation?",
        options: ["abstract", "final", "private constructor", "static"],
        answer: 2,
        explanation: "Private constructor prevents instantiation."
      },
      {
        question: "What is a module in Java?",
        options: [
          "Package grouping",
          "Java 9 feature",
          "Self-contained unit",
          "All of above"
        ],
        answer: 3,
        explanation: "Modules are Java 9+ self-contained package groups."
      },
      {
        question: "Which method gets class name?",
        options: ["getClass()", "getName()", "getClassName()", "class()"],
        answer: 1,
        explanation: "getClass().getName() gets class name."
      },
      {
        question: "What is a sealed class?",
        options: [
          "Restricts inheritance",
          "Java 15 feature",
          "Final class alternative",
          "All of above"
        ],
        answer: 3,
        explanation: "Sealed classes restrict inheritance (Java 15+)."
      },
      {
        question: "Which operator is for method reference?",
        options: ["::", "->", ".", "=>"],
        answer: 0,
        explanation: ":: is method reference operator."
      },
      {
        question: "What is a record class?",
        options: [
          "Data carrier class",
          "Java 14 feature",
          "Immutable class",
          "All of above"
        ],
        answer: 3,
        explanation: "Records are immutable data carriers (Java 14+)."
      },
      {
        question: "Which is not a JVM component?",
        options: ["Classloader", "JIT", "Heap", "CPU"],
        answer: 3,
        explanation: "CPU is hardware, not JVM component."
      },
      {
        question: "What is the Java Development Kit?",
        options: ["JDK", "JRE", "JVM", "SDK"],
        answer: 0,
        explanation: "JDK is Java Development Kit."
      },
      {
        question: "Which method converts object to string?",
        options: ["toString()", "toText()", "stringify()", "getString()"],
        answer: 0,
        explanation: "toString() converts object to string."
      },
      {
        question: "What is a pattern variable?",
        options: [
          "Instanceof with variable",
          "Java 16 feature",
          "Pattern matching",
          "All of above"
        ],
        answer: 3,
        explanation: "Pattern variables in instanceof (Java 16+)."
      },
      {
        question: "Which is a primitive wrapper?",
        options: ["Integer", "String", "Array", "Object"],
        answer: 0,
        explanation: "Integer wraps int primitive."
      },
      {
        question: "What is a resource bundle?",
        options: [
          "Localization tool",
          "Property files",
          "Message formatting",
          "All of above"
        ],
        answer: 3,
        explanation: "Resource bundles handle localization."
      },
      {
        question: "Which interface has compare() method?",
        options: ["Comparator", "Comparable", "Both", "Neither"],
        answer: 0,
        explanation: "Comparator has compare(), Comparable has compareTo()."
      },
      {
        question: "What is a deep copy?",
        options: [
          "Copies nested objects",
          "Shallow copy",
          "Reference copy",
          "Object clone"
        ],
        answer: 0,
        explanation: "Deep copy duplicates nested objects."
      },
      {
        question: "Which annotation marks deprecated?",
        options: ["@Deprecated", "@Override", "@SuppressWarnings", "@SafeVarargs"],
        answer: 0,
        explanation: "@Deprecated marks deprecated code."
      },
      {
        question: "What is a module descriptor?",
        options: [
          "module-info.java",
          "Package info",
          "Class file",
          "JAR manifest"
        ],
        answer: 0,
        explanation: "module-info.java describes module."
      },
      {
        question: "Which is not a memory area?",
        options: ["Heap", "Stack", "Register", "Cache"],
        answer: 3,
        explanation: "Cache is hardware, not JVM memory area."
      },
      {
        question: "What is a locale?",
        options: [
          "Language/country code",
          "Location setting",
          "Time zone",
          "Currency format"
        ],
        answer: 0,
        explanation: "Locale represents language/country."
      },
      {
        question: "Which class formats dates?",
        options: ["SimpleDateFormat", "DateFormat", "DateTimeFormatter", "All"],
        answer: 3,
        explanation: "All can format dates."
      },
      {
        question: "What is a system property?",
        options: [
          "JVM configuration",
          "Environment variable",
          "System setting",
          "All of above"
        ],
        answer: 3,
        explanation: "System properties configure JVM."
      },
      {
        question: "Which method gets environment variable?",
        options: ["System.getenv()", "System.getProperty()", "Both", "Neither"],
        answer: 0,
        explanation: "getenv() gets OS environment variables."
      },
      {
        question: "What is a service loader?",
        options: [
          "Loads service providers",
          "Java SPI",
          "Plugin mechanism",
          "All of above"
        ],
        answer: 3,
        explanation: "ServiceLoader loads service implementations."
      },
      {
        question: "Which is a terminal operation?",
        options: ["forEach()", "map()", "filter()", "sorted()"],
        answer: 0,
        explanation: "forEach() is terminal stream operation."
      },
      {
        question: "What is an optional class?",
        options: [
          "Null-safe container",
          "Java 8 feature",
          "Optional value",
          "All of above"
        ],
        answer: 3,
        explanation: "Optional handles null values safely."
      },
      {
        question: "Which annotation ensures thread safety?",
        options: ["@ThreadSafe", "@Immutable", "@NotThreadSafe", "None"],
        answer: 3,
        explanation: "Java has no standard thread safety annotations."
      },
      {
        question: "What is a spliterator?",
        options: [
          "Splitting iterator",
          "Parallel processing",
          "Stream source",
          "All of above"
        ],
        answer: 3,
        explanation: "Spliterator splits data for parallel processing."
      },
      {
        question: "Which is a short-circuit operation?",
        options: ["findFirst()", "limit()", "skip()", "distinct()"],
        answer: 0,
        explanation: "findFirst() stops after first match."
      },
      {
        question: "What is a completable future?",
        options: [
          "Asynchronous computation",
          "Future with callbacks",
          "Java 8 feature",
          "All of above"
        ],
        answer: 3,
        explanation: "CompletableFuture handles async tasks."
      },
      {
        question: "Which is not a stream source?",
        options: ["List.stream()", "Arrays.stream()", "Stream.of()", "File.read()"],
        answer: 3,
        answer: 3,
        explanation: "File.read() doesn't create stream directly."
      },
      {
        question: "What is a method handle?",
        options: [
          "Type-safe method reference",
          "Reflection alternative",
          "Java 7 feature",
          "All of above"
        ],
        answer: 3,
        explanation: "MethodHandle provides type-safe method operations."
      },
      {
        question: "Which annotation processes at compile time?",
        options: ["@Override", "@Deprecated", "@AnnotationProcessor", "@Generated"],
        answer: 3,
        explanation: "@Generated marks generated code."
      },
      {
        question: "What is a var type?",
        options: [
          "Local variable inference",
          "Java 10 feature",
          "Type inference",
          "All of above"
        ],
        answer: 3,
        explanation: "var infers local variable type (Java 10+)."
      },
      {
        question: "Which is not a functional interface?",
        options: ["Predicate", "Function", "Consumer", "Iterator"],
        answer: 3,
        explanation: "Iterator is not functional (has multiple methods)."
      },
      {
        question: "What is a phantom reference?",
        options: [
          "Weakest reference",
          "Post-mortem cleanup",
          "java.lang.ref",
          "All of above"
        ],
        answer: 3,
        explanation: "PhantomReference for post-mortem cleanup."
      },
      {
        question: "Which class is for HTTP client?",
        options: ["HttpClient", "HttpURLConnection", "Both", "Neither"],
        answer: 2,
        explanation: "Both HttpClient (Java 11+) and HttpURLConnection."
      },
      {
        question: "What is a nestmate?",
        options: [
          "Nested class access",
          "Java 11 feature",
          "Private access between nested classes",
          "All of above"
        ],
        answer: 3,
        explanation: "Nestmates allow private access in nested classes."
      },
      {
        question: "Which is a concurrent collection?",
        options: ["ConcurrentHashMap", "CopyOnWriteArrayList", "BlockingQueue", "All"],
        answer: 3,
        explanation: "All are thread-safe concurrent collections."
      },
      {
        question: "What is a fiber?",
        options: [
          "Lightweight thread",
          "Project Loom",
          "Virtual thread",
          "All of above"
        ],
        answer: 3,
        explanation: "Fibers are lightweight threads (Project Loom)."
      },
      {
        question: "Which is a value-based class?",
        options: ["Optional", "LocalDate", "Integer", "All"],
        answer: 3,
        explanation: "These are value-based classes."
      },
      {
        question: "What is a hidden class?",
        options: [
          "Runtime-generated class",
          "Java 15 feature",
          "Not discoverable",
          "All of above"
        ],
        answer: 3,
        explanation: "Hidden classes are runtime-generated (Java 15+)."
      }
    ],

    Intermediate: [
      {
        question: "What is the difference between == and equals()?",
        options: [
          "== compares references, equals() compares values",
          "== compares values, equals() compares references",
          "Both are same",
          "== for primitives, equals() for objects"
        ],
        answer: 0,
        explanation: "== checks reference equality, equals() checks value equality."
      },
      {
        question: "What is the difference between ArrayList and LinkedList?",
        options: [
          "ArrayList uses array, LinkedList uses nodes",
          "ArrayList faster for random access",
          "LinkedList faster for insertions/deletions",
          "All of above"
        ],
        answer: 3,
        explanation: "All statements correctly describe differences."
      },
      {
        question: "What is method hiding in Java?",
        options: [
          "Static method in subclass with same signature",
          "Private method in parent class",
          "Method with default access",
          "Abstract method implementation"
        ],
        answer: 0,
        explanation: "Method hiding occurs with static methods in inheritance."
      },
      {
        question: "What is double-checked locking?",
        options: [
          "Singleton pattern optimization",
          "Thread-safe lazy initialization",
          "Both A and B",
          "None of above"
        ],
        answer: 2,
        explanation: "Double-checked locking optimizes thread-safe singleton."
      },
      {
        question: "What is covariant return type?",
        options: [
          "Overriding method can return subclass",
          "Method returns same type always",
          "Return type covariance",
          "Generic return type"
        ],
        answer: 0,
        explanation: "Covariant return allows subclass return type in overriding."
      },
      {
        question: "What is fail-fast vs fail-safe iterator?",
        options: [
          "Fail-fast throws ConcurrentModificationException",
          "Fail-safe works on copy",
          "ArrayList has fail-fast",
          "All of above"
        ],
        answer: 3,
        explanation: "All statements are correct about iterator types."
      },
      {
        question: "What is the volatile keyword's purpose?",
        options: [
          "Ensures visibility across threads",
          "Prevents instruction reordering",
          "Not a synchronization alternative",
          "All of above"
        ],
        answer: 3,
        explanation: "volatile ensures visibility and ordering but not atomicity."
      },
      {
        question: "What is classpath in Java?",
        options: [
          "Location of class files",
          "JVM parameter",
          "Can include jars/directories",
          "All of above"
        ],
        answer: 3,
        explanation: "Classpath tells JVM where to find classes."
      },
      {
        question: "What is reflection in Java?",
        options: [
          "Runtime class inspection",
          "Can access private members",
          "Performance overhead",
          "All of above"
        ],
        answer: 3,
        explanation: "Reflection allows runtime class inspection with overhead."
      },
      {
        question: "What is weak reference?",
        options: [
          "GC can collect anytime",
          "Weaker than soft reference",
          "Useful for caches",
          "All of above"
        ],
        answer: 3,
        explanation: "Weak references don't prevent garbage collection."
      },
      {
        question: "What is the difference between throw and throws?",
        options: [
          "throw used in method, throws in signature",
          "throw throws exception, throws declares it",
          "Both are different",
          "All of above"
        ],
        answer: 3,
        explanation: "throw throws exception, throws declares what method might throw."
      },
      {
        question: "What is initial capacity and load factor in HashMap?",
        options: [
          "Initial capacity: starting buckets",
          "Load factor: when to resize",
          "Default load factor 0.75",
          "All of above"
        ],
        answer: 3,
        explanation: "HashMap resizes when size > capacity * load factor."
      },
      {
        question: "What is the diamond problem?",
        options: [
          "Multiple inheritance ambiguity",
          "Solved by interfaces in Java",
          "Not in Java directly",
          "All of above"
        ],
        answer: 3,
        explanation: "Diamond problem occurs in multiple inheritance."
      },
      {
        question: "What is reentrant lock?",
        options: [
          "Lock that can be reacquired",
          "Same thread can lock multiple times",
          "More flexible than synchronized",
          "All of above"
        ],
        answer: 3,
        explanation: "ReentrantLock is more flexible than synchronized."
      },
      {
        question: "What is the difference between Comparator and Comparable?",
        options: [
          "Comparable: natural order",
          "Comparator: custom order",
          "Comparable: compareTo(), Comparator: compare()",
          "All of above"
        ],
        answer: 3,
        explanation: "Comparable for natural order, Comparator for custom."
      },
      {
        question: "What is a class literal?",
        options: [
          "ClassName.class",
          "Returns Class object",
          "Used in reflection",
          "All of above"
        ],
        answer: 3,
        explanation: "ClassName.class is class literal syntax."
      },
      {
        question: "What is type erasure in generics?",
        options: [
          "Generic type info removed at runtime",
          "Backward compatibility",
          "Can cause heap pollution",
          "All of above"
        ],
        answer: 3,
        explanation: "Type erasure removes generic types at runtime."
      },
      {
        question: "What is the purpose of finally block?",
        options: [
          "Cleanup resources",
          "Always executes",
          "Even after return",
          "All of above"
        ],
        answer: 3,
        explanation: "finally executes always for cleanup."
      },
      {
        question: "What is marker interface pattern?",
        options: [
          "Empty interface",
          "Used by JVM/containers",
          "Serializable, Cloneable examples",
          "All of above"
        ],
        answer: 3,
        explanation: "Marker interfaces have no methods."
      },
      {
        question: "What is the difference between StringBuffer and StringBuilder?",
        options: [
          "StringBuffer synchronized",
          "StringBuilder not synchronized",
          "StringBuilder faster",
          "All of above"
        ],
        answer: 3,
        explanation: "StringBuilder is faster but not thread-safe."
      },
      {
        question: "What is a race condition?",
        options: [
          "Threads access shared data",
          "Outcome depends on timing",
          "Needs synchronization",
          "All of above"
        ],
        answer: 3,
        explanation: "Race conditions occur with unsynchronized shared access."
      },
      {
        question: "What is the static factory method pattern?",
        options: [
          "Alternative to constructor",
          "Can have meaningful names",
          "Can cache instances",
          "All of above"
        ],
        answer: 3,
        explanation: "Static factory methods provide flexible object creation."
      },
      {
        question: "What is the difference between aggregation and composition?",
        options: [
          "Aggregation: has-a relationship",
          "Composition: stronger has-a",
          "Composition: lifecycle dependency",
          "All of above"
        ],
        answer: 3,
        explanation: "Composition has stronger ownership than aggregation."
      },
      {
        question: "What is the Flyweight pattern?",
        options: [
          "Shares objects to save memory",
          "Used for immutable objects",
          "String pool example",
          "All of above"
        ],
        answer: 3,
        explanation: "Flyweight shares objects to minimize memory."
      },
      {
        question: "What is the Visitor pattern?",
        options: [
          "Separates algorithm from object",
          "Double dispatch",
          "Adds operations without modifying classes",
          "All of above"
        ],
        answer: 3,
        explanation: "Visitor separates operations from object structure."
      },
      {
        question: "What is the Template Method pattern?",
        options: [
          "Defines algorithm skeleton",
          "Subclasses override steps",
          "Abstract class pattern",
          "All of above"
        ],
        answer: 3,
        explanation: "Template Method defines algorithm skeleton."
      },
      {
        question: "What is the Strategy pattern?",
        options: [
          "Defines family of algorithms",
          "Encapsulates each algorithm",
          "Makes them interchangeable",
          "All of above"
        ],
        answer: 3,
        explanation: "Strategy encapsulates interchangeable algorithms."
      },
      {
        question: "What is the Observer pattern?",
        options: [
          "One-to-many dependency",
          "Subject notifies observers",
          "Event handling",
          "All of above"
        ],
        answer: 3,
        explanation: "Observer notifies dependents of state changes."
      },
      {
        question: "What is the Decorator pattern?",
        options: [
          "Adds responsibilities dynamically",
          "Wrapper pattern",
          "Java I/O streams example",
          "All of above"
        ],
        answer: 3,
        explanation: "Decorator adds behavior without subclassing."
      },
      {
        question: "What is the Factory pattern?",
        options: [
          "Creates objects without specifying class",
          "Centralized creation",
          "Promotes loose coupling",
          "All of above"
        ],
        answer: 3,
        explanation: "Factory centralizes object creation."
      },
      {
        question: "What is the Singleton pattern?",
        options: [
          "Only one instance",
          "Global access point",
          "Private constructor",
          "All of above"
        ],
        answer: 3,
        explanation: "Singleton ensures single instance."
      },
      {
        question: "What is the Adapter pattern?",
        options: [
          "Converts interface",
          "Wrapper for compatibility",
          "Legacy system integration",
          "All of above"
        ],
        answer: 3,
        explanation: "Adapter makes interfaces compatible."
      },
      {
        question: "What is the Proxy pattern?",
        options: [
          "Surrogate placeholder",
          "Controls access to object",
          "Virtual proxy example",
          "All of above"
        ],
        answer: 3,
        explanation: "Proxy controls access to another object."
      },
      {
        question: "What is the Command pattern?",
        options: [
          "Encapsulates request as object",
          "Supports undo/redo",
          "Decouples sender and receiver",
          "All of above"
        ],
        answer: 3,
        explanation: "Command encapsulates requests."
      },
      {
        question: "What is the State pattern?",
        options: [
          "Object changes behavior with state",
          "State-specific behavior",
          "Eliminates conditionals",
          "All of above"
        ],
        answer: 3,
        explanation: "State changes behavior with internal state."
      },
      {
        question: "What is the Memento pattern?",
        options: [
          "Captures object state",
          "Externalizes state",
          "Supports undo",
          "All of above"
        ],
        answer: 3,
        explanation: "Memento captures and restores state."
      },
      {
        question: "What is the Iterator pattern?",
        options: [
          "Sequentially access elements",
          "Decouples algorithm from structure",
          "Java Iterator interface",
          "All of above"
        ],
        answer: 3,
        explanation: "Iterator provides sequential access."
      },
      {
        question: "What is the Composite pattern?",
        options: [
          "Tree structure of objects",
          "Part-whole hierarchy",
          "Uniform treatment",
          "All of above"
        ],
        answer: 3,
        explanation: "Composite treats individual and compositions uniformly."
      },
      {
        question: "What is the Bridge pattern?",
        options: [
          "Decouples abstraction from implementation",
          "Both can vary independently",
          "Uses composition over inheritance",
          "All of above"
        ],
        answer: 3,
        explanation: "Bridge separates abstraction from implementation."
      },
      {
        question: "What is the Prototype pattern?",
        options: [
          "Creates new objects by cloning",
          "Avoids costly creation",
          "Object.clone() example",
          "All of above"
        ],
        answer: 3,
        explanation: "Prototype creates objects by cloning."
      },
      {
        question: "What is the Chain of Responsibility?",
        options: [
          "Passes request along chain",
          "Decouples sender and receiver",
          "Multiple handlers",
          "All of above"
        ],
        answer: 3,
        explanation: "Chain passes request until handled."
      },
      {
        question: "What is the Mediator pattern?",
        options: [
          "Centralized communication",
          "Reduces coupling",
          "Coordinates objects",
          "All of above"
        ],
        answer: 3,
        explanation: "Mediator centralizes complex communication."
      },
      {
        question: "What is the Interpreter pattern?",
        options: [
          "Defines grammar representation",
          "Language interpreter",
          "Abstract syntax tree",
          "All of above"
        ],
        answer: 3,
        explanation: "Interpreter defines grammar interpretation."
      },
      {
        question: "What is the Facade pattern?",
        options: [
          "Simplified interface",
          "Hides subsystem complexity",
          "Single entry point",
          "All of above"
        ],
        answer: 3,
        explanation: "Facade provides simplified interface to subsystem."
      },
      {
        question: "What is immutable class?",
        options: [
          "State cannot change",
          "Final class, private final fields",
          "No setters, defensive copies",
          "All of above"
        ],
        answer: 3,
        explanation: "Immutable objects cannot change state."
      },
      {
        question: "What is the difference between abstract class and interface?",
        options: [
          "Abstract class can have state",
          "Interface only methods (till Java 7)",
          "Multiple interfaces, single abstract class",
          "All of above"
        ],
        answer: 3,
        explanation: "Abstract classes can have state, interfaces pure abstraction."
      },
      {
        question: "What is anonymous inner class?",
        options: [
          "Class without name",
          "Defined and instantiated at once",
          "Syntactic sugar",
          "All of above"
        ],
        answer: 3,
        explanation: "Anonymous classes have no name, defined inline."
      },
      {
        question: "What is static nested class?",
        options: [
          "Static member of outer class",
          "No reference to outer instance",
          "Can be instantiated without outer",
          "All of above"
        ],
        answer: 3,
        explanation: "Static nested classes don't need outer instance."
      },
      {
        question: "What is inner class?",
        options: [
          "Non-static nested class",
          "Has reference to outer",
          "Can access outer members",
          "All of above"
        ],
        answer: 3,
        explanation: "Inner classes have implicit outer reference."
      },
      {
        question: "What is local class?",
        options: [
          "Defined in method",
          "Has access to local variables",
          "Variables must be effectively final",
          "All of above"
        ],
        answer: 3,
        explanation: "Local classes are defined in methods/blocks."
      },
      {
        question: "What is effectively final?",
        options: [
          "Variable not reassigned",
          "Can be used in lambdas",
          "Implicitly final",
          "All of above"
        ],
        answer: 3,
        explanation: "Effectively final variables aren't reassigned."
      },
      {
        question: "What is method reference?",
        options: [
          "Shorthand for lambda",
          "ClassName::methodName",
          "Four types",
          "All of above"
        ],
        answer: 3,
        explanation: "Method references are lambda shorthand."
      },
      {
        question: "What is functional interface?",
        options: [
          "Single abstract method",
          "@FunctionalInterface annotation",
          "Can have default methods",
          "All of above"
        ],
        answer: 3,
        explanation: "Functional interfaces have one abstract method."
      },
      {
        question: "What is stream pipeline?",
        options: [
          "Sequence of operations",
          "Source, intermediate ops, terminal op",
          "Lazy evaluation",
          "All of above"
        ],
        answer: 3,
        explanation: "Stream pipelines process data sequences."
      },
      {
        question: "What is optional flatMap?",
        options: [
          "Prevents Optional<Optional> nesting",
          "Maps and flattens",
          "Functional composition",
          "All of above"
        ],
        answer: 3,
        explanation: "flatMap avoids nested Optional."
      },
      {
        question: "What is CompletableFuture?",
        options: [
          "Asynchronous computation",
          "Non-blocking",
          "Callback-based",
          "All of above"
        ],
        answer: 3,
        explanation: "CompletableFuture handles async tasks."
      },
      {
        question: "What is ForkJoinPool?",
        options: [
          "Work-stealing pool",
          "For divide-and-conquer",
          "Parallel stream uses it",
          "All of above"
        ],
        answer: 3,
        explanation: "ForkJoinPool for parallel processing."
      },
      {
        question: "What is ThreadLocal?",
        options: [
          "Thread-specific variable",
          "No synchronization needed",
          "Memory leak risk",
          "All of above"
        ],
        answer: 3,
        explanation: "ThreadLocal provides thread-specific variables."
      },
      {
        question: "What is CountDownLatch?",
        options: [
          "Synchronization aid",
          "Threads wait for countdown",
          "One-time use",
          "All of above"
        ],
        answer: 3,
        explanation: "CountDownLatch makes threads wait for count."
      },
      {
        question: "What is CyclicBarrier?",
        options: [
          "Threads wait at barrier",
          "Reusable",
          "Fixed number of threads",
          "All of above"
        ],
        answer: 3,
        explanation: "CyclicBarrier synchronizes threads at barrier."
      },
      {
        question: "What is Semaphore?",
        options: [
          "Controls access to resource",
          "Permit-based",
          "Can be fair",
          "All of above"
        ],
        answer: 3,
        explanation: "Semaphore controls concurrent access."
      },
      {
        question: "What is Exchanger?",
        options: [
          "Swaps data between threads",
          "Synchronization point",
          "Genetic algorithm example",
          "All of above"
        ],
        answer: 3,
        explanation: "Exchanger swaps data between threads."
      },
      {
        question: "What is Phaser?",
        options: [
          "Flexible barrier",
          "Dynamic party count",
          "Multiple phases",
          "All of above"
        ],
        answer: 3,
        explanation: "Phaser is flexible reusable barrier."
      },
      {
        question: "What is StampedLock?",
        options: [
          "Optimistic locking",
          "Three modes",
          "Java 8 feature",
          "All of above"
        ],
        answer: 3,
        explanation: "StampedLock has optimistic reads."
      },
      {
        question: "What is ReadWriteLock?",
        options: [
          "Multiple readers, single writer",
          "ReentrantReadWriteLock implementation",
          "Better for read-heavy",
          "All of above"
        ],
        answer: 3,
        explanation: "ReadWriteLock allows concurrent reads."
      },
      {
        question: "What is lock striping?",
        options: [
          "Multiple locks for segments",
          "Reduces contention",
          "ConcurrentHashMap uses it",
          "All of above"
        ],
        answer: 3,
        explanation: "Lock striping reduces lock contention."
      },
      {
        question: "What is compare-and-swap?",
        options: [
          "Atomic operation",
          "Used in atomic classes",
          "Optimistic concurrency",
          "All of above"
        ],
        answer: 3,
        explanation: "CAS is non-blocking atomic operation."
      },
      {
        question: "What is the ABA problem?",
        options: [
          "Value changes back to A",
          "CAS can miss intermediate change",
          "AtomicStampedReference solution",
          "All of above"
        ],
        answer: 3,
        explanation: "ABA problem with CAS algorithms."
      },
      {
        question: "What is happens-before?",
        options: [
          "Memory visibility guarantee",
          "JMM concept",
          "Synchronization, volatile, etc.",
          "All of above"
        ],
        answer: 3,
        explanation: "Happens-before defines memory visibility."
      },
      {
        question: "What is false sharing?",
        options: [
          "Cache line problem",
          "Independent variables in same cache line",
          "@Contended annotation",
          "All of above"
        ],
        answer: 3,
        explanation: "False sharing degrades performance."
      },
      {
        question: "What is thread dump?",
        options: [
          "Snapshot of threads",
          "Debugging tool",
          "jstack command",
          "All of above"
        ],
        answer: 3,
        explanation: "Thread dump shows thread states."
      },
      {
        question: "What is heap dump?",
        options: [
          "Snapshot of heap memory",
          "Memory analysis",
          "jmap command",
          "All of above"
        ],
        answer: 3,
        explanation: "Heap dump for memory analysis."
      },
      {
        question: "What is JMX?",
        options: [
          "Java Management Extensions",
          "Monitoring and management",
          "MBeans",
          "All of above"
        ],
        answer: 3,
        explanation: "JMX for application monitoring."
      },
      {
        question: "What is JFR?",
        options: [
          "Java Flight Recorder",
          "Profiling tool",
          "Low overhead",
          "All of above"
        ],
        answer: 3,
        explanation: "JFR for detailed runtime info."
      },
      {
        question: "What is JMC?",
        options: [
          "Java Mission Control",
          "GUI for JFR",
          "Monitoring tool",
          "All of above"
        ],
        answer: 3,
        explanation: "JMC visualizes JFR data."
      },
      {
        question: "What is JIT compiler?",
        options: [
          "Just-In-Time compiler",
          "Converts bytecode to native",
          "HotSpot",
          "All of above"
        ],
        answer: 3,
        explanation: "JIT compiles hot code at runtime."
      },
      {
        question: "What is escape analysis?",
        options: [
          "Determines object scope",
          "Stack allocation optimization",
          "JVM optimization",
          "All of above"
        ],
        answer: 3,
        explanation: "Escape analysis enables stack allocation."
      },
      {
        question: "What is biased locking?",
        options: [
          "Optimization for single thread",
          "Reduces synchronization cost",
          "JVM option",
          "All of above"
        ],
        answer: 3,
        explanation: "Biased locking optimizes for single thread."
      },
      {
        question: "What is compressed oops?",
        options: [
          "Compresses object pointers",
          "Saves memory",
          "32-bit in 64-bit JVM",
          "All of above"
        ],
        answer: 3,
        explanation: "Compressed oops save memory."
      },
      {
        question: "What is G1GC?",
        options: [
          "Garbage First collector",
          "Default in Java 9+",
          "Predictable pauses",
          "All of above"
        ],
        answer: 3,
        explanation: "G1GC is default garbage collector."
      },
      {
        question: "What is ZGC?",
        options: [
          "Z Garbage Collector",
          "Low latency",
          "Java 11+",
          "All of above"
        ],
        answer: 3,
        explanation: "ZGC for low latency."
      },
      {
        question: "What is Shenandoah?",
        options: [
          "Low pause time GC",
          "Red Hat",
          "Concurrent compaction",
          "All of above"
        ],
        answer: 3,
        explanation: "Shenandoah reduces pause times."
      },
      {
        question: "What is Epsilon GC?",
        options: [
          "No-op collector",
          "Performance testing",
          "Java 11+",
          "All of above"
        ],
        answer: 3,
        explanation: "Epsilon does no garbage collection."
      },
      {
        question: "What is serialization proxy?",
        options: [
          "Pattern for better serialization",
          "readResolve, writeReplace",
          "Joshua Bloch",
          "All of above"
        ],
        answer: 3,
        explanation: "Serialization proxy improves serialization."
      },
      {
        question: "What is externalizable?",
        options: [
          "Custom serialization",
          "Faster than Serializable",
          "readExternal, writeExternal",
          "All of above"
        ],
        answer: 3,
        explanation: "Externalizable provides custom serialization."
      },
      {
        question: "What is serialVersionUID?",
        options: [
          "Version control for serialization",
          "Should be declared",
          "InvalidClassException without it",
          "All of above"
        ],
        answer: 3,
        explanation: "serialVersionUID controls version compatibility."
      },
      {
        question: "What is transient field?",
        options: [
          "Not serialized",
          "Sensitive data",
          "Default values on deserialize",
          "All of above"
        ],
        answer: 3,
        explanation: "transient fields excluded from serialization."
      },
      {
        question: "What is Java Beans?",
        options: [
          "Reusable component model",
          "getter/setter convention",
          "Serializable, no-arg constructor",
          "All of above"
        ],
        answer: 3,
        explanation: "Java Beans follow specific conventions."
      },
      {
        question: "What is Introspection?",
        options: [
          "Examining bean properties",
          "Java Beans API",
          "BeanInfo",
          "All of above"
        ],
        answer: 3,
        explanation: "Introspection examines bean properties."
      },
      {
        question: "What is PropertyChangeSupport?",
        options: [
          "Fires property change events",
          "Observer pattern implementation",
          "Bound properties",
          "All of above"
        ],
        answer: 3,
        explanation: "PropertyChangeSupport for bound properties."
      },
      {
        question: "What is VetoableChangeSupport?",
        options: [
          "Vetoable property changes",
          "Constrained properties",
          "Can reject changes",
          "All of above"
        ],
        answer: 3,
        explanation: "VetoableChangeSupport for constrained properties."
      },
      {
        question: "What is JNDI?",
        options: [
          "Java Naming and Directory Interface",
          "Lookup resources",
          "InitialContext",
          "All of above"
        ],
        answer: 3,
        explanation: "JNDI for naming and directory services."
      },
      {
        question: "What is JDBC?",
        options: [
          "Java Database Connectivity",
          "Database access API",
          "DriverManager, Connection",
          "All of above"
        ],
        answer: 3,
        explanation: "JDBC for database access."
      },
      {
        question: "What is connection pooling?",
        options: [
          "Reuses database connections",
          "Improves performance",
          "DataSource interface",
          "All of above"
        ],
        answer: 3,
        explanation: "Connection pooling reuses connections."
      },
      {
        question: "What is JPA?",
        options: [
          "Java Persistence API",
          "ORM standard",
          "Entity, EntityManager",
          "All of above"
        ],
        answer: 3,
        explanation: "JPA for object-relational mapping."
      },
      {
        question: "What is Hibernate?",
        options: [
          "JPA implementation",
          "ORM framework",
          "Session, Query",
          "All of above"
        ],
        answer: 3,
        explanation: "Hibernate is popular ORM framework."
      },
      {
        question: "What is first-level cache?",
        options: [
          "Session cache",
          "Hibernate feature",
          "Reduces database hits",
          "All of above"
        ],
        answer: 3,
        explanation: "First-level cache in Hibernate Session."
      },
      {
        question: "What is second-level cache?",
        options: [
          "SessionFactory cache",
          "Shared across sessions",
          "Ehcache, Infinispan",
          "All of above"
        ],
        answer: 3,
        explanation: "Second-level cache shared across sessions."
      },
      {
        question: "What is query cache?",
        options: [
          "Caches query results",
          "Hibernate feature",
          "With parameters",
          "All of above"
        ],
        answer: 3,
        explanation: "Query cache stores query results."
      },
      {
        question: "What is lazy loading?",
        options: [
          "Loads data on demand",
          "Proxy objects",
          "N+1 problem",
          "All of above"
        ],
        answer: 3,
        explanation: "Lazy loading defers data loading."
      },
      {
        question: "What is eager loading?",
        options: [
          "Loads all data immediately",
          "JOIN queries",
          "Can be inefficient",
          "All of above"
        ],
        answer: 3,
        explanation: "Eager loading loads all data upfront."
      },
      {
        question: "What is dirty checking?",
        options: [
          "Detects entity changes",
          "Automatic update",
          "Hibernate feature",
          "All of above"
        ],
        answer: 3,
        explanation: "Dirty checking detects modified entities."
      }
    ],

    Advanced: [
      {
        question: "What is the Java Memory Model?",
        options: [
          "Defines how threads interact through memory",
          "Happens-before relationship",
          "Memory visibility rules",
          "All of above"
        ],
        answer: 3,
        explanation: "JMM defines thread interaction through memory."
      },
      {
        question: "What is lock coarsening?",
        options: [
          "Combines adjacent locks",
          "JVM optimization",
          "Reduces lock/unlock overhead",
          "All of above"
        ],
        answer: 3,
        explanation: "Lock coarsening combines nearby synchronized blocks."
      },
      {
        question: "What is lock elision?",
        options: [
          "Removes unnecessary locks",
          "Escape analysis based",
          "For thread-local objects",
          "All of above"
        ],
        answer: 3,
        explanation: "Lock elision removes locks when safe."
      },
      {
        question: "What is biased lock revocation?",
        options: [
          "When multiple threads access",
          "Biased -> lightweight lock",
          "Performance impact",
          "All of above"
        ],
        answer: 3,
        explanation: "Revocation when bias is no longer valid."
      },
      {
        question: "What is safepoint?",
        options: [
          "Point where GC can run",
          "Threads must pause",
          "For JVM operations",
          "All of above"
        ],
        answer: 3,
        explanation: "Safepoints pause threads for JVM operations."
      },
      {
        question: "What is card table?",
        options: [
          "Remembered set for young GC",
          "Tracks old->young references",
          "Write barrier updates",
          "All of above"
        ],
        answer: 3,
        explanation: "Card table tracks inter-generational references."
      },
      {
        question: "What is remembered set?",
        options: [
          "Tracks references into region",
          "Used by G1GC",
          "Region-based",
          "All of above"
        ],
        answer: 3,
        explanation: "Remembered set tracks cross-region references."
      },
      {
        question: "What is TLAB?",
        options: [
          "Thread-Local Allocation Buffer",
          "Fast object allocation",
          "Reduces synchronization",
          "All of above"
        ],
        answer: 3,
        explanation: "TLAB gives each thread allocation buffer."
      },
      {
        question: "What is PLAB?",
        options: [
          "Promotion Local Allocation Buffer",
          "For survivor space promotion",
          "Parallel GC",
          "All of above"
        ],
        answer: 3,
        explanation: "PLAB for promotion in parallel GC."
      },
      {
        question: "What is humongous allocation?",
        options: [
          "Large object allocation",
          "Directly in old gen",
          "G1GC concept",
          "All of above"
        ],
        answer: 3,
        explanation: "Humongous objects bypass young gen."
      },
      {
        question: "What is StringTable?",
        options: [
          "Internal string pool",
          "Hash table for interned strings",
          "Resizable",
          "All of above"
        ],
        answer: 3,
        explanation: "StringTable stores interned strings."
      },
      {
        question: "What is SymbolTable?",
        options: [
          "Stores class symbols",
          "Method names, signatures",
          "Internal JVM",
          "All of above"
        ],
        answer: 3,
        explanation: "SymbolTable stores class metadata symbols."
      },
      {
        question: "What is constant pool?",
        options: [
          "Per-class constants",
          "In .class file",
          "Strings, numbers, references",
          "All of above"
        ],
        answer: 3,
        explanation: "Constant pool stores class constants."
      },
      {
        question: "What is metaspace?",
        options: [
          "Replaced permgen",
          "Class metadata",
          "Native memory",
          "All of above"
        ],
        answer: 3,
        explanation: "Metaspace stores class metadata in native memory."
      },
      {
        question: "What is class data sharing?",
        options: [
          "Shares classes between JVMs",
          "Reduces startup time",
          "Archive file",
          "All of above"
        ],
        answer: 3,
        explanation: "CDS shares class data across JVM instances."
      },
      {
        question: "What is application class data sharing?",
        options: [
          "Extends CDS to app classes",
          "Java 10+",
          "Further startup improvement",
          "All of above"
        ],
        answer: 3,
        explanation: "AppCDS includes application classes."
      },
      {
        question: "What is dynamic CDS?",
        options: [
          "Automatic CDS archive creation",
          "Java 13+",
          "-XX:ArchiveClassesAtExit",
          "All of above"
        ],
        answer: 3,
        explanation: "Dynamic CDS creates archive at exit."
      },
      {
        question: "What is ahead-of-time compilation?",
        options: [
          "GraalVM native image",
          "Compiles to native binary",
          "Faster startup",
          "All of above"
        ],
        answer: 3,
        explanation: "AOT compiles Java to native code."
      },
      {
        question: "What is SubstrateVM?",
        options: [
          "GraalVM native runtime",
          "For AOT compilation",
          "Limited reflection",
          "All of above"
        ],
        answer: 3,
        explanation: "SubstrateVM is GraalVM native runtime."
      },
      {
        question: "What is closed-world assumption?",
        options: [
          "All classes known at build time",
          "Native image requirement",
          "Limits dynamic features",
          "All of above"
        ],
        answer: 3,
        explanation: "Closed-world for native image compilation."
      },
      {
        question: "What is reachability metadata?",
        options: [
          "Tells native image what to include",
          "Reflection, resources, etc.",
          "JSON configuration",
          "All of above"
        ],
        answer: 3,
        explanation: "Reachability metadata for native image."
      },
      {
        question: "What is Truffle framework?",
        options: [
          "Language implementation framework",
          "GraalVM",
          "Polyglot runtime",
          "All of above"
        ],
        answer: 3,
        explanation: "Truffle for implementing languages on GraalVM."
      },
      {
        question: "What is Sulong?",
        options: [
          "LLVM bitcode interpreter",
          "GraalVM",
          "Runs C/C++",
          "All of above"
        ],
        answer: 3,
        explanation: "Sulong runs LLVM bitcode on GraalVM."
      },
      {
        question: "What is immutable code cache?",
        options: [
          "JVMCI feature",
          "GraalVM",
          "Improves JIT performance",
          "All of above"
        ],
        answer: 3,
        explanation: "Immutable code cache improves JIT."
      },
      {
        question: "What is JVMCI?",
        options: [
          "JVM Compiler Interface",
          "Java 9+",
          "Alternative JIT compiler",
          "All of above"
        ],
        answer: 3,
        explanation: "JVMCI allows pluggable JIT compilers."
      },
      {
        question: "What is Graal compiler?",
        options: [
          "JVMCI compiler",
          "Written in Java",
          "Used by GraalVM",
          "All of above"
        ],
        answer: 3,
        explanation: "Graal is JVMCI-based JIT compiler."
      },
      {
        question: "What is partial escape analysis?",
        options: [
          "Advanced escape analysis",
          "Graal compiler",
          "More optimizations",
          "All of above"
        ],
        answer: 3,
        explanation: "Partial escape analysis enables more optimizations."
      },
      {
        question: "What is speculative optimization?",
        options: [
          "Assumes common case",
          "Deoptimization if wrong",
          "JIT technique",
          "All of above"
        ],
        answer: 3,
        explanation: "Speculative optimization assumes common paths."
      },
      {
        question: "What is on-stack replacement?",
        options: [
          "Replaces code during execution",
          "JIT optimization",
          "For long-running methods",
          "All of above"
        ],
        answer: 3,
        explanation: "OSR replaces code while method executes."
      },
      {
        question: "What is deoptimization?",
        answer: 3,
        options: [
          "Reverts to interpreter",
          "When assumptions fail",
          "Performance hit",
          "All of above"
        ],
        explanation: "Deoptimization reverts to interpreted code."
      },
      {
        question: "What is profile-guided optimization?",
        options: [
          "Uses runtime profiles",
          "Better optimizations",
          "JIT feature",
          "All of above"
        ],
        answer: 3,
        explanation: "PGO uses runtime profiles for optimization."
      },
      {
        question: "What is vectorization?",
        options: [
          "SIMD instructions",
          "Auto-vectorization in JIT",
          "Performance boost",
          "All of above"
        ],
        answer: 3,
        explanation: "Vectorization uses SIMD for parallel operations."
      },
      {
        question: "What is superword optimization?",
        options: [
          "Auto-vectorization algorithm",
          "JIT optimization",
          "Finds parallel operations",
          "All of above"
        ],
        answer: 3,
        explanation: "Superword finds parallel operations for vectorization."
      },
      {
        question: "What is loop unrolling?",
        options: [
          "JIT optimization",
          "Reduces loop overhead",
          "Increases code size",
          "All of above"
        ],
        answer: 3,
        explanation: "Loop unrolling reduces iteration overhead."
      },
      {
        question: "What is loop peeling?",
        options: [
          "Removes first/last iteration",
          "Optimization",
          "For special cases",
          "All of above"
        ],
        answer: 3,
        explanation: "Loop peeling handles edge iterations separately."
      },
      {
        question: "What is loop fission?",
        options: [
          "Splits loop into multiple",
          "Optimization",
          "Better cache usage",
          "All of above"
        ],
        answer: 3,
        explanation: "Loop fission splits loops for optimization."
      },
      {
        question: "What is loop fusion?",
        options: [
          "Combines loops",
          "Optimization",
          "Reduces overhead",
          "All of above"
        ],
        answer: 3,
        explanation: "Loop fusion combines adjacent loops."
      },
      {
        question: "What is common subexpression elimination?",
        options: [
          "JIT optimization",
          "Reuses computed values",
          "Redundant computation",
          "All of above"
        ],
        answer: 3,
        explanation: "CSE eliminates duplicate computations."
      },
      {
        question: "What is dead code elimination?",
        options: [
          "Removes unused code",
          "JIT optimization",
          "Reduces size",
          "All of above"
        ],
        answer: 3,
        explanation: "DCE removes code that doesn't affect output."
      },
      {
        question: "What is constant folding?",
        options: [
          "Compile-time evaluation",
          "JIT optimization",
          "Simplifies expressions",
          "All of above"
        ],
        answer: 3,
        explanation: "Constant folding evaluates expressions at compile time."
      },
      {
        question: "What is inline caching?",
        options: [
          "Optimization for virtual calls",
          "Caches target method",
          "Polymorphic inline cache",
          "All of above"
        ],
        answer: 3,
        explanation: "Inline caching optimizes method dispatch."
      },
      {
        question: "What is megamorphic call site?",
        options: [
          "Many possible targets",
          "Harder to optimize",
          "Slower dispatch",
          "All of above"
        ],
        answer: 3,
        explanation: "Megamorphic sites have many implementations."
      },
      {
        question: "What is bimorphic call site?",
        options: [
          "Two possible targets",
          "Easier to optimize",
          "Inline caching works",
          "All of above"
        ],
        answer: 3,
        explanation: "Bimorphic sites have two implementations."
      },
      {
        question: "What is monomorphic call site?",
        options: [
          "Single target",
          "Easiest to optimize",
          "Direct call",
          "All of above"
        ],
        answer: 3,
        explanation: "Monomorphic sites have single implementation."
      },
      {
        question: "What is stack walking API?",
        options: [
          "Java 9+",
          "StackWalker class",
          "Efficient stack traversal",
          "All of above"
        ],
        answer: 3,
        explanation: "Stack walking API for efficient stack inspection."
      },
      {
        question: "What is variable handles?",
        options: [
          "Java 9+",
          "VarHandle class",
          "Atomic operations",
          "All of above"
        ],
        answer: 3,
        explanation: "VarHandle for safe atomic operations."
      },
      {
        question: "What is memory fence?",
        options: [
          "Memory ordering guarantee",
          "Prevents reordering",
          "VarHandle fences",
          "All of above"
        ],
        answer: 3,
        explanation: "Memory fences enforce memory ordering."
      },
      {
        question: "What is release/acquire semantics?",
        options: [
          "Memory ordering",
          "Release: writes visible",
          "Acquire: reads see writes",
          "All of above"
        ],
        answer: 3,
        explanation: "Release/acquire for memory visibility."
      },
      {
        question: "What is opaque mode?",
        options: [
          "VarHandle mode",
          "No ordering guarantees",
          "Basic atomicity",
          "All of above"
        ],
        answer: 3,
        explanation: "Opaque mode provides basic atomicity."
      },
      {
        question: "What is plain mode?",
        options: [
          "VarHandle mode",
          "No atomicity",
          "Normal access",
          "All of above"
        ],
        answer: 3,
        explanation: "Plain mode has no special guarantees."
      },
      {
        question: "What is method handles?",
        options: [
          "Java 7+",
          "MethodHandle class",
          "Type-safe method references",
          "All of above"
        ],
        answer: 3,
        explanation: "Method handles for method invocation."
      },
      {
        question: "What is invokedynamic?",
        options: [
          "Bytecode instruction",
          "Dynamic language support",
          "Lambda implementation",
          "All of above"
        ],
        answer: 3,
        explanation: "invokedynamic for dynamic method invocation."
      },
      {
        question: "What is call site?",
        options: [
          "invokedynamic component",
          "Mutable target",
          "Bootstrap method creates",
          "All of above"
        ],
        answer: 3,
        explanation: "Call site holds method handle for invokedynamic."
      },
      {
        question: "What is bootstrap method?",
        options: [
          "invokedynamic initializer",
          "Returns call site",
          "Called once",
          "All of above"
        ],
        answer: 3,
        explanation: "Bootstrap method initializes invokedynamic."
      },
      {
        question: "What is constant call site?",
        options: [
          "Immutable call site",
          "Constant target",
          "Most common",
          "All of above"
        ],
        answer: 3,
        explanation: "Constant call site has fixed target."
      },
      {
        question: "What is mutable call site?",
        options: [
          "Can change target",
          "Dynamic updates",
          "Rare",
          "All of above"
        ],
        answer: 3,
        explanation: "Mutable call site target can change."
      },
      {
        question: "What is volatile call site?",
        options: [
          "Mutable with memory barrier",
          "Thread-safe updates",
          "More expensive",
          "All of above"
        ],
        answer: 3,
        explanation: "Volatile call site has memory barriers."
      },
      {
        question: "What is switch expressions?",
        options: [
          "Java 14+",
          "Returns value",
          "Arrow syntax",
          "All of above"
        ],
        answer: 3,
        explanation: "Switch expressions return values."
      },
      {
        question: "What is pattern matching for instanceof?",
        options: [
          "Java 16+",
          "instanceof with binding",
          "Reduces boilerplate",
          "All of above"
        ],
        answer: 3,
        explanation: "Pattern matching simplifies instanceof."
      },
      {
        question: "What is record pattern?",
        options: [
          "Java 19+",
          "Deconstructs records",
          "Pattern matching",
          "All of above"
        ],
        answer: 3,
        explanation: "Record patterns deconstruct records."
      },
      {
        question: "What is array pattern?",
        options: [
          "Java 20+",
          "Deconstructs arrays",
          "Pattern matching",
          "All of above"
        ],
        answer: 3,
        explanation: "Array patterns deconstruct arrays."
      },
      {
        question: "What is sealed type pattern?",
        options: [
          "Java 21+",
          "Exhaustiveness checking",
          "With sealed classes",
          "All of above"
        ],
        answer: 3,
        explanation: "Sealed type patterns for exhaustiveness."
      },
      {
        question: "What is unnamed pattern?",
        options: [
          "Java 21+",
          "_ in pattern matching",
          "Ignores components",
          "All of above"
        ],
        answer: 3,
        explanation: "Unnamed patterns ignore components."
      },
      {
        question: "What is unnamed variable?",
        options: [
          "Java 21+",
          "_ for unused variables",
          "Improves readability",
          "All of above"
        ],
        answer: 3,
        explanation: "Unnamed variables for unused values."
      },
      {
        question: "What is string templates?",
        options: [
          "Java 21+ preview",
          "STR processor",
          "Better string interpolation",
          "All of above"
        ],
        answer: 3,
        explanation: "String templates improve string building."
      },
      {
        question: "What is virtual threads?",
        options: [
          "Java 21+",
          "Lightweight threads",
          "Project Loom",
          "All of above"
        ],
        answer: 3,
        explanation: "Virtual threads are lightweight threads."
      },
      {
        question: "What is structured concurrency?",
        options: [
          "Java 21+ preview",
          "Scoped values",
          "Better error handling",
          "All of above"
        ],
        answer: 3,
        explanation: "Structured concurrency for better async code."
      },
      {
        question: "What is scoped values?",
        options: [
          "Java 21+ preview",
          "InheritableThreadLocal alternative",
          "Structured concurrency",
          "All of above"
        ],
        answer: 3,
        explanation: "Scoped values for thread-local in structured concurrency."
      },
      {
        question: "What is foreign function API?",
        options: [
          "Java 21+ preview",
          "FFI for native code",
          "Project Panama",
          "All of above"
        ],
        answer: 3,
        explanation: "FFI for calling native libraries."
      },
      {
        question: "What is foreign memory API?",
        options: [
          "Java 21+ preview",
          "Safe native memory access",
          "Project Panama",
          "All of above"
        ],
        answer: 3,
        explanation: "Foreign memory for safe native memory access."
      },
      {
        question: "What is memory segment?",
        options: [
          "Foreign memory unit",
          "Bounds checking",
          "Safe memory access",
          "All of above"
        ],
        answer: 3,
        explanation: "Memory segments represent native memory regions."
      },
      {
        question: "What is memory session?",
        options: [
          "Foreign memory lifecycle",
          "Arena allocator",
          "Automatic cleanup",
          "All of above"
        ],
        answer: 3,
        explanation: "Memory sessions manage foreign memory lifecycle."
      },
      {
        question: "What is value layout?",
        options: [
          "Foreign memory type description",
          "Size, alignment, endianness",
          "Type-safe access",
          "All of above"
        ],
        answer: 3,
        explanation: "Value layouts describe memory types."
      },
      {
        question: "What is group layout?",
        options: [
          "Foreign memory struct layout",
          "Sequence of layouts",
          "C struct equivalent",
          "All of above"
        ],
        answer: 3,
        explanation: "Group layouts describe struct layouts."
      },
      {
        question: "What is method type?",
        options: [
          "Method signature representation",
          "MethodHandle parameter",
          "Return type + parameter types",
          "All of above"
        ],
        answer: 3,
        explanation: "Method type represents method signature."
      },
      {
        question: "What is method descriptor?",
        options: [
          "JVM internal method signature",
          "Bytecode level",
          "Different from Java syntax",
          "All of above"
        ],
        answer: 3,
        explanation: "Method descriptor is JVM method signature format."
      },
      {
        question: "What is constant dynamic?",
        options: [
          "Java 11+",
          "Dynamic constant",
          "invokedynamic for constants",
          "All of above"
        ],
        answer: 3,
        explanation: "Constant dynamic creates constants dynamically."
      },
      {
        question: "What is nest host?",
        options: [
          "Java 11+",
          "Outer class in nest",
          "Nest-based access control",
          "All of above"
        ],
        answer: 3,
        explanation: "Nest host is the outer class in nest."
      },
      {
        question: "What is nest member?",
        options: [
          "Java 11+",
          "Inner class in nest",
          "Nest-based access control",
          "All of above"
        ],
        answer: 3,
        explanation: "Nest members are classes in same nest."
      },
      {
        question: "What is nestmate test?",
        options: [
          "Check if classes in same nest",
          "Java 11+",
          "Reflection API",
          "All of above"
        ],
        answer: 3,
        explanation: "Nestmate test checks nest membership."
      },
      {
        question: "What is hidden class?",
        options: [
          "Java 15+",
          "Not discoverable",
          "Dynamic proxies",
          "All of above"
        ],
        answer: 3,
        explanation: "Hidden classes are not found by reflection."
      },
      {
        question: "What is lookup object?",
        options: [
          "MethodHandles.Lookup",
          "Creates method handles",
          "Access control",
          "All of above"
        ],
        answer: 3,
        explanation: "Lookup objects create method handles with access."
      },
      {
        question: "What is private lookup?",
        options: [
          "Access private members",
          "Lookup object",
          "Reflection alternative",
          "All of above"
        ],
        answer: 3,
        explanation: "Private lookup accesses private members."
      },
      {
        question: "What is method handle combinator?",
        options: [
          "Combines method handles",
          "filterArguments, foldArguments",
          "Powerful transformations",
          "All of above"
        ],
        answer: 3,
        explanation: "Combinators transform method handles."
      },
      {
        question: "What is guardWithTest?",
        options: [
          "Method handle combinator",
          "Conditional execution",
          "If-then-else",
          "All of above"
        ],
        answer: 3,
        explanation: "guardWithTest creates conditional method handle."
      },
      {
        question: "What is catchException?",
        options: [
          "Method handle combinator",
          "Exception handling",
          "Try-catch",
          "All of above"
        ],
        answer: 3,
        explanation: "catchException adds exception handling."
      },
      {
        question: "What is spreadInvoker?",
        options: [
          "Method handle combinator",
          "Array to arguments",
          "Varargs handling",
          "All of above"
        ],
        answer: 3,
        explanation: "spreadInvoker spreads array to arguments."
      },
      {
        question: "What is exactInvoker?",
        options: [
          "Method handle combinator",
          "Exact type match",
          "Strict invocation",
          "All of above"
        ],
        answer: 3,
        explanation: "exactInvoker requires exact type match."
      },
      {
        question: "What is invoker?",
        options: [
          "Method handle combinator",
          "Flexible invocation",
          "Type adaptation",
          "All of above"
        ],
        answer: 3,
        explanation: "invoker adapts argument types."
      },
      {
        question: "What is array constructor?",
        options: [
          "Method handle",
          "Creates arrays",
          "newArray method handle",
          "All of above"
        ],
        answer: 3,
        explanation: "Array constructor method handles."
      },
      {
        question: "What is array getter?",
        options: [
          "Method handle",
          "Gets array element",
          "arrayElementGetter",
          "All of above"
        ],
        answer: 3,
        explanation: "Array getter method handles."
      },
      {
        question: "What is array setter?",
        options: [
          "Method handle",
          "Sets array element",
          "arrayElementSetter",
          "All of above"
        ],
        answer: 3,
        explanation: "Array setter method handles."
      },
      {
        question: "What is array length?",
        options: [
          "Method handle",
          "Gets array length",
          "arrayLength",
          "All of above"
        ],
        answer: 3,
        explanation: "Array length method handle."
      },
      {
        question: "What is constant method handle?",
        options: [
          "Method handle returning constant",
          "constant",
          "No arguments",
          "All of above"
        ],
        answer: 3,
        explanation: "Constant method handle returns fixed value."
      },
      {
        question: "What is identity method handle?",
        options: [
          "Method handle returning argument",
          "identity",
          "Pass-through",
          "All of above"
        ],
        answer: 3,
        explanation: "Identity method handle returns first argument."
      },
      {
        question: "What is zero method handle?",
        options: [
          "Method handle returning default",
          "zero",
          "0, null, false",
          "All of above"
        ],
        answer: 3,
        explanation: "Zero method handle returns default value."
      },
      {
        question: "What is empty method handle?",
        options: [
          "Method handle doing nothing",
          "empty",
          "Drops arguments, returns void",
          "All of above"
        ],
        answer: 3,
        explanation: "Empty method handle does nothing."
      },
      {
        question: "What is dropArguments?",
        options: [
          "Method handle combinator",
          "Ignores arguments",
          "Adds dummy parameters",
          "All of above"
        ],
        answer: 3,
        explanation: "dropArguments ignores arguments."
      },
      {
        question: "What is filterArguments?",
        options: [
          "Method handle combinator",
          "Transforms arguments",
          "Pre-processing",
          "All of above"
        ],
        answer: 3,
        explanation: "filterArguments transforms arguments."
      },
      {
        question: "What is foldArguments?",
        options: [
          "Method handle combinator",
          "Combines arguments",
          "Pre-processing with result",
          "All of above"
        ],
        answer: 3,
        explanation: "foldArguments combines arguments."
      },
      {
        question: "What is permuteArguments?",
        options: [
          "Method handle combinator",
          "Reorders arguments",
          "Argument shuffling",
          "All of above"
        ],
        answer: 3,
        explanation: "permuteArguments reorders arguments."
      },
      {
        question: "What is collectArguments?",
        options: [
          "Method handle combinator",
          "Combines trailing arguments",
          "Array to multiple args",
          "All of above"
        ],
        answer: 3,
        explanation: "collectArguments combines arguments."
      },
      {
        question: "What is insertArguments?",
        options: [
          "Method handle combinator",
          "Adds constant arguments",
          "Binds parameters",
          "All of above"
        ],
        answer: 3,
        explanation: "insertArguments adds constant arguments."
      },
      {
        question: "What is bindTo?",
        options: [
          "Method handle combinator",
          "Binds receiver",
          "Instance method binding",
          "All of above"
        ],
        answer: 3,
        explanation: "bindTo binds receiver to method handle."
      },
      {
        question: "What is asCollector?",
        options: [
          "Method handle combinator",
          "Collects trailing args to array",
          "Varargs simulation",
          "All of above"
        ],
        answer: 3,
        explanation: "asCollector collects args to array."
      },
      {
        question: "What is asSpreader?",
        options: [
          "Method handle combinator",
          "Spreads array to args",
          "Varargs simulation",
          "All of above"
        ],
        answer: 3,
        explanation: "asSpreader spreads array to arguments."
      },
      {
        question: "What is asVarargsCollector?",
        options: [
          "Method handle combinator",
          "Varargs adapter",
          "Flexible arity",
          "All of above"
        ],
        answer: 3,
        explanation: "asVarargsCollector makes varargs method handle."
      },
      {
        question: "What is explicitCastArguments?",
        options: [
          "Method handle combinator",
          "Explicit type casting",
          "Type conversion",
          "All of above"
        ],
        answer: 3,
        explanation: "explicitCastArguments casts argument types."
      },
      {
        question: "What is filterReturnValue?",
        options: [
          "Method handle combinator",
          "Transforms return value",
          "Post-processing",
          "All of above"
        ],
        answer: 3,
        explanation: "filterReturnValue transforms return value."
      },
      {
        question: "What is foldReturnValue?",
        options: [
          "Method handle combinator",
          "Combines return with argument",
          "Post-processing with arg",
          "All of above"
        ],
        answer: 3,
        explanation: "foldReturnValue combines return with argument."
      },
      {
        question: "What is tryFinally?",
        options: [
          "Method handle combinator",
          "Try-finally semantics",
          "Cleanup action",
          "All of above"
        ],
        answer: 3,
        explanation: "tryFinally adds finally-like cleanup."
      }
    ]
  }
};