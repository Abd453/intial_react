import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  // const name = "Abdallah";
const handleNameChange = () => {
  const names = ['Bob', 'kevin', 'Dave'];
  const int = Math.floor(Math.random()*3);
  return names[int];
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
       
        {/* <p>html {"Abdallah first react"} {[1,2,3]}
        </p>
        <p>{name}</p> */}

        {/* the react components does not support rendering of object and booleans
        for example: <p>{a:1, b:2}</p> <p>{2 === true}</p> */}

      </header>
      
    </div>
  );
}

export default App;
