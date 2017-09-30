# Summary

This is a shared libary to include common:

- TypeScript classes
- Angular Components and

# How to develop

`npm run watch`

This will make sure:
 - the dist folder is created
 - package.json and .d.ts files are copied in it
 - let tsc watch any changes you make

 Once you made a change, simply modify the app refering the lib and you should 
 be good to go

# How to build

Make sure to update BOTH package.json's version (package.json AND src/package.json)

package.json => used to build the actual lib
src/package.json => package.json that will describe the built lib

`npm run build`

# How to publish

Update package.json versions in package.json and src/package.json, then

```
npm run build
cd dist
npm publish
```