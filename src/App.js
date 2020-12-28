import './App.css';
import Demo from './components/demo/';
import MyComp from './components/MyComp/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Demo />
      <MyComp fill="red" width="100" height="30" />
      </header>
    </div>
  );
}

export default App;
