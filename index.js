// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"));
// ReactDOM.render(
//   <ul>
//     <li>a</li>
//     <li>b</li>
//     <li>c</li>
//     <li>d</li>
//   </ul>,
//   document.getElementById("root")
// );

// function MainContent() {
//   return <h1>Im learning React!</h1>;
// }

// // THIS IS WHERE YOU PRINT //
// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,

//   document.getElementById("root")
// );

// const page = (
//   <div>
//     <h1>Hello</h1>
//     <p>React!</p>
//   </div>
// );

// ReactDOM.render(page, document.getElementById("root"));

const navbar = (
  <nav>
    <h1>Renz JSX</h1>

    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Conctact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
