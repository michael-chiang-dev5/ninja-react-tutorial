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

### Video 18
setTimeOut to simulate slow connection. Note that argument to setTimeout is anonymous function `setTimeOut( ()=> callback())`

### Video 19 - Catching errors
`fetch().then().then().catch()`
* catch to catch errors (ie, cannot connect to API). This will not catch errors where server responds (wrong endpoint)
* You can check `if (!res) throw Error(MESSAGE)` which will throw error to catch

### Video 20 - Custom hook
* custom hooks names must start with "use", for example `const useFetch = () => {}`.
* remember to export hook 
* hooks will usually return something
  * you can use object destructuring to simplify things
  `const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')`
  Here you are taking key data and renaming it variable blogs

### Video 21 
https://www.youtube.com/watch?v=aZGzwEjZrXc&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=21
* react router package
  Install with `$ npm install react-router-dom@5` (@5 uses version 5, upgrade to 6 in a real website)
  * Router lets you map url to different pages. Basically, your single-page-application has multi-page functionality.
  * `<Router>` should encase the single page app
  * Treat `<Switch>` and `<Route>` like case-switch; different paths get mapped to different components.


### Video 22

* Exact path
  * `<Route exact path='/create'>` will match to url `/create` exactly
  * `<Route path='/create'>` will match to suburls such as `/`
  * use exact path if you want an exact match

### Video 23
* Link
  use `<Link to=url>` to go to react route without sending request to backend.


### Video 24
https://www.youtube.com/watch?v=aKOQtGLT-Yk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=24
* I had to remove strictmode to get things to work