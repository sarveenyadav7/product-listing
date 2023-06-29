import './App.scss';
import 'font-awesome/css/font-awesome.min.css'
import Header from './Components/Header'
import Listing from './Components/Listing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Listing/>
      </header>
    </div>
  );
}

export default App;
