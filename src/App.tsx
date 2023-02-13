import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Income from './components/Income';
import Footer from './components/Footer';
import { BsArrowUpCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

const App = () => {
  return (
    <>
      <Navbar />
      <hr className='my-10 w-9/12 mx-auto' />
      <Hero />
      <hr className='my-10 w-9/12 mx-auto' />
      <Explore />
      <hr className='my-10 w-9/12 mx-auto' />
      <Income />
      <span className='absolute right-48'>
        <Link to='home' spy={true} smooth={true} offset={1} duration={800}>
          <BsArrowUpCircle size={28} />
        </Link>
      </span>
      <hr className='my-10 w-9/12 mx-auto' />
      <Footer />
    </>
  );
};

export default App;
