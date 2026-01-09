const javaTopics = [

  // 1️⃣ Java Introduction
  {
    title: "Java Introduction",
    subtopics: [
      { name: "What is Java", file: "lessons/intro.html" },
      { name: "History of Java", file: "lessons/history.html" },
      { name: "Features of Java", file: "lessons/features.html" },
      { name: "Applications of Java", file: "lessons/applications.html" },
      { name: "Java Buzzwords", file: "lessons/javabuzzwords.html" },
      { name: "Java Editions (SE, EE, ME)", file: "lessons/editions.html" },
      { name: "Java Architecture", file: "lessons/architecture.html" },
      { name: "JVM, JRE, JDK", file: "lessons/jvm-jre-jdk.html" },
      { name: "Java Compilation Process", file: "lessons/compilation.html" },
      { name: "Java Execution Process", file: "lessons/execution.html" },
      { name: "Platform Independence", file: "lessons/platform.html" },
      { name: "Java Security Model", file: "lessons/security-model.html" },
      { name: "Advantages of Java", file: "lessons/advantages.html" },
      { name: "Disadvantages of Java", file: "lessons/disadvantages.html" },
      { name: "Java vs C", file: "lessons/java-vs-c.html" },
      { name: "Java vs C++", file: "lessons/java-vs-cpp.html" },
      { name: "Java vs Python", file: "lessons/java-vs-python.html" },
      { name: "Java Use Cases", file: "lessons/use-cases.html" },
      { name: "Java Career Scope", file: "lessons/career.html" }
    ]
  },

  // 2️⃣ Environment Setup
  {
    title: "Environment Setup",
    subtopics: [
      { name: "Installing JDK", file: "lessons/install-jdk.html" },
      { name: "Path & Classpath", file: "lessons/path.html" },
      { name: "Java Directory Structure", file: "lessons/directory-structure.html" },
      { name: "javac Tool", file: "lessons/javac.html" },
      { name: "java Tool", file: "lessons/java-tool.html" },
      { name: "jar Tool", file: "lessons/jar.html" },
      { name: "javadoc Tool", file: "lessons/javadoc.html" },
      { name: "Java IDEs", file: "lessons/ides.html" }
    ]
  },

  // 3️⃣ Java Program Basics
  {
    title: "Java Program Basics",
    subtopics: [
      { name: "Structure of Java Program", file: "lessons/program-structure.html" },
      { name: "First Java Program", file: "lessons/first-program.html" },
      { name: "main() Method", file: "lessons/main-method.html" },
      { name: "Java Source File Rules", file: "lessons/source-file.html" },
      { name: "Java Coding Standards", file: "lessons/coding-standards.html" },
      { name: "Java Naming Conventions", file: "lessons/naming.html" },
      { name: "Java Comments", file: "lessons/comments.html" }
    ]
  },

  // 4️⃣ Java Tokens
  {
    title: "Java Tokens",
    subtopics: [
      { name: "Tokens", file: "lessons/tokens.html" },
      { name: "Keywords", file: "lessons/keywords.html" },
      { name: "Identifiers", file: "lessons/identifiers.html" },
      { name: "Literals", file: "lessons/literals.html" },
      { name: "Operators", file: "lessons/operators.html" },
      { name: "Separators", file: "lessons/separators.html" }
    ]
  },

  // 5️⃣ Data Types & Variables
  {
    title: "Data Types & Variables",
    subtopics: [
     
      { name: "Primitive Data Types", file: "lessons/primitive.html" },
      { name: "Non-Primitive Data Types", file: "lessons/non-primitive.html" },
      { name: "Variables", file: "lessons/variables.html" },
      { name: "Local Variables", file: "lessons/local.html" },
      { name: "Instance Variables", file: "lessons/instance.html" },
      { name: "Static Variables", file: "lessons/static.html" },
       { name: "Type Casting", file: "lessons/typecasting.html" },
      { name: "Implicit Type Casting", file: "lessons/implicit.html" },
      { name: "Explicit Type Casting", file: "lessons/explicit.html" }
    ]
  },

  // 6️⃣ Java Operators
  {
    title: "Java Operators",
    subtopics: [
      { name: "Arithmetic Operators", file: "lessons/arithmetic.html" },
      { name: "Relational Operators", file: "lessons/relational.html" },
      { name: "Logical Operators", file: "lessons/logical.html" },
      { name: "Assignment Operators", file: "lessons/assignment.html" },
      { name: "Unary Operators", file: "lessons/unary.html" },
      { name: "Bitwise Operators", file: "lessons/bitwise.html" },
      { name: "Ternary Operator", file: "lessons/ternary.html" },
      { name: "instanceof Operator", file: "lessons/instanceof.html" }
    ]
  },

  // 7️⃣ Control Statements
  {
    title: "Control Statements",
    subtopics: [
      { name: "if Statement", file: "lessons/if.html" },
      { name: "if-else Statement", file: "lessons/if-else.html" },
      { name: "nested if", file: "lessons/nested-if.html" },
      { name: "switch Statement", file: "lessons/switch.html" },
      { name: "for Loop", file: "lessons/for.html" },
      { name: "while Loop", file: "lessons/while.html" },
      { name: "do-while Loop", file: "lessons/do-while.html" },
      { name: "nested Loops", file: "lessons/nested-loops.html" },
      { name: "break Statement", file: "lessons/break.html" },
      { name: "continue Statement", file: "lessons/continue.html" },
      { name: "return Statement", file: "lessons/return.html" }
    ]
  },

  // 8️⃣ Arrays
  {
    title: "Arrays",
    subtopics: [
      { name: "Single Dimensional Array", file: "lessons/array-1d.html" },
      { name: "Multi Dimensional Array", file: "lessons/array-2d.html" },
      { name: "Array Initialization", file: "lessons/array-init.html" },
      { name: "Array Traversal", file: "lessons/array-traversal.html" },
      { name: "Anonymous Arrays", file: "lessons/anonymous-array.html" },
      { name: "Array vs Collection", file: "lessons/array-vs-collection.html" }
    ]
  },

  // 9️⃣ Strings
  {
    title: "Strings",
    subtopics: [
      { name: "String Class", file: "lessons/string.html" },
      { name: "String Object Creation", file: "lessons/string-creation.html" },
      { name: "String Methods", file: "lessons/string-methods.html" },
      { name: "StringBuffer", file: "lessons/stringbuffer.html" },
      { name: "StringBuilder", file: "lessons/stringbuilder.html" },
      { name: "String vs StringBuffer vs StringBuilder", file: "lessons/string-compare.html" },
      { name: "Immutable Strings", file: "lessons/immutable.html" }
    ]
  },

  // 🔟 OOP Concepts
  {
    title: "OOP Concepts",
    subtopics: [
      { name: "Class & Object", file: "lessons/class-object.html" },
      { name: "Constructors", file: "lessons/constructors.html" },
      { name: "Default Constructor", file: "lessons/default-constructor.html" },
      { name: "Parameterized Constructor", file: "lessons/parameterized.html" },
      { name: "this Keyword", file: "lessons/this.html" },
      { name: "static Keyword", file: "lessons/static.html" },
      { name: "Encapsulation", file: "lessons/encapsulation.html" },
      { name: "Inheritance", file: "lessons/inheritance.html" },
      { name: "Polymorphism", file: "lessons/polymorphism.html" },
      { name: "Abstraction", file: "lessons/abstraction.html" },
      { name: "Interface", file: "lessons/interface.html" },
      { name: "Object Class", file: "lessons/object-class.html" }
    ]
  },

  // 1️⃣1️⃣ Packages & Access Control
  {
    title: "Packages & Access Control",
    subtopics: [
      { name: "Packages", file: "lessons/packages.html" },
      { name: "Built-in Packages", file: "lessons/builtin-packages.html" },
      { name: "User-defined Packages", file: "lessons/user-packages.html" },
      { name: "private", file: "lessons/private.html" },
      { name: "default", file: "lessons/default.html" },
      { name: "protected", file: "lessons/protected.html" },
      { name: "public", file: "lessons/public.html" }
    ]
  },

  // 1️⃣2️⃣ Exception Handling
  {
    title: "Exception Handling",
    subtopics: [
      { name: "Exception Hierarchy", file: "lessons/exception-hierarchy.html" },
      { name: "Checked Exceptions", file: "lessons/checked.html" },
      { name: "Unchecked Exceptions", file: "lessons/unchecked.html" },
      { name: "try-catch", file: "lessons/try-catch.html" },
      { name: "multiple catch", file: "lessons/multiple-catch.html" },
      { name: "finally", file: "lessons/finally.html" },
      { name: "throw", file: "lessons/throw.html" },
      { name: "throws", file: "lessons/throws.html" },
      { name: "Custom Exceptions", file: "lessons/custom-exception.html" }
    ]
  },

  // 1️⃣3️⃣ Multithreading
  {
    title: "Multithreading",
    subtopics: [
      { name: "Thread Life Cycle", file: "lessons/thread-life.html" },
      { name: "Thread Class", file: "lessons/thread-class.html" },
      { name: "Runnable Interface", file: "lessons/runnable.html" },
      { name: "Thread Methods", file: "lessons/thread-methods.html" },
      { name: "Thread Priority", file: "lessons/thread-priority.html" },
      { name: "Synchronization", file: "lessons/synchronization.html" },
      { name: "Inter-thread Communication", file: "lessons/inter-thread.html" },
      { name: "Deadlock", file: "lessons/deadlock.html" }
    ]
  },

  // 1️⃣4️⃣ Java I/O
  {
    title: "Java I/O",
    subtopics: [
      { name: "Byte Streams", file: "lessons/byte-streams.html" },
      { name: "Character Streams", file: "lessons/char-streams.html" },
      { name: "File Class", file: "lessons/file.html" },
      { name: "FileInputStream", file: "lessons/fis.html" },
      { name: "FileOutputStream", file: "lessons/fos.html" },
      { name: "FileReader", file: "lessons/filereader.html" },
      { name: "FileWriter", file: "lessons/filewriter.html" },
      { name: "Buffered Streams", file: "lessons/buffered.html" },
      { name: "Serialization", file: "lessons/serialization.html" },
      { name: "Deserialization", file: "lessons/deserialization.html" }
    ]
  },

  // 1️⃣5️⃣ Collections Framework
  {
    title: "Collections Framework",
    subtopics: [
      { name: "Collection Interface", file: "lessons/collection.html" },
      { name: "ArrayList", file: "lessons/arraylist.html" },
      { name: "LinkedList", file: "lessons/linkedlist.html" },
      { name: "Vector", file: "lessons/vector.html" },
      { name: "HashSet", file: "lessons/hashset.html" },
      { name: "LinkedHashSet", file: "lessons/linkedhashset.html" },
      { name: "TreeSet", file: "lessons/treeset.html" },
      { name: "PriorityQueue", file: "lessons/priorityqueue.html" },
      { name: "HashMap", file: "lessons/hashmap.html" },
      { name: "LinkedHashMap", file: "lessons/linkedhashmap.html" },
      { name: "TreeMap", file: "lessons/treemap.html" },
      { name: "Iterator", file: "lessons/iterator.html" },
      { name: "Comparable & Comparator", file: "lessons/comparator.html" }
    ]
  },

  // 1️⃣6️⃣ Generics
  {
    title: "Generics",
    subtopics: [
      { name: "Generic Classes", file: "lessons/generic-class.html" },
      { name: "Generic Methods", file: "lessons/generic-method.html" },
      { name: "Bounded Types", file: "lessons/bounded.html" },
      { name: "Wildcards", file: "lessons/wildcards.html" }
    ]
  },

  // 1️⃣7️⃣ Wrapper Classes
  {
    title: "Wrapper Classes",
    subtopics: [
      { name: "Primitive to Object", file: "lessons/wrapper.html" },
      { name: "Autoboxing", file: "lessons/autoboxing.html" },
      { name: "Unboxing", file: "lessons/unboxing.html" },
      { name: "Integer, Double, Character, Boolean", file: "lessons/wrapper-types.html" }
    ]
  },

  // 1️⃣8️⃣ Inner Classes
  {
    title: "Inner Classes",
    subtopics: [
      { name: "Member Inner Class", file: "lessons/member-inner.html" },
      { name: "Static Inner Class", file: "lessons/static-inner.html" },
      { name: "Local Inner Class", file: "lessons/local-inner.html" },
      { name: "Anonymous Inner Class", file: "lessons/anonymous-inner.html" }
    ]
  },

  // 1️⃣9️⃣ Lambda Expressions
  {
    title: "Lambda Expressions",
    subtopics: [
      { name: "Functional Interface", file: "lessons/functional.html" },
      { name: "Lambda Syntax", file: "lessons/lambda-syntax.html" },
      { name: "Lambda with Collections", file: "lessons/lambda-collections.html" }
    ]
  },

  // 2️⃣0️⃣ Stream API
  {
    title: "Stream API",
    subtopics: [
      { name: "Stream Creation", file: "lessons/stream-create.html" },
      { name: "Intermediate Operations", file: "lessons/intermediate.html" },
      { name: "Terminal Operations", file: "lessons/terminal.html" },
      { name: "Filtering", file: "lessons/filter.html" },
      { name: "Mapping", file: "lessons/map.html" },
      { name: "Collectors", file: "lessons/collectors.html" }
    ]
  },

  // 2️⃣1️⃣ Date & Time API
  {
    title: "Date & Time API",
    subtopics: [
      { name: "Date Class", file: "lessons/date.html" },
      { name: "Calendar Class", file: "lessons/calendar.html" },
      { name: "LocalDate", file: "lessons/localdate.html" },
      { name: "LocalTime", file: "lessons/localtime.html" },
      { name: "LocalDateTime", file: "lessons/localdatetime.html" }
    ]
  },

  // 2️⃣2️⃣ JDBC
  {
    title: "JDBC",
    subtopics: [
      { name: "JDBC Architecture", file: "lessons/jdbc-architecture.html" },
      { name: "JDBC Drivers", file: "lessons/jdbc-drivers.html" },
      { name: "Connecting to Database", file: "lessons/db-connect.html" },
      { name: "Statement", file: "lessons/statement.html" },
      { name: "PreparedStatement", file: "lessons/preparedstatement.html" },
      { name: "ResultSet", file: "lessons/resultset.html" },
      { name: "CRUD Operations", file: "lessons/crud.html" }
    ]
  },

  // 2️⃣3️⃣ Networking
  {
    title: "Networking",
    subtopics: [
      { name: "URL", file: "lessons/url.html" },
      { name: "InetAddress", file: "lessons/inetaddress.html" },
      { name: "Socket Programming", file: "lessons/socket.html" },
      { name: "TCP & UDP", file: "lessons/tcp-udp.html" },
      { name: "Client-Server Model", file: "lessons/client-server.html" }
    ]
  },

  // 2️⃣4️⃣ Annotations
  {
    title: "Annotations",
    subtopics: [
      { name: "Built-in Annotations", file: "lessons/builtin-annotations.html" },
      { name: "Custom Annotations", file: "lessons/custom-annotations.html" },
      { name: "Retention Policy", file: "lessons/retention.html" }
    ]
  },

  // 2️⃣5️⃣ Reflection API
  {
    title: "Reflection API",
    subtopics: [
      { name: "Class Class", file: "lessons/class-class.html" },
      { name: "Methods", file: "lessons/reflection-methods.html" },
      { name: "Fields", file: "lessons/reflection-fields.html" },
      { name: "Constructors", file: "lessons/reflection-constructors.html" }
    ]
  },

  // 2️⃣6️⃣ Memory Management
  {
    title: "Memory Management",
    subtopics: [
      { name: "Heap Memory", file: "lessons/heap.html" },
      { name: "Stack Memory", file: "lessons/stack.html" },
      { name: "Method Area", file: "lessons/method-area.html" },
      { name: "Garbage Collection", file: "lessons/gc.html" },
      { name: "Object Life Cycle", file: "lessons/object-life.html" }
    ]
  },

  // 2️⃣7️⃣ Java Security
  {
    title: "Java Security",
    subtopics: [
      { name: "Bytecode Verifier", file: "lessons/bytecode.html" },
      { name: "Class Loader Security", file: "lessons/classloader-security.html" },
      { name: "Security Manager", file: "lessons/security-manager.html" }
    ]
  },

  // 2️⃣8️⃣ Java New Features
  {
    title: "Java New Features",
    subtopics: [
      { name: "Java 8 Features", file: "lessons/java8.html" },
      { name: "Java 11 Features", file: "lessons/java11.html" },
      { name: "Java 17 Features", file: "lessons/java17.html" }
    ]
  },

  // 2️⃣9️⃣ Java Testing
  {
    title: "Java Testing",
    subtopics: [
      { name: "Unit Testing", file: "lessons/unit-testing.html" },
      { name: "JUnit Basics", file: "lessons/junit.html" }
    ]
  },

  // 3️⃣0️⃣ Interview & Practice
  {
    title: "Interview & Practice",
    subtopics: [
      { name: "Interview Questions", file: "lessons/interview.html" },
      { name: "Coding Problems", file: "lessons/problems.html" },
      { name: "MCQs", file: "lessons/mcqs.html" },
      { name: "Best Practices", file: "lessons/best-practices.html" }
    ]
  }

];
document.addEventListener("DOMContentLoaded", () => {

  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  javaTopics.forEach(topic => {
    const topicDiv = document.createElement("div");

    const title = document.createElement("div");
    title.className = "topic-title";
    title.textContent = topic.title;

    const ul = document.createElement("ul");
    ul.className = "subtopic-list";

    topic.subtopics.forEach(sub => {
      const li = document.createElement("li");
      li.textContent = sub.name;

      li.addEventListener("click", async () => {
        // Active highlight
        document
          .querySelectorAll(".subtopic-list li")
          .forEach(i => i.classList.remove("active"));

        li.classList.add("active");

        // Load content
        const res = await fetch(sub.file);
        content.innerHTML = await res.text();
      });

      ul.appendChild(li);
    });

    title.addEventListener("click", () => {
      ul.classList.toggle("open");
    });

    topicDiv.appendChild(title);
    topicDiv.appendChild(ul);
    sidebar.appendChild(topicDiv);
  });

});
const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const container = document.querySelector(".container");

if (localStorage.getItem("sidebar") === "hidden") {
  sidebar.classList.add("hidden");
  container.classList.add("full-width");
}

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  container.classList.toggle("full-width");

  localStorage.setItem(
    "sidebar",
    sidebar.classList.contains("hidden") ? "hidden" : "visible"
  );
});
