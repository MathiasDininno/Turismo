import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Turismo Balcarce</h1>
        <h2>Llega a Balcarce y disfruta de la gastronomía y el turismo</h2>
      </header>
      <div className='App-body'>
        <div className='App-section'>
          <h3>Gastronomía</h3>
          <ul>
            <li>Restaurante La Bella Pasta</li>
            <li>Bar La Bella Bella</li>
            <li>Café La Bella Bella</li>
          </ul>
        </div>
        <div className='App-section'>
          <h3>Turismo</h3>
            <li>Parque Español Balcarce</li>
            <li>Playa Balcarce</li>
        </div>
        </div>
    </div>
  );
}

export default App;
