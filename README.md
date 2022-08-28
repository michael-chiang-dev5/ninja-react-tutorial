# ninja-react-tutorial
Implements project described in net ninja's youtube series (https://www.youtube.com/watch?v=pnhO8UaCgxg)

### Creating a new react project
`$ npx create-react-app APPNAME`

### File structure
- `node_modules/` project dependencies. This should not be committed to git
- `public/` files public to the browser.
  - `index.html` all react code injected into this file
- `src/` react components. 99% of code you write will live in this folder
  - `App.js`
  - `index.js` takes all react components and renders (mounts) them to the DOM
- `package.json` dependencies, npm scripts

### Useful npm commands
`$ npm install` installs dependencies listed in package.json
`$ npm start` serves app to browser

## Notes

### Video 1
`$ npx create-react-app APPNAME` to create a new react app

### Video 2
Emmet shortcuts: You can use `div.CLASSNAME` to generate `<div class=CLASSNAME></div>

### Video 4
React will automatically convert primities (strings, numbers) into text but cannot handle objects