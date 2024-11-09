import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from '../components/Footer.jsx';
import './pages.css';
import EmailForm from '../components/EmailForm.jsx';

const Contact = () => {
  return (
    <>
      <Header />
      {/* <h2 className="heighty">This is Contact Page</h2> */}
      {/* <Link to="/">Go to Home Page</Link><br />
      <Link to="/about">Go to About Page</Link> */}


      <EmailForm />
      <Footer />

    </>
  );
};

export default Contact;
