import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
 function App(){
  const user = "Priya";
  const marks = 65;
            return(
                <div>
                  {/* Expressions within JSX */}
                  {/* { curly brackets }: in JSX means:
                  switch from JSX/HTML-like syntax into JavaScript */}
                    <h1>Hello,{user}</h1>
                    <p>Updated marks: {marks+10}</p>
                </div>
            );
        }

export default App;
