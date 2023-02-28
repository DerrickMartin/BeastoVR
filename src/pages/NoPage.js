import errorpage from '../assets/404.jpg';
import './NoPageStyles.css';

const NoPage = () => {
    return  <img src={errorpage} className="photo-image" alt="Page not available" />
    ;
  };
  
  export default NoPage;