import Header from '../components/Header.jsx';
// import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from '../components/Footer.jsx';
import './pages.css';
import img01 from '../img/01.jpg';
import img02 from '../img/02.jpg';
import MyResponsiveSlider from '../components/MyResponsiveSlider';


const Home = () => {
  return (
    <>
      <Header />

      <div className="Home-01">
        <h2>Copper Company</h2>
        <p>
          Sign up for the latest beauty news, product samples and coupons
        </p>
        <a>
          Start Now
        </a>
      </div>

      <div className="Home-02">
        <h2>Our Path To Success</h2>

        <div className="Home-02-card">
          <div className="Home-02-card-A">
            <img src={img01} alt="My Website Logo" />
            <h3>Company profile</h3>
            <p>
              Sign up for the latest beauty news, product samples and coupons
            </p>

          </div>

          <div className="Home-02-card-A">
            <img src={img01} alt="My Website Logo" />
            <h3>Company profile</h3>
            <p>
              Sign up for the latest beauty news, product samples and coupons
            </p>

          </div>

          <div className="Home-02-card-A">
            <img src={img01} alt="My Website Logo" />
            <h3>Company profile</h3>
            <p>
              Sign up for the latest beauty news, product samples and coupons
            </p>

          </div>

        </div>

      </div>

      <div className='Home-03' id='about-section'>
        <div className='Home-03-01'>
          <h3>
            Our Mission
          </h3>
          <p>
            Mr Paras Kanugo’s futuristic vision combined with his passionate commitment towards his work resulted into establishment of Baroda Extrusion Ltd in 1993. His ability to identify the need in the market and combine it with the sincere efforts of his enthusiastic co-workers laid the foundation for the present success of Baroda Extrusion Ltd
            <br /><br />
            Baroda Extrusion Ltd is one of the major manufacturing unit in western part of India, with the capacity of 6000mt per annum. The plant is fully equipped with modern machineries and dedicated team of staff and workers. Baroda Extrusion Ltd believes to maintain long term relationship with valued customer. Numbers of companies / traders in national and international market are enjoying our association.
          </p>
        </div>
        <div className='Home-03-02'>
          <img src={img02} alt="My Website Logo" />
        </div>
      </div >

      <MyResponsiveSlider />

      <Footer />
    </>
  );
};

export default Home;
