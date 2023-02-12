import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Income from './components/Income';
import Footer from './components/Footer';

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
      <hr className='my-10 w-9/12 mx-auto' />
      <Footer />
    </>
  );
};

export default App;
