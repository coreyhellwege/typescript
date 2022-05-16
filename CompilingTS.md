# Compiling TypeScript

## TSC

TypeScript uses `.ts` and `.tsx` (for React) file extensions.

TSC (TypeScript Compiler) is used to compile `.ts` files down to JavaScript and can be installed with NPM.

Note: TSC will still compile if it encounters errors and by default it will compile into ES5 JavaScript.

```sh
tsc someFile.ts
```

TSC can also just watch files and report errors at compile time.

```sh
tsc --watch someFile.ts
```

Running `tsc` on its own will compile all `.ts` files in the project.

Many tools (such as Create React App and Next.js) include default TypeScript compilation and most IDEs support it.

The `tsconfig.json` file is used to configure how TypeScript works.

## Config files

You can setup a `tsconfig.json` by running

```sh
tsc --init
```

This file is where you can set multiple compiler options.

A TSConfig file in a directory indicates that the directory is the root of a TypeScript or JavaScript project.