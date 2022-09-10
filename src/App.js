import './App.scss';
import Header from './components/Header';
import Gallery from './components/Gallery';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
