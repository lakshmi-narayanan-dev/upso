import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from '../components/Footer.jsx';
import './pages.css';
// import MyResponsiveSlider from '../components/MyResponsiveSlider.jsx';

const Global = () => {
  return (
    <>
      <Header />
      <h2 className="heighty">This is a Global Page</h2>

      {/* <MyResponsiveSlider /> */}

      <Footer />
    </>
  );
};

export default Global;
