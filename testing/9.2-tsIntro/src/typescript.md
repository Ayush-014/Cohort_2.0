#1. type vs interface:

Differences:-
Feature             | interface                                    | type
Extending           | Can be extended multiple times using extends | Can use intersection (&) to combine types
Declaration merging | ✅ Yes — multiple declarations get merged    | ❌ No — redeclaring causes an error
Utility types       | ❌ Limited                                   | ✅ Works well with utility types (Partial, Pick, etc.)
Union/tuple support | ❌ Not supported                             | ✅ Can create unions, tuples, etc.
Function overloads  | ✅ Supported                                 | ❌ Not natively supported

When to use interface:
    1. Defining the shape of an object or class
    2. When you expect the shape to be extended or implemented
    3. You want declaration merging (like adding more properties in a third-party module)

When to use type:
    1. Creating union types or complex types
    2. Tuples or mapped types
    3. You want more control or flexibility

https://www.totaltypescript.com/type-vs-interface-which-should-you-use      -> doc for type vs interface

#2 In a React project using TypeScript (.tsx files), the conversion process works like this:

🔄 Conversion Flow:
    .tsx → .js
    The .tsx file (TypeScript with JSX) is compiled directly to JavaScript by the TypeScript compiler (or a build tool like Vite, Webpack with Babel, etc.).
    The TypeScript compiler removes all type annotations and transpiles the JSX syntax.

✅ No intermediate .ts or .jsx file is created.
    There is no step where .tsx is first converted to .ts or .jsx. It goes straight to .js.