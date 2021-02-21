import React, { useState } from 'react';
import './App.css';
import FillPanel from './_component/fillPanel';
import SlashPanel from './_component/slashPanel';
import BracesPanel from './_component/bracesPanel';

function App() {
  const [resizeFlag, setResizeFlag] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState('');

  const reszieDiv = (task) => {
    if(task === selectedPanel) {
      setResizeFlag(!resizeFlag);
    } else {
      setResizeFlag(true);
    }
    setSelectedPanel(task)
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>Indegene</span>
      </header>

      <div className="app-body">
        <div className="app-section"></div>

        <div className="app-bar">
          <nav className="nav flex-column">
            <a className="nav-link active" href="#" onClick={() => reszieDiv("fill")}>
              <i className="bi bi-chat-left-fill"></i>
            </a>
            <a className="nav-link" href="#" onClick={() => reszieDiv("slash")}>
              <i className="bi bi-code-slash"></i>
            </a>
            <a className="nav-link" href="#" onClick={() => reszieDiv("braces")}>
              <i className="bi bi-braces"></i>
            </a>
          </nav>
        </div>

        <div className={["properties-panel", resizeFlag ? null : "closePanel"].join(" ")}>
          {
            selectedPanel === 'fill' ? <FillPanel /> : selectedPanel === 'slash' ? <SlashPanel/> : <BracesPanel/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
