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

//ARROW FUNCTION //
const MainContent = () => (
  <div>
    <h1>I'm learning React!</h1>
  </div>
);

//FUNCTION DECLARATION //
function MainContent2() {
  return (
    <div>
      <h1>I'm learning React2!</h1>
    </div>
  );
}
// RENDER 2 DIFFERENT FUNCTIONS IN 1 SECTION //
ReactDOM.render(
  <div>
    <MainContent2 />
    <MainContent />
  </div>,
  document.getElementById("root")
);
