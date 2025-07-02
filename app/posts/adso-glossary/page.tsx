import Link from "next/link"
import { ArrowLeft, BookOpen, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ADSOGlossaryPage() {
  const glossaryTerms = [
    {
      term: "Algorithm",
      definition:
        "A step-by-step procedure or formula for solving a problem. In programming, algorithms are the logical sequences of instructions that tell a computer how to perform a specific task or solve a particular problem efficiently.",
    },
    {
      term: "API",
      definition:
        "Application Programming Interface - A set of protocols, routines, and tools that allow different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information.",
    },
    {
      term: "Array",
      definition:
        "A data structure that stores multiple elements of the same type in a sequential manner. Arrays allow you to store and access multiple values using a single variable name and index numbers to identify each element's position.",
    },
    {
      term: "Backend",
      definition:
        "The server-side part of a web application that handles data processing, database interactions, and business logic. Backend systems manage the functionality that users don't directly see but that powers the application's core operations.",
    },
    {
      term: "Bug",
      definition:
        "An error, flaw, or fault in a computer program that causes it to produce incorrect or unexpected results. Bugs can range from minor display issues to critical system failures that prevent the program from functioning properly.",
    },
    {
      term: "Class",
      definition:
        "A blueprint or template for creating objects in object-oriented programming. Classes define the properties (attributes) and behaviors (methods) that objects of that type will have, serving as a foundation for creating multiple instances.",
    },
    {
      term: "Compiler",
      definition:
        "A program that translates source code written in a high-level programming language into machine code or another target language. Compilers analyze the entire program before translation and optimize the code for better performance.",
    },
    {
      term: "Database",
      definition:
        "An organized collection of structured information or data, typically stored electronically in a computer system. Databases are managed by database management systems (DBMS) and allow for efficient storage, retrieval, and manipulation of data.",
    },
    {
      term: "Debug",
      definition:
        "The process of finding, analyzing, and fixing bugs or errors in computer programs. Debugging involves testing code, identifying problems, and implementing solutions to ensure the program works as intended.",
    },
    {
      term: "Deployment",
      definition:
        "The process of making a software application available for use in a production environment. This involves transferring code from development to live servers, configuring systems, and ensuring the application runs properly for end users.",
    },
    {
      term: "Framework",
      definition:
        "A pre-built foundation of code that provides a structure for developing applications. Frameworks include libraries, tools, and conventions that help developers build software more efficiently by providing common functionality and architectural patterns.",
    },
    {
      term: "Frontend",
      definition:
        "The client-side part of a web application that users interact with directly. Frontend development involves creating the user interface, user experience, and visual elements using technologies like HTML, CSS, and JavaScript.",
    },
    {
      term: "Function",
      definition:
        "A reusable block of code that performs a specific task. Functions take input parameters, process them according to defined logic, and often return a result. They help organize code, reduce repetition, and make programs more modular and maintainable.",
    },
    {
      term: "Hardware",
      definition:
        "When talking about computer hardware refers to the collection of the physical components that constitute a computer system. Hardware usually includes screen, motherboard, mouse, keyboard, hard disks, among other electronic parts. Without hardware, software could not be used.",
    },
    {
      term: "Inheritance",
      definition:
        "A fundamental concept in object-oriented programming where a new class (child class) can inherit properties and methods from an existing class (parent class). This promotes code reusability and establishes hierarchical relationships between classes.",
    },
    {
      term: "Library",
      definition:
        "A collection of pre-written code, functions, and procedures that developers can use in their programs. Libraries provide specific functionality and help developers avoid writing code from scratch, speeding up development and ensuring tested, reliable solutions.",
    },
    {
      term: "Loop",
      definition:
        "A programming construct that repeats a block of code multiple times until a specified condition is met. Loops are essential for automating repetitive tasks and processing collections of data efficiently in programs.",
    },
    {
      term: "Object",
      definition:
        "An instance of a class in object-oriented programming. Objects contain data (attributes) and code (methods) that define their behavior. They represent real-world entities or concepts and can interact with other objects in the program.",
    },
    {
      term: "Software",
      definition:
        "A collection of computer programs, procedures, and documentation that performs tasks on a computer system. Software includes applications, operating systems, and utilities that provide instructions for hardware to execute specific functions.",
    },
    {
      term: "Source Code",
      definition:
        "The human-readable version of a computer program written in a programming language. Source code contains the instructions and logic that define how a program should behave, and it must be compiled or interpreted to be executed by a computer.",
    },
    {
      term: "Syntax",
      definition:
        "The set of rules that define the structure and format of statements in a programming language. Syntax determines how code must be written for the compiler or interpreter to understand and process it correctly.",
    },
    {
      term: "Variable",
      definition:
        "A named storage location in computer memory that holds data which can be modified during program execution. Variables have types that determine what kind of data they can store and how that data can be manipulated.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <BookOpen className="mr-3 h-8 w-8 text-green-400" />
              <h1 className="text-4xl font-bold text-green-400">ADSO Glossary</h1>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              A comprehensive glossary of programming terms and definitions for software development students.
            </p>
            <div className="text-sm text-gray-500 mb-6">Published on January 20, 2024</div>
            <div className="flex items-center text-green-400 mb-8">
              <Search className="mr-2 h-5 w-5" />
              <span className="text-lg font-semibold">{glossaryTerms.length} Terms</span>
            </div>
          </header>

          <div className="space-y-6">
            {glossaryTerms.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-green-400 text-xl">{item.term}</CardTitle>
                    <Badge variant="outline" className="border-green-500 text-green-400">
                      {item.term.charAt(0).toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-800 border-gray-700 mt-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-green-400 font-semibold mb-2">About This Glossary</h3>
              <p className="text-gray-300 text-sm">
                This glossary contains essential programming terms that every software development student should know.
                Each definition is crafted to be clear and comprehensive, helping build a solid foundation in
                programming concepts.
              </p>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
