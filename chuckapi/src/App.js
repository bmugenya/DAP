import './app.css';
import requests from './utils/requests'
import Header from './components/header'
import Accordion from './components/accordion'
import Category from './components/category'
import Jokes from './components/Jokes'
import Footer from './components/footer'
export default function App() {
  return (
    <div className="App">
    <Header fetchUrl={requests.fetchQuery} />
      <header className="body">
        <Accordion/>
        <Category fetchUrl={requests.fetchCategory} />
         <Jokes fetchUrl={requests.fetchRandom}/>
         <Jokes fetchUrl={requests.fetchRandom}/>
         <Jokes fetchUrl={requests.fetchRandom}/>
         <Jokes fetchUrl={requests.fetchRandom}/>
         <Footer/>
      </header>
    </div>
  );
}


