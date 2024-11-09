import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from '../components/Footer.jsx';
import './pages.css';


const About = () => {
  return (
    <>
      <Header />
      <h2 className="heighty">This is About Page</h2>
      

      <Footer />

    </>
  );
};

export default About;
