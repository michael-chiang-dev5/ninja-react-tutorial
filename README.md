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
* `$ npx create-react-app APPNAME` to create a new react app

### Video 2
* Emmet shortcuts: You can use `div.CLASSNAME` to generate `<div class=CLASSNAME></div>

### Video 4
* React will automatically convert strings, numbers, arrays into text but cannot handle objects
* Curly braces for dynamic values. Dynamic values do not require quotation marks, ie, `<div className={VAR}>` not `<div className="{VAR}">`

### Video 5
* react shortcut: `sfc`--> tab gets converted into a "stateless functional component"

### Video 6
* css files get applied to the entire page, even if they are imported into a single component.
* One way to do things is just use index.css as a global css file

### Video 7
* Click events
* You can clear the firefox console by clicking the garbage can
* If you need to pass a callback with an argument, wrap it in an anonymous function

### Video 8
#### useState hook
* `const [name, setName] = useState('mario')`
  * `[name, setName]` is an example of array destructuring that allows you to get multiple return values
  * `name` is the name of the variable
  * `setName` is a setter function that lets you assign `name` to a value. Whenever setName is called, it re-renders component