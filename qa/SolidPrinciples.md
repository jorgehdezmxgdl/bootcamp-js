# Solid Principles

The SOLID Principles are five principles of Object-Oriented class design. They are a set of rules and best practices to follow while designing a class structure.

![1_QXKvE2F44XTkBi3YDvroWw.jpeg](Solid%20Principles%203b447d8084b24bf2b786bf8fbe6617f8/1_QXKvE2F44XTkBi3YDvroWw.jpeg)

### Explanation

**The Single Responsibility Principle**

The Single Responsibility Principle states that **a class should do one thing and therefore it should have only a single reason to change**.

To state this principle more technically: Only one potential change (database logic, logging logic, and so on.) in the software’s specification should be able to affect the specification of the class.

**Open-Closed Principle**

The Open-Closed Principle requires that **classes should be open for extension and closed to modification.**

Modification means changing the code of an existing class, and extension means adding new functionality. So what this principle wants to say is: We should be able to add new functionality without touching the existing code for the class. This is because whenever we modify the existing code, we are taking the risk of creating potential bugs. So we should avoid touching the tested and reliable (mostly) production code if possible.

So what this principle wants to say is: We should be able to add new functionality without touching the existing code for the class. This is because whenever we modify the existing code, we are taking the risk of creating potential bugs. So we should avoid touching the tested and reliable (mostly) production code if possible.

But how are we going to add new functionality without touching the class, you may ask. It is usually done with the help of interfaces and abstract classes.

**Liskov Substitution Principle**

The Liskov Substitution Principle states that subclasses should be substitutable for their base classes. This means that, given that class B is a subclass of class A, we should be able to pass an object of class B to any method that expects an object of class A and the method should not give any weird output in that case.

This is the expected behavior, because when we use inheritance we assume that the child class inherits everything that the superclass has. The child class extends the behavior but never narrows it down. Therefore, when a class does not obey this principle, it leads to some nasty bugs that are hard to detect.

**Interface Segregation Principle**

Segregation means keeping things separated, and the Interface Segregation Principle is about separating the interfaces.

The principle states that many client-specific interfaces are better than one general-purpose interface. Clients should not be forced to implement a function they do no need.

**Dependency Inversion Principle**

The Dependency Inversion principle states that our classes should depend upon interfaces or abstract classes instead of concrete classes and functions.  These two principles are indeed related and we have applied this pattern before while we were discussing the Open-Closed Principle.

We want our classes to be open to extension, so we have reorganized our dependencies to depend on interfaces instead of concrete classes. 

### Examples Javascript

[SOLID Principles in JavaScript and TypeScript](https://www.xenonstack.com/blog/solid-principles-javascript)

[S.O.L.I.D The first 5 principles of Object Oriented Design with JavaScript](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

[SOLID Principles every Developer Should Know](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688)