# The Question
How do you build an application in Typescript that will separate concerns in a way that will enable then interchangeability of a UI framework?

# typescript-clean-framework
A Typescript framework for building web applications using Clean Architecture principles.

## The Goal
To separate the low level concepts, like the UI and its framework, from the business logic of the application.

To learn and understand the key concepts of Clean Architecture.

To create a rigid and easy to use structure that guides developers into using Clean Architecture.

To allow for flexible behaviour within the rigid structure.

To provide a working example of the use of this framework.

## References
- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://www.amazon.ca/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164

## Core
### Entities
Classes that define the core business rules of your application.

### Use Cases
Use cases of your applications defined as classes. These classes are the interaction
point between your entities and your adapters. They facilitate the flow of a use case required by the application.

### Adapters
Classes that ensure the interfaces depended upon by the uses cases remain unchanged. These classes enable the application 
to change freely without requiring any changes in the entities and use cases.

## Commands

### Bundle
```
npx webpack
```

### Run test app
```
npx webpack
node dist/index.js
```

### Run unit tests
```
npm run test
```
