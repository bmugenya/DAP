import './App.css';
import requests from './utils/requests'
import Jokes from './components/Jokes'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jokes fetchUrl={requests.fetchRandom}/>
      </header>
    </div>
  );
}


