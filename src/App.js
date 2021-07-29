import logo from './logo.svg';
import './App.css';

function App() {
  let list = [1, 2, 3, 4];
  function func() { return alert('hello'); };
  return (

    <div>
      < h1 > trail app</h1 >
      <button onClick={func}> press me</button>
      {list.map((item) => {
        return <h1>{item}*{item}</h1>;
      })}
    </div>
  )
}

export default App;
