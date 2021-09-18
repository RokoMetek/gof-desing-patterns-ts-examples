## GOF - GANG OF FOUR

 - Design Patterns
 - Creational Patterns
 - Structural Patterns
 - Behavioral Patterns

### Key POINTS
 - Reusable solution for repeatable task and issues
 - Template of solution
 - Can be customized
 - GoF Patterns describe 23 design patterns (4 Main Groups)

![GOF PATTERNS](https://live.staticflickr.com/7197/6804689564_8a6ff3efff_b.jpg)
### Singletone Design Pattern

> Ensure that a class has only one instance and provide a global point of access to it.

 - Declare private static field of same type
 - Make constructor private
 - Declare static function as public, that will return instance of this class (accessor function)
 - - Return reference to  same object

### Prototype Pattern

 - Add clone() method to hierarchy of our objects
 - Design registry that maintains a cache of prototype objects
 - Use Factory API instead of NEW keyword to instantiate the objects.

### Factory Method

 - Define hierarchy of objects
 - Design arguments for the factory method.
 - Factory method to instantiate new object you need

### Builder Pattern 
#### Traditional builder
 1. Declare builder interfaces
 2. Create multiple builders
 3. Create director that can work with different builders
 4. Instantiate director and concrete implementation of builder

 #### Chain Builder
 1. Create inner Builder class inside type that we want to build
 2. Implement method in type that returns reference to the builder object
 3. Declare setter in builder that returns the reference to this builder object
 4. Implement build() method to terminate method chain and return target 
 5. Call method get reference to builder and build object step-by-step 

## Refrerences

 1. [desing-patterns-in-typescirpt](https://github.com/gztchan/design-patterns-in-typescript)

