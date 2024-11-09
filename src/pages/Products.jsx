import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from '../components/Footer.jsx';
import './pages.css';
import img02 from '../img/02.jpg';


const Products = () => {
  return (
    <>
      <Header />

      <div className='product-01'>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

        <div className='product-01-card'>
          <img src={img02} alt='imag' />
          <h2>Name</h2>
          <h5>Description</h5>
        </div>

      </div>

      <div className='product-02'>
        
      </div>

      {/* <h2 className="heighty">This is a Products Page</h2> */}
      <Footer />
    </>
  );
};

export default Products;
