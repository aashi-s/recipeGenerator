import logo from './logo.svg';
import './App.scss';
import Component from './component.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
        </p>
        <Component message="hello world"/>
      </header>
    </div>
  );
}

export default App;
