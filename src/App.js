import './App.css';
import Demo from './components/demo/';
import MyComp from './components/MyComp/';
import BingoCard  from './components/BingoCard/BingoCard.js';

// import DpConnect from './components/DpConnect/DpConnect.js';

import MenuNav from './components/MenuNav/MenuNav.js';
import CardOverview from './components/BingoCard/CardOverview.js';
// import Tabs from './components/Tabs/Tabs.js';

// import DevState from  './components/DevState/DevState.js'

function App() {
  return (
    
      <body>
    <div className="App">
      <MenuNav />
      <header className="App-header">
         </header>
      <content className="content">
      <CardOverview />
      </content>
    </div>
      </body>
  );
}

export default App;

