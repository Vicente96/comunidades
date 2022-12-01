import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sponsors from './components/Sponsors/sponsors';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section>
       <Sponsors /> 
      </section>
    </div>
  );
}

export default App;
