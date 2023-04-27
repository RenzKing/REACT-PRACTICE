/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
// ReactDOM.render(
//   <ul>
//     <li>Thing 1</li>
//     <li>Thing 2</li>
//   </ul>,
//   document.getElementById("root")
// );

// const testing = (
//   <div>
//     <h1> Hello React!</h1>
//     <p>React is fun!</p>
//   </div>
// );

// ReactDOM.render(testing, document.getElementById("root"));

// //ARROW FUNCTION //
// const MainContent = () => (
//   <div>
//     <h1>I'm learning React!</h1>
//   </div>
// );

// //FUNCTION DECLARATION //
// function MainContent2() {
//   return (
//     <div>
//       <h1>I'm learning React2!</h1>
//     </div>
//   );
// }
// // RENDER 2 DIFFERENT FUNCTIONS IN 1 SECTION //
// ReactDOM.render(
//   <div>
//     <MainContent2 />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// DECLARATIVE = WHAT SHOLD BE DONE?
// "Just tell me what to do, and I'll worry about how I get it done"
// IMPERATIVE = HOW SHOULD IT BE DONE?
// "Describe to me every step on how to do something, and I'll do it"

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// IMPERATIVE APPROACH //
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

// DECLARATIVE APPROACH //
// ReactDOM.render(
//   <h1 className="header">This is an Declarative way to program</h1>,
//   document.getElementById("root")
// );

// JSX //
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );
// ReactDOM.render(page, document.getElementById("root"));

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navbar = (
//   <nav>
//     <h1>Renz</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(navbar, document.getElementById("root"));

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const page = (
//   <div>
//     <h1>Hello</h1>
//     <p>React</p>
//     <ul>
//       <li>World1</li>
//       <li>World2</li>
//     </ul>
//   </div>
// );

// const page2 = document.createElement("page2");
// page2.textContent = "Hello";
// page2.className = "page2";

// ReactDOM.render(page, document.getElementById("root"));

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// const project = (
//   <div>
//     <img src="./react-logo.png" alt="react" width="40"></img>
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(project, document.getElementById("root"));

/*1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger/greater than the individual pieces. */

// const project = (
//   <div>
//     <img src="./react-logo.png" alt="react" width="40"></img>
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(project, document.getElementById("root"));

// const TempoName = () => (
//   <div>
//     <img src="./react-logo.png" alt="react" width="40"></img>
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(<TempoName />, document.getElementById("root"));
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// const Page = () => (
//   <div>
//     <h1>Why I am excited in learning React!</h1>
//     <ol>
//       <li>It's Awesome!</li>
//       <li>It's Fun!</li>
//       <li>It's indemand!</li>
//       <li>It's Amazing!</li>
//     </ol>
//   </div>
// );

// ReactDOM.render(<Page />, document.getElementById("root"));

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// const Page = () => (
//   <div>
//     <header>
//       <nav>
//         <img src="./react-logo.png" alt="react" width="40"></img>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>

//     <h1>Why I am excited in learning React!</h1>
//     <ol>
//       <li>It's Awesome!</li>
//       <li>It's Fun!</li>
//       <li>It's indemand!</li>
//       <li>It's Amazing!</li>
//     </ol>
//     <footer>
//       <p>© 2023 Gayacao development. All rights reserved.</p>
//     </footer>
//   </div>
// );
// ReactDOM.render(<Page />, document.getElementById("root"));
// Quiz!

// 1. What is a React component?
// * A function that returns React elements. (UI) *
// 2. What's wrong with this code?
// ```* must be on PASCAL CASE*
// function myComponent() { // function MyComponent() //
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// 3. What's wrong with this code?
// ``` * should be < Header/> *
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))
// ```

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

// const Header = () => (
//   <div>
//     <header>
//       <nav>
//         <img src="./react-logo.png" alt="react" width="40"></img>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   </div>
// );

// const Page = () => (
//   <div>
//     <Header />
//     <h1>Why I am excited in learning React!</h1>
//     <ol>
//       <li>It's Awesome!</li>
//       <li>It's Fun!</li>
//       <li>It's indemand!</li>
//       <li>It's Amazing!</li>
//     </ol>
//     <footer>
//       <p>© 2023 Gayacao development. All rights reserved.</p>
//     </footer>
//   </div>
// );

// ReactDOM.render(
//   <div>
//     <Page />
//   </div>,
//   document.getElementById("root")
// );

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

const Header = () => (
  <div>
    <header>
      <nav className="nav">
        <img src="./react-logo.png" alt="react" className="nav-logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  </div>
);
const MainContent = () => (
  <div className="main-content">
    <h1>Why I am excited in learning React!</h1>
    <ol>
      <li>It's Awesome!</li>
      <li>It's Fun!</li>
      <li>It's indemand!</li>
      <li>It's Amazing!</li>
    </ol>
  </div>
);

const Footer = () => (
  <footer>
    <p>© 2023 Gayacao development. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="page">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
