import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Reproductions } from './components/Reproductions';
import { News } from './components/News';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Reproductions />
      <News />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
