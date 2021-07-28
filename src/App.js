import logo from './logo.svg';
import './App.css';

function App() {
  let list = [];
  function func() { return alert('hello'); };
  return (

    <div>
      < h1 > trail app</h1 >
      <button onClick={func}> press me</button>
    </div>
  )
}

export default App;
