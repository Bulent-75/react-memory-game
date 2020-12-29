import './App.css';
import Demo from './components/demo/';
import MyComp from './components/MyComp/';
import MenuNav from './components/MenuNav/MenuNav.js';
import Tabs from './components/Tabs/Tabs.js';
import DpConnect from './components/DpConnect/DpConnect.js'
function App() {
  return (
    <div className="App">
      <MenuNav />
      <header className="App-header">
      <Demo />
      <MyComp fill="red" width="100" height="30" />
      <DpConnect />
      </header>
    </div>
  );
}

export default App;

