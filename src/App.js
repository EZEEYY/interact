import './App.css';
import Header from './components/Header';
import Favourite from './components/Favourite';
import Meals from './components/Meals';

function App() {
  return (
    <div className="App">
      <Header/>
      <Favourite/>
      <Meals/>
    </div>
  )
}

export default App;
