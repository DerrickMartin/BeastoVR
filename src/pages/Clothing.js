import './ClothingStyles.css'
import FooterSection from '../components/Footer/FooterSection';

const Clothing = () => {
    return (
    <>
    <div className='clothing-section'>
    <h1>Love the Streams and Videos? Check out the new gear!</h1>
    <div className="product-card">
      <p>T-shirt</p>
      <p>20.00</p>
    </div>
    <div className="product-card">
      <p>Hoodie</p>
      <p>$55.99</p>
    </div>
     </div>
     <FooterSection />
    </>
    )
  };
  
  export default Clothing;