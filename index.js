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
