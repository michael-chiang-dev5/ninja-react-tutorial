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

### Video 9
React Dev Tools is a plugin for firefox/chrome

### Video 10
Use the map function to display lists within component return

### Video 11
* Use props to abstract BlogList
* You can pass props via destructuring
  * `const BlogList = (props) => {}` is an example of props
  * `const BlogList = ({blogs, title})` is an example of destructuring

### Video 12 - filter

### Video 13 - functions as props

### Video 14
#### useEffect hook
Runs a function every render of the component
`useEffect( cb )`

### Video 15
#### useEffect with dependency array
`useEffect( cb, arr)`
dependency array is used to control when useEffect is run. cb is run only if variable in arr is changed

### Video 16
#### json server package
Rather than code up a backend, just use npm package json-server as a toy model
`npx json-server --watch data/db.json --port 8000`
* port 8000 should be different than app port (default 3000)
* json-server provides endpoints GET /blogs, GET /blogs/{id}, POST /blogs, DELETE /blogs/{id}

### Video 17
#### API
Data is now request through api.
#### Notes
* strict mode makes useEffect() run twice on page load 
#### fetch
* `fetch` is like http.request and returns a promise. We can't use async/awaitinside a callback? So we have to use `then`
  Example:
  ```javascript
    useEffect( () => {
        fetch('http://localhost:8000/blogs').then( (res)=> {
            return res.json()
        })
        .then( (data)=> {
            console.log(data)
            setBlogs(data)
        })
    }, []);
  ```
  fetch is asynchronous, so we need then. response.json() is also asychronous so we need another then
### working with nulls
`{blogs && <BlogList blogs={blogs} />}`
This is a "conditional template". If LHS is null, nothing happens. If LHS is not null, then RHS is evaluated which renders to screen.