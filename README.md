- typepscript-lib (shared-ts-lib): simple typescript module with a single exported class

target is es2015, module is CommonJS because I need to use that lib
in a JS application as well

NOTE: there is a postbuild script that builds the actual lib when referenced

- angular-cli-lib : component lib generated using

```
ng new angular-cli-lib
ng generate module demo
ng generate component demo/MyComp
````

Added a reference to `shared-ts-lib` in it (relative file)

Use that reference in the MyComp component

#BUG #1: Can't find exported class of a CommonJS lib

```
cd angular-cli-lib
npm i
npm run packagr
```

leads to

```
BUILD ERROR
'MyClass' is not exported by ../typescript-lib/dist/shared.tsmodule.js
Error: 'MyClass' is not exported by ../typescript-lib/dist/shared.tsmodule.js
    at error (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:185:14)
    at Module.error (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:8390:3)
    at Module.trace (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:8487:10)
    at ModuleScope.findVariable (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:8093:22)
    at Scope.findVariable (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:6183:33)
    at FunctionScope.findVariable (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:6183:33)
    at Scope.findVariable (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:6183:33)
    at Node.bind (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:6996:31)
    at eachChild.child (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:5819:34)
    at keys.forEach.key (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/rollup/dist/rollup.js:5847:5)
```

BUT, if you change the tsconfig.json `module` to `es6` in shared-ts-lib, it builds


#Bug 2: Cannot read property 'flags' of undefined

if you uncomment the export of the shared-ts-lib in `src/public_api.ts`

leads to 

```
BUILD ERROR
Cannot read property 'flags' of undefined
TypeError: Cannot read property 'flags' of undefined
    at getSymbolLinks (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/typescript/lib/typescript.js:26080:23)
    at getExportsOfModule (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/typescript/lib/typescript.js:27034:25)
    at Object.getExportsOfModuleAsArray [as getExportsOfModule] (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/typescript/lib/typescript.js:27014:35)
    at Annotator.expandSymbolsFromExportStar (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/tsickle/build/src/tsickle.js:752:35)
    at Annotator.maybeProcess (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/tsickle/build/src/tsickle.js:565:44)
    at Annotator.Rewriter.visit (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/tsickle/build/src/rewriter.js:52:19)
    at /Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/tsickle/build/src/rewriter.js:84:19
    at visitEachNode (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/typescript/lib/typescript.js:14785:30)
    at Object.forEachChild (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/typescript/lib/typescript.js:14959:24)
    at Annotator.Rewriter.writeNode (/Users/cnadeau/Documents/perso/bug-demo-lib/angular-cli-lib/node_modules/tsickle/build/src/rewriter.js:82:12)
```