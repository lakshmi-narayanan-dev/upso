import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for defining routes
import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import News from './pages/News.jsx';
import Global from './pages/Global.jsx';
import Products from './pages/Products.jsx';

const App = () => {
  return (
    <Routes> {/* Use Routes to define the route paths */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/global" element={<Global />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default App;
