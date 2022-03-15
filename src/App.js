import './CSS Files/index.css';
import Home from './Pages/Home.jsx';
import Navbar from './Pages/Navbar.jsx';
import About from './Pages/About.jsx'
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';

function App() {
    return (
 
<main id="home">

   
<Navbar/>
<Home />
<About/>
<Services/>
<Gallery/>
<Testimonials/>
<Contact/>


</main>

 
  
  
    );
  }
  
  export default App;