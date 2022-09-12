import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Home Page</h1>
      <div className="components">
        <button>Guide setup</button>
        <button>Templates</button>
        <button>Simulations</button>
        <button>published workflow</button>
        <button>config</button>
      </div>
      <div className='subcomponents'>
        <div className='childcomponents'>
          <button>Guide setup</button>
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
          <div>4.</div>
          <div>5.</div>
          </div>
        <div className='childcomponents'>
          <button>template setup</button>
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
          <div>4.</div>
          <div>5.</div>
          </div>
      </div>
    </div>
  );
}

export default App;
