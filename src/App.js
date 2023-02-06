import './App.css';
import Blog from './component/Blog';
import Clients from './component/Clients';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Freguantly from './component/Freguantly';
import Main from './component/Main';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Solves from './component/Solves';
import Work from './component/Work';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Work />
      <Projects />
      <Solves />
      <Clients />
      <Freguantly />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
