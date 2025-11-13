import { BrowserRouter as Router } from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router> 
      <Navbar />
      
      <Footer />
    </Router>
  );
}

export default App;