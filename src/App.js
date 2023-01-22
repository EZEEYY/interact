import './App.css';
import Header from './components/Header';
import Favourite from './components/Favourite';
import Meals from './components/Meals';
import Modal from './components/Modal';
import { useGlobalContext } from './Context';
function App() {
  const {showmo} = useGlobalContext()
  return (
    <div className="App">
      <Header/>
      <Favourite/>
      <Meals/>
      {showmo && <Modal/>}
    </div>
  )
}

export default App;
