# TypeScript Foundations

## What is TypeScript?

TypeScript is an open source language and a superset of JavaScript. I.e it's everything JavaScript is, plus some extra features. 

The main feature, or reason to use TypeScript, is to add static types to your code.

TypeScript features are completely optional.

TypeScript uses the `.ts` file extension. Regular JavaScript runs normally in `.ts` files because the file gets compiled down into JavaScript anyway.

TypeScript can be used on the client side with vanilla JavaScript as well as with most frameworks, and it can be used on the server side with Node.js.

Most modern ES6 and ES7 features are included in TypeScript.

## Dynamic vs Static Typing

### Dynamic languages (JavaScript, PHP, Python, Ruby)

In dynamically typed languages, such as JavaScript, data types are associated with run-time values and are not named explicitly in your code.

```javascript 
const name = 'Corey';
```

E.g In regular JavaScript when assigning a string value to a variable (like above) you don't specify that the variable is a string.

### Static languages (Java, C, C++, Rust, Go)

In statically typed languages, you explicitly assign types to variables - e.g a String, Number, Boolean.

Function parameters and return values can also have types as well.

## Pros & Cons

TypeScript particulary works well for big projects with multiple developers.

### Pros

- More robust
- Easily spot bugs (at the compile stage)
- Predictability (helps you to keep your code running as initially intended)
- Readability (inherently makes your code more self-expressive and descriptive)
- Popular

### Cons

- More code to write
- Requires compilation (browsers don't read .ts files)

## Compiling TypeScript

TypeScript uses `.ts` and `.tsx` (for React) file extensions.

TSC (TypeScript Compiler) is used to compile `.ts` files down to JavaScript and can be installed with NPM.

TSC can also just watch files and report errors at compile time.

Many tools (such as Create React App and Next.js) include default TypeScript compilation and most IDEs support it.

The `tsconfig.json` file is used to configure how TypeScript works.