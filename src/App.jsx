import './App.css';
import FruitContainer from './components/FruitContainer';

function App() {
  const props = {
    fruits: ['apple 🍎', 'pineapple 🍍', 'mangos 🥭', 'banana 🍌', 'avocado 🥑', 'kiwi 🥝'],
  }
  return (
    <div className="App">
      <FruitContainer {...props} />
    </div>
  );
}

export default App;
